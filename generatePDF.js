var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('./pdf.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync('./pdf.html', markdownReadMe);