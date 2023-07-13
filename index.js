function isPalindrome(word) {
  // Convert the input string to lowercase
  word = word.toLowerCase();

  // Remove non-letter characters from the string
  word = word.replace(/[^a-z]/g, "");

  // Create a reversed version of the string
  const reversedWord = word.split("").reverse().join("");

  // Compare the original string with its reversed version
  if (word === reversedWord) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
