<<<<<<< HEAD
$(document).ready(function () {

  //double click function for grabbing search terms
  var p = $("p");
  p.css({ cursor: "pointer" });
  p.dblclick(function (e) {
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


//at front page hide content
$('main').hide();

//creat a function to hide front page and display content
function crossTheEventHorizon() {
  $('main').show();
  $('.hero-image').hide();
}


$('#dive-in-btn').on(click, function () {
  crossTheEventHorizon();
  console.log('hi')
})
=======
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
    /* $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
    }), */
    response = console.log(JSON.parse(response));
    
    $("#wikiTitle").text(response[0]);
    var wikiPara = $("<p>").append(response[2]);
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

>>>>>>> master


