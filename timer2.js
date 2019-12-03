
const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');

let array1 = ['1','2','3','4','5','6','7','8','9']
console.log(array1.includes(key))
if (array1.includes(key)) {
  console.log(`setting timer for ${key} seconds`)
  setTimeout(() => process.stdout.write('\x07'), array1[key]*1000)
}

if (key === 'b') {
  process.stdout.write('\x07')
}

// \u0003 maps to ctrl+c input
if (key === '\u0003') {
  process.exit();
}

});





console.log('after callback');