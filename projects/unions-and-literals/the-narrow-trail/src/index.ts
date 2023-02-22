export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let resource: "Food" | "Water" | null = null;
	let day = 1;
	let food = 5;
	let water = 5;

	const diceRoll = () => {
		return Math.floor(Math.random() * 6) + 1;
	};

	while (day < 8) {
		const roll = diceRoll();

		if (roll >= 3 && roll <= 6) {
			if (!resource) {
				if (roll % 2 === 0) {
					resource = "Food";
				} else {
					resource = "Water";
				}
			} else {
				if (resource === "Food") {
					food += roll;
				}

				if (resource === "Water") {
					water += roll;
				}

				resource = null;
			}
		}
		if (roll === 1) {
			resource = "Food";
		}

		if (roll === 2) {
			resource = "Water";
		}

		food -= 1;
		water -= 1;

		if (food === 0 || water === 0) {
			return false;
		}
		day++;
	}

	return true;
}
