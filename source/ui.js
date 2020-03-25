'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'LinkedIn – the premiere platform for ignoring recruiters',
		url: 'https://www.linkedin.com/in/scottkosman'
	},
	{
		label: 'Some past projects – horribly out of date, maybe someday though!',
		url: 'http://prayingmadness.github.io'
	},
	{
		label: 'How To Scott – useful reading if you currently do or someday want to work for/with me',
		url: 'https://github.com/humantorch/how-to-scott'
	},
	{
		label: 'Twitter – mostly telling jokes and complaining about the Edmonton Oilers',
		url: 'https://twitter.com/humantorch'
	},
	{
		label: 'GitHub – if you\'re reading this you know what GitHub is',
		url: 'https://github.com/humantorch'
	},
	{
		label: 'Instagram – see what I had for lunch!',
		url: 'https://instagram.com/humantorch'
	},
	{
		label: 'CV - see what I used to do',
		url: 'https://stackoverflow.com/cv/scottkosman'
	}
	{
		label: 'Quit',
		action() {
			process.exit();
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>Toronto based out-of-work Engineering Manager/Tech Director (thanks, COVID-19!). Open to Toronto or remote full-time opportunities, if you're hiring then I'm your guy! I enjoy leading teams building the next generation of stuff you do on this "internet" thing. Chaotic neutral. He/him.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
