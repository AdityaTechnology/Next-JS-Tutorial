function CollegeInfo({ params }) {
	console.log(params.info);
	const { info } = params;
	return (
		<div>
			College Information
			{info &&
				info.map((props) => {
					return <p>{props}</p>;
				})}
		</div>
	);
}

export default CollegeInfo;
