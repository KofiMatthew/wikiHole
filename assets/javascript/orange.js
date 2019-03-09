var searchTerm = "";

$(document).ready(function() {

//allSearch function that calls each individual search function:
function allSearch(word) {    
    wikiSearch(word);
/*     soundCloud(word);
    listenNotes(word); */
};

//wikipedia function
function wikiSearch() {    
    var queryURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&uselang=user&errorformat=plaintext&search=' + searchTerm;   
    callWikipedia(queryURL).then(function(response) {
    
    //use this when switching to actual ajax and delete the line above
    /* $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
    */
    const resultPara = console.log(JSON.parse(response));    
    $("#wikiTitle").text(resultPara[0]);
    var wikiPara = $("<p>").append(resultPara[2]);
    $("#wikiPara").append(wikiPara);
    });    
};
//soundcloud function
/* function soundCloud() {

} */

//listen notes function
/* function listenNotes() {

} */

//double click function for grabbing search terms
var p = $("p");
p.css({ cursor: "pointer" });
p.dblclick(function(e) {
  var range =
    window.getSelection() ||
    document.getSelection() ||
    document.selection.createRange();
  searchTerm = $.trim(range.toString());
  if (searchTerm != "") {
    alert(searchTerm);
      allSearch(searchTerm)
  }
  range.collapse();
  e.stopPropagation();
});

//click function for search button
$("#basic-text").on("click", function(event) {
  event.preventDefault();
  searchTerm = $("#wikiSearch").val().trim();
  allSearch(searchTerm);
});

});



