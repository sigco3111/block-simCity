
import React, { useRef, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import * as THREE from 'three'; 
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Building, BuildingType, BuildingProperty } from '../types';
import { 
    CELL_SIZE, BUILDING_PROPERTIES, 
    BUILDING_ON_FIRE_COLOR, BUILDING_ON_FIRE_EMISSIVE, BUILDING_ON_FIRE_EMISSIVE_INTENSITY 
} from '../constants';

export interface ThreeSceneHandle {
  getCameraState: () => { position: number[], target: number[] } | null;
  setCameraState: (state: { position: number[], target: number[] }) => void;
}

interface ThreeSceneProps {
  gridSize: number;
  cellSize: number;
  buildings: Building[];
  selectedBuildingType: BuildingType | null;
  onPlaceBuilding: (gridX: number, gridZ: number) => void;
  onDemolishBuilding: (gridX: number, gridZ: number) => void;
  onSelectBuildingForInfo: (building: Building | null) => void; 
  selectedBuildingForInfo: Building | null; 
  getBuildingCurrentProps: (building: Building) => BuildingProperty; 
}

const ThreeScene = forwardRef<ThreeSceneHandle, ThreeSceneProps>(({
  gridSize,
  cellSize,
  buildings,
  selectedBuildingType,
  onPlaceBuilding,
  onDemolishBuilding,
  onSelectBuildingForInfo,
  selectedBuildingForInfo,
  getBuildingCurrentProps,
}, ref) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const buildingMeshesRef = useRef<Record<string, THREE.Mesh>>({});
  const groundPlaneRef = useRef<THREE.Mesh | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const placementHelperRef = useRef<THREE.Mesh | null>(null);
  const selectionOutlineRef = useRef<THREE.LineSegments | null>(null);

  const worldSize = gridSize * cellSize;

  useImperativeHandle(ref, () => ({
    getCameraState: () => {
      if (cameraRef.current && controlsRef.current) {
        return {
          position: cameraRef.current.position.toArray(),
          target: controlsRef.current.target.toArray(),
        };
      }
      return null;
    },
    setCameraState: (state) => {
      if (cameraRef.current && controlsRef.current && state) {
        cameraRef.current.position.fromArray(state.position);
        controlsRef.current.target.fromArray(state.target);
        controlsRef.current.update(); 
      }
    }
  }));

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x334155);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 2000);
    camera.position.set(worldSize * 0.5, worldSize * 0.75, worldSize * 0.75);
    camera.lookAt(worldSize / 2 - cellSize / 2, 0, worldSize / 2 - cellSize / 2);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(worldSize / 2 - cellSize / 2, 0, worldSize / 2 - cellSize / 2);
    controls.enableDamping = true;
    controls.minDistance = cellSize * 2;
    controls.maxDistance = worldSize * 2.5;
    controls.maxPolarAngle = Math.PI / 2.1;
    controlsRef.current = controls;

    const planeGeometry = new THREE.PlaneGeometry(worldSize, worldSize);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0x475569, side: THREE.DoubleSide });
    const groundPlane = new THREE.Mesh(planeGeometry, planeMaterial);
    groundPlane.rotation.x = -Math.PI / 2;
    groundPlane.position.set(worldSize / 2 - cellSize / 2, 0, worldSize / 2 - cellSize / 2);
    groundPlane.receiveShadow = true;
    scene.add(groundPlane);
    groundPlaneRef.current = groundPlane;

    const gridHelper = new THREE.GridHelper(worldSize, gridSize, 0xffffff, 0xffffff);
    gridHelper.material.opacity = 0.15;
    gridHelper.material.transparent = true;
    gridHelper.position.set(worldSize / 2 - cellSize / 2, 0.01, worldSize / 2 - cellSize / 2);
    scene.add(gridHelper);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); 
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); 
    directionalLight.position.set(worldSize * 0.8, worldSize * 1.2, worldSize * 0.6); 
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048; 
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = worldSize * 3;
    const shadowCamSize = worldSize * 1.2;
    directionalLight.shadow.camera.left = -shadowCamSize;
    directionalLight.shadow.camera.right = shadowCamSize;
    directionalLight.shadow.camera.top = shadowCamSize;
    directionalLight.shadow.camera.bottom = -shadowCamSize;
    scene.add(directionalLight);

    const helperGeometry = new THREE.BoxGeometry(cellSize * 0.95, 1, cellSize * 0.95);
    const helperMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 });
    const placementHelper = new THREE.Mesh(helperGeometry, helperMaterial);
    placementHelper.visible = false;
    scene.add(placementHelper);
    placementHelperRef.current = placementHelper;
    
    const edgesGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(cellSize * 0.9, 1, cellSize * 0.9));
    const outlineMat = new THREE.LineBasicMaterial({ color: 0xffff00, linewidth: 2 });
    selectionOutlineRef.current = new THREE.LineSegments(edgesGeo, outlineMat);
    selectionOutlineRef.current.visible = false;
    scene.add(selectionOutlineRef.current);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (mountRef.current && cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && rendererRef.current) {
         mountRef.current.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
      controlsRef.current?.dispose();
      Object.values(buildingMeshesRef.current).forEach(mesh => {
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) mesh.material.forEach(m => m.dispose());
        else (mesh.material as THREE.Material).dispose();
      });
      selectionOutlineRef.current?.geometry.dispose();
      (selectionOutlineRef.current?.material as THREE.Material)?.dispose();
      sceneRef.current?.clear();
      buildingMeshesRef.current = {};
    };
  }, [worldSize, gridSize, cellSize]); 

  useEffect(() => {
    if (!sceneRef.current) return;
    const scene = sceneRef.current;

    const currentBuildingIds = new Set(buildings.map(b => b.id));
    Object.keys(buildingMeshesRef.current).forEach(id => {
      if (!currentBuildingIds.has(id)) {
        const mesh = buildingMeshesRef.current[id];
        scene.remove(mesh);
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
        delete buildingMeshesRef.current[id];
      }
    });

    buildings.forEach(building => {
      const currentProps = getBuildingCurrentProps(building); 
      const mesh = buildingMeshesRef.current[building.id];

      if (!mesh) {
        const geometry = new THREE.BoxGeometry(cellSize * 0.9, currentProps.height, cellSize * 0.9);
        const material = new THREE.MeshStandardMaterial({ 
            color: building.isOnFire ? BUILDING_ON_FIRE_COLOR : currentProps.color,
            emissive: building.isOnFire ? BUILDING_ON_FIRE_EMISSIVE : 0x000000,
            emissiveIntensity: building.isOnFire ? BUILDING_ON_FIRE_EMISSIVE_INTENSITY : 0,
        });
        const newMesh = new THREE.Mesh(geometry, material);
        newMesh.position.set(
          building.gridX * cellSize,
          currentProps.height / 2,
          building.gridZ * cellSize
        );
        newMesh.castShadow = true;
        newMesh.receiveShadow = true;
        newMesh.userData = { buildingData: building }; 
        scene.add(newMesh);
        buildingMeshesRef.current[building.id] = newMesh;
      } else {
        if (mesh.scale.y * (mesh.geometry as THREE.BoxGeometry).parameters.height !== currentProps.height) {
           mesh.geometry.dispose();
           mesh.geometry = new THREE.BoxGeometry(cellSize * 0.9, currentProps.height, cellSize * 0.9);
           mesh.position.setY(currentProps.height / 2);
        }
        
        const meshMaterial = mesh.material as THREE.MeshStandardMaterial;
        const targetColor = building.isOnFire ? BUILDING_ON_FIRE_COLOR : currentProps.color;
        const targetEmissive = building.isOnFire ? BUILDING_ON_FIRE_EMISSIVE : 0x000000;
        const targetEmissiveIntensity = building.isOnFire ? BUILDING_ON_FIRE_EMISSIVE_INTENSITY : 0;

        if (meshMaterial.color.getHex() !== targetColor) {
            meshMaterial.color.setHex(targetColor);
        }
        if (meshMaterial.emissive.getHex() !== targetEmissive) {
            meshMaterial.emissive.setHex(targetEmissive);
        }
        if (meshMaterial.emissiveIntensity !== targetEmissiveIntensity) {
            meshMaterial.emissiveIntensity = targetEmissiveIntensity;
        }
        mesh.userData = { buildingData: building }; 
      }
    });
  }, [buildings, cellSize, getBuildingCurrentProps]);

  useEffect(() => {
    if (selectionOutlineRef.current) {
      if (selectedBuildingForInfo && buildingMeshesRef.current[selectedBuildingForInfo.id]) {
        const selectedMesh = buildingMeshesRef.current[selectedBuildingForInfo.id];
        const currentProps = getBuildingCurrentProps(selectedBuildingForInfo);
        
        selectionOutlineRef.current.geometry.dispose();
        selectionOutlineRef.current.geometry = new THREE.EdgesGeometry(
            new THREE.BoxGeometry(cellSize * 0.92, currentProps.height + 0.2, cellSize * 0.92) 
        );
        selectionOutlineRef.current.position.copy(selectedMesh.position);
        selectionOutlineRef.current.visible = true;
      } else {
        selectionOutlineRef.current.visible = false;
      }
    }
  }, [selectedBuildingForInfo, buildings, cellSize, getBuildingCurrentProps]);

  const getGridCoordinates = useCallback((point: THREE.Vector3): { x: number; z: number } | null => {
    const gridX = Math.floor((point.x + cellSize / 2) / cellSize); 
    const gridZ = Math.floor((point.z + cellSize / 2) / cellSize); 
    if (gridX >= 0 && gridX < gridSize && gridZ >= 0 && gridZ < gridSize) {
      return { x: gridX, z: gridZ };
    }
    return null;
  }, [gridSize, cellSize]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!mountRef.current || !cameraRef.current || !groundPlaneRef.current || !placementHelperRef.current) return;

      const rect = mountRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      const intersects = raycasterRef.current.intersectObject(groundPlaneRef.current);

      if (intersects.length > 0) {
        const intersectionPoint = intersects[0].point;
        const gridCoords = getGridCoordinates(intersectionPoint);

        if (gridCoords && selectedBuildingType && selectedBuildingType !== BuildingType.NONE) {
          const props = BUILDING_PROPERTIES[selectedBuildingType];
          placementHelperRef.current.geometry.dispose(); 
          placementHelperRef.current.geometry = new THREE.BoxGeometry(cellSize * 0.9, props.height, cellSize * 0.9);
          (placementHelperRef.current.material as THREE.MeshBasicMaterial).color.setHex(props.color);
          placementHelperRef.current.position.set(
            gridCoords.x * cellSize,
            props.height / 2,
            gridCoords.z * cellSize
          );
          placementHelperRef.current.visible = true;
        } else {
          placementHelperRef.current.visible = false;
        }
      } else {
        placementHelperRef.current.visible = false;
      }
    };

    const currentMountRef = mountRef.current;
    currentMountRef?.addEventListener('mousemove', handleMouseMove);
    return () => currentMountRef?.removeEventListener('mousemove', handleMouseMove);
  }, [selectedBuildingType, cellSize, getGridCoordinates, worldSize, gridSize]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!mountRef.current || !cameraRef.current || !groundPlaneRef.current) return;
      if (event.button !== 0) return;

      const rect = mountRef.current.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
      
      const buildingObjects = Object.values(buildingMeshesRef.current);
      const intersectsBuildings = raycasterRef.current.intersectObjects(buildingObjects);

      if (intersectsBuildings.length > 0) { 
        const buildingData = intersectsBuildings[0].object.userData.buildingData as Building;
        if (buildingData) {
          onSelectBuildingForInfo(buildingData); 
        }
      } else { 
        const intersectsGround = raycasterRef.current.intersectObject(groundPlaneRef.current);
        if (intersectsGround.length > 0) {
          const intersectionPoint = intersectsGround[0].point;
          const gridCoords = getGridCoordinates(intersectionPoint);
          if (gridCoords) {
            if (selectedBuildingType && selectedBuildingType !== BuildingType.NONE) {
              onPlaceBuilding(gridCoords.x, gridCoords.z);
            } else {
               onSelectBuildingForInfo(null); 
            }
          }
        }
      }
    };
    
    const handleContextMenu = (event: MouseEvent) => {
        event.preventDefault(); 
        if (!mountRef.current || !cameraRef.current || !groundPlaneRef.current) return;

        const rect = mountRef.current.getBoundingClientRect();
        mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
        
        const buildingObjects = Object.values(buildingMeshesRef.current);
        const intersectsBuildings = raycasterRef.current.intersectObjects(buildingObjects);

        if (intersectsBuildings.length > 0) {
            const buildingData = intersectsBuildings[0].object.userData.buildingData as Building;
            if (buildingData) {
                onDemolishBuilding(buildingData.gridX, buildingData.gridZ);
            }
        }
    };

    const currentMountRef = mountRef.current;
    currentMountRef?.addEventListener('click', handleClick);
    currentMountRef?.addEventListener('contextmenu', handleContextMenu);

    return () => {
      currentMountRef?.removeEventListener('click', handleClick);
      currentMountRef?.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [onPlaceBuilding, onDemolishBuilding, getGridCoordinates, selectedBuildingType, onSelectBuildingForInfo]);

  return <div ref={mountRef} className="w-full h-full cursor-pointer" />;
});

export default ThreeScene;