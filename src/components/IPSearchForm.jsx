import { useState, useRef } from 'react';

import FormItem from './SearchFormItem.jsx';
import SearchButton from './SearchFormButton.jsx';

function IPSearchForm({ ipProviderHandler }) {
	const formInputRef = useRef();
	const [isIpProvided, setIpProvided] = useState(false);
	const [providedValue, setProvidedValue] = useState('');

	const handleValidityChange = (isValid, ipProvided) => {
		setIpProvided(isValid);
		setProvidedValue(ipProvided);
	};

	const formHandler = (e) => {
		e.preventDefault();

		ipProviderHandler(providedValue);
	};

	const resetHandler = () => {
		setIpProvided(false);
		setProvidedValue('');
		formInputRef.current.focus();
	};

	return (
		<form onSubmit={formHandler}>
			<div className="ip-search-form">
				<div className="ip-search-form__input">
					<FormItem
						type="text"
						label="Search for any IP address / E.g., 192.168.0.1"
						resetValue={providedValue}
						onValidityChange={handleValidityChange}
						ref={formInputRef}
						className="track-input"
					/>
					{isIpProvided && (
						<span className="ip-search-form__reset" onClick={resetHandler}>
							X
						</span>
					)}
				</div>
				<div className="ip-search-form__button">
					<SearchButton
						type="input"
						className="track-button"
						disabled={!isIpProvided}
					>
						Track
					</SearchButton>
				</div>
			</div>
		</form>
	);
}

export default IPSearchForm;
