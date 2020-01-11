import {
	BoxBufferGeometry,
	MeshStandardMaterial,
	Mesh,
	Group,
	Color
} from "three";
import { observer } from "mobx-react";

function Players({ state }) {
	// Set player geometry
	const geometry = new BoxBufferGeometry(1, 1, 1);

	// Set Players Group
	const playersGroup = new Group();
	playersGroup.name = "Players";

	if (state.players) {
		// Remove group from scene
		state.scene.children.map((child, key) => {
			if (child.name === playersGroup.name) state.scene.children.splice(key, 1);
			return null;
		});

		// Clear players group
		playersGroup.children = [];
		state.players.map(player => {
			// Set a new material with player color
			const material = new MeshStandardMaterial({
				color: new Color(player.color)
			});
			const cube = new Mesh(geometry, material);
			cube.name = player.id;
			cube.castShadow = true;
			cube.position.set(player.x, player.y, player.z);
			if (player.current) {
				cube.name = "currentPlayer";
			} else {
				cube.name = player.id;
			}
			playersGroup.add(cube);
			return null;
		});
		// Render players
		state.scene.add(playersGroup);
	}

	return null;
}

export default observer(Players);
