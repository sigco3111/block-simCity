
import React, { useState, useCallback, useEffect, useRef } from 'react';
// Removed: import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Building, BuildingType, CityStats, BuildingProperty, UpgradeLevel, AiAction as PlannerAction, SavedGameState } from './types'; // Renamed AiAction, Added SavedGameState
import { 
  INITIAL_FUNDS, INITIAL_POPULATION, INITIAL_HAPPINESS, INITIAL_MONTH,
  GRID_SIZE, CELL_SIZE, BUILDING_PROPERTIES, NON_SELECTABLE_BUILDING_TYPES,
  GAME_TICK_INTERVAL_MS, MONTHLY_TAX_PER_CAPITA, UNEMPLOYMENT_THRESHOLD,
  LOW_FUNDS_THRESHOLD, DEEP_DEBT_THRESHOLD, NO_WATER_HAPPINESS_PENALTY,
  BASE_BUILDING_LEVEL, MAX_FIRE_HEALTH, FIRE_START_CHANCE_PER_TICK_PER_BUILDING,
  FIRE_SPREAD_CHANCE, FIRE_DAMAGE_RATE, INITIAL_HEALTH_LEVEL, INITIAL_SAFETY_LEVEL,
  HEALTH_PENALTY_THRESHOLD, SAFETY_PENALTY_THRESHOLD, INITIAL_EDUCATION_LEVEL,
  EDUCATION_PENALTY_THRESHOLD, POPULATION_REQUIRING_EDUCATION_RATIO,
  INITIAL_POLLUTION_LEVEL, MAX_POLLUTION_UNITS_FOR_MAX_LEVEL,
  POLLUTION_HAPPINESS_FACTOR, POLLUTION_HEALTH_IMPACT_THRESHOLD, POLLUTION_HEALTH_PENALTY_FACTOR,
  INITIAL_APPEAL, INITIAL_TOURISTS, TOURIST_INCOME_PER_TOURIST,
  MAX_APPEAL_UNITS_FOR_MAX_LEVEL, POLLUTION_APPEAL_PENALTY_FACTOR,
  DERELICT_BUILDING_APPEAL_PENALTY, HAPPINESS_APPEAL_BONUS_FACTOR,
  EDUCATION_APPEAL_BONUS_FACTOR, COMMERCIAL_CAPACITY_PER_TOURIST_RATIO,
  AI_PLANNER_COOLDOWN_MONTHS, AI_PLANNER_MIN_FUNDS_TO_ACT, AI_MAX_ACTIONS_PER_TURN,
  AI_MAX_EMPTY_CELLS_TO_SHOW, AI_PLANNER_INTERVAL_MS
} from './constants';
import ThreeScene, { ThreeSceneHandle } from './components/ThreeScene';
import { Toolbar } from './components/Toolbar';
import StatsDisplay from './components/StatsDisplay';
import BuildingInfoPanel from './components/BuildingInfoPanel';
import HelpButton from './components/HelpButton';
import HistoricalStatsGraph from './components/HistoricalStatsGraph'; // Added

// Removed API_KEY constant and process.env.API_KEY usage for Gemini

const SAVE_GAME_KEY = 'blockCityBuilderSave_v1';
const MAX_HISTORY_ENTRIES = 240; // Approx 20 years of monthly data


// AiAction is now PlannerAction from types.ts if needed, or defined locally if structure changes.
// Using PlannerAction from types.ts (assuming it's defined there or we define it if not)
// For simplicity, keeping AiAction name if it's only used internally here.
interface AiAction {
  action: "BUILD" | "UPGRADE";
  type?: BuildingType;
  x?: number;
  z?: number;
  buildingId?: string;
  reasoning?: string;
}


const App: React.FC = () => {
  const [selectedBuildingType, setSelectedBuildingType] = useState<BuildingType | null>(null);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [cityStats, setCityStats] = useState<CityStats>({
    population: INITIAL_POPULATION,
    funds: INITIAL_FUNDS,
    powerCapacity: 0,
    powerDemand: 0,
    waterCapacity: 0, 
    waterDemand: 0,   
    happiness: INITIAL_HAPPINESS,
    month: INITIAL_MONTH,
    healthLevel: INITIAL_HEALTH_LEVEL,
    safetyLevel: INITIAL_SAFETY_LEVEL,
    educationLevel: INITIAL_EDUCATION_LEVEL,
    pollutionLevel: INITIAL_POLLUTION_LEVEL,
    appeal: INITIAL_APPEAL,
    tourists: INITIAL_TOURISTS,
  });
  const [gameMessage, setGameMessage] = useState<string | null>(null);
  const gameMessageTimeoutRef = useRef<number | null>(null);
  const [selectedBuildingForInfo, setSelectedBuildingForInfo] = useState<Building | null>(null);
  const threeSceneRef = useRef<ThreeSceneHandle>(null);
  const [isPaused, setIsPaused] = useState(true);

  const [isDelegationModeActive, setIsDelegationModeActive] = useState(false);
  const [aiPlannerCooldown, setAiPlannerCooldown] = useState(AI_PLANNER_COOLDOWN_MONTHS);
  const [isAiPlannerThinking, setIsAiPlannerThinking] = useState(false);
  const [aiFocusPoint, setAiFocusPoint] = useState<{ x: number; z: number } | null>(null);
  const [aiFocusPointSource, setAiFocusPointSource] = useState<'PLAYER' | 'AI_STRATEGIC' | null>(null);
  
  const [cityStatsHistory, setCityStatsHistory] = useState<CityStats[]>([]);
  const [isGraphModalVisible, setIsGraphModalVisible] = useState(false);
  // Removed: const aiRef = useRef<GoogleGenAI | null>(null);
  // Removed: useEffect for aiRef initialization

  const showGameMessage = useCallback((message: string, duration: number = 3000) => {
    setGameMessage(message);
    if (gameMessageTimeoutRef.current !== null) {
      clearTimeout(gameMessageTimeoutRef.current);
    }
    gameMessageTimeoutRef.current = window.setTimeout(() => {
      setGameMessage(null);
      gameMessageTimeoutRef.current = null;
    }, duration);
  }, []);
  
  const clearGameMessage = useCallback(() => {
     if (gameMessageTimeoutRef.current !== null) {
      clearTimeout(gameMessageTimeoutRef.current);
    }
    setGameMessage(null);
    gameMessageTimeoutRef.current = null;
  }, []);

  const getBuildingCurrentProps = useCallback((building: Building): BuildingProperty => {
    const baseProps = BUILDING_PROPERTIES[building.type];
    let currentProps = { ...baseProps };

    if (baseProps.upgrades && building.level > BASE_BUILDING_LEVEL) {
      for (let i = 0; i < building.level - BASE_BUILDING_LEVEL; i++) {
        if (baseProps.upgrades[i]) {
          const upgradeEffects = baseProps.upgrades[i].effects;
          currentProps = { ...currentProps, ...upgradeEffects };
        }
      }
    }
    return currentProps;
  }, []);

  const calculateDerivedCityMetrics = useCallback((currentBuildings: Building[], baseStats: CityStats) => {
    let newPowerCapacity = 0;
    let newPowerDemand = 0;
    let newWaterCapacity = 0;
    let newWaterDemand = 0;
    let directHappinessScore = 0;
    let totalMaintenanceCost = 0;
    let totalResidentialCapacity = 0;
    let totalJobsProvided = 0;
    let totalCommercialJobs = 0;
    let totalPatientCapacity = 0;
    let totalStudentCapacity = 0;
    let totalEducationPoints = 0;
    let totalPollutionOutput = 0;
    let totalPollutionReduction = 0;
    let totalAppealPoints = 0;
    let derelictBuildingCount = 0;
    
    currentBuildings.forEach(building => {
      const props = getBuildingCurrentProps(building); 
      if (building.isOnFire && building.fireHealth <=0) {
        derelictBuildingCount++;
        if (props.maintenanceCost) totalMaintenanceCost += props.maintenanceCost / 2;
        return; 
      }

      if (props.powerCapacity) newPowerCapacity += props.powerCapacity;
      if (props.powerDemand) newPowerDemand += props.powerDemand;
      if (props.waterCapacity) newWaterCapacity += props.waterCapacity;
      if (props.waterDemand) newWaterDemand += props.waterDemand;
      if (props.happinessEffect && !building.isOnFire) directHappinessScore += props.happinessEffect; 
      if (props.maintenanceCost) totalMaintenanceCost += props.maintenanceCost;
      if (props.residentialCapacity) totalResidentialCapacity += props.residentialCapacity;
      if (props.jobsProvided) {
        totalJobsProvided += props.jobsProvided;
        if (building.type === BuildingType.COMMERCIAL) {
            totalCommercialJobs += props.jobsProvided;
        }
      }
      if (props.patientCapacity) totalPatientCapacity += props.patientCapacity;
      if (props.studentCapacity) totalStudentCapacity += props.studentCapacity;
      if (props.educationPointContribution) totalEducationPoints += props.educationPointContribution;
      if (props.pollutionOutput && !building.isOnFire) totalPollutionOutput += props.pollutionOutput;
      if (props.pollutionReduction && !building.isOnFire) totalPollutionReduction += props.pollutionReduction;
      if (props.appealPoints && !building.isOnFire) totalAppealPoints += props.appealPoints;
    });

    let calculatedHappiness = INITIAL_HAPPINESS + directHappinessScore;

    if (newPowerDemand > newPowerCapacity && currentBuildings.length > 0) calculatedHappiness -= 15;
    if (newWaterDemand > newWaterCapacity && currentBuildings.length > 0) calculatedHappiness += NO_WATER_HAPPINESS_PENALTY;

    const industrialCount = currentBuildings.filter(b => b.type === BuildingType.INDUSTRIAL && !b.isOnFire).length;
    const parkCount = currentBuildings.filter(b => b.type === BuildingType.PARK && !b.isOnFire).length;
    if (industrialCount > parkCount * 1.5 && industrialCount > 0) {
      calculatedHappiness -= industrialCount * 2.5;
    }
    
    if (baseStats.population > 0 && totalJobsProvided < baseStats.population) {
        const unemploymentRate = (baseStats.population - totalJobsProvided) / baseStats.population;
        if (unemploymentRate > UNEMPLOYMENT_THRESHOLD) {
            calculatedHappiness -= Math.floor(unemploymentRate * 30);
        }
    }

    if (baseStats.funds < LOW_FUNDS_THRESHOLD) calculatedHappiness -= 10;
    if (baseStats.funds < DEEP_DEBT_THRESHOLD) calculatedHappiness -= 15;

    const netPollutionUnits = Math.max(0, totalPollutionOutput - totalPollutionReduction);
    const newPollutionLevel = MAX_POLLUTION_UNITS_FOR_MAX_LEVEL > 0 
      ? Math.min(100, Math.floor((netPollutionUnits / MAX_POLLUTION_UNITS_FOR_MAX_LEVEL) * 100))
      : 0;

    calculatedHappiness -= newPollutionLevel * POLLUTION_HAPPINESS_FACTOR;

    let newHealthLevel = INITIAL_HEALTH_LEVEL;
    if (baseStats.population > 0 && currentBuildings.some(b => b.type === BuildingType.HOSPITAL && !b.isOnFire)) {
        newHealthLevel = Math.min(100, Math.floor((totalPatientCapacity / (baseStats.population * 0.5)) * 100)); 
    } else if (currentBuildings.some(b => b.type === BuildingType.HOSPITAL && !b.isOnFire)) {
        newHealthLevel = 100; 
    } else {
        newHealthLevel = 50; 
    }

    if (newPollutionLevel > POLLUTION_HEALTH_IMPACT_THRESHOLD) {
        newHealthLevel -= (newPollutionLevel - POLLUTION_HEALTH_IMPACT_THRESHOLD) * POLLUTION_HEALTH_PENALTY_FACTOR;
    }
    newHealthLevel = Math.max(0, Math.min(100, Math.floor(newHealthLevel)));

    if (baseStats.healthLevel < HEALTH_PENALTY_THRESHOLD) { 
        calculatedHappiness -= (HEALTH_PENALTY_THRESHOLD - baseStats.healthLevel) / 2;
    }

    const activeFires = currentBuildings.filter(b => b.isOnFire && b.fireHealth > 0).length;
    let newSafetyLevel = 100 - (activeFires * 20); 
    newSafetyLevel = Math.max(0, newSafetyLevel);
     if (baseStats.safetyLevel < SAFETY_PENALTY_THRESHOLD) { 
        calculatedHappiness -= (SAFETY_PENALTY_THRESHOLD - baseStats.safetyLevel);
    }
    currentBuildings.filter(b => b.isOnFire && b.fireHealth > 0).forEach(() => calculatedHappiness -= 5); 

    let newEducationLevel = INITIAL_EDUCATION_LEVEL;
    const educationDemand = baseStats.population * POPULATION_REQUIRING_EDUCATION_RATIO;
    const hasEducationBuildings = currentBuildings.some(b => (b.type === BuildingType.SCHOOL || b.type === BuildingType.UNIVERSITY) && !b.isOnFire);

    if (hasEducationBuildings) {
        if (educationDemand > 0) {
            const maxPossiblePoints = educationDemand; 
            const qualityRatio = Math.min(1, totalEducationPoints / Math.max(1, maxPossiblePoints));
            const capacityRatio = Math.min(1, totalStudentCapacity / Math.max(1, educationDemand));
            let calculatedEdu = Math.floor(capacityRatio * 70 + qualityRatio * 30); // Weighted: 70% capacity, 30% quality
            calculatedEdu += Math.floor(totalEducationPoints * 0.05); // Small boost from raw points
            newEducationLevel = Math.min(100, calculatedEdu);
        } else { 
            newEducationLevel = 75; // Schools exist, but no demand (0 pop) -> high readiness
        }
    } else { // No education buildings
        if (educationDemand > 0) { // Population exists, but no schools
            if (baseStats.population < 15) { // Grace period for very small pop
                newEducationLevel = INITIAL_EDUCATION_LEVEL;
            } else if (baseStats.population < 40) { // Gentle decline
                newEducationLevel = Math.max(30, INITIAL_EDUCATION_LEVEL - Math.floor((baseStats.population - 15) / 1.5));
            } else { // Harsher for larger uneducated populations
                 newEducationLevel = 25;
            }
        } else { // No schools and no population
            newEducationLevel = INITIAL_EDUCATION_LEVEL;
        }
    }
    newEducationLevel = Math.max(0, Math.min(100, Math.floor(newEducationLevel)));
    
    if (newEducationLevel < EDUCATION_PENALTY_THRESHOLD) { // This happiness penalty is applied based on the newEducationLevel
      calculatedHappiness -= (EDUCATION_PENALTY_THRESHOLD - newEducationLevel) / 1.5; 
    }
    
    let baseIntrinsicAppeal = 0;
    // Check general city health for a small intrinsic appeal before building-specific appeal points
    if (baseStats.happiness >= 50 && newPollutionLevel < 40 && newHealthLevel >= HEALTH_PENALTY_THRESHOLD && newSafetyLevel >= SAFETY_PENALTY_THRESHOLD) {
        baseIntrinsicAppeal = 5; 
    }
    let rawAppealUnits = totalAppealPoints + baseIntrinsicAppeal;

    if (baseStats.happiness > 50) { // Use baseStats.happiness for this bonus as it reflects current citizen sentiment
        rawAppealUnits += (baseStats.happiness - 50) * HAPPINESS_APPEAL_BONUS_FACTOR;
    }
    if (newEducationLevel > EDUCATION_PENALTY_THRESHOLD) { // Use newEducationLevel for this bonus
        rawAppealUnits += (newEducationLevel - EDUCATION_PENALTY_THRESHOLD) * EDUCATION_APPEAL_BONUS_FACTOR;
    }
    rawAppealUnits = Math.max(0, rawAppealUnits);

    let newAppeal = MAX_APPEAL_UNITS_FOR_MAX_LEVEL > 0 
        ? Math.floor((rawAppealUnits / MAX_APPEAL_UNITS_FOR_MAX_LEVEL) * 100)
        : 0;
    newAppeal -= newPollutionLevel * POLLUTION_APPEAL_PENALTY_FACTOR;
    newAppeal -= derelictBuildingCount * DERELICT_BUILDING_APPEAL_PENALTY;
    newAppeal = Math.max(0, Math.min(100, Math.floor(newAppeal)));

    let newTourists = Math.floor(newAppeal * 2.5 + totalAppealPoints * 0.5); // totalAppealPoints contributes directly too
    const maxTouristsByCommercial = Math.floor(totalCommercialJobs / COMMERCIAL_CAPACITY_PER_TOURIST_RATIO);
    newTourists = Math.min(newTourists, maxTouristsByCommercial);
    newTourists = Math.max(0, newTourists);

    return {
      powerCapacity: newPowerCapacity,
      powerDemand: newPowerDemand,
      waterCapacity: newWaterCapacity,
      waterDemand: newWaterDemand,
      happinessScoreForGrowthConsideration: Math.max(0, Math.min(100, Math.floor(calculatedHappiness))),
      healthLevel: newHealthLevel,
      safetyLevel: newSafetyLevel,
      educationLevel: newEducationLevel,
      pollutionLevel: newPollutionLevel,
      appeal: newAppeal,
      tourists: newTourists,
      totalMaintenanceCost,
      totalResidentialCapacity,
      totalJobsProvided,
      totalCommercialJobs,
    };
  }, [getBuildingCurrentProps]); 

  const getEmptyGridCells = useCallback((focusPoint: {x: number, z: number} | null = null, limit: number = AI_MAX_EMPTY_CELLS_TO_SHOW) => {
    const occupiedCells = new Set<string>();
    buildings.forEach(b => occupiedCells.add(`${b.gridX},${b.gridZ}`));
    let emptyCells: {x: number, z: number, distance?: number}[] = [];
    for (let x = 0; x < GRID_SIZE; x++) {
      for (let z = 0; z < GRID_SIZE; z++) {
        if (!occupiedCells.has(`${x},${z}`)) {
          if (focusPoint) {
            const distance = Math.sqrt(Math.pow(x - focusPoint.x, 2) + Math.pow(z - focusPoint.z, 2));
            emptyCells.push({ x, z, distance });
          } else {
            emptyCells.push({ x, z });
          }
        }
      }
    }
    if (focusPoint) {
      emptyCells.sort((a, b) => (a.distance ?? Infinity) - (b.distance ?? Infinity));
    } else {
      emptyCells.sort(() => Math.random() - 0.5); // Shuffle if no focus point for variety
    }
    return emptyCells.slice(0, limit).map(({x, z}) => ({x,z}));
  }, [buildings]);

  const canPlaceRoad = useCallback((x: number, z: number, currentBuildings: Building[], plannedActions: AiAction[]): boolean => {
    const isRoadOrPlannedRoad = (cx: number, cz: number) =>
      currentBuildings.some(b => b.gridX === cx && b.gridZ === cz && b.type === BuildingType.ROAD) ||
      plannedActions.some(a => a.x === cx && a.z === cz && a.type === BuildingType.ROAD);
  
    // Check if placing at (x,z) would complete a 2x2 road block.
    // (x,z) is TopLeft of a potential 2x2
    if (isRoadOrPlannedRoad(x + 1, z) && isRoadOrPlannedRoad(x, z + 1) && isRoadOrPlannedRoad(x + 1, z + 1)) return false;
    // (x,z) is TopRight
    if (isRoadOrPlannedRoad(x - 1, z) && isRoadOrPlannedRoad(x, z + 1) && isRoadOrPlannedRoad(x - 1, z + 1)) return false;
    // (x,z) is BottomLeft
    if (isRoadOrPlannedRoad(x + 1, z) && isRoadOrPlannedRoad(x, z - 1) && isRoadOrPlannedRoad(x + 1, z - 1)) return false;
    // (x,z) is BottomRight
    if (isRoadOrPlannedRoad(x - 1, z) && isRoadOrPlannedRoad(x, z - 1) && isRoadOrPlannedRoad(x - 1, z - 1)) return false;
  
    return true;
  }, []);


  const handleAiPlanningTurn = useCallback(async () => {
    if (isAiPlannerThinking) {
      return;
    }

    setIsAiPlannerThinking(true);
    showGameMessage("AI 플래너가 도시 계획을 구상 중입니다...", 3000);

    let tempCurrentFunds = cityStats.funds;
    const proposedActions: AiAction[] = [];
    let overallReasoningParts: string[] = [];
    let aiBuiltInitialPowerPlantCoords: {x: number, z: number} | null = null;
    const metrics = calculateDerivedCityMetrics(buildings, cityStats);

    const tryBuildAction = (type: BuildingType, x: number, z: number, reasoning: string): boolean => {
      if (proposedActions.length >= AI_MAX_ACTIONS_PER_TURN) return false;
      const props = BUILDING_PROPERTIES[type];
      if (!props) return false;
      const cost = props.cost;
      const isEmpty = !buildings.some(b => b.gridX === x && b.gridZ === z) && !proposedActions.some(p => p.x === x && p.z === z);
      const isValidCoord = x >= 0 && x < GRID_SIZE && z >= 0 && z < GRID_SIZE;

      if (tempCurrentFunds >= cost && isEmpty && isValidCoord) {
        if (type === BuildingType.ROAD && !canPlaceRoad(x, z, buildings, proposedActions)) {
          return false; 
        }
        proposedActions.push({ action: "BUILD", type, x, z, reasoning });
        tempCurrentFunds -= cost;
        overallReasoningParts.push(`${props.name} 건설 (${reasoning})`);
        if (type === BuildingType.POWER_PLANT && !aiFocusPoint) {
            aiBuiltInitialPowerPlantCoords = {x, z};
        }
        return true;
      }
      return false;
    };
    
    const tryUpgradeAction = (building: Building, reasoning: string): boolean => {
        if (proposedActions.length >= AI_MAX_ACTIONS_PER_TURN) return false;
        const baseProps = BUILDING_PROPERTIES[building.type];
        if (!baseProps.upgrades || building.level - BASE_BUILDING_LEVEL >= baseProps.upgrades.length) return false;
        const nextUpgradeInfo = baseProps.upgrades[building.level - BASE_BUILDING_LEVEL];
        if (tempCurrentFunds >= nextUpgradeInfo.cost && (!building.isOnFire || building.fireHealth <=0)) {
            proposedActions.push({action: "UPGRADE", buildingId: building.id, reasoning});
            tempCurrentFunds -= nextUpgradeInfo.cost;
            overallReasoningParts.push(`${baseProps.name} 업그레이드 (${reasoning})`);
            return true;
        }
        return false;
    };

    const emptyCells = getEmptyGridCells(aiFocusPoint, AI_MAX_EMPTY_CELLS_TO_SHOW * 2); // Get more for diverse placement

    // Priority 1: Initial Setup if no power plant
    const hasPowerPlant = buildings.some(b => b.type === BuildingType.POWER_PLANT && (!b.isOnFire || b.fireHealth > 0));
    if (!hasPowerPlant && proposedActions.length < AI_MAX_ACTIONS_PER_TURN) {
        const midX = Math.floor(GRID_SIZE / 2), midZ = Math.floor(GRID_SIZE / 2);
        const targetCell = emptyCells.find(c => c.x > midX - 5 && c.x < midX + 5 && c.z > midZ - 5 && c.z < midZ + 5) || emptyCells[0];
        if (targetCell && tryBuildAction(BuildingType.POWER_PLANT, targetCell.x, targetCell.z, "초기 전력 공급")) {
            if (emptyCells.length > 1 && tryBuildAction(BuildingType.WATER_TOWER, emptyCells[1].x, emptyCells[1].z, "초기 물 공급")) {
                 // Try to build a road from power plant
                 const ppX = targetCell.x, ppZ = targetCell.z;
                 const roadCandidate = [ {x: ppX+1, z:ppZ}, {x: ppX-1, z:ppZ}, {x: ppX, z:ppZ+1}, {x: ppX, z:ppZ-1}]
                    .find(rc => rc.x >=0 && rc.x < GRID_SIZE && rc.z >=0 && rc.z < GRID_SIZE && !buildings.some(b => b.gridX === rc.x && b.gridZ === rc.z) && canPlaceRoad(rc.x,rc.z,buildings, proposedActions));
                 if(roadCandidate) tryBuildAction(BuildingType.ROAD, roadCandidate.x, roadCandidate.z, "발전소 도로 연결");
            }
        }
    }

    // Priority 2: Develop around AI Focus Point (if set and initial setup done)
    if (aiFocusPoint && hasPowerPlant && proposedActions.length < AI_MAX_ACTIONS_PER_TURN) {
        const focusEmptyCells = getEmptyGridCells(aiFocusPoint, 10);
        if (focusEmptyCells.length > 0) {
            // Try road first
            if(!tryBuildAction(BuildingType.ROAD, focusEmptyCells[0].x, focusEmptyCells[0].z, `포커스 지역 도로 확장 (${aiFocusPoint.x},${aiFocusPoint.z})`)){
                if(focusEmptyCells.length > 1) { // try residential if road fails or not needed
                    tryBuildAction(BuildingType.RESIDENTIAL, focusEmptyCells[1].x, focusEmptyCells[1].z, `포커스 지역 주거 개발`);
                }
            }
        }
    }
    
    // Priority 3: Reactive Road Connection for isolated buildings
    if (proposedActions.length < AI_MAX_ACTIONS_PER_TURN) {
        const nonRoadBuildings = buildings.filter(b => b.type !== BuildingType.ROAD && (!b.isOnFire || b.fireHealth <=0));
        const existingRoads = buildings.filter(b => b.type === BuildingType.ROAD);
        for (const nonRoadB of nonRoadBuildings) {
            const { gridX, gridZ } = nonRoadB;
            const isConnected = existingRoads.some(road => 
                (Math.abs(road.gridX - gridX) <= 1 && road.gridZ === gridZ) ||
                (Math.abs(road.gridZ - gridZ) <= 1 && road.gridX === gridX)
            );
            if (!isConnected) {
                const neighbors = [{x:gridX+1,z:gridZ}, {x:gridX-1,z:gridZ}, {x:gridX,z:gridZ+1}, {x:gridX,z:gridZ-1}];
                const connectCell = neighbors.find(n => n.x >=0 && n.x < GRID_SIZE && n.z >=0 && n.z < GRID_SIZE && !buildings.some(b=>b.gridX===n.x && b.gridZ===n.z) && canPlaceRoad(n.x, n.z, buildings, proposedActions));
                if (connectCell) {
                    if (tryBuildAction(BuildingType.ROAD, connectCell.x, connectCell.z, `${BUILDING_PROPERTIES[nonRoadB.type].name} 도로 연결`)) break;
                }
            }
        }
    }

    // Priority 4: General Needs
    if (proposedActions.length < AI_MAX_ACTIONS_PER_TURN) {
        if (metrics.powerCapacity < metrics.powerDemand * 1.2 && emptyCells.length > 0) {
            tryBuildAction(BuildingType.POWER_PLANT, emptyCells[0].x, emptyCells[0].z, "전력 부족 해결");
        } else if (metrics.waterCapacity < metrics.waterDemand * 1.2 && emptyCells.length > 1) {
            tryBuildAction(BuildingType.WATER_TOWER, emptyCells[Math.min(1, emptyCells.length-1)].x, emptyCells[Math.min(1, emptyCells.length-1)].z, "물 부족 해결");
        } else if (cityStats.population >= metrics.totalResidentialCapacity * 0.85 && cityStats.happiness > 45 && emptyCells.length > 0) {
            tryBuildAction(BuildingType.RESIDENTIAL, emptyCells[0].x, emptyCells[0].z, "주거 공간 확충");
        } else if (cityStats.population > metrics.totalJobsProvided * 1.15 && emptyCells.length > 0) {
            tryBuildAction(BuildingType.COMMERCIAL, emptyCells[0].x, emptyCells[0].z, "일자리 창출");
        } else if (cityStats.happiness < 60 && emptyCells.length > 0) {
            tryBuildAction(BuildingType.PARK, emptyCells[0].x, emptyCells[0].z, "행복도 증진");
        }
    }
    
    // Priority 5: Upgrades
    if (proposedActions.length < AI_MAX_ACTIONS_PER_TURN) {
        const upgradableBuildings = buildings.filter(b => {
            const baseProps = BUILDING_PROPERTIES[b.type];
            return baseProps.upgrades && (b.level - BASE_BUILDING_LEVEL < baseProps.upgrades.length) && (!b.isOnFire || b.fireHealth <=0);
        }).sort((a,b) => a.level - b.level); // Prioritize lower level upgrades

        if (upgradableBuildings.length > 0) {
             // Simple: upgrade first one that fits a need or is cheap
            const buildingToUpgrade = upgradableBuildings[0];
            let reason = "성능 향상";
            if(buildingToUpgrade.type === BuildingType.POWER_PLANT && metrics.powerCapacity < metrics.powerDemand * 1.3) reason = "전력 생산 증대";
            if(buildingToUpgrade.type === BuildingType.RESIDENTIAL && cityStats.population >= metrics.totalResidentialCapacity * 0.9) reason = "주거 공간 추가 확보";
            tryUpgradeAction(buildingToUpgrade, reason);
        }
    }
    
    // Execute Actions
    let actionsTakenThisTurnCount = 0;
    if (proposedActions.length > 0) {
        showGameMessage(`AI 플래너: ${overallReasoningParts.join(', ')}`, 4000);
    } else {
        showGameMessage("AI 플래너: 현재 특별한 조치가 필요하지 않다고 판단했습니다.", 3000);
    }

    for (const aiAction of proposedActions) {
      if (actionsTakenThisTurnCount >= AI_MAX_ACTIONS_PER_TURN) break;

      if (aiAction.action === "BUILD" && aiAction.type && aiAction.x !== undefined && aiAction.z !== undefined) {
        const props = BUILDING_PROPERTIES[aiAction.type];
        const cost = props.cost;
        // Re-check funds with actual current cityStats.funds as tempCurrentFunds was for planning phase
        if (cityStats.funds >= cost) { 
          const newBuilding: Building = {
            id: `${Date.now()}-${aiAction.x}-${aiAction.z}-ai`,
            type: aiAction.type,
            gridX: aiAction.x,
            gridZ: aiAction.z,
            level: BASE_BUILDING_LEVEL,
            isOnFire: false,
            fireHealth: MAX_FIRE_HEALTH,
          };
          setBuildings(prev => [...prev, newBuilding]);
          setCityStats(prev => ({ ...prev, funds: prev.funds - cost }));
          // showGameMessage(`AI: ${props.name} 건설 (${aiAction.x},${aiAction.z}). ${aiAction.reasoning || ''}`, 3500); // Already shown in overall
          actionsTakenThisTurnCount++;
          if (aiBuiltInitialPowerPlantCoords && aiAction.x === aiBuiltInitialPowerPlantCoords.x && aiAction.z === aiBuiltInitialPowerPlantCoords.z) {
              setAiFocusPoint(aiBuiltInitialPowerPlantCoords);
              setAiFocusPointSource('AI_STRATEGIC');
              setTimeout(()=> showGameMessage(`AI 플래너: 초기 발전소를 (${aiBuiltInitialPowerPlantCoords!.x},${aiBuiltInitialPowerPlantCoords!.z})에 건설하고, 이 지점을 전략적 개발 거점으로 설정합니다.`, 3500), 500);
          }
        }
      } else if (aiAction.action === "UPGRADE" && aiAction.buildingId) {
        const buildingToUpgrade = buildings.find(b => b.id === aiAction.buildingId);
        if (buildingToUpgrade) {
          const baseProps = BUILDING_PROPERTIES[buildingToUpgrade.type];
          const currentLevelIndex = buildingToUpgrade.level - BASE_BUILDING_LEVEL;
          if (baseProps.upgrades && currentLevelIndex < baseProps.upgrades.length) {
            const upgradeInfo = baseProps.upgrades[currentLevelIndex];
            if (cityStats.funds >= upgradeInfo.cost) { // Re-check funds
              setBuildings(prev => prev.map(b => b.id === aiAction.buildingId ? { ...b, level: b.level + 1 } : b));
              setCityStats(prev => ({ ...prev, funds: prev.funds - upgradeInfo.cost }));
              // showGameMessage(`AI: ${baseProps.name} 업그레이드 (${buildingToUpgrade.gridX},${buildingToUpgrade.gridZ}) ${aiAction.reasoning || ''}`, 3500); // Already shown
              actionsTakenThisTurnCount++;
              if (selectedBuildingForInfo?.id === aiAction.buildingId) {
                setSelectedBuildingForInfo(prev => prev ? {...prev, level: prev.level + 1} : null);
              }
            }
          }
        }
      }
    }

    setIsAiPlannerThinking(false);
    setAiPlannerCooldown(AI_PLANNER_COOLDOWN_MONTHS);
  }, [
    isAiPlannerThinking, cityStats, buildings, getEmptyGridCells, showGameMessage, 
    calculateDerivedCityMetrics, selectedBuildingForInfo, aiFocusPoint, 
    canPlaceRoad // Added canPlaceRoad
  ]);


  const handleSaveGame = useCallback(() => {
    try {
      const cameraState = threeSceneRef.current?.getCameraState();
      const gameState: SavedGameState = {
        buildings,
        cityStats,
        selectedBuildingId: selectedBuildingForInfo?.id,
        cameraState: cameraState || undefined,
        isDelegationModeActive,
        aiPlannerCooldown,
        aiFocusPoint,
        aiFocusPointSource,
        cityStatsHistory, // Save history
      };
      localStorage.setItem(SAVE_GAME_KEY, JSON.stringify(gameState));
      showGameMessage("게임이 저장되었습니다!", 2000);
    } catch (error) {
      console.error("Error saving game:", error);
      showGameMessage("게임 저장에 실패했습니다.", 3000);
    }
  }, [buildings, cityStats, selectedBuildingForInfo, showGameMessage, isDelegationModeActive, aiPlannerCooldown, aiFocusPoint, aiFocusPointSource, cityStatsHistory]);

  const handleLoadGame = useCallback((isAutoLoad = false) => {
    try {
      const savedDataString = localStorage.getItem(SAVE_GAME_KEY);
      if (savedDataString) {
        const savedState = JSON.parse(savedDataString) as SavedGameState;
        
        const loadedBuildings = savedState.buildings || [];
        const defaultStats = {
            population: INITIAL_POPULATION, funds: INITIAL_FUNDS, powerCapacity: 0, powerDemand: 0,
            waterCapacity: 0, waterDemand: 0, happiness: INITIAL_HAPPINESS, month: INITIAL_MONTH,
            healthLevel: INITIAL_HEALTH_LEVEL, safetyLevel: INITIAL_SAFETY_LEVEL, 
            educationLevel: INITIAL_EDUCATION_LEVEL, pollutionLevel: INITIAL_POLLUTION_LEVEL,
            appeal: INITIAL_APPEAL, tourists: INITIAL_TOURISTS,
        };
        const loadedCityStats = { ...defaultStats, ...(savedState.cityStats || {}) };
        
        setBuildings(loadedBuildings);
        setCityStats(loadedCityStats); 
        setCityStatsHistory(savedState.cityStatsHistory || []); // Load history
        
        const metrics = calculateDerivedCityMetrics(loadedBuildings, loadedCityStats);
        setCityStats(prev => ({
            ...prev, 
            ...metrics, 
            happiness: metrics.happinessScoreForGrowthConsideration,
        }));

        if (savedState.selectedBuildingId) {
          const foundSelectedBuilding = loadedBuildings.find(b => b.id === savedState.selectedBuildingId);
          setSelectedBuildingForInfo(foundSelectedBuilding || null);
        } else {
          setSelectedBuildingForInfo(null);
        }

        if (savedState.cameraState && threeSceneRef.current) {
          threeSceneRef.current.setCameraState(savedState.cameraState);
        }
        setIsDelegationModeActive(savedState.isDelegationModeActive ?? false);
        setAiPlannerCooldown(savedState.aiPlannerCooldown ?? AI_PLANNER_COOLDOWN_MONTHS);
        setAiFocusPoint(savedState.aiFocusPoint ?? null);
        setAiFocusPointSource(savedState.aiFocusPointSource ?? null);
        
        if (!isAutoLoad) {
          showGameMessage("게임을 불러왔습니다!", 2000);
        } else {
           showGameMessage("저장된 게임을 자동으로 불러왔습니다.", 2500);
        }
      } else {
        if (!isAutoLoad) {
          showGameMessage("저장된 게임이 없습니다.", 3000);
        }
         setBuildings([]); 
         setCityStats({ 
            population: INITIAL_POPULATION, funds: INITIAL_FUNDS, powerCapacity: 0, powerDemand: 0,
            waterCapacity: 0, waterDemand: 0, happiness: INITIAL_HAPPINESS, month: INITIAL_MONTH,
            healthLevel: INITIAL_HEALTH_LEVEL, safetyLevel: INITIAL_SAFETY_LEVEL, 
            educationLevel: INITIAL_EDUCATION_LEVEL, pollutionLevel: INITIAL_POLLUTION_LEVEL,
            appeal: INITIAL_APPEAL, tourists: INITIAL_TOURISTS,
        });
        setCityStatsHistory([]); // Reset history
        setIsDelegationModeActive(false);
        setAiPlannerCooldown(AI_PLANNER_COOLDOWN_MONTHS);
        setAiFocusPoint(null);
        setAiFocusPointSource(null);
      }
    } catch (error) {
      console.error("Error loading game:", error);
      if (!isAutoLoad) {
        showGameMessage("게임 불러오기에 실패했습니다.", 3000);
      }
      setBuildings([]);
      setCityStats({
        population: INITIAL_POPULATION, funds: INITIAL_FUNDS, powerCapacity: 0, powerDemand: 0,
        waterCapacity: 0, waterDemand: 0, happiness: INITIAL_HAPPINESS, month: INITIAL_MONTH,
        healthLevel: INITIAL_HEALTH_LEVEL, safetyLevel: INITIAL_SAFETY_LEVEL, 
        educationLevel: INITIAL_EDUCATION_LEVEL, pollutionLevel: INITIAL_POLLUTION_LEVEL,
        appeal: INITIAL_APPEAL, tourists: INITIAL_TOURISTS,
      });
      setSelectedBuildingForInfo(null);
      setCityStatsHistory([]); // Reset history on error
      setIsDelegationModeActive(false);
      setAiPlannerCooldown(AI_PLANNER_COOLDOWN_MONTHS);
      setAiFocusPoint(null);
      setAiFocusPointSource(null);
    }
  }, [showGameMessage, calculateDerivedCityMetrics]);

  useEffect(() => {
    handleLoadGame(true); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 


  useEffect(() => {
    if (!isDelegationModeActive || isAiPlannerThinking) {
      return; 
    }

    const aiIntervalId = setInterval(() => {
      if (!isDelegationModeActive || isAiPlannerThinking) { 
         return;
      }

      setAiPlannerCooldown(prevCooldown => {
        if (prevCooldown <= 0) {
          if (cityStats.funds >= AI_PLANNER_MIN_FUNDS_TO_ACT) {
            handleAiPlanningTurn(); 
            return AI_PLANNER_COOLDOWN_MONTHS; 
          } else {
            showGameMessage(`AI 플래너: 자금이 $${AI_PLANNER_MIN_FUNDS_TO_ACT} 미만이라 계획을 보류합니다. (현재 $${cityStats.funds})`, 3000);
            return AI_PLANNER_COOLDOWN_MONTHS; 
          }
        } else {
          return prevCooldown - 1;
        }
      });
    }, AI_PLANNER_INTERVAL_MS); 

    return () => clearInterval(aiIntervalId);
  }, [
    isDelegationModeActive,
    isAiPlannerThinking,
    aiPlannerCooldown, 
    cityStats.funds, 
    handleAiPlanningTurn,
    showGameMessage
  ]);

  useEffect(() => {
    if (isPaused) {
      return; 
    }

    const gameTick = () => {
      let currentBuildingsSnapshot = buildings; 
      let updatedBuildings = [...buildings];
      let newMessages: string[] = [];

      const fireStations = updatedBuildings.filter(b => b.type === BuildingType.FIRE_STATION && !b.isOnFire);
      let fireStationAssignments: Record<string, number> = {}; 
      fireStations.forEach(fs => fireStationAssignments[fs.id] = 0);

      updatedBuildings = updatedBuildings.map(b => {
        if (b.isOnFire && b.fireHealth > 0) { 
          let newFireHealth = b.fireHealth - FIRE_DAMAGE_RATE;
          for (const station of fireStations) {
            const stationProps = getBuildingCurrentProps(station);
            if (fireStationAssignments[station.id] < (stationProps.maxActiveFiresHandled || 1)) {
              const distance = Math.sqrt(Math.pow(b.gridX - station.gridX, 2) + Math.pow(b.gridZ - station.gridZ, 2));
              if (distance <= (stationProps.fireCoverageRadius || 0)) {
                newFireHealth += (stationProps.fireFightingPower || 0);
                fireStationAssignments[station.id]++;
                break; 
              }
            }
          }
          newFireHealth = Math.min(MAX_FIRE_HEALTH, newFireHealth);
          if (newFireHealth <= 0) {
            newMessages.push(`${BUILDING_PROPERTIES[b.type].name} (${b.gridX},${b.gridZ})이(가) 화재로 파괴되었습니다!`);
            return { ...b, fireHealth: 0 }; 
          }
          return { ...b, fireHealth: newFireHealth };
        }
        return b;
      });
      
      const buildingsOnFire = updatedBuildings.filter(b => b.isOnFire && b.fireHealth > 0 && b.fireHealth < MAX_FIRE_HEALTH * 0.7); 
      buildingsOnFire.forEach(burningBuilding => {
        if (Math.random() < FIRE_SPREAD_CHANCE) {
          const neighbors = [
            { x: burningBuilding.gridX + 1, z: burningBuilding.gridZ }, { x: burningBuilding.gridX - 1, z: burningBuilding.gridZ },
            { x: burningBuilding.gridX, z: burningBuilding.gridZ + 1 }, { x: burningBuilding.gridX, z: burningBuilding.gridZ - 1 },
          ];
          for (const n of neighbors) {
            const targetBuildingIndex = updatedBuildings.findIndex(b => b.gridX === n.x && b.gridZ === n.z);
            if (targetBuildingIndex !== -1) {
              const target = updatedBuildings[targetBuildingIndex];
              const targetProps = BUILDING_PROPERTIES[target.type];
              if (targetProps.isFlammable && !target.isOnFire) {
                updatedBuildings[targetBuildingIndex] = { ...target, isOnFire: true, fireHealth: MAX_FIRE_HEALTH -1 }; 
                newMessages.push(`화재 발생! ${targetProps.name} (${target.gridX},${target.gridZ}) 건물로 불이 번졌습니다!`);
                break; 
              }
            }
          }
        }
      });
      
      updatedBuildings = updatedBuildings.map(b => {
        if (b.isOnFire && b.fireHealth <= 0) return b; 
        const props = BUILDING_PROPERTIES[b.type];
        if (props.isFlammable && !b.isOnFire && Math.random() < FIRE_START_CHANCE_PER_TICK_PER_BUILDING) {
           let isCovered = false;
           for (const station of fireStations) {
             const stationProps = getBuildingCurrentProps(station);
             if (fireStationAssignments[station.id] < (stationProps.maxActiveFiresHandled || 1)) {
                const distance = Math.sqrt(Math.pow(b.gridX - station.gridX, 2) + Math.pow(b.gridZ - station.gridZ, 2));
                if (distance <= (stationProps.fireCoverageRadius || 0)) {
                    isCovered = true; break;
                }
             }
           }
           if(!isCovered || fireStations.length === 0){ 
             newMessages.push(`화재 발생! ${props.name} (${b.gridX},${b.gridZ}) 건물에 불이 났습니다!`);
             return { ...b, isOnFire: true, fireHealth: MAX_FIRE_HEALTH -1 };
           } else if (Math.random() < FIRE_START_CHANCE_PER_TICK_PER_BUILDING / 2) { 
             newMessages.push(`화재 발생! ${props.name} (${b.gridX},${b.gridZ}) 건물에 불이 났습니다! (소방서 관할)`);
             return { ...b, isOnFire: true, fireHealth: MAX_FIRE_HEALTH -1 };
           }
        }
        return b;
      });

      setBuildings(updatedBuildings); 

      const metrics = calculateDerivedCityMetrics(updatedBuildings, cityStats);
      const tourismIncome = cityStats.tourists * TOURIST_INCOME_PER_TOURIST;
      const income = cityStats.population * MONTHLY_TAX_PER_CAPITA + tourismIncome;
      const netFundsChange = income - metrics.totalMaintenanceCost;
      const newFunds = cityStats.funds + netFundsChange;

      let populationChange = 0;
      const hasWater = metrics.waterDemand <= metrics.waterCapacity;
      const isHealthy = metrics.healthLevel > HEALTH_PENALTY_THRESHOLD;
      const isSafe = metrics.safetyLevel > SAFETY_PENALTY_THRESHOLD;
      const isEducatedEnough = metrics.educationLevel >= EDUCATION_PENALTY_THRESHOLD; // Changed > to >=
      const isPollutionAcceptable = metrics.pollutionLevel < POLLUTION_HEALTH_IMPACT_THRESHOLD + 20; 

      if (cityStats.population < metrics.totalResidentialCapacity && hasWater && isHealthy && isSafe && isEducatedEnough && isPollutionAcceptable) {
        let growthFactor = 0;
        if (metrics.happinessScoreForGrowthConsideration > 80) growthFactor = 0.06;
        else if (metrics.happinessScoreForGrowthConsideration > 60) growthFactor = 0.04;
        else if (metrics.happinessScoreForGrowthConsideration > 40) growthFactor = 0.02;
        populationChange = Math.floor(cityStats.population * growthFactor + 1) + Math.floor(metrics.totalResidentialCapacity * 0.005);
        if (metrics.appeal > 70) populationChange += Math.floor(metrics.tourists * 0.01); 
      }
      
      let departureFactor = 0;
      if(metrics.happinessScoreForGrowthConsideration < 25) departureFactor = Math.max(departureFactor, 0.06);
      if(metrics.happinessScoreForGrowthConsideration < 40) departureFactor = Math.max(departureFactor, 0.03);
      if(!hasWater) departureFactor = Math.max(departureFactor, 0.08);
      if(!isHealthy) departureFactor = Math.max(departureFactor, 0.06);
      if(!isSafe) departureFactor = Math.max(departureFactor, 0.07);
      if(!isEducatedEnough) departureFactor = Math.max(departureFactor, 0.04); // This will use the new isEducatedEnough
      if(!isPollutionAcceptable && metrics.pollutionLevel > 75) departureFactor = Math.max(departureFactor, 0.05); 

      if(departureFactor > 0) {
         populationChange -= Math.floor(cityStats.population * departureFactor + 1);
      }
      
      const potentialNewPopulation = cityStats.population + populationChange;
      if (populationChange > 0 && potentialNewPopulation > metrics.totalJobsProvided * 1.25) { 
           populationChange = Math.max(0, populationChange - Math.floor((potentialNewPopulation - metrics.totalJobsProvided * 1.25)/2));
      }
      let newPopulation = cityStats.population + populationChange;
      newPopulation = Math.min(newPopulation, metrics.totalResidentialCapacity);
      newPopulation = Math.max(0, newPopulation);

      const destroyedBuildingCount = updatedBuildings.filter(b => b.isOnFire && b.fireHealth <=0).length - currentBuildingsSnapshot.filter(b => b.isOnFire && b.fireHealth <=0).length;
      if (newMessages.length > 0) {
          newMessages.forEach((msg, idx) => setTimeout(() => showGameMessage(msg, 4000), idx * 500));
      } else if (!isDelegationModeActive && (cityStats.month % 2 === 0 || netFundsChange !==0 || destroyedBuildingCount > 0)) { 
          showGameMessage(`월별 수입: $${cityStats.population * MONTHLY_TAX_PER_CAPITA} (세금) + $${tourismIncome} (관광) = $${income}. 지출: $${metrics.totalMaintenanceCost}. 순이익: $${netFundsChange}`, 4500);
      }
      
      const newCityStats: CityStats = {
        ...cityStats, // Spread previous stats for any not covered by metrics or calculated below
        ...metrics, 
        funds: newFunds,
        population: newPopulation,
        month: cityStats.month + 1, 
        happiness: metrics.happinessScoreForGrowthConsideration, 
      };
      setCityStats(newCityStats);

      // Add to history
      setCityStatsHistory(prevHistory => {
        const updatedHistory = [...prevHistory, { ...newCityStats }]; // Store a snapshot
        if (updatedHistory.length > MAX_HISTORY_ENTRIES) {
          return updatedHistory.slice(updatedHistory.length - MAX_HISTORY_ENTRIES);
        }
        return updatedHistory;
      });


       if (selectedBuildingForInfo) {
        const updatedSelection = updatedBuildings.find(b => b.id === selectedBuildingForInfo.id);
        if (updatedSelection) {
            if(updatedSelection.isOnFire && updatedSelection.fireHealth <= 0) setSelectedBuildingForInfo(null);
            else setSelectedBuildingForInfo(updatedSelection);
        } else {
            setSelectedBuildingForInfo(null); 
        }
      }
    };

    const timerId = setInterval(gameTick, GAME_TICK_INTERVAL_MS);
    return () => clearInterval(timerId);
  }, [
      isPaused, 
      buildings, 
      cityStats, 
      calculateDerivedCityMetrics, 
      showGameMessage, 
      getBuildingCurrentProps, 
      selectedBuildingForInfo,
      isDelegationModeActive, 
    ]); 

   useEffect(() => {
    const metrics = calculateDerivedCityMetrics(buildings, cityStats);
    setCityStats(prevStats => ({
      ...prevStats, 
      powerCapacity: metrics.powerCapacity,
      powerDemand: metrics.powerDemand,
      waterCapacity: metrics.waterCapacity,
      waterDemand: metrics.waterDemand,
      happiness: metrics.happinessScoreForGrowthConsideration, 
      healthLevel: metrics.healthLevel,
      safetyLevel: metrics.safetyLevel,
      educationLevel: metrics.educationLevel,
      pollutionLevel: metrics.pollutionLevel,
      appeal: metrics.appeal,
      tourists: metrics.tourists,
    }));
  }, [buildings, cityStats.population, cityStats.funds, cityStats.month, calculateDerivedCityMetrics]); // Added more deps for better reactivity on manual changes

  useEffect(() => {
    if(gameMessage && !gameMessage.startsWith("AI 플래너가 도시 계획") && !gameMessage.startsWith("AI:")) { 
        const isUrgent = gameMessage.includes("화재") || gameMessage.includes("파괴");
        if (!isUrgent) {
            const timeout = setTimeout(() => {
                setGameMessage(null);
            }, 3000); 
            return () => clearTimeout(timeout);
        }
    }
  }, [gameMessage]);

  const handleSelectBuildingType = useCallback((type: BuildingType) => {
    setSelectedBuildingType(type);
    setSelectedBuildingForInfo(null); 
    if (type !== BuildingType.NONE) {
        showGameMessage(`선택됨: ${BUILDING_PROPERTIES[type].name}`);
    } else {
        showGameMessage("철거 모드 선택됨 (오른쪽 클릭으로 철거)");
    }
  }, [showGameMessage]);

  const handlePlaceBuilding = useCallback((gridX: number, gridZ: number) => {
    if (!selectedBuildingType || selectedBuildingType === BuildingType.NONE) {
      showGameMessage("먼저 건물 유형을 선택하세요.");
      return;
    }

    const existingBuilding = buildings.find(b => b.gridX === gridX && b.gridZ === gridZ);
    if (existingBuilding) {
      showGameMessage("이 칸은 이미 사용 중입니다.");
      return;
    }
    
    // Single-lane road check for player
    if (selectedBuildingType === BuildingType.ROAD && !canPlaceRoad(gridX, gridZ, buildings, [])) {
        showGameMessage("도로는 1차선으로만 건설할 수 있습니다. (2x2 도로 블록 형성 불가)", 3500);
        return;
    }

    const properties = BUILDING_PROPERTIES[selectedBuildingType];
    if (cityStats.funds < properties.cost) {
      showGameMessage("자금이 부족합니다!");
      return;
    }
    
    const newBuilding: Building = {
      id: `${Date.now()}-${gridX}-${gridZ}`,
      type: selectedBuildingType,
      gridX,
      gridZ,
      level: BASE_BUILDING_LEVEL, 
      isOnFire: false,
      fireHealth: MAX_FIRE_HEALTH,
    };

    setBuildings(prev => [...prev, newBuilding]);
    setCityStats(prev => ({ ...prev, funds: prev.funds - properties.cost }));
    showGameMessage(`${properties.name} 건설 완료. 비용: $${properties.cost}`);

    if (selectedBuildingType === BuildingType.POWER_PLANT && isDelegationModeActive) {
      setAiFocusPoint({ x: gridX, z: gridZ });
      setAiFocusPointSource('PLAYER');
      setAiPlannerCooldown(1); 
      showGameMessage(`AI 플래너: 새로운 발전소 (${gridX},${gridZ}) 주변으로 개발을 집중합니다.`, 3500);
    }

  }, [selectedBuildingType, buildings, cityStats.funds, showGameMessage, isDelegationModeActive, canPlaceRoad]);

  const handleDemolishBuilding = useCallback((gridX: number, gridZ: number) => {
    const buildingToRemove = buildings.find(b => b.gridX === gridX && b.gridZ === gridZ);
    if (buildingToRemove) {
      const baseProps = BUILDING_PROPERTIES[buildingToRemove.type]; 
      const refund = buildingToRemove.isOnFire && buildingToRemove.fireHealth < MAX_FIRE_HEALTH * 0.5 ? 0 : Math.floor(baseProps.cost * 0.3); 
      
      setBuildings(prev => prev.filter(b => b.id !== buildingToRemove.id));
      setCityStats(prev => ({ ...prev, funds: prev.funds + refund }));
      showGameMessage(`${baseProps.name} 철거됨. ${refund > 0 ? `환급: $${refund}` : '환급 없음.'}`);
      if (selectedBuildingForInfo?.id === buildingToRemove.id) {
        setSelectedBuildingForInfo(null); 
      }
      if (aiFocusPoint && aiFocusPoint.x === gridX && aiFocusPoint.z === gridZ && buildingToRemove.type === BuildingType.POWER_PLANT) {
        setAiFocusPoint(null); 
        setAiFocusPointSource(null);
        showGameMessage("AI 플래너: 집중 개발 대상 발전소가 철거되어 일반 계획 모드로 전환합니다.", 3000);
      }
    } else {
      showGameMessage("철거할 건물이 없습니다.");
    }
  }, [buildings, showGameMessage, selectedBuildingForInfo, cityStats.funds, aiFocusPoint]); 

  const handleSelectBuildingForInfo = useCallback((building: Building | null) => {
    if (building && building.isOnFire && building.fireHealth <= 0) {
      showGameMessage("파괴된 건물은 선택할 수 없습니다.");
      setSelectedBuildingForInfo(null);
      return;
    }
    setSelectedBuildingForInfo(building);
    setSelectedBuildingType(null); 
  }, [showGameMessage]);

  const handleUpgradeBuilding = useCallback((buildingId: string) => {
    const buildingToUpgrade = buildings.find(b => b.id === buildingId);
    if (!buildingToUpgrade) {
      showGameMessage("업그레이드할 건물을 찾을 수 없습니다.");
      return;
    }
    if (buildingToUpgrade.isOnFire && buildingToUpgrade.fireHealth > 0) { 
      showGameMessage("불타는 건물은 업그레이드할 수 없습니다.");
      return;
    }
     if (buildingToUpgrade.isOnFire && buildingToUpgrade.fireHealth <= 0) {
      showGameMessage("파괴된 건물은 업그레이드할 수 없습니다.");
      return;
    }

    const baseProps = BUILDING_PROPERTIES[buildingToUpgrade.type];
    if (!baseProps.upgrades || buildingToUpgrade.level - BASE_BUILDING_LEVEL >= baseProps.upgrades.length) {
      showGameMessage("더 이상 업그레이드할 수 없습니다.");
      return;
    }

    const nextUpgradeInfo = baseProps.upgrades[buildingToUpgrade.level - BASE_BUILDING_LEVEL];
    if (cityStats.funds < nextUpgradeInfo.cost) {
      showGameMessage("업그레이드 자금이 부족합니다!");
      return;
    }

    setBuildings(prevBuildings => 
      prevBuildings.map(b => 
        b.id === buildingId ? { ...b, level: b.level + 1 } : b
      )
    );
    setCityStats(prevStats => ({ ...prevStats, funds: prevStats.funds - nextUpgradeInfo.cost }));
    showGameMessage(`${baseProps.name}이(가) ${nextUpgradeInfo.name}(으)로 업그레이드되었습니다. 비용: $${nextUpgradeInfo.cost}`);
    
    setSelectedBuildingForInfo(prev => {
      if (prev && prev.id === buildingId) {
        return { ...prev, level: prev.level + 1 };
      }
      return prev;
    });

  }, [buildings, cityStats.funds, showGameMessage]);

  const handleTogglePause = useCallback(() => {
    setIsPaused(prev => {
      showGameMessage(!prev ? "게임 일시정지됨" : "게임 재개됨", 2000);
      return !prev;
    });
  }, [showGameMessage]);

  const handleToggleDelegationMode = useCallback(() => {
    // Removed API Key check
    setIsDelegationModeActive(prev => {
      const newMode = !prev;
      if (newMode) {
        showGameMessage("AI 위임 모드 활성화됨. AI가 도시 계획을 시작합니다. 이 모드는 실험 단계입니다.", 3000);
        setAiPlannerCooldown(1); 
      } else {
        showGameMessage("AI 위임 모드 비활성화됨.", 2000);
        setIsAiPlannerThinking(false); 
        setAiFocusPoint(null); 
        setAiFocusPointSource(null);
      }
      return newMode;
    });
  }, [showGameMessage]);

  const handleToggleGraphModal = useCallback(() => {
    setIsGraphModalVisible(prev => !prev);
  }, []);


  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white">
      <StatsDisplay 
        stats={cityStats} 
        isPaused={isPaused} 
        isDelegationActive={isDelegationModeActive}
        isAiThinking={isAiPlannerThinking}
      />
      
      <div className="fixed top-16 right-4 z-30 flex items-center space-x-2"> 
         <button
          onClick={handleToggleDelegationMode}
          title={isDelegationModeActive ? "AI 위임 모드 비활성화" : "AI 위임 모드 활성화"}
          aria-label={isDelegationModeActive ? "Deactivate AI Delegation" : "Activate AI Delegation"}
          className={`action-button text-white ${isDelegationModeActive ? 'bg-teal-500 hover:bg-teal-600 focus:ring-teal-400' : 'bg-gray-600 hover:bg-gray-500 focus:ring-gray-400'}`}
        >
          {isAiPlannerThinking ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 3.5A1.5 1.5 0 018.5 2h3A1.5 1.5 0 0113 3.5v1.259a4.502 4.502 0 00-2-.5H9a4.502 4.502 0 00-2 .5V3.5zM4.043 6.339A5.001 5.001 0 019 4h2a5.001 5.001 0 014.957 2.339l.344.687A1 1 0 0115.5 8H14a1 1 0 01-1-1v-.687a3 3 0 00-2.043-2.812H9.043A3 3 0 007 6.313V7a1 1 0 01-1 1H4.5a1 1 0 01-.801-.375l-.344-.687zM15 9.5a1.5 1.5 0 011.5 1.5v4.065A2.435 2.435 0 0114.065 17H5.935A2.435 2.435 0 013.5 15.065V11A1.5 1.5 0 015 9.5h10z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <button
          onClick={handleTogglePause}
          title={isPaused ? "게임 재개" : "게임 일시정지"}
          aria-label={isPaused ? "Resume Game" : "Pause Game"}
          className={`action-button text-white ${isPaused ? 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400' : 'bg-purple-600 hover:bg-purple-700 focus:ring-purple-500'}`}
        >
          {isPaused ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
            </svg>
          )}
        </button>
        <button
          onClick={() => handleLoadGame(false)}
          title="게임 불러오기"
          aria-label="Load Game"
          className="action-button bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </button>
        <button
          onClick={handleSaveGame}
          title="게임 저장하기"
          aria-label="Save Game"
          className="action-button bg-green-600 hover:bg-green-700 text-white focus:ring-green-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 4v16h14V8.5L14.5 4H5zM15 4v5h5m-9 7h4" />
          </svg>
        </button>
        <button
          onClick={handleToggleGraphModal}
          title="통계 그래프 보기"
          aria-label="Show Statistics Graph"
          className="action-button bg-pink-600 hover:bg-pink-700 text-white focus:ring-pink-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 20V10" />
          </svg>
        </button>
        <HelpButton />
      </div>

      {gameMessage && (
        <div 
          className={`absolute top-20 left-1/2 -translate-x-1/2 text-white p-3 rounded-md shadow-lg z-50 transition-opacity duration-300 ${gameMessage.includes("화재") || gameMessage.includes("파괴") ? 'bg-red-700 animate-pulse' : (gameMessage.startsWith("AI 플래너가") || gameMessage.startsWith("AI:")) ? 'bg-cyan-600' : 'bg-indigo-600 animate-pulseOnce'}`}
          style={{animation: gameMessage.includes("화재") || gameMessage.includes("파괴") ? 'pulse 2s infinite' : ((gameMessage.startsWith("AI 플래너가 도시 계획 중") || gameMessage.startsWith("AI:")) ? '' : 'pulseOnce 0.5s ease-out forwards')}}
        >
          {gameMessage}
        </div>
      )}
      <div className="flex-grow relative">
        <ThreeScene
          ref={threeSceneRef}
          gridSize={GRID_SIZE}
          cellSize={CELL_SIZE}
          buildings={buildings}
          selectedBuildingType={selectedBuildingType}
          onPlaceBuilding={handlePlaceBuilding}
          onDemolishBuilding={handleDemolishBuilding}
          onSelectBuildingForInfo={handleSelectBuildingForInfo} 
          selectedBuildingForInfo={selectedBuildingForInfo} 
          getBuildingCurrentProps={getBuildingCurrentProps} 
        />
        {selectedBuildingForInfo && (
          <BuildingInfoPanel 
            building={selectedBuildingForInfo}
            buildingProps={getBuildingCurrentProps(selectedBuildingForInfo)}
            baseBuildingProps={BUILDING_PROPERTIES[selectedBuildingForInfo.type]}
            onUpgrade={handleUpgradeBuilding}
            onClose={() => setSelectedBuildingForInfo(null)}
            currentFunds={cityStats.funds}
          />
        )}
      </div>
      {isGraphModalVisible && cityStatsHistory.length > 0 && (
        <HistoricalStatsGraph
          history={cityStatsHistory}
          onClose={handleToggleGraphModal}
        />
      )}
      {isGraphModalVisible && cityStatsHistory.length === 0 && (
         <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4"
          onClick={handleToggleGraphModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full text-white border border-gray-700 animate-modalShow"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-center text-yellow-400 mb-4">통계 데이터 없음</h2>
            <p className="text-gray-300 text-center mb-6">아직 그래프로 표시할 만큼의 시간 경과 데이터가 수집되지 않았습니다. 게임을 잠시 진행한 후 다시 시도해 주세요.</p>
            <button
              onClick={handleToggleGraphModal}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-4 rounded-md transition-colors"
            >
              알겠습니다
            </button>
          </div>
        </div>
      )}
      <Toolbar
        onSelectBuilding={handleSelectBuildingType}
        selectedBuildingType={selectedBuildingType}
        buildingProperties={BUILDING_PROPERTIES}
        nonSelectableBuildingTypes={NON_SELECTABLE_BUILDING_TYPES}
      />
    </div>
  );
};

export default App;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes pulseOnce {
  0% { transform: translate(-50%, 0) scale(0.95); opacity: 0.7; }
  50% { transform: translate(-50%, 0) scale(1.05); opacity: 1; }
  100% { transform: translate(-50%, 0) scale(1); opacity: 1; }
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: translate(-50%, 0) scale(1); }
  50% { opacity: 0.7; transform: translate(-50%, 0) scale(1.05); }
}
@keyframes modalShow {
  0% { transform: scale(0.95) translateY(10px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}
.animate-modalShow {
  animation: modalShow 0.2s ease-out forwards;
}
.action-button {
  padding: 0.75rem; /* p-3 */
  border-radius: 9999px; /* rounded-full */
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06); /* shadow-lg */
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.action-button:hover {
  transform: scale(1.10);
}
.action-button:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #1a202c; 
}
.action-button.bg-blue-600:focus { --tw-ring-color: #3b82f6; } 
.action-button.bg-green-600:focus { --tw-ring-color: #16a34a; } 
.action-button.bg-purple-600:focus { --tw-ring-color: #9333ea; }
.action-button.bg-yellow-500:focus { --tw-ring-color: #f59e0b; }
.action-button.bg-teal-500:focus { --tw-ring-color: #14b8a6; }
.action-button.bg-pink-600:focus { --tw-ring-color: #ec4899; } /* Added for graph button */
.action-button.bg-gray-600:focus { --tw-ring-color: #6b7280; }

/* Styles for Graph Tooltip */
.graph-tooltip {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 6px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  pointer-events: none; /* Important to allow mouse events to pass through to SVG */
  transform: translate(-50%, -100%); /* Position above the cursor */
  white-space: nowrap;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  z-index: 100;
}

/* Styles for Graph Modal Checkboxes */
.graph-checkbox-label {
  display: flex;
  align-items: center;
  padding: 6px 8px;
  margin: 2px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.85rem;
}
.graph-checkbox-label:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.graph-checkbox-label input[type="checkbox"] {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  accent-color: #8b5cf6; /* Tailwind purple-500 */
}

.graph-checkbox-label input[type="checkbox"]:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px #4338ca; /* Tailwind indigo-700 */
}


`;
document.head.appendChild(styleSheet);
