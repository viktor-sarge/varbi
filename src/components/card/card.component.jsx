import Label from '../label/label.component';

const Card = (props) => {
	return (
		<div className="rounded-lg border p-4 bg-gray-100">
			<h2 className="text-2xl pb-4 text-teal-800">{props.data.title}</h2>
			<p>{props.data.town}</p>
			<div className="flex justify-end">
				<Label content={props.data.type} background="bg-teal-100" />
				<Label content={props.data.hours} background="bg-teal-100" />
			</div>
		</div>
	);
};

export default Card;
