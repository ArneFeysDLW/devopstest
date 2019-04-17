/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"capcp/tutorial/cf/ui/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});