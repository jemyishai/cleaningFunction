  // regex whitelist (versus a blacklist containing a limited set of punctuation) and also removes redundant https://stackoverflow.com/a/4328546
  // The only limitation is that it only works on English, which as long as you note, I think would be OK for a code challenge.
  let wordBank = str.replace(/[^\w\s]|_/g, "")
                    .replace(/\s+/g, " ")
                    .toLowerCase()
                    .split(" ")
