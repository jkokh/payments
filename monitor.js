var chokidar = require('chokidar');
var exec = require('child_process').exec;

var rsyncTeaching = 'rsync -rtvua -e "ssh -p 2322" --exclude=files/* --exclude=web/plugins/* /var/www/Teaching kokh@95.213.143.3:/var/www';
var rsyncPlatform = 'rsync -rtvua -e "ssh -p 2322" /var/www/Platform/platform kokh@95.213.143.3:/var/www/Platform';

var watcher = chokidar.watch(['/var/www/Teaching', '/var/www/Platform/platform'], {
	interval: 100
});

watcher.on('change', function(file){
	console.log("Changed: " + file);
	exec(rsyncTeaching, function(error, stdout, stderr) {
		console.log(stdout);
	});
	exec(rsyncPlatform, function(error, stdout, stderr) {
		console.log(stdout);
	});
});