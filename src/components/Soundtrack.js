import { observer } from "mobx-react";
import { AudioListener, Audio, AudioLoader } from "three";
import { useEffect, useState } from "react";

function Soundtrack({ state }) {
	const [loaded, setLoaded] = useState(false);
	// Set Audio loader and listener
	const audioLoader = new AudioLoader();
	const listener = new AudioListener();

	// Set state Audio (soundtrack)
	useEffect(() => {
		state.camera.add(listener);
		state.setSoundtrack(new Audio(listener));
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (state.soundtrack && !loaded) {
			// Load soundtrack file
			audioLoader.load("./Disconnected.mp3", function(buffer) {
				state.soundtrack.setBuffer(buffer);
				state.soundtrack.setLoop(true);
				state.soundtrack.setVolume(0.5);
				state.soundtrack.play();
				console.log("Soundtrack loaded!");
				listener.context.suspend();
				setLoaded(true);
			});
		}
		// eslint-disable-next-line
	}, [loaded]);

	// Play soundtrack on game starts
	if (state.started && loaded) listener.context.resume();

	return null;
}

export default observer(Soundtrack);
