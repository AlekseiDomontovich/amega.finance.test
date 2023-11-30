import { useState, useEffect, forwardRef } from 'react';

const FormItem = forwardRef(function FormItem(
	{ label, className, resetValue, onValidityChange, ...props },
	ref,
) {
	const [value, setValue] = useState('');

	const handleInputChanges = (event) => {
		const value = event.target.value;
		const ipPattern = /^(\d{1,3}\.){0,3}(\d{0,3})?$/;

		if (ipPattern.test(value)) {
			setValue(value);

			const dotsCount = (value.match(/\./g) || []).length;
			const isValid =
				value.length >= 6 && dotsCount === 3 && !value.endsWith('.');

			onValidityChange(isValid, value);
		}
	};

	const validClass = value && 'valid';
	const inputClassNames = `${className} ${validClass || ''}`;

	useEffect(() => {
		if (resetValue !== value) {
			setValue(resetValue);
		}
	}, [resetValue, value]);

	return (
		<>
			<label>{label}</label>
			<input
				placeholder={label}
				value={value}
				onChange={handleInputChanges}
				className={inputClassNames.trim()}
				{...props}
				ref={ref}
			/>
		</>
	);
});

export default FormItem;
