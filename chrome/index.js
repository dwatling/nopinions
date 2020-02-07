
// find the opinion section and get rid of it.
var sections = document.getElementsByTagName('section');
for(var i = 0; i < sections.length; ++i) {
	if(sections[i].getAttribute('data-block-tracking-id') === 'Opinion') {
		sections[i].style.display = 'none';
	}
}

// Find the opinion section on the homepage for CNN
var opinionSection = document.querySelectorAll('div.column a[href=\'/opinions\']')
if (opinionSection && opinionSection.length === 1) {
	opinionSection[0].parentElement.style.display = 'none';
}

// Washingtonpost.com
var opinionSection = document.getElementsByClassName('opinions-chain');
if (opinionSection && opinionSection.length === 1) {
	opinionSection[0].style.display = 'none';
}
