import React from "react";

function ProductList({ params }) {
	console.log(params);
	return <div>Product List page : {params.pid}</div>;
}

export default ProductList;
