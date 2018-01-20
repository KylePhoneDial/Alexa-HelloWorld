'use strict';

const Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
	const alexa = Alexa.handler(event, context, callback);
	alexa.APP_ID = 'amzn1.ask.skill.ae2b55a3-fedd-4dc6-b38c-13b691f13f80';
	alexa.registerHandlers(handlers);
	alexa.execute();
};

const handlers = {
	'LaunchRequest' : function() {
		this.emit('HelloWorldIntent');
		},

		'HelloWorldIntent': function () {
			this.emit(':tell', 'Hello World!');
		}

};