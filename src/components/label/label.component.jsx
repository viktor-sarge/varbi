const Label = ({ content, classes }) => {
	return (
		<span className={`ml-4 rounded-full py-2 px-4 w-fit ${classes}`}>
			{content}
		</span>
	);
};

export default Label;
