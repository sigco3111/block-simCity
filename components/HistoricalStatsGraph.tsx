
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { CityStats } from '../types';

interface HistoricalStatsGraphProps {
  history: CityStats[];
  onClose: () => void;
}

type StatKey = keyof CityStats;

const STAT_OPTIONS: { key: StatKey; label: string; color: string; isBalance?: boolean; isPercentage?: boolean }[] = [
  { key: 'population', label: '인구', color: '#3b82f6' }, // blue-500
  { key: 'funds', label: '자금', color: '#22c55e' }, // green-500
  { key: 'happiness', label: '행복도', color: '#f59e0b', isPercentage: true }, // amber-500
  { key: 'powerCapacity', label: '전력 수지', color: '#ef4444', isBalance: true }, // red-500 (will use powerDemand)
  { key: 'waterCapacity', label: '물 수지', color: '#0ea5e9', isBalance: true }, // sky-500 (will use waterDemand)
  { key: 'pollutionLevel', label: '오염도', color: '#a16207', isPercentage: true }, // yellow-700 
  { key: 'educationLevel', label: '교육 수준', color: '#8b5cf6', isPercentage: true }, // violet-500
  { key: 'tourists', label: '관광객', color: '#14b8a6' }, // teal-500
  { key: 'appeal', label: '매력도', color: '#ec4899', isPercentage: true }, // pink-500
  { key: 'healthLevel', label: '건강 수준', color: '#65a30d', isPercentage: true }, // lime-600
  { key: 'safetyLevel', label: '안전 수준', color: '#d97706', isPercentage: true }, // amber-600
];

const HistoricalStatsGraph: React.FC<HistoricalStatsGraphProps> = ({ history, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [selectedStats, setSelectedStats] = useState<Set<StatKey>>(
    new Set(['population', 'funds', 'happiness'])
  );
  const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0 });

  const handleStatToggle = (key: StatKey) => {
    setSelectedStats(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscKey);
    modalRef.current?.focus();
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [onClose]);

  useEffect(() => {
    const updateSize = () => {
      if (svgRef.current?.parentElement) {
        const parentWidth = svgRef.current.parentElement.clientWidth;
        setSvgDimensions({
          width: parentWidth > 0 ? parentWidth : 600, // Default width if parent not ready
          height: 400, // Fixed height or dynamic based on parent
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);


  const margin = { top: 20, right: 30, bottom: 60, left: 60 }; // Increased bottom for x-axis labels, left for y-axis
  const graphWidth = svgDimensions.width - margin.left - margin.right;
  const graphHeight = svgDimensions.height - margin.top - margin.bottom;

  const getStatValue = (dataPoint: CityStats, statKey: StatKey): number => {
    if (statKey === 'powerCapacity') return dataPoint.powerCapacity - dataPoint.powerDemand;
    if (statKey === 'waterCapacity') return dataPoint.waterCapacity - dataPoint.waterDemand;
    return dataPoint[statKey] as number;
  };
  
  const filteredHistory = history.length > 0 ? history : [{
    month: 0, population: 0, funds: 0, happiness: 0, powerCapacity: 0, powerDemand: 0,
    waterCapacity: 0, waterDemand: 0, pollutionLevel: 0, educationLevel: 0,
    tourists: 0, appeal: 0, healthLevel: 0, safetyLevel: 0,
  } as CityStats];


  const dataMinMax = selectedStats.size > 0 ? 
    filteredHistory.reduce(
        (acc, d) => {
            selectedStats.forEach(key => {
            const value = getStatValue(d, key);
            const statOption = STAT_OPTIONS.find(opt => opt.key === key);
            if (statOption?.isPercentage) {
                acc.min = Math.min(acc.min, 0); // Percentages start at 0
                acc.max = Math.max(acc.max, 100); // Percentages cap at 100
            } else {
                acc.min = Math.min(acc.min, value);
                acc.max = Math.max(acc.max, value);
            }
            });
            return acc;
        },
        { min: Infinity, max: -Infinity }
    ) : {min: 0, max: 100};

    let yMin = dataMinMax.min === Infinity ? 0 : dataMinMax.min;
    let yMax = dataMinMax.max === -Infinity ? 100 : dataMinMax.max;
    
    // Ensure yMax is always greater than yMin, and provide a default range if they are equal
    if (yMin === yMax) {
        if (yMin === 0) { // If both are 0 (e.g. no data or all zero data)
            yMax = 100;
        } else { // Shift range slightly
            yMin = yMin - Math.abs(yMin * 0.1) -1; 
            yMax = yMax + Math.abs(yMax * 0.1) +1;
        }
    }
    // Add some padding to Y-axis
    const yPadding = (yMax - yMin) * 0.05;
    yMin -= yPadding;
    yMax += yPadding;
    if (yMin > 0 && dataMinMax.min >=0) { // If all values are positive, ensure Y axis starts near 0 or the actual min.
      if (dataMinMax.min < yMin) yMin = dataMinMax.min - yPadding; // Re-adjust if original min was lower
      if (dataMinMax.min > (yMax - yMin) * 0.2) yMin = 0; // If min is small relative to range, start at 0
    }
    if (yMin === yMax) yMax = yMin +1; // Final safety for flat line


  const xScale = useCallback((month: number) => {
    if (filteredHistory.length <= 1) return margin.left;
    const firstMonth = filteredHistory[0].month;
    const lastMonth = filteredHistory[filteredHistory.length - 1].month;
    if (lastMonth === firstMonth) return margin.left + graphWidth / 2; // Single point
    return margin.left + ((month - firstMonth) / (lastMonth - firstMonth)) * graphWidth;
  }, [filteredHistory, graphWidth, margin.left]);

  const yScale = useCallback((value: number) => {
    if (yMax === yMin) return margin.top + graphHeight / 2; // Avoid division by zero for flat data
    return margin.top + graphHeight - ((value - yMin) / (yMax - yMin)) * graphHeight;
  }, [yMin, yMax, graphHeight, margin.top]);

  const handleMouseMove = (event: React.MouseEvent<SVGSVGElement>) => {
    if (!tooltipRef.current || filteredHistory.length === 0 || selectedStats.size === 0) return;

    const svgRect = svgRef.current?.getBoundingClientRect();
    if (!svgRect) return;

    const mouseX = event.clientX - svgRect.left;
    // const mouseY = event.clientY - svgRect.top;

    // Find nearest data point by month
    const firstMonth = filteredHistory[0].month;
    const lastMonth = filteredHistory[filteredHistory.length - 1].month;
    
    let closestIndex = -1;
    if (lastMonth === firstMonth && filteredHistory.length > 0) { // Single month data
        closestIndex = 0;
    } else if (lastMonth > firstMonth) {
        const approxMonth = firstMonth + ((mouseX - margin.left) / graphWidth) * (lastMonth - firstMonth);
        closestIndex = filteredHistory.reduce((closestIdx, dp, currentIdx) => {
        return Math.abs(dp.month - approxMonth) < Math.abs(filteredHistory[closestIdx].month - approxMonth)
            ? currentIdx
            : closestIdx;
        }, 0);
    }


    if (closestIndex !== -1) {
      const dp = filteredHistory[closestIndex];
      const tooltipX = xScale(dp.month) + svgRect.left + window.scrollX;
      // Find an average Y for positioning, or use the first selected stat's Y.
      let tooltipYValue = yMin; // Default if no stats selected (should not happen)
      if (selectedStats.size > 0) {
        const firstSelectedKey = Array.from(selectedStats)[0];
        tooltipYValue = getStatValue(dp, firstSelectedKey);
      }
      const tooltipY = yScale(tooltipYValue) + svgRect.top + window.scrollY - 10; // -10 to position above point

      tooltipRef.current.style.display = 'block';
      tooltipRef.current.style.left = `${tooltipX}px`;
      tooltipRef.current.style.top = `${tooltipY}px`;

      let tooltipContent = `<div class="font-bold mb-1">월: ${dp.month}</div>`;
      STAT_OPTIONS.forEach(opt => {
        if (selectedStats.has(opt.key)) {
          const value = getStatValue(dp, opt.key);
          tooltipContent += `<div><span style="color:${opt.color}; display:inline-block; margin-right:4px;">●</span>${opt.label}: ${value.toLocaleString(undefined, {maximumFractionDigits: opt.isPercentage ? 1 : 0 })}${opt.isPercentage ? '%' : ''}</div>`;
        }
      });
      tooltipRef.current.innerHTML = tooltipContent;
    } else {
      tooltipRef.current.style.display = 'none';
    }
  };

  const handleMouseLeave = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'none';
    }
  };
  
  const numYTicks = 5;
  const yAxisTicks = Array.from({ length: numYTicks + 1 }, (_, i) => yMin + (i * (yMax - yMin)) / numYTicks);

  const numXTicks = Math.min(10, filteredHistory.length);
  const xAxisTicks = filteredHistory.length > 1 && numXTicks > 1 ? 
    Array.from({ length: numXTicks }, (_, i) => {
        const index = Math.floor(i * (filteredHistory.length -1) / (numXTicks -1));
        return filteredHistory[index].month;
    }).filter((value, index, self) => self.indexOf(value) === index) // Ensure unique months
    : (filteredHistory.length === 1 ? [filteredHistory[0].month] : []);


  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-2 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="graphModalTitle"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-xl w-full max-w-3xl text-white border border-gray-700 animate-modalShow flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="graphModalTitle" className="text-xl font-semibold text-pink-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 20V10" />
            </svg>
            도시 통계 변화 그래프
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors text-3xl leading-none" aria-label="닫기">&times;</button>
        </div>

        <div className="mb-4 flex flex-wrap justify-center gap-1 text-xs">
          {STAT_OPTIONS.map(opt => (
            <label key={opt.key} className="graph-checkbox-label" style={{border: `1px solid ${opt.color}`}}>
              <input
                type="checkbox"
                checked={selectedStats.has(opt.key)}
                onChange={() => handleStatToggle(opt.key)}
              />
              <span style={{color: opt.color}}>{opt.label}</span>
            </label>
          ))}
        </div>

        <div className="flex-grow overflow-hidden"> {/* Container for SVG to manage size */}
            <svg 
                ref={svgRef} 
                width={svgDimensions.width} 
                height={svgDimensions.height}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >
            {/* Y Axis Grid Lines and Labels */}
            {yAxisTicks.map((tick, i) => (
                <g key={`y-grid-${i}`} transform={`translate(0, ${yScale(tick)})`}>
                <line x1={margin.left} x2={margin.left + graphWidth} y1={0} y2={0} stroke="#4b5563" strokeDasharray="2,2" />
                <text x={margin.left - 8} y={4} textAnchor="end" fontSize="10px" fill="#9ca3af">
                    {tick.toLocaleString(undefined, {maximumFractionDigits: tick % 1 === 0 ? 0 : 1})}
                </text>
                </g>
            ))}
            {/* X Axis Grid Lines and Labels */}
            {xAxisTicks.map((tick, i) => (
                 <g key={`x-grid-${i}`} transform={`translate(${xScale(tick)}, 0)`}>
                    <line x1={0} x2={0} y1={margin.top} y2={margin.top + graphHeight} stroke="#4b5563" strokeDasharray="2,2" />
                    <text x={0} y={margin.top + graphHeight + 15} textAnchor="middle" fontSize="10px" fill="#9ca3af">
                        {tick}
                    </text>
                 </g>
            ))}

            {/* Axes Lines */}
            <line x1={margin.left} y1={margin.top} x2={margin.left} y2={margin.top + graphHeight} stroke="#6b7280" />
            <line x1={margin.left} y1={margin.top + graphHeight} x2={margin.left + graphWidth} y2={margin.top + graphHeight} stroke="#6b7280" />
            <text x={margin.left + graphWidth / 2} y={svgDimensions.height - margin.bottom / 2 + 10} textAnchor="middle" fontSize="12px" fill="#9ca3af">월 (Month)</text>


            {/* Data Lines */}
            {STAT_OPTIONS.map(opt => {
                if (selectedStats.has(opt.key) && filteredHistory.length > 1) {
                const pathData = filteredHistory
                    .map(d => `${xScale(d.month)},${yScale(getStatValue(d, opt.key))}`)
                    .join(' L');
                return (
                    <path
                    key={opt.key}
                    d={`M${pathData}`}
                    fill="none"
                    stroke={opt.color}
                    strokeWidth="2"
                    />
                );
                }
                // Draw points if only one data point exists
                if (selectedStats.has(opt.key) && filteredHistory.length === 1) {
                    const d = filteredHistory[0];
                    return (
                        <circle
                            key={`${opt.key}-point`}
                            cx={xScale(d.month)}
                            cy={yScale(getStatValue(d, opt.key))}
                            r="3"
                            fill={opt.color}
                        />
                    );
                }
                return null;
            })}
            </svg>
        </div>
        <div ref={tooltipRef} className="graph-tooltip" style={{ display: 'none' }}></div>


        <button
          onClick={onClose}
          className="mt-4 sm:mt-6 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default HistoricalStatsGraph;
