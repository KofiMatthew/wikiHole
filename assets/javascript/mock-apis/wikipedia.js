function callWikipedia(url) {
	const baseUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&uselang=user&errorformat=plaintext&search=';
	
	if (!url) console.error('need to give callWikipedia a URL');
	else if (typeof url !== 'string') console.error('callWikipedia URL must be a string');
	else if (url.slice(0, baseUrl.length) !== baseUrl) console.error('something is missing in the url');
	else if (!url.slice(baseUrl.length)) console.error('need a search term');
	else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(url)) console.error('invalid URL; some characters that don\'t belong');
	else return JSON.stringify(wikipediaMockData);
}

const wikipediaMockData = [
	"complex",
	[
		"Complex",
		"Complex number",
		"Complex regional pain syndrome",
		"Complex system",
		"Complex post-traumatic stress disorder",
		"Complex (magazine)",
		"CompLexity Gaming",
		"Complexity",
		"Complexity theory and organizations",
		"Complex quadratic polynomial"
	],
	[
		"Complex may refer to:",
		"A complex number is a number that can be expressed in the form a + bi, where a and b are real numbers, and i is a solution of the equation x2 = −1.  Because no real number satisfies this equation, i is called an imaginary number.",
		"Complex regional pain syndrome (CRPS), also known as reflex sympathetic dystrophy (RSD), (and also sometimes referred to as the \"suicide disease\", due to the intensity of the discomfort experienced, and the lack of a cure or effective treatments) is a disorder of a portion of the body, usually starting in a limb, which manifests as extreme pain, swelling, limited range of motion, and changes to the skin and bones.",
		"A complex system is a system composed of many components which may interact with each other. Examples of complex systems are Earth's global climate, organisms, the human brain, infrastructure such as power grid, transportation or communication systems, social and economic organizations (like cities), an ecosystem, a living cell, and ultimately the entire universe.",
		"Complex post-traumatic stress disorder (C-PTSD; also known as complex trauma disorder) is a psychological disorder that can develop in response to prolonged, repeated experience of interpersonal trauma in a context in which the individual has little or no chance of escape.",
		"Complex is an American New York-based media platform for youth culture which was founded as a bi-monthly magazine by fashion designer Marc (Ecko) Milecofsky.",
		"compLexity Gaming (coL) is a professional American eSports organization that competes in Counter-Strike: Global Offensive, Call of Duty, Dota 2, Hearthstone: Heroes of Warcraft, Gwent: The Witcher Card Game, Rocket League, Clash Royale, Fortnite and Madden.",
		"Complexity characterises the behaviour of a system or model whose components interact in multiple ways and follow local rules, meaning there is no reasonable higher instruction to define the various possible interactions.The term is generally used to characterize something with many parts where those parts interact with each other in multiple ways, culminating in a higher order of emergence greater than the sum of its parts.",
		"Complexity theory and organizations, also called complexity strategy or complex adaptive organizations, is the use of the study of complexity systems in the field of strategic management and organizational studies.",
		"A complex quadratic polynomial is a quadratic polynomial whose coefficients and variable are complex numbers."
	],
	[
		"https://en.wikipedia.org/wiki/Complex",
		"https://en.wikipedia.org/wiki/Complex_number",
		"https://en.wikipedia.org/wiki/Complex_regional_pain_syndrome",
		"https://en.wikipedia.org/wiki/Complex_system",
		"https://en.wikipedia.org/wiki/Complex_post-traumatic_stress_disorder",
		"https://en.wikipedia.org/wiki/Complex_(magazine)",
		"https://en.wikipedia.org/wiki/CompLexity_Gaming",
		"https://en.wikipedia.org/wiki/Complexity",
		"https://en.wikipedia.org/wiki/Complexity_theory_and_organizations",
		"https://en.wikipedia.org/wiki/Complex_quadratic_polynomial"
	]
]