import React, { useState } from "react";
import { observer } from "mobx-react";

function GUI({ state }) {
	const [status, setStatus] = useState(true);

	function muteMusic() {
		state.soundtrack.pause();
		setStatus(false);
	}
	function playMusic() {
		state.soundtrack.play();
		setStatus(true);
	}

	return (
		<div className="gui">
			<div className="api">
				<br />
				{/* Show players list */}
				{state.players &&
					state.players.map((player, key) => {
						return (
							<div style={{ color: player.color }} key={key}>
								<b>
									{player.id}: {player.points}
								</b>
							</div>
						);
					})}
			</div>
			<div className="controls">
				{state.soundtrack && status ? (
					<img onClick={muteMusic} src="./mute.png" alt="Mute Music" />
				) : (
					<img onClick={playMusic} src="./unmute.png" alt="Play Music" />
				)}
			</div>
		</div>
	);
}

export default observer(GUI);
