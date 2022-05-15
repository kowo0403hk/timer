const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, ciao!');
    process.exit();
  }

  if (key === '\u0062') {
    process.stdout.write('\x07');
  }

  if (key >= 1 && key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }

});