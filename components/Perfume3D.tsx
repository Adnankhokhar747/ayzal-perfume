// components/Perfume3D.tsx
'use client';

import { useEffect, useRef } from 'react';

export default function Perfume3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const initThree = async () => {
      const THREE = await import('three');
      
      if (!containerRef.current) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      
      renderer.setSize(width, height);
      renderer.setClearColor(0x000000, 0);
      containerRef.current.appendChild(renderer.domElement);

      // Simple bottle geometry
      const geometry = new THREE.CylinderGeometry(0.7, 0.7, 1.8, 32, 32);
      const material = new THREE.MeshPhysicalMaterial({
        color: 0x1a1a2e,
        metalness: 0.85,
        roughness: 0.25,
        transparent: true,
        opacity: 0.75,
      });
      const bottle = new THREE.Mesh(geometry, material);
      scene.add(bottle);

      // Light
      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(2, 3, 4);
      scene.add(light);
      
      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      camera.position.set(0, 1, 5);

      let time = 0;
      function animate() {
        requestAnimationFrame(animate);
        time += 0.01;
        bottle.rotation.y = time * 0.5;
        renderer.render(scene, camera);
      }
      animate();

      const handleResize = () => {
        if (!containerRef.current) return;
        const newWidth = containerRef.current.clientWidth;
        const newHeight = containerRef.current.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (containerRef.current && renderer.domElement) {
          containerRef.current.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    };

    initThree();
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-auto" />;
}