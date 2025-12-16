export const config = {
	capabilities: {
		myChromiumBrowser: {
			capabilities: {
				browserName: 'chrome',
			},
		},
		myFirefoxBrowser: {
			capabilities: {
				browserName: 'firefox',
			},
		},
	},

	specs: ['./tests/*.js'],
	framework: 'mocha',
	mochaOpts: {
		ui: 'tdd',
	},
};
