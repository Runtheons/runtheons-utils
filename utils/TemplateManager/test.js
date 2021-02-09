const TemplateManager = require("./index");

var html = TemplateManager.load('./utils/TemplateManager/test/template.ejs', { list: ['Gino', 'Nino', 'Pino'] });
console.log(html);