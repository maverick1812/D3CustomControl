sap.ui.define([
	"sap/ui/core/Control"
], function(Control) {
	"use strict";
	return Control.extend("com.sap.sampleD3HandsOn.control.D3CustomControlAggregation", {
		metadata: {
			"properties": {
				"x": "string",
				"y": "string",
				"r": "string",
				"color": "string"
			},
			"events": {
				"press": {}
			}
		},
		init: function() {},
		renderer: function(oRM, oControl) {
			oRM.writeControlData(oControl);
		},
		onAfterRendering: function() {
			var oThis = this,
				oSVG = d3.select(".svgContainer");

			oSVG.append("circle")
				.attr("cx", this.getX())
				.attr("cy", this.getY())
				.attr("r", this.getR())
				.attr("fill", this.getColor())
				.on("click", function() {
					oThis.firePress();
				});
		}
	});
});