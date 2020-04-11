import React, { useRef } from "react";
import "./App.css";

import Game from "./Game";
import { observer } from "mobx-react";

function App({ state }) {
	const menu = useRef(null);

	// Mobile users can't play, just watch
	if (window.innerWidth > 900) {
		state.setPlayable();
	}

	// FadeOut menu and set started state
	function startGame() {
		menu.current.style.opacity = 1;
		menuFadeOut();
		state.setStart();
	}

	// FadeOut Menu function
	function menuFadeOut() {
		if (menu.current.style.opacity > 0) {
			requestAnimationFrame(menuFadeOut);
			menu.current.style.opacity -= 0.05;
		} else {
			menu.current.style.display = "none";
		}
	}

	// Start start menu animation
	window.onload = () => {
		document.querySelector(".menu img").style.display = "block";
		document.querySelector(".menu .title").style.display = "block";
		document.querySelector(".menu p").style.display = "block";
	};

	return (
		<>
			<div ref={menu} className="menu">
				<h2 className="title">Frutinhas 3D</h2>
				<p>
					por{" "}
					<a
						href="https://sampaioleal.github.io"
						target="_blank"
						rel="noopener noreferrer"
					>
						Sampaio Leal
					</a>
				</p>
				<img onClick={startGame} src="./play.png" alt="Play button" />
			</div>
			<Game state={state} />
		</>
	);
}

export default observer(App);
