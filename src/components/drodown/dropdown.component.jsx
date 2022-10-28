const Dropdown = ({ values, name, id, onChangeHandler }) => {
	return (
		<select
			name={name}
			id={id}
			onChange={onChangeHandler}
			className="border p-2 text-lg rounded mr-4"
		>
			{values.map((type) => {
				return <option value={type}>{type}</option>;
			})}
		</select>
	);
};

export default Dropdown;
