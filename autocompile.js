var watch = require("watch");
var exec = require('child_process').exec;

watch.watchTree("content", { ignoreDotFiles: true } , function(f, cur, prev) {
	exec("woods . -p 3001 -e out", function() {		// Woods uses 3001 to render pages. statik uses 3000 to host it. Cannot render and export at same time. 
		console.log("Compiled!");
	});
	exec('commit.sh' , function(){
		console.log("Pushed!");
	});
});