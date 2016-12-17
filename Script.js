temp = function(evt){
 var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "/cgi-bin/a.cgi", false ); // false for synchronous request
    xmlHttp.send( null );
    alert( xmlHttp.responseText);
    window.history.pushState("object or string", "Title", "");
}



window.onload = function() {

  var x = document.getElementsByClassName("button")[0];
  x.onclick = temp;


}



