
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { BuildingType, BuildingProperty } from '../types';

interface ToolbarProps {
  onSelectBuilding: (type: BuildingType) => void;
  selectedBuildingType: BuildingType | null;
  buildingProperties: Record<BuildingType, BuildingProperty>;
  nonSelectableBuildingTypes: BuildingType[];
}

export const Toolbar: React.FC<ToolbarProps> = ({ 
  onSelectBuilding, 
  selectedBuildingType,
  buildingProperties,
  nonSelectableBuildingTypes 
}) => {
  const selectableTypes = Object.keys(buildingProperties)
    .map(key => key as BuildingType)
    .filter(type => !nonSelectableBuildingTypes.includes(type));

  const toolbarRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentPosition, setCurrentPosition] = useState<{ top: number, left: number } | null>(null);
  const dragStartInfoRef = useRef<{
    startX: number; 
    startY: number; 
    mouseX: number; 
    mouseY: number; 
  } | null>(null);
  const initialDimensionsRef = useRef<{ width: number | null, height: number | null }>({ width: null, height: null });

  const handleMouseDown = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) return; 
    if ((event.target as HTMLElement).closest('button')) {
        return;
    }
    event.preventDefault();
    
    if (toolbarRef.current) {
      const rect = toolbarRef.current.getBoundingClientRect();
      let initialTop = currentPosition?.top ?? rect.top;
      let initialLeft = currentPosition?.left ?? rect.left;

      if (initialDimensionsRef.current.width === null) {
        initialDimensionsRef.current.width = rect.width;
      }
      if (initialDimensionsRef.current.height === null) {
        initialDimensionsRef.current.height = rect.height;
      }
      
      if (!currentPosition) {
        setCurrentPosition({ top: rect.top, left: rect.left});
      }

      dragStartInfoRef.current = {
        startX: initialLeft,
        startY: initialTop,
        mouseX: event.clientX,
        mouseY: event.clientY,
      };
      setIsDragging(true);
    }
  }, [currentPosition]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    if (!isDragging || !dragStartInfoRef.current || !toolbarRef.current) return;

    const dx = event.clientX - dragStartInfoRef.current.mouseX;
    const dy = event.clientY - dragStartInfoRef.current.mouseY;

    let newTop = dragStartInfoRef.current.startY + dy;
    let newLeft = dragStartInfoRef.current.startX + dx;

    const toolbarWidth = initialDimensionsRef.current.width || toolbarRef.current.offsetWidth;
    const toolbarHeight = initialDimensionsRef.current.height || toolbarRef.current.offsetHeight;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    newTop = Math.max(0, Math.min(newTop, viewportHeight - toolbarHeight));
    newLeft = Math.max(0, Math.min(newLeft, viewportWidth - toolbarWidth));
    
    setCurrentPosition({ top: newTop, left: newLeft });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    dragStartInfoRef.current = null;
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const toolbarStyle: React.CSSProperties = currentPosition
  ? {
      position: 'fixed',
      top: `${currentPosition.top}px`,
      left: `${currentPosition.left}px`,
      width: initialDimensionsRef.current.width ? `${initialDimensionsRef.current.width}px` : 'auto',
      zIndex: 1000, 
    }
  : {
      position: 'relative', 
      width: '100%',
    };
  
  const toolbarClasses = `bg-gray-700 shadow-md select-none flex flex-col ${!currentPosition ? 'overflow-x-hidden' : ''}`;

  return (
    <div
      ref={toolbarRef}
      className={toolbarClasses}
      style={toolbarStyle}
    >
      <div
        onMouseDown={handleMouseDown}
        className={`h-5 ${isDragging ? 'bg-gray-500 cursor-grabbing' : 'bg-gray-600 hover:bg-gray-500 cursor-grab'} flex items-center justify-center flex-shrink-0`}
        aria-label="드래그하여 툴바 이동"
        title="드래그하여 툴바 이동"
      >
        <svg width="24" height="6" viewBox="0 0 24 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
          <rect y="0.5" width="24" height="1" fill="currentColor"/>
          <rect y="3.5" width="24" height="1" fill="currentColor"/>
        </svg>
      </div>
      <div className="overflow-x-auto min-w-0"> {/* 외부 스크롤 래퍼 */}
        <div className="p-3 pt-2 flex flex-nowrap space-x-2 justify-start items-center pb-2"> {/* 내부 콘텐츠 (버튼 배열 및 패딩) */}
            {selectableTypes.map(type => {
              const props = buildingProperties[type];
              if (!props || !props.icon) return null; 
              const isSelected = selectedBuildingType === type;
              return (
                <button
                  key={type}
                  onClick={() => onSelectBuilding(type)}
                  title={`${props.name} - 비용: $${props.cost}${props.maintenanceCost > 0 ? `, 유지비: $${props.maintenanceCost}/월` : ''}`}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-150 ease-in-out
                              w-24 h-24 text-xs flex-shrink-0 
                              ${isSelected ? 'bg-blue-600 ring-2 ring-blue-300 scale-105' : 'bg-gray-600 hover:bg-gray-500'}
                              focus:outline-none focus:ring-2 focus:ring-blue-400`}
                >
                  <span className="text-2xl mb-1">{props.icon}</span>
                  <span className="font-semibold truncate w-full px-1">{props.name}</span>
                  <span className="text-green-400">${props.cost.toLocaleString()}</span>
                </button>
              );
            })}
            <button
                key="demolish"
                onClick={() => onSelectBuilding(BuildingType.NONE)} 
                title="건물 철거 (오른쪽 클릭)"
                className={`flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-150 ease-in-out
                            w-24 h-24 text-xs flex-shrink-0
                            ${selectedBuildingType === BuildingType.NONE ? 'bg-red-600 ring-2 ring-red-300 scale-105' : 'bg-gray-600 hover:bg-gray-500'}
                            focus:outline-none focus:ring-2 focus:ring-red-400`}
              >
                <span className="text-2xl mb-1">💣</span>
                <span className="font-semibold">철거</span>
                <span className="text-gray-400">(우클릭)</span>
              </button>
        </div>
      </div>
    </div>
  );
};