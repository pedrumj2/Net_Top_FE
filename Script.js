temp = function(evt){
 var xmlHttp = new XMLHttpRequest();
   // xmlHttp.open( "GET", "/cgi-bin/a.cgi", true ); // false for synchronous request
    //xmlHttp.send( null );
  //  alert( xmlHttp.responseText);
  //  window.history.pushState("object or string", "Title", "");
   
    str =  `
    var nodes = new vis.DataSet([
        {id: 1, value: 2, label: '192.168.1.1', color : 'rgb(238, 0, 0)', x:1, y:1},
        {id: 2, value: 5, label: 'Node 2', color : 'rgb(100, 0, 100)', x:1, y:30},
        {id: 3, value: 7, label: 'Node 3', color : 'rgb(238, 0, 0)', x:1, y:60},
        {id: 4, value: 18, label: 'Node 4', color : 'rgb(238, 0, 0)', x:1, y:90},
        {id: 5, value: 24, label: 'Node 5', color : 'rgb(238, 0, 0)', x:1, y:120}
    ]);
 var x = document.getElementById("palet");
    // create an array with edges
    var edges = new vis.DataSet([
        {from: 1, to: 3,  value : 7, arrows:'to'},
        {from: 1, to: 2, value : 8, arrows:'to'},
        {from: 2, to: 4, value : 2, arrows:'to'},
        {from: 2, to: 5, value : 4, arrows:'to'}
    ]);
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
   `
    eval(str);
}



window.onload = function() {

  var x = document.getElementsByClassName("button")[0];
  x.onclick = temp;


}



