sap.ui.define([
	"sap/ui/core/Control"
], function(Control) {
	"use strict";
	return Control.extend("com.sap.sampleD3HandsOn.control.D3CustomControl", {
		metadata: {
			properties: {
				//Option 1
				/*"width": "string",
				"height": "string",*/

				//Option 2
				width: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "100%"
				},
				height: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "auto"
				}
			},
			aggregations: {
				"circles": {
					type: "com.sap.sampleD3HandsOn.control.D3CustomControlAggregation",
					multiple: true,
					singularName: "circle"
				}
			},
			defaultAggregation: "circles"
		},
		init: function() {},
		renderer: function(oRM, oControl) {
			oRM.write("<svg");
			oRM.write(" style=\"width: " + oControl.getWidth() + "; height: " + oControl.getHeight() + ";\"");
			oRM.write(" class=\"svgContainer\"");
			oRM.writeControlData(oControl);
			oRM.write(">");
			oControl.getCircles().forEach(function(oCircle) {
				oRM.renderControl(oCircle);
			});
			oRM.write("</svg>");
		},
		onAfterRendering: function() {

			this.iWidth = parseInt(this.getWidth().split("px")[0], 10);
			this.iHeight = parseInt(this.getHeight().split("px")[0], 10);
			var oSVG = d3.select(".svgContainer"),
				iRadius = 50;

			/*oSVG.append("circle")
				.attr("cx", (this.iWidth / 2) - iRadius)
				.attr("cy", (this.iHeight / 2) - iRadius)
				.attr("r", iRadius)
				.attr("fill", "blue");*/
		}
	});
});