import { useState, useEffect } from "react";
import axios from "axios";
import uuid from "uuid";

const useFlip = (value) => {
	const [isFacingUp, setIsFacingUp] = useState(value);
	const flipCard = () => setIsFacingUp((isUp) => !isUp);

	return [isFacingUp, setIsFacingUp, flipCard];
};

const useLocalStorage = (key, defaultValue = []) => {
	if (localStorage.getItem(key)) {
		try {
			defaultValue = JSON.parse(localStorage.getItem(key));
		} catch (error) {
			console.log(error);
		}
	}

	const [state, setState] = useState(defaultValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
};

const useAxios = (baseURL, localStorageKey, formatFunction) => {
	const [collection, setCollection] = useLocalStorage(localStorageKey, []);

	const addToCollection = async (formatter, restOfURL = "") => {
		try {
			const response = await axios.get(baseURL + restOfURL);

			setCollection((collection) => [...collection, formatter(response.data)]);
		} catch (error) {
			console.error(error);
		}
	};

	const emptyCollection = () => {
		setCollection((collection) => []);
	};

	return [collection, addToCollection, emptyCollection];
};

export { useFlip, useAxios, useLocalStorage };
