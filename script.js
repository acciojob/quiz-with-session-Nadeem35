//your JS code here.

// Do not change code below this line
// This code will just display the questions to the screen
 function firstNonRepeatedChar(str) {
      const count = {};

      for (let char of str) {
        count[char] = (count[char] || 0) + 1;
      }

      for (let char of str) {
        if (count[char] === 1) {
          return char;
        }
      }

      return null;
    }

    function runTest() {
      const input = document.getElementById("inputString").value.trim();
      const result = firstNonRepeatedChar(input);
      document.getElementById("result").innerText =
        "Result: " + (result === null ? "null" : `'${result}'`);
    }

    // Auto-run test cases
    console.log("Test 'aabbcdd' →", firstNonRepeatedChar("aabbcdd")); // 'c'
    console.log("Test 'aabbcc' →", firstNonRepeatedChar("aabbcc"));   // null
    console.log("Test 'abcab' →", firstNonRepeatedChar("abcab"));     // 'c'
    console.log("Test '' →", firstNonRepeatedChar(""));               // null
