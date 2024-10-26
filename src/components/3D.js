import * as THREE from 'three';
import { useEffect, useRef } from "react";

function Model() {
  const refContainer = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFFFFF); // White background

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Aspect ratio set to 1 for square canvas
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    // Set a specific size for the canvas
    const canvasWidth = 300; // Adjust width as needed
    const canvasHeight = 300; // Adjust height as needed
    renderer.setSize(canvasWidth, canvasHeight);

    refContainer.current && refContainer.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
      refContainer.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={refContainer} className="flex justify-center items-center">
      {/* The canvas will be appended here */}
    </div>
  );
}

export default Model;
