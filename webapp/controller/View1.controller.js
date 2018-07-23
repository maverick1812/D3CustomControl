sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/thirdparty/d3"
], function(Controller, d3) {
	"use strict";

	return Controller.extend("com.sap.sampleD3HandsOn.controller.View1", {

		onInit: function() {
			this.iWidth = 1280;
			this.iHeight = 720;
			this.iRadius = 50;

			var aData = [{
				"x": 100,
				"y": 100,
				"radius": 50,
				"color": "green"
			}, {
				"x": 250,
				"y": 125,
				"radius": 50,
				"color": "purple"
			}, {
				"x": 400,
				"y": 100,
				"radius": 50,
				"color": "red"
			}, {
				"x": 500,
				"y": 100,
				"radius": 50,
				"color": "yellow"
			}];

			this.getView().setModel(new sap.ui.model.json.JSONModel(aData), "circleData");
		},

		onAfterRendering: function() {
			/*if (!this.oSVG) {
				this.oSVG = d3.select(".container")
					.append("svg")
					.attr("width", this.iWidth)
					.attr("height", this.iHeight);
			}*/
			//this.drawCircle();
			//this.drawCircleFromData();
		},

		drawCircle: function() {
			this.oSVG.append("circle")
				.attr("cx", (this.iWidth / 2) - this.iRadius)
				.attr("cy", (this.iHeight / 2) - this.iRadius)
				.attr("r", this.iRadius)
				.attr("fill", "blue");
		},

		drawCircleFromData: function() {
			var aData = [{
				"x": 100,
				"y": 100,
				"radius": 50,
				"color": "green"
			}, {
				"x": 250,
				"y": 125,
				"radius": 50,
				"color": "purple"
			}, {
				"x": 400,
				"y": 100,
				"radius": 50,
				"color": "red"
			}];

			/*
			 * Step 1
			 */

			var circles = this.oSVG
				.selectAll("circle")
				.data(aData)
				.enter()
				.append("circle");

			var circleAttributes = circles
				.attr("cx", function(d) {
					return d.x;
				})
				.attr("cy", function(d) {
					return d.y;
				})
				.attr("r", function(d) {
					return d.radius;
				})
				.style("fill", function(d) {
					return d.color;
				})
				.on("click", function(d) {
					alert("You clicked on the " + d.color + " circle.");
				});

			/*
			 * Step 2
			 */
			/*var bubbles = this.oSVG
				.selectAll("circle")
				.data(aData)
				.enter()
				.append("g")
				.attr("transform", function(d) {
					return "translate(" + d.x + "," + d.y + ")";
				});

			bubbles
				.append("circle")
				.attr("cx", 0)
				.attr("cy", 0)
				.attr("r", function(d) {
					return d.radius;
				})
				.style("fill", function(d) {
					return d.color;
				})
				.on("click", function(d) {
					alert("You clicked on the " + d.color + " circle.");
				});

			bubbles
				.append("text")
				.text(function(d) {
					return d.color;
				})
				.attr("text-anchor", "middle")
				.style("font-size", "1rem")
				.style("fill", "#fff");*/
		},

		onCirclePress: function(oEvt) {
			sap.m.MessageToast.show("You have clicked on the " + oEvt.getSource().getProperty("color") + " circle.");
		}
	});
});