const bs = require('browser-sync');

module.exports = function bs_html() {
	bs.init({
		server: {
			baseDir: 'build/',
			host: '188.163.115.146',
		},
		callbacks: {
			ready: function (err, bs) {
				bs.addMiddleware("*", function (req, res) {
					res.writeHead(302, {
						location: "404.html"
					});
					res.end("Redirecting!");
				});
			}
		},
		browser: 'default',
		logPrefix: 'BS-HTML:',
		logLevel: 'info',
		logConnections: true,
		logFileChanges: true,
		open: true
	})
}