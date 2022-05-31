export const formatReadable = (value: string): string => {
	return value.replace(/([A-Z])/g, ' $1');
};

export const formatValidatorKey = (value: string): string => {
	const val = formatReadable(value);
	return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
};

export const formatDate = (value: string): string => {
	const date = new Date(value);
	const time = date.toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: true,
	});
	return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}, ${time}`;
};
