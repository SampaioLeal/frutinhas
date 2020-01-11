import {
	BoxBufferGeometry,
	Mesh,
	MeshStandardMaterial,
	HemisphereLight
} from "three";

export default function Scenario({ state }) {
	// Set the scenario cube
	const geometry = new BoxBufferGeometry(20, 20, 20);
	const material = new MeshStandardMaterial({ color: 0x0d5666 });
	const cube = new Mesh(geometry, material);
	cube.receiveShadow = true;

	// Set a hemisphere light
	const light = new HemisphereLight(0xffffbb, 0x080820, 0.6);
	state.scene.add(light);

	// Set Scenario cube position
	cube.position.set(9.5, 9.5, -10.5);

	state.scene.add(cube);
	return null;
}
