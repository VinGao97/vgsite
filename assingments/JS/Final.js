  
$.getJSON("https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=us:*&key=f4541c19a88f3ba95f6e377c2ef455b97e6b82b6", 
  function(data){
    console.log(data);

    var input = $("#population");

    pop = data["1"]["1"];

    input.val(pop);
  }
);

var pop;
var inc;
var dec;

function buttonInc() {
  inc = setInterval(function(){
    document.getElementById('population').value = ++pop;
  },200);
  clearInterval(dec);
}

function buttonDec() {
  dec = setInterval(function(){
    document.getElementById('population').value = --pop;
  },200);
  clearInterval(inc);
}

function Stop() {
  clearInterval(dec);
  clearInterval(inc);
}