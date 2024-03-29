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
		label: 'Some more info about me',
		url: 'https://scottkosman.com',
	},
	{
		label: 'Where I work',
		url: 'https://1password.com',
	},
	{
		label: 'How To Scott - useful reading if you currently do or someday want to work for/with me',
		url: 'https://scottkosman.com/post/readme/',
	},
	{
		label: 'LinkedIn - feel free to join my Professional Network™!',
		url: 'https://www.linkedin.com/in/scottkosman',
	},
	{
		label: "GitHub - if you're reading this you know what GitHub is",
		url: 'https://github.com/humantorch',
	},
	{
		label: 'Instagram - see what I had for lunch!',
		url: 'https://instagram.com/humantorch',
	},
	{
		label: 'CV - see what I used to do',
		url: 'https://scottkosman.com/skosman_resume2023.pdf',
	},
	{
		label: 'The @humantorch CLI git repo',
		url: 'https://github.com/humantorch/humantorch-cli',
	},
	{
		label: '---------'
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
			<Text>Toronto-based Engineering Manager at 1Password, 20+ year vet of the technology, marketing, and digital strategy world. A recovering front-end developer who pivoted to management back in 2014, I now enjoy leading teams building the next generation of stuff you do on this "internet" thing. He/him.</Text>
		</div>
		<br />
		<SelectInput items={items} onSelect={handleSelect} />
	</div>
);
