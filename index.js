
function isPalindrome(word) {
  const wordLength = word.length;
  for (let i = 0; i < wordLength; i++) {
    if(word[i]!==word[word.length - 1-i]){
      return "the word is not  a palindrome";
    }
  }
  return "the word is a palindrome";
}
const chechWord= isPalindrome(word);
// // console.log(chechWord);
}
/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
