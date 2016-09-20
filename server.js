var StaticServer = require('static-server');
var server = new StaticServer({
	rootPath: './public',
	name: 'my-http-server',
	port: 1234,
	host: 'localhost',
	cors: '*',
	followSymlink: true
});

server.start(function () {
	console.log('Server listening to', server.port);
});
