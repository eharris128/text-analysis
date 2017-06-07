
var form = $('.js-form');
var hidden = $('.hidden');

function getAvgWordLength(tokens) {
  var totalLength = tokens.join("").length;
  return (totalLength / tokens.length).toFixed(2);
}

function countUniqueWords(tokens) {

  var uniqueWords = [];
  for (var i = 0; i < tokens.length; i++) {
    if (uniqueWords.indexOf(tokens[i]) === -1) {
      uniqueWords.push(tokens[i]);
    }
  }
  return uniqueWords.length;
}

function getTokens(text) {
   return text.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}


function noReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

function resultsOutput(text) {

  var tokens = getTokens(text);
  var numUniqueWords = countUniqueWords(tokens);
  var numTotalWords = tokens.length;
  var averageWordLength = getAvgWordLength(tokens);

  var textReport = $('.js-text-report');
  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-word-count').text(numUniqueWords);
  textReport.find('.js-average-word-length').text(
    averageWordLength + " characters");
}

function printResults() {
  form.submit(function(e) {
    e.preventDefault();
    hidden.removeClass('hidden'); 
    var userText = $(this).find('#user-text').val();
    resultsOutput(noReturns(userText));
  });
}

$(function() {
  printResults();
});