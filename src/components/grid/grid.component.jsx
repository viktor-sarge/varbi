import Card from '../card/card.component';

const Grid = ({ data }) => {
	return (
		<div className="container mx-auto grid grid-cols-3 gap-8">
			{data.map((data) => {
				return <Card data={data} />;
			})}
		</div>
	);
};

export default Grid;
