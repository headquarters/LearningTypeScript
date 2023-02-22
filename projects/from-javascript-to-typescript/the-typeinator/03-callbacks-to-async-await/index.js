// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

async function checkEmotion(knownEmotions, emotion) {
	// Simulate database processing time by waiting a second...
	const hasEmotion = knownEmotions.has(emotion);

	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(hasEmotion), 1000);
	});
}

async function speak(knownEmotions, newEmotion, phrase) {
	const hasEmotion = await checkEmotion(knownEmotions, newEmotion);

	if (hasEmotion) {
		return `"${phrase}" (${newEmotion})`;
	}

	throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
