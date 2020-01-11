import {
	OrthographicCamera,
	DirectionalLight,
	Object3D,
	PointLight
} from "three";

export default function Camera({ state }) {
	let aspect = window.innerWidth / window.innerHeight;
	let d = 20;

	// Ortographic Camera
	state.camera = new OrthographicCamera(
		-d * aspect,
		d * aspect,
		d,
		-d,
		1,
		2000
	);

	// Set camera position and make it isometric
	state.camera.position.set(40, 40, 20);
	state.camera.lookAt(10, 10, -10);

	// Set directional light and point it to center
	const directionalLight = new DirectionalLight(0xffffff, 0.5);
	directionalLight.position.set(30, 30, 10);
	const target = new Object3D();
	target.position.set(10, 10, -10);
	directionalLight.target = target;

	// PointLight to cast shadows
	const light = new PointLight(0xffffff, 1.5, 100);
	light.castShadow = true;
	light.position.set(40, 40, 20);
	light.shadow.bias = 0.0001;
	light.shadow.mapSize.width = 2048;
	light.shadow.mapSize.height = 2048;

	state.scene.add(directionalLight, target, light);

	return null;
}
