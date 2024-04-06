



export const withStorageDOMEvents = (store) => {

    const callback = () => store?.persist?.rehydrate();

	window.addEventListener("storage", callback);

	return () => {
		window.removeEventListener("storage", callback);
	};
};