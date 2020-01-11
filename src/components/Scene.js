import React, { useEffect } from "react";
import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";

export default function Scene({ children, state }) {
	// Set a new scene
	state.scene = new THREE.Scene();

	// Set scene background
	const bg = new THREE.TextureLoader().load("/background.png");
	state.scene.background = bg;

	// Generate a webgl2 Canvas
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("webgl2", { alpha: false });
	// Set webgl2 renderer
	state.renderer = new THREE.WebGLRenderer({
		canvas: canvas,
		context: context
	});
	// Enable shadows
	state.renderer.shadowMap.enabled = true;
	state.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	// Some renderer configs
	state.renderer.setSize(window.innerWidth, window.innerHeight);
	state.renderer.domElement.style.position = "absolute";
	document.querySelector("#root").appendChild(state.renderer.domElement);

	// Set a composer for postprocessing
	const composer = new EffectComposer(state.renderer);
	composer.setSize(window.innerWidth, window.innerHeight);

	// Game loop
	function animate() {
		requestAnimationFrame(animate);
		composer.render();
	}

	// Render pass config and game loop start
	useEffect(() => {
		var renderPass = new RenderPass(state.scene, state.camera);
		composer.addPass(renderPass);
		animate();
	});

	return <>{children}</>;
}
