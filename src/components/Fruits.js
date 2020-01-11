import { BoxBufferGeometry, MeshStandardMaterial, Mesh, Group } from "three";
import { observer } from "mobx-react";

function Fruits({ state }) {
	// Set fruit geometry and material --> COLOR IS HERE
	const geometry = new BoxBufferGeometry(0.9, 0.9, 0.9);
	const material = new MeshStandardMaterial({
		color: 0x0fb7db
	});
	material.transparent = true;
	material.opacity = 0.8;

	// Fruits Group
	const fruitsGroup = new Group();
	fruitsGroup.name = "Fruits";

	if (state.fruits) {
		// Remove group from scene
		state.scene.children.map((child, key) => {
			if (child.name === fruitsGroup.name) state.scene.children.splice(key, 1);
			return null;
		});

		// Clear fruits group
		fruitsGroup.children = [];
		// Create new fruit and add do fruits group
		state.fruits.map(fruit => {
			const cube = new Mesh(geometry, material);
			cube.castShadow = true;
			cube.position.set(fruit.x, fruit.y, fruit.z);
			return fruitsGroup.add(cube);
		});
		// Render fruits
		state.scene.add(fruitsGroup);
	}

	return null;
}

export default observer(Fruits);
