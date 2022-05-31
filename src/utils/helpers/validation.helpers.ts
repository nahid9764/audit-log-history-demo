/**
 * Check if all properties is NULL
 * @param obj
 * @returns
 */
export const isNullProperties = (obj: Record<string, any>): boolean => {
	for (const key in obj) {
		if (obj[key] !== null && obj[key] !== '') return false;
	}
	return true;
};

/**
 * Check whether is number or string
 * @param value
 * @returns
 */
export const isNumber = (value: string): boolean => {
	return /^-?[\d.]+(?:e-?\d+)?$/.test(value);
};
