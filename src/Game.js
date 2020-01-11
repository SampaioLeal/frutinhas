import React from "react";
import Scenario from "./components/Scenario";
import KeyListener from "./utils/KeyListener";
import Players from "./components/Players";
import SocketListener from "./utils/SocketListener";
import Fruits from "./components/Fruits";
import Scene from "./components/Scene";
import Camera from "./components/Camera";
import { observer } from "mobx-react";
import Soundtrack from "./components/Soundtrack";
import GUI from "./components/GUI";

function Game({ state }) {
	return (
		<Scene state={state}>
			<GUI state={state} />
			<Camera state={state} />
			<Soundtrack state={state} />
			<Scenario state={state} />
			<Players state={state} />
			<Fruits state={state} />
			<SocketListener state={state} />
			<KeyListener state={state} />
		</Scene>
	);
}

export default observer(Game);
