'use strict';
const { h, Text } = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = (url) => opn(url, { wait: false });

const handleSelect = (item) => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Double Nines – where I work',
		url: 'https://doublenines.co',
	},
	{
		label: 'COOP by Ryder – the fruit of my team\'s collective effort',
		url: 'https://coop.com',
	},
	{
		label: 'How To Scott – useful reading if you currently do or someday want to work for/with me',
		url: 'https://github.com/humantorch/how-to-scott',
	},
	{
		label: 'LinkedIn – feel free to join my Professional Network™!',
		url: 'https://www.linkedin.com/in/scottkosman',
	},
	{
		label: 'Some past projects – a bit out of date, maybe someday though!',
		url: 'http://prayingmadness.github.io',
	},
	{
		label: 'Twitter – mostly telling jokes and complaining about the Edmonton Oilers',
		url: 'https://twitter.com/humantorch',
	},
	{
		label: "GitHub – if you're reading this you know what GitHub is",
		url: 'https://github.com/humantorch',
	},
	{
		label: 'Instagram – see what I had for lunch!',
		url: 'https://instagram.com/humantorch',
	},
	{
		label: 'CV - see what I used to do',
		url: 'https://stackoverflow.com/cv/scottkosman',
	},
	{
		label: 'Quit',
		action() {
			process.exit();
		},
	},
];

module.exports = () => (
	<div>
		<br />
		<div>
			<Text>Toronto-based Engineering Director at Double Nines leading the development efforts on the COOP platform. A recovering front-end developer who pivoted to management back in 2014, I now enjoy leading teams building the next generation of stuff you do on this "internet" thing. He/him.</Text>
		</div>
		<br />
		<SelectInput items={items} onSelect={handleSelect} />
	</div>
);
