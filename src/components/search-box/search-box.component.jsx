const SearchBox = ({ placeholder, onChangeHandler }) => {
	return (
		<input
			className="p-2 rounded border w-1/3"
			type="search"
			placeholder={placeholder}
			onChange={onChangeHandler}
		/>
	);
};

export default SearchBox;
