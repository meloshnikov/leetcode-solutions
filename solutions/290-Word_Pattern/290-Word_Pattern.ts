/** 290. Word Pattern **/

/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.
*/


/*
Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:

Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
*/


/**  Solution **/

const wordPattern = (pattern: string, s: string): boolean => {
  const t = s.split(' ');
  if (pattern.length !== t.length) return false;
  for (let i = 0; i < t.length; i++) {
    if (pattern.indexOf(pattern[i]) !== t.indexOf(t[i])) return false;
  }

return true;
};
