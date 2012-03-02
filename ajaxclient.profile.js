var profile = {
	
	basePath: "./js/src",
	releaseDir: "../build",
	layerOptimize: "shrinksafe.keepLines",
	stripConsole: "all",
	cssOptimize: "comments.keepLines",
	
	packages:[
		{
			name: "dojo",
			location: "core/dojotoolkit/dojo",
			destLocation: "core/dojotoolkit/dojo"
		},
		{
			name: "dijit",
			location: "core/dojotoolkit/dijit",
			destLocation: "core/dojotoolkit/dijit"
		},
		{
			name: "dojox",
			location: "core/dojotoolkit/dojox",
			destLocation: "core/dojotoolkit/dojox"
		},
		{
			name: "excentos",
			location: "core/excentos",
			destLocation: "core/excentos"
		},
		{
			name: "xcProject",
			location: "xcProject"
		}
	],
	
	layers: {
		
		// main
		// contains AMD loader, Dojo kernel, and all dependencies listed
		"dojo/dojo": {
			include: [
				"dojo/selector/acme",
				"xcProject/init"
			]
		},
		
		// app
		// one of the app layers
		"xcProject/myapp": {
			include: [
				"xcProject/myapp"
			]
		},
		
		// dev
		// dev modules that are loaded on demand
		"excentos/widget/development/Dashboard": {
			include: [
				"excentos/widget/development/Dashboard"
			]
		}
	}
};
