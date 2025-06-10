import { BuildingType, BuildingProperty } from './types';

export const GRID_SIZE = 24; 
export const CELL_SIZE = 10; 

export const INITIAL_FUNDS = 50000; // 이전: 30000
export const INITIAL_POPULATION = 0;
export const INITIAL_HAPPINESS = 65; // 이전: 50
export const INITIAL_MONTH = 1;
export const INITIAL_HEALTH_LEVEL = 85; // 이전: 70
export const INITIAL_SAFETY_LEVEL = 100; 
export const INITIAL_EDUCATION_LEVEL = 55; // 이전: 40
export const INITIAL_POLLUTION_LEVEL = 0;
export const INITIAL_APPEAL = 10; 
export const INITIAL_TOURISTS = 0; 

export const GAME_TICK_INTERVAL_MS = 2500; 
export const MONTHLY_TAX_PER_CAPITA = 25; // 이전: 15
export const TOURIST_INCOME_PER_TOURIST = 20; // 이전: 10
export const UNEMPLOYMENT_THRESHOLD = 0.1; 
export const LOW_FUNDS_THRESHOLD = 0;
export const DEEP_DEBT_THRESHOLD = -10000;
export const NO_WATER_HAPPINESS_PENALTY = -5; // 이전: -10
export const BASE_BUILDING_LEVEL = 1;

// 화재 관련 상수
export const MAX_FIRE_HEALTH = 100; 
export const FIRE_START_CHANCE_PER_TICK_PER_BUILDING = 0.00005; // 이전: 0.0002
export const FIRE_SPREAD_CHANCE = 0.1; 
export const FIRE_DAMAGE_RATE = 2;    
export const FIRE_EXTINGUISH_RATE_PER_STATION = 5; 
export const FIRE_STATION_BASE_COVERAGE_RADIUS = 5; 
export const FIRE_STATION_MAX_ACTIVE_FIRES = 1; 
export const BUILDING_ON_FIRE_COLOR = 0xff4500; 
export const BUILDING_ON_FIRE_EMISSIVE = 0xcc0000; 
export const BUILDING_ON_FIRE_EMISSIVE_INTENSITY = 0.6;


// 건강 관련 상수
export const HOSPITAL_BASE_PATIENT_CAPACITY = 200; 
export const HOSPITAL_HEALTH_POINT_CONTRIBUTION = 50; 
export const HOSPITAL_SERVICE_RADIUS = 7; 
export const HEALTH_PENALTY_THRESHOLD = 35; // 이전: 50
export const SAFETY_PENALTY_THRESHOLD = 55; // 이전: 70

// 교육 관련 상수
export const SCHOOL_BASE_STUDENT_CAPACITY = 150;
export const SCHOOL_EDUCATION_POINT_CONTRIBUTION = 20;
export const SCHOOL_COVERAGE_RADIUS = 6;
export const UNIVERSITY_BASE_STUDENT_CAPACITY = 500;
export const UNIVERSITY_EDUCATION_POINT_CONTRIBUTION = 60;
export const UNIVERSITY_COVERAGE_RADIUS = 10;
export const EDUCATION_PENALTY_THRESHOLD = 25; // 이전: 40
export const POPULATION_REQUIRING_EDUCATION_RATIO = 0.3; 

// 오염 관련 상수
export const MAX_POLLUTION_UNITS_FOR_MAX_LEVEL = 100; 
export const POLLUTION_HAPPINESS_FACTOR = 0.05; // 이전: 0.1
export const POLLUTION_HEALTH_IMPACT_THRESHOLD = 50; 
export const POLLUTION_HEALTH_PENALTY_FACTOR = 0.05; // 이전: 0.1

// 매력도 및 관광 관련 상수
export const MAX_APPEAL_UNITS_FOR_MAX_LEVEL = 200; 
export const POLLUTION_APPEAL_PENALTY_FACTOR = 0.35; 
export const DERELICT_BUILDING_APPEAL_PENALTY = 3; 
export const HAPPINESS_APPEAL_BONUS_FACTOR = 0.1; 
export const EDUCATION_APPEAL_BONUS_FACTOR = 0.15; 
export const COMMERCIAL_CAPACITY_PER_TOURIST_RATIO = 4; 

// AI Planner Constants
export const AI_PLANNER_COOLDOWN_MONTHS = 3; 
export const AI_PLANNER_MIN_FUNDS_TO_ACT = 100; 
export const AI_MAX_ACTIONS_PER_TURN = 3; 
export const AI_MAX_EMPTY_CELLS_TO_SHOW = 40; 
export const AI_PLANNER_INTERVAL_MS = GAME_TICK_INTERVAL_MS / 2; 


export const BUILDING_PROPERTIES: Record<BuildingType, BuildingProperty> = {
  [BuildingType.NONE]: { 
    name: '없음', 
    cost: 0, 
    maintenanceCost: 0,
    color: 0x000000, 
    height: 0, 
    icon: '',
    isFlammable: false,
  },
  [BuildingType.RESIDENTIAL]: { 
    name: '주거', 
    cost: 300, // 이전: 400
    maintenanceCost: 10, // 이전: 14
    color: 0x22c55e, 
    height: 15, 
    residentialCapacity: 50,
    powerDemand: 5, 
    waterDemand: 3, 
    happinessEffect: 1, 
    icon: '🏠',
    isFlammable: true,
    upgrades: [
      { 
        name: "주거 레벨 2", 
        cost: 450, // 이전: 600
        effects: { residentialCapacity: 75, maintenanceCost: 15, powerDemand: 7, waterDemand: 5, height: 20 } // 이전 maint: 21
      },
      { 
        name: "주거 레벨 3", 
        cost: 700, // 이전: 960
        effects: { residentialCapacity: 100, maintenanceCost: 22, powerDemand: 10, waterDemand: 7, height: 25 } // 이전 maint: 32
      }
    ]
  },
  [BuildingType.COMMERCIAL]: { 
    name: '상업', 
    cost: 400, // 이전: 560
    maintenanceCost: 25, // 이전: 35
    color: 0x3b82f6, 
    height: 20, 
    jobsProvided: 20,
    powerDemand: 10, 
    waterDemand: 5, 
    happinessEffect: 1, 
    icon: '🏢',
    isFlammable: true,
    upgrades: [
      { 
        name: "상업 레벨 2", 
        cost: 600, // 이전: 800
        effects: { jobsProvided: 30, maintenanceCost: 38, powerDemand: 15, waterDemand: 8, height: 25 } // 이전 maint: 53
      }
    ]
  },
  [BuildingType.INDUSTRIAL]: { 
    name: '산업', 
    cost: 550, // 이전: 800
    maintenanceCost: 40, // 이전: 56
    color: 0xf59e0b, 
    height: 25, 
    jobsProvided: 30, 
    powerDemand: 20, 
    waterDemand: 10, 
    happinessEffect: -4, 
    icon: '🏭',
    isFlammable: true,
    pollutionOutput: 5, 
    upgrades: [
      { 
        name: "산업 레벨 2", 
        cost: 850, // 이전: 1200
        effects: { jobsProvided: 45, maintenanceCost: 60, powerDemand: 30, waterDemand: 15, happinessEffect: -5, height: 30, pollutionOutput: 8 } // 이전 maint: 84
      }
    ]
  },
  [BuildingType.ROAD]: { 
    name: '도로', 
    cost: 30, // 이전: 40
    maintenanceCost: 3, // 이전: 4
    color: 0x6b7280, 
    height: 0.5, 
    icon: 'ରା',
    isFlammable: false,
  },
  [BuildingType.PARK]: { 
    name: '공원', 
    cost: 180, // 이전: 240
    maintenanceCost: 5, // 이전: 7
    color: 0x84cc16, 
    height: 2, 
    happinessEffect: 5, 
    powerDemand: 1,
    waterDemand: 2, 
    icon: '🌳',
    isFlammable: true, 
    pollutionReduction: 1, 
    appealPoints: 3,
    upgrades: [
      { 
        name: "공원 레벨 2", 
        cost: 270, // 이전: 360
        effects: { happinessEffect: 8, maintenanceCost: 8, height: 3, pollutionReduction: 2, appealPoints: 5 } // 이전 maint: 11
      }
    ]
  },
  [BuildingType.POWER_PLANT]: { 
    name: '발전소', 
    cost: 1100, // 이전: 1600
    maintenanceCost: 75, // 이전: 105
    color: 0xef4444, 
    height: 30, 
    powerCapacity: 100, 
    waterDemand: 10, 
    happinessEffect: -2, 
    icon: '⚡',
    isFlammable: false, 
    pollutionOutput: 8, 
    upgrades: [
      { 
        name: "발전소 레벨 2", 
        cost: 1700, // 이전: 2400
        effects: { powerCapacity: 150, maintenanceCost: 110, waterDemand: 15, happinessEffect: -3, height: 35, pollutionOutput: 12 } // 이전 maint: 154
      }
    ]
  },
  [BuildingType.WATER_TOWER]: { 
    name: '급수탑',
    cost: 700, // 이전: 960
    maintenanceCost: 30, // 이전: 42
    color: 0x0ea5e9, 
    height: 28,
    waterCapacity: 80, 
    powerDemand: 10,   
    icon: '💧',
    isFlammable: false, 
  },
  [BuildingType.FIRE_STATION]: {
    name: '소방서',
    cost: 1400, // 이전: 2000
    maintenanceCost: 100, // 이전: 140
    color: 0xdc2626, 
    height: 22,
    icon: '🚒',
    isFlammable: false,
    powerDemand: 15,
    waterDemand: 5, 
    fireFightingPower: FIRE_EXTINGUISH_RATE_PER_STATION,
    fireCoverageRadius: FIRE_STATION_BASE_COVERAGE_RADIUS,
    maxActiveFiresHandled: FIRE_STATION_MAX_ACTIVE_FIRES,
  },
  [BuildingType.HOSPITAL]: {
    name: '병원',
    cost: 1700, // 이전: 2400
    maintenanceCost: 125, // 이전: 175
    color: 0x4ade80, 
    height: 26,
    icon: '🏥',
    isFlammable: false, 
    powerDemand: 20,
    waterDemand: 10,
    patientCapacity: HOSPITAL_BASE_PATIENT_CAPACITY,
    healthPointContribution: HOSPITAL_HEALTH_POINT_CONTRIBUTION,
    healthServiceRadius: HOSPITAL_SERVICE_RADIUS, 
  },
  [BuildingType.SCHOOL]: {
    name: '학교',
    cost: 1000, // 이전: 1440
    maintenanceCost: 60, // 이전: 84
    color: 0xfacc15, 
    height: 18,
    icon: '🏫',
    isFlammable: false,
    powerDemand: 10,
    waterDemand: 8,
    studentCapacity: SCHOOL_BASE_STUDENT_CAPACITY,
    educationPointContribution: SCHOOL_EDUCATION_POINT_CONTRIBUTION,
    educationCoverageRadius: SCHOOL_COVERAGE_RADIUS,
    happinessEffect: 2, 
    upgrades: [
      {
        name: "학교 레벨 2",
        cost: 1400, // 이전: 2000
        effects: { studentCapacity: 220, maintenanceCost: 90, educationPointContribution: 30, height: 20, happinessEffect: 3 } // 이전 maint: 126
      }
    ]
  },
  [BuildingType.UNIVERSITY]: {
    name: '대학교',
    cost: 2500, // 이전: 3600
    maintenanceCost: 175, // 이전: 245
    color: 0x8b5cf6, 
    height: 32,
    icon: '🎓',
    isFlammable: false,
    powerDemand: 30,
    waterDemand: 15,
    studentCapacity: UNIVERSITY_BASE_STUDENT_CAPACITY,
    educationPointContribution: UNIVERSITY_EDUCATION_POINT_CONTRIBUTION,
    educationCoverageRadius: UNIVERSITY_COVERAGE_RADIUS,
    happinessEffect: 4, 
    upgrades: [
      {
        name: "대학교 레벨 2",
        cost: 3400, // 이전: 4800
        effects: { studentCapacity: 750, maintenanceCost: 250, educationPointContribution: 90, height: 36, happinessEffect: 6 } // 이전 maint: 350
      }
    ]
  },
  [BuildingType.WASTE_MANAGEMENT]: {
    name: '폐기물 처리장',
    cost: 1200, // 이전: 1760
    maintenanceCost: 90, // 이전: 126
    color: 0x4fd1c5, 
    height: 20,
    icon: '♻️',
    isFlammable: true, 
    powerDemand: 12,
    waterDemand: 4,
    pollutionReduction: 20, 
    happinessEffect: -1, 
  },
  [BuildingType.LANDMARK]: { 
    name: '조각상',
    cost: 2800, // 이전: 4000
    maintenanceCost: 100, // 이전: 140
    color: 0xa0aec0, 
    height: 26, 
    icon: '🗿',
    isFlammable: false, 
    powerDemand: 5,
    waterDemand: 3, 
    happinessEffect: 2, 
    appealPoints: 25,   
  },
};

export const NON_SELECTABLE_BUILDING_TYPES: BuildingType[] = [BuildingType.NONE];