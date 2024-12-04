"use client";
import dirt from "../public/dirt.png";
import { useEffect } from "react";
import * as THREE from "three";

interface SceneProps {
  shape: string;
  textureUrl: string;
}

export default function Scene({ shape = "cube", textureUrl }: SceneProps) {
  useEffect(() => {
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    // create variables for scene and camera

    // sets up the scene the object will be in
    const scene = new THREE.Scene();
    // THREE, has multiple cameras, here we use the basic perspective camera
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      window.innerWidth / window.innerHeight, // aspect ratio
      0.1, // near clipping
      1000 // far clipping
    );

    // renderer renders the scene and camera, its a canvas element
    // set alpha to true to remove background from shape
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // you could make an image half size by .setSize(window.innerWidth / 2, window.innerHeight / 2)

    document.body.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const texture = textureUrl
      ? textureLoader.load(textureUrl)
      : textureLoader.load(dirt.src);

    // creates the shape from three, allows you to put a texture and assign that to a variable

    let geometry;
    switch (shape) {
      case "cone":
        geometry = new THREE.ConeGeometry(0.5, 1, 32); //https://threejs.org/docs/#api/en/geometries/ConeGeometry
        console.log("hello");
        break;
      case "sphere":
        geometry = new THREE.SphereGeometry(0.5, 32, 32); //https://threejs.org/docs/#api/en/geometries/SphereGeometry
        break;
      case "cube":
      default:
        geometry = new THREE.BoxGeometry(1, 1, 1); //https://threejs.org/docs/#api/en/geometries/BoxGeometry
        break;
    }
    const material = new THREE.MeshBasicMaterial({ map: texture }); // color or image texture
    const mesh = new THREE.Mesh(geometry, material); // combine geometry and material
    scene.add(mesh); // add the cube to the scene

    // camera position, z plays with the distance we are looking at the shape
    camera.position.z = 2; // both camera and cube are at cords (0,0,0), so we move the camera back

    // animation for the cube to rotate, play with these values and see what happens
    const animate = () => {
      requestAnimationFrame(animate);
      //x and y axis rotation values, these play with the speed of roatation
      mesh.rotation.x += 0.0;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    //call the animation to start it
    animate();

    // cleanup for DOM preventing memory leaks
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, [shape, textureUrl]); // re-render when shape or textureUrl changes
  return <></>;
}
