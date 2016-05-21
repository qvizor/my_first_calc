var fs = require('fs');
var code = "";

code += 'var number1 = process.argv[2];\n';
code += 'var operation = process.argv[3];\n';
code += 'var number2 = process.argv[4];\n';

for (var i = 0; i < 50; i++) {
    for (var j = 0; j < 50; j++) {
        code += 'if (number1 === "' + i + '" && operation === "+" && number2 === "' + j + '") console.log("' + (i + j) + '");\n';
        code += 'if (number1 === "' + i + '" && operation === "-" && number2 === "' + j + '") console.log("' + (i - j) + '");\n';
        code += 'if (number1 === "' + i + '" && operation === "*" && number2 === "' + j + '") console.log("' + (i * j) + '");\n';
    }
}

fs.writeFileSync('calc50.js', code);