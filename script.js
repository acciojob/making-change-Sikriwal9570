const makeChange = (c) => {
  // Define coin values
  const quarterValue = 0.25;
  const dimeValue = 0.10;
  const nickelValue = 0.05;
  const pennyValue = 0.01;

  // Parse the input amount as an integer
  const amount = parseInt(c);

  // Initialize coin counts
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  // Calculate the number of quarters
  quarters = Math.floor(amount / quarterValue);
  amount %= quarterValue;

  // Calculate the number of dimes
  dimes = Math.floor(amount / dimeValue);
  amount %= dimeValue;

  // Calculate the number of nickels
  nickels = Math.floor(amount / nickelValue);
  amount %= nickelValue;

  // The remaining amount represents the number of pennies
  pennies = Math.floor(amount / pennyValue);

  // Create and return the result object
  const result = {
    q: quarters,
    d: dimes,
    n: nickels,
    p: pennies,
  };

  return result;
};

// Do not change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
