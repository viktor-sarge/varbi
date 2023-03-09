const CheckboxGroup = ({ values, name, id, displayName, onChangeHandler }) => {
	return (
		<div
			name={name}
			displayName={displayName}
			id={id}
			onChange={onChangeHandler}
			className="border p-2 text-lg rounded mr-4"
		>
			{values.map((entry) => {
				return (
					<div key={entry.name}>
						<label>
							<input
								type="checkbox"
								name={entry.value}
								value={entry.value}
							/>
							{entry.name}
						</label>
						<br></br>
					</div>
				);
			})}
		</div>
	);
};

export default CheckboxGroup;
