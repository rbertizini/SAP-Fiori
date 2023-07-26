sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("lkm.rm.ajax.controller.ViewData", {
			onInit: function () {
				var dadosProd = {};	

				var oJson = new JSONModel(dadosProd);
				this.getView().setModel(oJson, "DataProd");

				this.consumoApi();
				console.log("Ini");
				console.log(oJson);
				console.log("Fim");
			},

			consumoApi: function () {
				var dadosLoadInt = this.getView().getModel("DataProd");				
				
				//chamada da API
				jQuery.ajax({
					method:"GET",
					contentType: "application/json",
					url:"/proxy/api/dadossap",
					crossDomain : true,
					dataType: "json",
					async: false,
					success: function(data){
						console.log("Sucesso-Ini");		
						console.log(data);
						dadosLoadInt.setData(data);						
						console.log("Sucesso-Fim");						
					},
					error:function(error){
						console.log("Erro");
					}
				});
			}
		});
	});
