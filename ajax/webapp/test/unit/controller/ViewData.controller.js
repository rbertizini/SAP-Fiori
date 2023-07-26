/*global QUnit*/

sap.ui.define([
	"lkmrm/ajax/controller/ViewData.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewData Controller");

	QUnit.test("I should test the ViewData controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
