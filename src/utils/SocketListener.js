import { useEffect } from "react";
import { observer } from "mobx-react";
import io from "socket.io-client";

// Generate a socket.io instance
const socket = io("http://localhost:3001", {
	forceNew: true,
	autoConnect: true
});

function SocketListener({ state }) {
	// Set a new player on server
	function join() {
		console.log("Welcome to Frutinhas 3D!");
		console.log("You joined with ID:", socket.id);
		socket.emit("addPlayer");
	}

	// Update state for players and fruits
	useEffect(() => {
		socket.on("update", update => {
			update.players.map(player => {
				if (player.id === socket.id) player.current = true;
			});
			state.updatePlayers(update.players);
			state.updateFruits(update.fruits);
		});
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (state.playable && state.started) {
			// Set new player on reconnect
			socket.on("welcome", () => {
				join();
			});
			// Set new player on game start
			join();
		}
		// eslint-disable-next-line
	}, [state.started, state.playable]);

	return null;
}

// Tell server to move the current player
export function movePlayer(direction) {
	socket.emit("movePlayer", direction);
}

export default observer(SocketListener);
