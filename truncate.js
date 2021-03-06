// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
// longText (a String with several words in it)
// numWords (an Integer that sets the number of words you want in the returned text)

// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
// 2. Use the length attribute to find the number of words in the Array
// 3. Determine how many words should be removed from the String
// 4. Remove those words from the Array
// 5. Add an additional String item to the Array to put an ellipses in: "..."
// 6. Use the join() function to convert the Array back into a String
// 7. Return the truncated String from the Function

// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.


"use strict";

// function taking two arguments(original text and the total words in that text) and turning it into an array
// also using that array to find the number of words to remove to create the truncated text(shortText)
var truncateWords = function(longText, numWords){
    //split into an array
    var originalTextArray = longText.split(" ");
    // find the number of words in the array
    numWords = originalTextArray.length;
    // number or words - word limit = how many words need to be removed
    var remove = numWords - wordLimit;
    // word limit = where to start on string. then remove variable will tell how many words to remove and then adding "..." to the end
    originalTextArray.splice(wordLimit, (remove), '...');
    // joing everything backtogether to create the short version on the original string.
    var finalText = originalTextArray.join(' ');   
    console.log("Number of words in original text: " + numWords);
    console.log("Number of Words to remove: " + remove);
    return finalText
}
// original text that were using truncation on
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
// the maximum amount of words we want for our truncation
var wordLimit = 8;
console.log("Truncate Words!:")
var shortText = truncateWords(originalText, wordLimit)
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
console.log(' ');

"use strict";
// write a function turning a string into an array, find the original number of characters in the array.
// Then remove the characters that surpass the character limit and return that shorter string to create our truncated function.
var truncateCharacters = function (longText, maxCharacters){
    // turn presented text into an array
    var truncateCharactersArray = longText.split('');
    //find the character length of the array
    var charLength = truncateCharactersArray.length;
    console.log("Characters in the text: " + truncateCharactersArray.length);
    // find the number of characters to remove from the original string
    var characterRemoval = charLength - maxCharacters;
    console.log("Number of characters to remove: " + characterRemoval);
    // splice the string so it starts at the character limit and removes the excess characters and adds an '...' to the end of the string
    truncateCharactersArray.splice(maxCharacters, characterRemoval, '...');
    // finally join the array back into a string so it creates our truncated short text.
    var finalText = truncateCharactersArray.join('');
  
    return finalText;
}
// original text that were using truncation on
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
//max characters wanted in our new string
var characterLimit = 46;
console.log("Truncate Characters!:")
var shortText = truncateCharacters(originalText, characterLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
