var { Template } = require('tplite');

var template = new Template();

module.exports = function(content) {
  var compile = template(content);
	return "module.exports = " + compile.toString().replace('anonymous', '') + ";\n";
}
