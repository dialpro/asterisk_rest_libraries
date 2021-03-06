/*****************************************************************************
* Copyright (C) 2013 Digium, Inc.
* All Rights Reserved.
******************************************************************************
* @Package: AsteriskJS
* @Authors: Erin Spiceland <espiceland@digium.com>
*
* See http://www.asterisk.org for more information about
* the Asterisk project. Please do not directly contact
* any of the maintainers of this project for assistance;
* the project provides a web site, mailing lists and IRC
* channels for your use.
*
* This program is free software, distributed under the terms
* detailed in the the LICENSE file at the top of the source tree.
*
*****************************************************************************/


AsteriskJs.Recording = function(parameters) {
	/* Definition of Recording object */
	for (var key in parameters) {
		this[key] = parameters[key];
	}

	this.object_id = 1;

	if (typeof this.api != 'object') {
		throw new Error("Can't make new AsteriskJs.Recording "
			+ " instance without AsteriskJs.AsteriskRESTAPI instance.");
	}

	this.getId = function() {
		/* Return the Recording object's id. */
		return this.object_id;
	};

	this.addEventHandler = function(eventName, handler) {
		/* Add an event handler for Stasis events on this object.
		 * For general events, use AsteriskJs.Asterisk.addEventHandler
		 * instead. */
		return true;
	};

	this.removeEventHandler = function(eventName, handler) {
		/* Remove an event handler for Stasis events on this object.
		 * For general events, use AsteriskJs.Asterisk.removeEventHandler
		 * instead. */
		return true;
	};

	this.getRecordings = function() {
		/* Recordings; List recordings */
		params = {};
		is_success = this.api.call({
			'path': '/recordings',
			'http_method': 'GET'
		});
		is_success = true;
		return is_success;
	};

	this.getRecording = function() {
		/* Individual recording; Get recording details */
		params = {};
		is_success = this.api.call({
			'path': '/recordings/%s',
			'http_method': 'GET',
			'object_id': this.object_id
		});
		is_success = true;
		return is_success;
	};

	this.deleteRecording = function() {
		/* Individual recording; Delete recording */
		params = {};
		is_success = this.api.call({
			'path': '/recordings/%s',
			'http_method': 'DELETE',
			'object_id': this.object_id
		});
		is_success = true;
		return is_success;
	};

	this.stopRecording = function() {
		/* Stop recording */
		params = {};
		is_success = this.api.call({
			'path': '/recordings/%s/stop',
			'http_method': 'POST',
			'object_id': this.object_id
		});
		is_success = true;
		return is_success;
	};

	this.pauseRecording = function() {
		/* Pause recording */
		params = {};
		is_success = this.api.call({
			'path': '/recordings/%s/pause',
			'http_method': 'POST',
			'object_id': this.object_id
		});
		is_success = true;
		return is_success;
	};

	this.unpauseRecording = function() {
		/* Unpause recording */
		params = {};
		is_success = this.api.call({
			'path': '/recordings/%s/unpause',
			'http_method': 'POST',
			'object_id': this.object_id
		});
		is_success = true;
		return is_success;
	};

	this.muteRecording = function() {
		/* Mute recording */
		params = {};
		is_success = this.api.call({
			'path': '/recordings/%s/mute',
			'http_method': 'POST',
			'object_id': this.object_id
		});
		is_success = true;
		return is_success;
	};

	this.unmuteRecording = function() {
		/* Unmute recording */
		params = {};
		is_success = this.api.call({
			'path': '/recordings/%s/unmute',
			'http_method': 'POST',
			'object_id': this.object_id
		});
		is_success = true;
		return is_success;
	};
};
