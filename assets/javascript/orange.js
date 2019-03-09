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
    const resultPara = JSON.parse(response);    
    $("#wikiTitle").text(resultPara[0]);
    var wikiPara = $("<p id='wikiParagraph'>")
        .append(resultPara[2])
        .css({cursor: "pointer"})
        .dblclick(function(e) {
            alert("you clicked me!")
          var range =
            window.getSelection() ||
            document.getSelection() ||
            document.selection.createRange();
          searchTerm = $.trim(range.toString());
          console.log(searchTerm)
          if (searchTerm != "") {
            allSearch(searchTerm)
          }
          e.stopPropagation();
        });
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
/* $(document).on("click", ".transit", displayGos); */



//click function for search button
$("#basic-text").on("click", function(event) {
  event.preventDefault();
  searchTerm = $("#wikiSearch").val().trim();
  allSearch(searchTerm);
});

});



