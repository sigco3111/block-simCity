
export enum BuildingType {
  NONE = 'NONE',
  RESIDENTIAL = 'RESIDENTIAL',
  COMMERCIAL = 'COMMERCIAL',
  INDUSTRIAL = 'INDUSTRIAL',
  ROAD = 'ROAD',
  PARK = 'PARK',
  POWER_PLANT = 'POWER_PLANT',
  WATER_TOWER = 'WATER_TOWER',
  FIRE_STATION = 'FIRE_STATION', 
  HOSPITAL = 'HOSPITAL',       
  SCHOOL = 'SCHOOL',           
  UNIVERSITY = 'UNIVERSITY',   
  WASTE_MANAGEMENT = 'WASTE_MANAGEMENT',
  LANDMARK = 'LANDMARK', 
}

export interface Building {
  id: string;
  type: BuildingType;
  gridX: number;
  gridZ: number;
  level: number;
  isOnFire: boolean;    
  fireHealth: number;   
}

export interface CityStats {
  population: number;
  funds: number;
  powerCapacity: number;
  powerDemand: number;
  waterCapacity: number;
  waterDemand: number;
  happiness: number;    
  month: number;        
  healthLevel: number;  
  safetyLevel: number;  
  educationLevel: number; 
  pollutionLevel: number; 
  appeal: number; 
  tourists: number; 
}

export interface UpgradeLevel {
  name: string;
  cost: number;
  effects: Partial<Omit<BuildingProperty, 'name' | 'icon' | 'color' | 'upgrades' | 'isFlammable'>>;
}

export interface BuildingProperty {
  name: string;
  cost: number;
  color: number; 
  height: number; 
  maintenanceCost: number;
  isFlammable: boolean; 

  populationEffect?: number; 
  residentialCapacity?: number; 
  jobsProvided?: number; 
  powerDemand?: number;
  powerCapacity?: number;
  waterDemand?: number;
  waterCapacity?: number;
  happinessEffect?: number; 
  icon: string; 
  upgrades?: UpgradeLevel[];

  fireFightingPower?: number; 
  fireCoverageRadius?: number; 
  maxActiveFiresHandled?: number;

  patientCapacity?: number;    
  healthPointContribution?: number; 
  healthServiceRadius?: number; 

  studentCapacity?: number;         
  educationPointContribution?: number; 
  educationCoverageRadius?: number; 

  pollutionOutput?: number;         
  pollutionReduction?: number;      

  appealPoints?: number;            
}

// Definition for AI actions, used by the rule-based planner
export interface AiAction {
  action: "BUILD" | "UPGRADE";
  type?: BuildingType; // For BUILD
  x?: number;          // For BUILD
  z?: number;          // For BUILD
  buildingId?: string; // For UPGRADE
  reasoning?: string;  // AI's reasoning for this specific action (optional)
}

// For saving game state
export interface SavedGameState {
  buildings: Building[];
  cityStats: CityStats;
  selectedBuildingId?: string;
  cameraState?: { position: number[], target: number[] };
  isDelegationModeActive?: boolean;
  aiPlannerCooldown?: number;
  aiFocusPoint?: { x: number; z: number } | null;
  aiFocusPointSource?: 'PLAYER' | 'AI_STRATEGIC' | null;
  cityStatsHistory?: CityStats[]; // Added for historical data
}
