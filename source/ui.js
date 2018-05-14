'use strict';
// const path = require('path');
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');
// const terminalImage = require('terminal-image');

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
	// {
	// 	label: 'Blog',
	// 	url: 'https://blog.sindresorhus.com'
	// },
	// {
	// 	label: 'Ask Me Anything',
	// 	url: 'https://github.com/sindresorhus/ama'
	// },
	{
		label: 'Contact',
		url: 'http://prayingmadness.com/contact'
	},
	// {
	// 	label: 'Support my open source work',
	// 	url: 'https://www.patreon.com/sindresorhus'
	// },
	// {
	// 	label: 'Unicorns!',
	// 	async action() {
	// 		console.log(await terminalImage.file(path.join(__dirname, 'unicorn1.gif')));
	// 		console.log(await terminalImage.file(path.join(__dirname, 'unicorn2.gif')));
	// 		console.log(await terminalImage.file(path.join(__dirname, 'unicorn3.gif')));
	// 	}
	// },
	// TODO: Add separator item here when https://github.com/vadimdemedes/ink-select-input/issues/4 is done
	{
		label: 'Quit',
		action() {
			process.exit(); // eslint-disable-line unicorn/no-process-exit
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
