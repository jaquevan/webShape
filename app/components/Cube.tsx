"use client"

import dirt from "../public/dirt.png"
import { useEffect } from 'react';

import * as THREE from 'three';



export default function Cube() {
    useEffect(() => {
        // create variables for scene and camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        // set alpha to true to remove background from shape
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);



        document.body.appendChild(renderer.domElement);

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(dirt.src);

        // creates the shape from three, allows you to put a texture and assign that to a variable
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // camera position, z plays with the distance we are looking at the shape
        camera.position.z = 2;

        // animation for the cube to rotate, play with these values and see what happens
        const animate = () => {
            requestAnimationFrame(animate);
            //x and y axis rotation values, these play with the speed of roatation
            cube.rotation.x += 0.00;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };

        //call the animation to start it
        animate();

        // cleanup for DOM preventing memory leaks
        return () => {
            document.body.removeChild(renderer.domElement);
        };
    }, []);
    return(
        <>
        </>
    );
}
