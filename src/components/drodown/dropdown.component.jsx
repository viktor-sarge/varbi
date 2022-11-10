const Dropdown = ({ values, name, id, displayName, onChangeHandler }) => {
	return (
		<select
			name={name}
			displayName={displayName}
			id={id}
			onChange={onChangeHandler}
			className="border p-2 text-lg rounded mr-4"
		>
			{values.map((entry) => {
				return <option value={entry.value}>{entry.name}</option>;
			})}
		</select>
	);
};

export default Dropdown;
