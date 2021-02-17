(function () {
	window.imageWordMap = window.imageWordMap || {};

	let paused = false;
	let lastWord = "";
	let forceReenter = false;

	function executeAutoHack() {
		try {
			const imageElem = document.getElementById("tool-type").childNodes[0];

			if (!paused && imageElem && imageElem.src && imageElem.src.indexOf("template.png") === -1) {
				const imageName = imageElem.src.substring(imageElem.src.lastIndexOf("/", imageElem.src.lastIndexOf("/") - 1) + 1);

				if (forceReenter || !window.imageWordMap[imageName]) {
					const word = prompt("Type word for '" + imageName + "': ");

					if (word) {
						window.imageWordMap[imageName] = word;
					}

					forceReenter = false;
				}

				const textBox = document.getElementById("tool-type-word");

				if (textBox && (!textBox.value || textBox.value == lastWord) && window.imageWordMap[imageName]) {
					textBox.focus();
					textBox.value = window.imageWordMap[imageName];
					lastWord = window.imageWordMap[imageName];

					/*const enterEvent = new KeyboardEvent('keydown', {
						bubbles: true, cancelable: true, keyCode: 13
					});
	
					textBox.dispatchEvent(enterEvent);*/
				}
			}
		} catch (ex) {
			console.warn("Couldn't execute autohack", ex);
		}
	}

	function scheduleAutoHack(delay) {
		if (window.sautomHandle) {
			clearInterval(window.sautomHandle);
		}

		window.lastDelay = delay;

		window.sautomHandle = setInterval(executeAutoHack, delay);
	}

	scheduleAutoHack(window.lastDelay || 5000);

	const pause = () => paused = true;
	const resume = () => paused = false;
	const togglePaused = () => paused = !paused;

	document.onkeyup = function (e) {
		if (e.altKey && e.which == 80) { // Pause/Resume: Alt+P
			togglePaused();
			console.info((paused ? "Paused" : "Resumed") + " auto hacking");
		} else if (e.altKey && e.which == 79) { // Change delay: Alt+O
			try {
				const newDelay = parseInt(prompt("New delay in milliseconds:"));
				scheduleAutoHack(newDelay);

				console.info("Changed auto hack delay to", newDelay);
			} catch (ex) {
				console.warn("Invalid delay number");
			}
		} else if (e.altKey && e.which == 73) {
			forceReenter = true;
			console.info("Forcing reentering of current word");
		}
	}

	window.sautom = {
		pause: () => paused = true,
		resume: () => paused = false,
		scheduleAutoHack
	};
})();
