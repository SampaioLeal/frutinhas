import { decorate, observable } from "mobx";

class State {
	playable = false;

	started = false;

	scene = null;
	renderer = null;
	camera = null;

	soundtrack = null;

	currentPlayer = null;

	players = null;
	fruits = null;

	updatePlayers(arr) {
		this.players = arr;
	}
	updateFruits(arr) {
		this.fruits = arr;
	}
	setPlayable() {
		this.playable = true;
	}
	setStart() {
		this.started = true;
	}
	setSoundtrack(value) {
		this.soundtrack = value;
	}
	setCurrentPlayer(value) {
		this.currentPlayer = value;
	}
}

decorate(State, {
	scene: observable,
	renderer: observable,
	camera: observable,
	players: observable,
	fruits: observable,
	playable: observable,
	started: observable,
	soundtrack: observable,
	currentPlayer: observable
});

const state = (window.state = new State());

export default state;
