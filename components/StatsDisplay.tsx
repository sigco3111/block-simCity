import React from 'react';
import { CityStats } from '../types';
import { EDUCATION_PENALTY_THRESHOLD, POLLUTION_HEALTH_IMPACT_THRESHOLD } from '../constants'; 

interface StatsDisplayProps {
  stats: CityStats;
  isPaused?: boolean;
  isDelegationActive?: boolean;
  isAiThinking?: boolean;
}

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, isPaused, isDelegationActive, isAiThinking }) => {
  const powerBalance = stats.powerCapacity - stats.powerDemand;
  const powerColor = powerBalance >= 0 ? 'text-green-400' : 'text-red-400';
  const waterBalance = stats.waterCapacity - stats.waterDemand;
  const waterColor = waterBalance >= 0 ? 'text-sky-400' : 'text-red-400';
  const happinessColor = stats.happiness >= 70 ? 'text-green-400' : stats.happiness >= 40 ? 'text-yellow-400' : 'text-red-400';
  const educationColor = stats.educationLevel >= EDUCATION_PENALTY_THRESHOLD + 20 ? 'text-purple-400' : stats.educationLevel >= EDUCATION_PENALTY_THRESHOLD ? 'text-yellow-400' : 'text-orange-400';
  
  let pollutionColor = 'text-green-400'; 
  if (stats.pollutionLevel >= POLLUTION_HEALTH_IMPACT_THRESHOLD) {
    pollutionColor = 'text-red-400'; 
  } else if (stats.pollutionLevel >= POLLUTION_HEALTH_IMPACT_THRESHOLD / 2) {
    pollutionColor = 'text-yellow-400'; 
  }

  let appealColor = 'text-pink-400'; // Default
  if (stats.appeal >= 75) {
    appealColor = 'text-emerald-400'; // Very high appeal
  } else if (stats.appeal >= 50) {
    appealColor = 'text-lime-400';    // Good appeal
  } else if (stats.appeal >= 25) {
    appealColor = 'text-yellow-400';  // Average appeal
  } else {
    appealColor = 'text-orange-500';  // Low appeal
  }


  return (
    <div className="bg-gray-900 bg-opacity-80 p-3 shadow-lg absolute top-0 left-0 right-0 z-10 backdrop-blur-sm">
      <div className="container mx-auto flex flex-wrap justify-around items-center text-sm md:text-base">
        <div className="flex flex-col items-center mx-1 my-1">
          <span className="text-gray-400 text-xs flex items-center">
            🗓️ 월 
            {isPaused && <span className="text-yellow-400 ml-1">(정지됨)</span>}
            {isDelegationActive && !isAiThinking && <span className="text-teal-400 ml-1">(AI 활성)</span>}
            {isDelegationActive && isAiThinking && 
              <span className="text-teal-400 ml-1 flex items-center">
                (AI <svg className="animate-spin h-3 w-3 text-teal-300 ml-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>)
              </span>}
          </span>
          <span className="font-bold text-lg text-purple-400">{stats.month}</span>
        </div>
        <div className="flex flex-col items-center mx-1 my-1">
          <span className="text-gray-400 text-xs">💰 자금</span>
          <span className="font-bold text-lg text-green-400">${stats.funds.toLocaleString()}</span>
        </div>
        <div className="flex flex-col items-center mx-1 my-1">
          <span className="text-gray-400 text-xs">👨‍👩‍👧‍👦 인구</span>
          <span className="font-bold text-lg text-blue-400">{stats.population.toLocaleString()}</span>
        </div>
        <div className="flex flex-col items-center mx-1 my-1">
          <span className="text-gray-400 text-xs">💃 관광객</span>
          <span className="font-bold text-lg text-teal-400">{stats.tourists.toLocaleString()}</span>
        </div>
        <div className="flex flex-col items-center mx-1 my-1">
          <span className="text-gray-400 text-xs">🌟 매력도</span>
          <span className={`font-bold text-lg ${appealColor}`}>{stats.appeal}%</span>
        </div>
        <div className="flex flex-col items-center mx-1 my-1">
          <span className="text-gray-400 text-xs">⚡ 전력</span>
          <span className={`font-bold text-lg ${powerColor}`}>
            {stats.powerCapacity}/{stats.powerDemand}
          </span>
        </div>
        <div className="flex flex-col items-center mx-1 my-1"> 
          <span className="text-gray-400 text-xs">💧 물</span>
          <span className={`font-bold text-lg ${waterColor}`}>
            {stats.waterCapacity}/{stats.waterDemand}
          </span>
        </div>
        <div className="flex flex-col items-center mx-1 my-1">
          <span className="text-gray-400 text-xs">💨 오염도</span>
          <span className={`font-bold text-lg ${pollutionColor}`}>{stats.pollutionLevel}%</span>
        </div>
         <div className="flex flex-col items-center mx-1 my-1">
          <span className="text-gray-400 text-xs">🎓 교육</span>
          <span className={`font-bold text-lg ${educationColor}`}>{stats.educationLevel}%</span>
        </div>
        <div className="flex flex-col items-center mx-1 my-1">
          <span className="text-gray-400 text-xs">😊 행복도</span>
          <span className={`font-bold text-lg ${happinessColor}`}>{stats.happiness}%</span>
        </div>
      </div>
    </div>
  );
};

export default StatsDisplay;