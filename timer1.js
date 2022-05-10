const timer = (input) => {
  input = process.argv.slice(2);
  // skip through NaN and negative number
  if (input.length === 0) return;
  input.sort((a,b) => a - b);

  for (const item of input) {
    if (isNaN(item) || item < 0) continue;
    else {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, (item * 1000));
    }
  }
};
timer();