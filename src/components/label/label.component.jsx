const Label = ({ content, background }) => {
	return (
		<span className={`ml-4 rounded-full p-2 ${background}`}>{content}</span>
	);
};

export default Label;
