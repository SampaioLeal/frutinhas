import { movePlayer } from "./SocketListener";
import { useEffect } from "react";
import { observer } from "mobx-react";

function KeyListener({ state }) {
	useEffect(() => {
		if (state.playable && state.started) {
			console.log("Starting Key Listener...");
			// Starts Key Listener
			window.addEventListener("keydown", e => {
				switch (e.keyCode) {
					case 87:
						movePlayer("w");
						break;
					case 65:
						movePlayer("a");
						break;
					case 68:
						movePlayer("d");
						break;
					case 83:
						movePlayer("s");
						break;
					default:
						break;
				}
			});
		}
	}, [state.started, state.playable]);

	return null;
}

export default observer(KeyListener);
