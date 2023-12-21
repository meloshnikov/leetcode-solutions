/** 383. Ransom Note **/

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.
*/


/*
Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

*/


/**  Solution **/

const canConstruct = (ransomNote: string, magazine: string): boolean => {
    for (const char of ransomNote) {
      if (!magazine.includes(char)) return false
      magazine = magazine.replace(char, '')
    }
    return true;
  };
