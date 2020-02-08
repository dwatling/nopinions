
let nodesToHide = [];
let queries = [
	{selector: `section[data-block-tracking-id='Opinion']`},		// NYTimes.com
	{selector: `div.column a[href='/opinions']`, parent: true},	// CNN.com
	{selector: `.opinions-chain`},	// WashingtonPost.com
];

for (let query of queries) {
	var nodes = document.querySelectorAll(query.selector);
	for (let i = 0; i < nodes.length; i ++) {
		if (query.parent) {
			nodesToHide.push(nodes[i].parentNode);
		} else {
			nodesToHide.push(nodes[i]);
		}
	}
}

for (let node of nodesToHide) {
	node.style.display = 'none';
}