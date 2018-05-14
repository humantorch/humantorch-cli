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
		label: 'Website',
		url: 'http://prayingmadness.com'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/humantorch'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/humantorch'
	},
	{
		label: 'Instagram',
		url: 'https://instagram.com/humantorch'
	},
	{
		label: 'LinkedIn',
		url: 'https://www.linkedin.com/in/scottkosman'
	},
	{
		label: 'CV',
		url: 'https://stackoverflow.com/cv/scottkosman'
	},
	{
		label: 'Contact',
		url: 'http://prayingmadness.com/contact'
	},
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
			<Text>I’m a Technical Director working on adidas dot com, based in sunny southern Germany.</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);
