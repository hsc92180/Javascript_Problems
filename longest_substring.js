function lengthOfLongestSubstring(s) {

    let maxLength = 0;
    
    let start = 0;
    
    const charIndexMap = {};
    
    for (let end = 0; end < s.length; end++) { 
        const char = s[end];
    
        if (charIndexMap[char] >= start) { 
            start = charIndexMap[char] + 1;
        }
        
        charIndexMap[char] = end;
        
        const currentLength = end - start + 1;
        
        maxLength = Math.max(maxLength, currentLength);
        
    }
        
    return maxLength;
    
    }
    
    console.log(lengthOfLongestSubstring("abcabcbb"));
    
    console.log(lengthOfLongestSubstring("bbbbb"));
    
    console.log(lengthOfLongestSubstring("pwwkew"));