import Label from '../label/label.component';

const Card = (props) => {
	return (
		<div className="rounded-t-lg border p-4 bg-gray-100">
			<h2 className="text-lg font-bold pb-8">{props.data.title}</h2>
			<p>{props.data.town}</p>
			<div className="flex justify-end">
				<Label content={props.data.type} background="bg-green-200" />
				<Label content={props.data.hours} background="bg-green-200" />
			</div>
		</div>
	);
};

export default Card;
