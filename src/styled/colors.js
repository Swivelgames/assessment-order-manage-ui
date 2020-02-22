export const oranges = {
	normal: "#FF7043",
	dark: "#BF360C"
};
export const orange = oranges.normal;

export const reds = {
	brightest: "#FFCDD2",
	normal: "#F44336",
	darker: "#C62828",
	darkest: "#B71C1C"
};
export const red = reds.normal;

export const greens = {
	brightest: "#C8E6C9",
	normal: "#43A047",
	darker: "#388E3C",
	darkest: "#2E7D32"
};
export const green = greens.normal;

export const teals = {
	normal: "#00897B"
};
export const teal = teals.normal;

export const blues = {
	brightest: "#ADADCF",
	brighter: "#9595A6",
	normal: "#2196F3",
};
export const blue = blues.normal;

export const blacks = {
	brightest: "#505059",
	bright: "#31313B",
	normal: "#292931",
	dark: "#232329",
	darkest: "#000000"
};
export const black = blacks.normal;

export const gradients = {
	red: [reds.darker, reds.darkest],
	orange: [oranges.normal, oranges.dark],
	green: [greens.darker, greens.darkest],
	black: {
		bright: [blacks.brightest, blacks.normal],
		dark: [blacks.normal, blacks.dark]
	}
};

export const typeColors = {
	'pending': teal,
	'in-progress': blue,
	'deleted': red,
	'fulfilled': green
};

export const typeGrads = {
	'pending': gradients.black.dark,
	'in-progress': gradients.black.dark,
	'deleted': gradients.red,
	'fulfilled': gradients.green
}

export const getColor = ({ type = 'pending' }) => typeColors[type];
export const getGradP = ({ type = 'pending' }) => typeGrads[type][0];
export const getGradS = ({ type = 'pending' }) => typeGrads[type][1];
