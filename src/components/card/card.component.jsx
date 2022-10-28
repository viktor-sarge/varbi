import Label from '../label/label.component';
import { ReactComponent as Pin } from '../../map-pin.svg';

const Card = (props) => {
	return (
		<div className="rounded-t-lg border p-4 bg-gray-100">
			<h2 className="text-lg font-bold pb-8 break-words">
				{props.data.title}
			</h2>
			<div className="flex">
				<Pin className="mr-2" />
				{props.data.town}
			</div>
			<div className="flex justify-end mt-8">
				<Label content={props.data.type} background="bg-green-200" />
				<Label content={props.data.hours} background="bg-green-200" />
			</div>
		</div>
	);
};

export default Card;
