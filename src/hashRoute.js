import { useState, useEffect, useRef } from 'preact/hooks';

// returns the current hash location in a normalized form
// (excluding the leading '#' symbol)
const currentLoc = () => window.location.hash.replace(/^#/, '') || '/';

const navigate = (to) => (window.location.hash = to);

const useHashLocation = () => {
	const [loc, setLoc] = useState(currentLoc());
	const prevHash = useRef(currentLoc());

	useEffect(() => {
		// this function is called whenever the hash changes
		const handler = () => setLoc(currentLoc());

		// fix if an update has occurred between render and the effect handler
		if (prevHash.current !== currentLoc()) {
			prevHash.current = currentLoc();
			handler();
		}

		// subscribe to hash changes
		window.addEventListener("hashchange", handler);
		return () => window.removeEventListener("hashchange", handler);
	}, []);

	return [loc, navigate];
};

export { useHashLocation };
