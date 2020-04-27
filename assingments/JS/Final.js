  
$.getJSON("https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=us:*&key=f4541c19a88f3ba95f6e377c2ef455b97e6b82b6", 
  function(data){
    console.log(data);

    var input = $("#inc");

    pop = data["1"]["1"];

    input.val(pop);
  }
);

var pop;

function buttonInc() {
  setInterval(function(){
    document.getElementById('inc').value = ++pop;
  },200);
}

function buttonDec() {
  setInterval(function(){
    document.getElementById('inc').value = --pop;
  },200);
}


