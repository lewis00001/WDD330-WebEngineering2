var accounts = {
    a: 100,
    b: 0,
    c: 20,
    d: -200
  };
  
  function getAccount() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
      throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
  }

  // getFunds() will also check to see if the account is overdrawn and log a warning 
  function getFunds() {
    let accountName = prompt("Enter an account name");
    if (!accounts.hasOwnProperty(accountName)) {
      throw new Error(`No such account: ${accountName}`);
    }
    if (accounts[accountName] < 0) {
        console.warn(`Account ${accountName} is overdrawn!`);
    }
    return `accountInfo: ${accountName}: ${accounts[accountName]}`;
  }
  
  function betterTransfer(to, from, amount) {
    // verify amount is a positive number
    if (typeof(amount) != "number") {
        throw new Error (`The amount '${amount}' is not a valid entry.`);
        return;
    }
    // verify (from) account has adiquate funds to transfer
    if (accounts[from] < amount) {
        throw new Error(`Inadiquate Funds (from) Account: ${to}`);
    };
    if (!accounts.hasOwnProperty(to)) {
        throw new Error(`Cannot transfer funds to account: ${to} does not exit.`);
    }
    if (!accounts.hasOwnProperty(from)) {
        throw new Error(`Cannot transfer funds from account: ${from} does not exit.`);
    }

    let result = "Failed";
    try {
      accounts[from] -= amount;
      accounts[to] += amount;
    } catch(e) {
        console.log(e);
    } finally {
        result = "Success";
        console.log(result);
        console.log("Transfer Summary:");
        console.log(`New Balance: ${to}: ${accounts[to]}`);
        console.log(`New Balance: ${from}: ${accounts[from]}`);
    }
  }
  
  var InputError = class InputError extends Error {}
  
  function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new InputError("Invalid direction: " + result);
  }