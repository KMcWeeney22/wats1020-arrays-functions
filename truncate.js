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
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var truncateWords = function(longText, numWords){
    var originalTextArray = longText.split(" ");
    numWords = originalTextArray.length;
    var remove = numWords - wordLimit;
    var shortened = originalTextArray.splice(wordLimit, (numWords - wordLimit), '...');
    var shortText = originalTextArray.join(' ');   
    console.log("Number of words in original text: " + numWords);
    console.log("Number of Words to remove: " + remove);
    console.log('originalText: ' + originalText);
    console.log('shortText: ' + shortText);

}
var shortText = truncateWords(originalText, wordLimit)

