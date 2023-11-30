function SearchButton({ children, type, ...props }) {
	return type === 'input' ? (
		<input type="submit" value={children} {...props} />
	) : (
		<button type="submit" {...props}>
			{children}
		</button>
	);
}

export default SearchButton;
