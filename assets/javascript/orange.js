$(document).ready(function() {

  //double click function for grabbing search terms
  var p = $("p");
  p.css({ cursor: "pointer" });
  p.dblclick(function(e) {
    var range =
      window.getSelection() ||
      document.getSelection() ||
      document.selection.createRange();
    var word = $.trim(range.toString());
    if (word != "") {
      alert(word);
        //call function allSearch 
    }
    range.collapse();
    e.stopPropagation();
  });

//allSearch function that calls each individual search function:
function allSearch() {
    wikiSearch();
    soundCloud();
    listenNotes();
}

//wikipedia function
function wikiSearch() {

}

//soundcloud function
function soundCloud() {

}

//listen notes function
function listenNotes() {

}

/* allSearch(); */
});
