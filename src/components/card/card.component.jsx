import Label from '../label/label.component';
import { ReactComponent as Pin } from '../../map-pin.svg';

const Card = (props) => {
	return (
		<div className="duration-300 rounded-t-lg border p-4 bg-gray-100 border-white border-4 hover:border-sky-500">
			<h2 className="text-lg font-bold pt-8 break-words">
				{props.data.title}
			</h2>
			<p className="text-lg pt-4">
				{props.data.descs.description.slice(0, 150)}...
			</p>
			<div className="flex pt-6">
				<Pin className="mr-2" />
				{props.data.town}
			</div>
			<div className="flex flex-col items-end xl:flex-row justify-end mt-8">
				<Label
					content={props.data.type}
					classes="border border-gray-700 mt-4 xl:mt-0"
				/>
				<Label
					content={props.data.hours}
					classes="border border-gray-700 mt-4 xl:mt-0"
				/>
			</div>
		</div>
	);
};

export default Card;
