 var xmlHttp = new XMLHttpRequest();

handleStateChange = function(evt){

if (xmlHttp.readyState === 4){
str =xmlHttp.responseText;
   /// alert(str);
     var x = document.getElementById("palet");
   //  x.setInnerHTML = str;
    // str = "\`" + str  + "\`";
     alert(str);
}

}


temp = function(evt){

   //  // false for synchronous request
    //xmlHttp.send( null );
  //  alert( xmlHttp.responseText);
  //  window.history.pushState("object or string", "Title", "");
  x =  document.getElementById("int").value;
  y =  document.getElementById("tstart").value;
   z =  document.getElementById("start").value;
  g =  parseInt(y)+parseInt(z);
    //xmlHttp.onreadystatechange=handleStateChange;
      xmlHttp.open( "GET", "/cgi-bin/a.cgi?intTime=" + x + "&startTime=" +String(g), false );
    xmlHttp.send("fasd" );
    str =xmlHttp.responseText;
    var x = document.getElementById("palet");
    x.innerHTML = str;
    eval(str);
   
    
  /*  str = `var nodes = new vis.DataSet([
{id: 1, value: 3, label: "192.168.202.79"},
{id: 2, value: 2, label: "192.168.229.254"},
{id: 3, value: 6, label: "192.168.215.1"},
{id: 4, value: 7, label: "192.168.202.100"},
{id: 5, value: 9, label: "192.168.205.1"},
{id: 6, value: 10, label: "192.168.202.101"},
{id: 7, value: 11, label: "192.168.204.1"},
{id: 8, value: 12, label: "192.168.202.76"},
{id: 9, value: 14, label: "192.168.229.1"},
{id: 10, value: 20, label: "192.168.212.1"},
{id: 11, value: 23, label: "192.168.216.1"},
{id: 12, value: 24, label: "192.168.219.1"},
{id: 13, value: 25, label: "192.168.228.1"},
{id: 14, value: 26, label: "192.168.211.1"},
{id: 15, value: 27, label: "192.168.227.1"},
{id: 16, value: 28, label: "192.168.220.1"},
{id: 17, value: 29, label: "192.168.207.1"},
{id: 18, value: 30, label: "192.168.206.1"},
{id: 19, value: 31, label: "192.168.201.1"},
{id: 20, value: 32, label: "192.168.214.1"},
{id: 21, value: 16, label: "192.168.202.1"},
{id: 22, value: 33, label: "192.168.202.89"},
{id: 23, value: 34, label: "192.168.213.1"},
{id: 24, value: 35, label: "192.168.208.1"},
{id: 25, value: 36, label: "192.168.217.1"},
{id: 26, value: 37, label: "192.168.218.1"},
{id: 27, value: 38, label: "192.168.21.203"},
{id: 28, value: 41, label: "192.168.202.93"},
{id: 29, value: 43, label: "192.168.203.1"},
{id: 30, value: 39, label: "192.168.202.68"},
{id: 31, value: 40, label: "192.168.202.102"},
{id: 32, value: 48, label: "192.168.1.254"},
{id: 33, value: 46, label: "192.168.202.91"},
{id: 34, value: 4, label: "192.168.229.251"},
{id: 35, value: 5, label: "192.168.229.153"},
{id: 36, value: 257, label: "224.0.0.10"},
{id: 37, value: 8, label: "192.168.27.25"},
{id: 38, value: 15, label: "192.168.27.253"},
{id: 39, value: 258, label: "192.168.169.254"},
{id: 40, value: 17, label: "192.168.27.152"},
{id: 41, value: 259, label: "64.4.23.149"},
{id: 42, value: 18, label: "192.168.27.102"},
{id: 43, value: 13, label: "192.168.27.103"},
{id: 44, value: 21, label: "192.168.27.101"},
{id: 45, value: 260, label: "157.56.52.15"},
{id: 46, value: 42, label: "192.168.27.1"},
{id: 47, value: 19, label: "192.168.27.203"},
{id: 48, value: 22, label: "192.168.27.202"},
{id: 49, value: 261, label: "157.55.56.150"},
{id: 50, value: 262, label: "157.55.235.162"},
{id: 51, value: 263, label: "178.63.97.34"},
{id: 52, value: 59, label: "192.168.229.101"},
{id: 53, value: 264, label: "149.5.45.166"},
{id: 54, value: 265, label: "192.168.202.255"},
{id: 55, value: 266, label: "10.20.250.49"},
{id: 56, value: 267, label: "10.50.253.160"},
{id: 57, value: 268, label: "172.19.1.100"},
{id: 58, value: 270, label: "157.55.56.160"},
{id: 59, value: 271, label: "157.56.52.24"},
{id: 60, value: 272, label: "10.61.9.10"},
{id: 61, value: 273, label: "10.7.137.108"},
{id: 62, value: 44, label: "192.168.28.254"},
{id: 63, value: 274, label: "10.10.9.109"},
{id: 64, value: 45, label: "192.168.23.253"},
{id: 65, value: 275, label: "85.25.145.98"},
{id: 66, value: 49, label: "192.168.229.156"},
{id: 67, value: 277, label: "157.55.130.165"},
{id: 68, value: 269, label: "10.7.136.159"},
{id: 69, value: 276, label: "239.255.255.250"},
{id: 70, value: 47, label: "192.168.205.253"}]);
var x = document.getElementById("palet");
var edges = new vis.DataSet([
{from : 2, to: 3, value: 274},
{from : 3, to: 4, value: 286},
{from : 3, to: 5, value: 1},
{from : 3, to: 49, value: 1},
{from : 3, to: 59, value: 4},
{from : 6, to: 257, value: 1},
{from : 7, to: 8, value: 32},
{from : 7, to: 13, value: 43},
{from : 7, to: 15, value: 40},
{from : 7, to: 16, value: 1},
{from : 7, to: 17, value: 33},
{from : 7, to: 18, value: 64},
{from : 7, to: 19, value: 31},
{from : 7, to: 21, value: 38},
{from : 7, to: 22, value: 30},
{from : 7, to: 42, value: 30},
{from : 9, to: 257, value: 1},
{from : 10, to: 258, value: 1},
{from : 11, to: 257, value: 1},
{from : 12, to: 16, value: 1},
{from : 12, to: 259, value: 3},
{from : 12, to: 260, value: 3},
{from : 12, to: 261, value: 3},
{from : 12, to: 262, value: 3},
{from : 12, to: 264, value: 3},
{from : 12, to: 265, value: 1},
{from : 12, to: 270, value: 3},
{from : 12, to: 271, value: 3},
{from : 12, to: 274, value: 1},
{from : 12, to: 277, value: 2},
{from : 14, to: 257, value: 1},
{from : 16, to: 33, value: 1},
{from : 16, to: 41, value: 1},
{from : 16, to: 257, value: 1},
{from : 20, to: 257, value: 1},
{from : 23, to: 257, value: 1},
{from : 24, to: 257, value: 1},
{from : 25, to: 257, value: 1},
{from : 26, to: 257, value: 1},
{from : 27, to: 257, value: 1},
{from : 28, to: 257, value: 1},
{from : 29, to: 257, value: 1},
{from : 30, to: 257, value: 1},
{from : 31, to: 257, value: 1},
{from : 32, to: 257, value: 1},
{from : 33, to: 263, value: 1},
{from : 33, to: 265, value: 1},
{from : 33, to: 266, value: 1},
{from : 33, to: 267, value: 1},
{from : 33, to: 269, value: 1},
{from : 33, to: 272, value: 1},
{from : 33, to: 273, value: 5},
{from : 33, to: 275, value: 1},
{from : 34, to: 257, value: 1},
{from : 35, to: 257, value: 1},
{from : 36, to: 257, value: 1},
{from : 37, to: 257, value: 1},
{from : 38, to: 39, value: 1},
{from : 39, to: 44, value: 1},
{from : 39, to: 45, value: 1},
{from : 40, to: 265, value: 1},
{from : 41, to: 268, value: 2},
{from : 43, to: 257, value: 1},
{from : 46, to: 47, value: 1},
{from : 48, to: 276, value: 1}]);
var data = {
        nodes: nodes,
        edges: edges
    };
     var options = {
        nodes: {
          shape:'dot',
            scaling: {
            customScalingFunction: function (min,max,total,value) {
              return value/total;
            },
            min:5,
            max:60
          }
    
        }, 
        
         edges: {
            scaling: {
            customScalingFunction: function (min,max,total,value) {
              return value/total;
            },
            min:1,
            max:10
          }  
        },
       physics: false
     };
     var network = new vis.Network(x, data, options);
`;
    eval(str);*/
}



window.onload = function() {

  var x = document.getElementsByClassName("button")[0];
  x.onclick = temp;
  var x = document.getElementById("int");
  x.value = 5;
  var x = document.getElementById("tstart");
  x.value = 1331901000;
  
  var x = document.getElementById("start");
  x.value = 20;

}



