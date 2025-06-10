import React from 'react';
import { Building, BuildingProperty, UpgradeLevel } from '../types';
import { BUILDING_PROPERTIES, BASE_BUILDING_LEVEL, MAX_FIRE_HEALTH } from '../constants';

interface BuildingInfoPanelProps {
  building: Building;
  buildingProps: BuildingProperty; 
  baseBuildingProps: BuildingProperty; 
  onUpgrade: (buildingId: string) => void;
  onClose: () => void;
  currentFunds: number;
}

const StatDisplay: React.FC<{ label: string; value: string | number | undefined; unit?: string; baseValue?: string | number; improved?: boolean }> = 
  ({ label, value, unit = '', baseValue, improved }) => {
  if (value === undefined || value === null) return null;
  let valueColor = "text-gray-100";
  if (improved && typeof value === 'number' && typeof baseValue === 'number') {
    if (value > baseValue) valueColor = "text-green-400";
    else if (value < baseValue) valueColor = "text-red-400";
  } else if (improved && (label.includes("오염 발생량") || label.includes("유지비") || label.includes("수요")) && typeof value === 'number' && typeof baseValue === 'number') { 
    // Higher pollution output, maintenance, or demand is bad
    if (value > baseValue) valueColor = "text-red-400";
    else if (value < baseValue) valueColor = "text-green-400";
  } else if (improved && (label.includes("오염 감소량") || label.includes("매력 포인트")) && typeof value === 'number' && typeof baseValue === 'number') { 
    // Higher pollution reduction or appeal points is good
     if (value > baseValue) valueColor = "text-green-400";
    else if (value < baseValue) valueColor = "text-red-400";
  }


  return (
    <div className="text-sm">
      <span className="text-gray-400">{label}: </span>
      <span className={valueColor}>{value}{unit}</span>
      {baseValue !== undefined && value !== baseValue && improved && (
        <span className="text-xs text-gray-500 ml-1">(기존: {baseValue}{unit})</span>
      )}
    </div>
  );
};


const BuildingInfoPanel: React.FC<BuildingInfoPanelProps> = ({ 
  building, 
  buildingProps,
  baseBuildingProps,
  onUpgrade, 
  onClose,
  currentFunds
}) => {
  const nextUpgradeLevelIndex = building.level - BASE_BUILDING_LEVEL;
  const nextUpgrade: UpgradeLevel | undefined = baseBuildingProps.upgrades?.[nextUpgradeLevelIndex];

  let upgradedProps: Partial<BuildingProperty> = {};
  if (nextUpgrade) {
    // Apply upgrade effects to current building props to show preview
    upgradedProps = { ...buildingProps }; // Start with current (potentially already upgraded) props
     for (const key in nextUpgrade.effects) {
        const effectKey = key as keyof UpgradeLevel['effects'];
        if (nextUpgrade.effects[effectKey] !== undefined) {
            (upgradedProps as any)[effectKey] = nextUpgrade.effects[effectKey];
        }
    }
  }

  const renderStatIfChanged = (label: string, currentValue: number | undefined, upgradedValue: number | undefined, unit: string = '') => {
    if (currentValue === undefined || upgradedValue === undefined) {
        // If only current value exists (no upgrade preview for this stat, or no upgrade at all)
        return currentValue !== undefined ? <StatDisplay label={label} value={currentValue} unit={unit} /> : null;
    }
    if (currentValue === upgradedValue && nextUpgrade) { // Only show simple display if value doesn't change WITH an upgrade pending
         return <StatDisplay label={label} value={currentValue} unit={unit} />;
    }
    if (!nextUpgrade && currentValue !== undefined) { // No upgrade available, just show current
        return <StatDisplay label={label} value={currentValue} unit={unit} />;
    }
    // If there's an upgrade and the value changes
    if (nextUpgrade && currentValue !== upgradedValue) {
        const isCostOrDemand = label.includes("비용") || label.includes("수요") || label.includes("오염 발생량");
        let isImprovement = upgradedValue > currentValue;
        if (isCostOrDemand) {
            isImprovement = upgradedValue < currentValue;
        }
        if(label.includes("오염 감소량") || label.includes("매력 포인트")){ 
            isImprovement = upgradedValue > currentValue;
        }

        return (
            <div className="text-sm">
                <span className="text-gray-400">{label}: </span>
                <span className="text-gray-100">{currentValue}{unit}</span>
                <span className={`ml-1 ${ isImprovement ? 'text-green-400' : 'text-red-400'}`}>
                    ➔ {upgradedValue}{unit}
                </span>
            </div>
        );
    }
    return null; // Should not be reached if logic is correct
  };


  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-800 p-6 rounded-lg shadow-xl z-20 w-80 border border-gray-700 max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold flex items-center">
          <span className="text-2xl mr-2">{buildingProps.icon}</span>
          {buildingProps.name} - 레벨 {building.level}
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl leading-none">&times;</button>
      </div>

      {building.isOnFire && (
        <div className={`mb-3 p-3 rounded text-center ${building.fireHealth <= 0 ? 'bg-red-800' : 'bg-red-600 bg-opacity-80'}`}>
          <p className="text-lg font-bold text-white animate-pulse">🔥 건물 화재 발생! 🔥</p>
          <p className="text-sm text-red-100">
            화재 체력: {building.fireHealth.toFixed(0)} / {MAX_FIRE_HEALTH}
          </p>
          {building.fireHealth <= 0 && <p className="text-sm text-red-100 font-bold mt-1">건물이 완전히 파괴되었습니다!</p>}
        </div>
      )}

      <div className="space-y-1 mb-4">
        <StatDisplay label="유지비" value={buildingProps.maintenanceCost} unit="/월" />
        {buildingProps.residentialCapacity !== undefined && <StatDisplay label="주거 공간" value={buildingProps.residentialCapacity} unit=" 명" />}
        {buildingProps.jobsProvided !== undefined && <StatDisplay label="일자리 제공" value={buildingProps.jobsProvided} unit=" 개" />}
        {buildingProps.powerCapacity !== undefined && <StatDisplay label="전력 생산" value={buildingProps.powerCapacity} unit=" MW" />}
        {buildingProps.powerDemand !== undefined && <StatDisplay label="전력 수요" value={buildingProps.powerDemand} unit=" MW" />}
        {buildingProps.waterCapacity !== undefined && <StatDisplay label="물 공급" value={buildingProps.waterCapacity} unit=" L" />}
        {buildingProps.waterDemand !== undefined && <StatDisplay label="물 수요" value={buildingProps.waterDemand} unit=" L" />}
        {buildingProps.happinessEffect !== undefined && <StatDisplay label="기본 행복도 기여" value={buildingProps.happinessEffect} />}
        
        {buildingProps.fireCoverageRadius !== undefined && <StatDisplay label="화재 진압 반경" value={buildingProps.fireCoverageRadius} unit=" 칸" />}
        {buildingProps.fireFightingPower !== undefined && <StatDisplay label="화재 진압력" value={buildingProps.fireFightingPower} unit="/틱" />}
        {buildingProps.maxActiveFiresHandled !== undefined && <StatDisplay label="동시 진압 가능" value={buildingProps.maxActiveFiresHandled} unit=" 건" />}
        
        {buildingProps.patientCapacity !== undefined && <StatDisplay label="병원 수용 인원" value={buildingProps.patientCapacity} unit=" 명" />}
        {buildingProps.healthServiceRadius !== undefined && <StatDisplay label="의료 서비스 반경" value={buildingProps.healthServiceRadius} unit=" 칸" />}

        {buildingProps.studentCapacity !== undefined && <StatDisplay label="학생 수용량" value={buildingProps.studentCapacity} unit=" 명" />}
        {buildingProps.educationPointContribution !== undefined && <StatDisplay label="교육 점수 기여" value={buildingProps.educationPointContribution} unit=" 점" />}
        {buildingProps.educationCoverageRadius !== undefined && <StatDisplay label="교육 서비스 반경" value={buildingProps.educationCoverageRadius} unit=" 칸" />}

        {buildingProps.pollutionOutput !== undefined && <StatDisplay label="오염 발생량" value={buildingProps.pollutionOutput} unit=" 단위" />}
        {buildingProps.pollutionReduction !== undefined && <StatDisplay label="오염 감소량" value={buildingProps.pollutionReduction} unit=" 단위" />}
        {buildingProps.appealPoints !== undefined && <StatDisplay label="매력 포인트" value={buildingProps.appealPoints} unit=" 점" />}
      </div>

      {nextUpgrade && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <h4 className="text-lg font-semibold mb-2">다음 업그레이드: {nextUpgrade.name}</h4>
          <p className="text-sm text-yellow-400 mb-1">비용: ${nextUpgrade.cost.toLocaleString()}</p>
          <div className="space-y-0.5 text-xs mb-3">
            <p className="font-medium text-gray-300">효과:</p>
            {renderStatIfChanged("유지비", buildingProps.maintenanceCost, upgradedProps.maintenanceCost, "/월")}
            {renderStatIfChanged("주거 공간", buildingProps.residentialCapacity, upgradedProps.residentialCapacity, " 명")}
            {renderStatIfChanged("일자리", buildingProps.jobsProvided, upgradedProps.jobsProvided, " 개")}
            {renderStatIfChanged("전력 생산", buildingProps.powerCapacity, upgradedProps.powerCapacity, " MW")}
            {renderStatIfChanged("전력 수요", buildingProps.powerDemand, upgradedProps.powerDemand, " MW")}
            {renderStatIfChanged("물 공급", buildingProps.waterCapacity, upgradedProps.waterCapacity, " L")}
            {renderStatIfChanged("물 수요", buildingProps.waterDemand, upgradedProps.waterDemand, " L")}
            {renderStatIfChanged("기본 행복도 기여", buildingProps.happinessEffect, upgradedProps.happinessEffect)}
            
            {renderStatIfChanged("화재 진압 반경", buildingProps.fireCoverageRadius, upgradedProps.fireCoverageRadius, " 칸")}
            {renderStatIfChanged("화재 진압력", buildingProps.fireFightingPower, upgradedProps.fireFightingPower, "/틱")}
            
            {renderStatIfChanged("병원 수용 인원", buildingProps.patientCapacity, upgradedProps.patientCapacity, " 명")}
            {renderStatIfChanged("의료 서비스 반경", buildingProps.healthServiceRadius, upgradedProps.healthServiceRadius, " 칸")}

            {renderStatIfChanged("학생 수용량", buildingProps.studentCapacity, upgradedProps.studentCapacity, " 명")}
            {renderStatIfChanged("교육 점수 기여", buildingProps.educationPointContribution, upgradedProps.educationPointContribution, " 점")}
            {renderStatIfChanged("교육 서비스 반경", buildingProps.educationCoverageRadius, upgradedProps.educationCoverageRadius, " 칸")}
            
            {renderStatIfChanged("오염 발생량", buildingProps.pollutionOutput, upgradedProps.pollutionOutput, " 단위")}
            {renderStatIfChanged("오염 감소량", buildingProps.pollutionReduction, upgradedProps.pollutionReduction, " 단위")}
            {renderStatIfChanged("매력 포인트", buildingProps.appealPoints, upgradedProps.appealPoints, " 점")}

            {upgradedProps.height !== buildingProps.height && upgradedProps.height !== undefined && <StatDisplay label="높이" value={`${buildingProps.height} ➔ ${upgradedProps.height}`} />}
          </div>
          <button
            onClick={() => onUpgrade(building.id)}
            disabled={currentFunds < nextUpgrade.cost || (building.isOnFire && building.fireHealth > 0)}
            title={building.isOnFire && building.fireHealth > 0 ? "불타는 건물은 업그레이드할 수 없습니다." : currentFunds < nextUpgrade.cost ? "자금이 부족합니다." : `업그레이드: ${nextUpgrade.name}`}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
          >
            {(building.isOnFire && building.fireHealth > 0) ? "업그레이드 불가 (화재)" : 
             nextUpgrade.cost > currentFunds ? `자금 부족 ($${nextUpgrade.cost.toLocaleString()})` : 
             `업그레이드 ($${nextUpgrade.cost.toLocaleString()})`}
          </button>
        </div>
      )}
      {!nextUpgrade && baseBuildingProps.upgrades && baseBuildingProps.upgrades.length > 0 && ( 
         <p className="text-center text-green-400 mt-4">최대 레벨에 도달했습니다!</p>
      )}
       {(!baseBuildingProps.upgrades || baseBuildingProps.upgrades.length === 0) && ( 
         <p className="text-center text-gray-400 mt-4">이 건물은 업그레이드할 수 없습니다.</p>
      )}
    </div>
  );
};

export default BuildingInfoPanel;