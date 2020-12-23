var prompt = prompt("Please enter a passage: ");
document.write("<p>" + prompt + "</p>");
prompt = prompt.split(" ");
var how_many_words = prompt.length;
document.write("<p>Total amount of words: " + how_many_words + "</p>");
document.write("<p>Using google, I found out that that answer is different depending on what browser you are using. Chrome is around 2,000 characters, in comparison to other browsers that are around 10,000 characters.</p>")