const {
	src
} = require('gulp');
const ftp = require('vinyl-ftp');
const ftpSettings = require('../tasks/ftp_settings');
const chalk = require('chalk');
const connect = ftp.create(ftpSettings);

module.exports = function deploy() {
	return src(['build/**/*.*', '!build/**/*.map'])
		.pipe(connect.newer('public_html/welcome-to-ukraine.com'))
		.pipe(connect.dest('public_html/welcome-to-ukraine.com'))
		.on('end', () => console.log(`Finished deploing ./build to https://${chalk.blueBright(ftpSettings.host)}`))
}