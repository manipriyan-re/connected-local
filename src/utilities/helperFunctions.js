export const debounce = (func, delay) => {
	let timer;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func(...args);
		}, delay);
	};
};

// export const headingAngle = (lat1, lon1, lat2, lon2) => {
//     const p1 = { x: lat1, y: lon1 };
//     const p2 = { x: lat2, y: lon2 };
//     /*angle in radians */
//     // const angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);
//     /*angle in degrees*/
//     const angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
//     return angleDeg;
// }

export const headingAngle = (lat1, lng1, lat2, lng2) => {
	const rad = (x) => (x * Math.PI) / 180;
	const y = Math.sin(rad(lng2 - lng1)) * Math.cos(rad(lat2));
	const x =
		Math.cos(rad(lat1)) * Math.sin(rad(lat2)) -
		Math.sin(rad(lat1)) * Math.cos(rad(lat2)) * Math.cos(rad(lng2 - lng1));
	let bearing = (Math.atan2(y, x) * 180) / Math.PI;

	if (bearing < 0) {
		bearing += 360;
	}
	return bearing;
};

export const updateMarkerRotation = (prevCoords, currentCoords) => {
	const angle = headingAngle(
		prevCoords.lat,
		prevCoords.lng,
		currentCoords.lat,
		currentCoords.lng,
	);
	return angle;
};
