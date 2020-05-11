var pop;
var delta = 0;
var birthRate = 0;
var deathRate = 0;
var childRate = 0;
  
$.getJSON("https://api.census.gov/data/2018/pep/population?get=GEONAME,POP&for=us:*&key=f4541c19a88f3ba95f6e377c2ef455b97e6b82b6", 
  function(data){
    console.log(data);

    var input = $("#population");

    pop = parseInt(data["1"]["1"]);

    input.html(pop);
  }
);

function healthcare() {
  delta = delta+100;
  deathRate=deathRate-100;
  if(deathRate < 0){
    deathRate = 0;
  }
  $("#deathRate").html(deathRate);
}

function increaseBirthRate() {
  delta = delta+1;
  birthRate=birthRate+1;
  $("#birthRate").html(birthRate);
}

function childrenPerWomen() {
  delta = delta+(birthRate*childRate);
  childRate=childRate+1;
  $("#childRate").html(childRate);
}

function increaseDeathRate() {
  delta = delta-1;
  deathRate=deathRate+1;
  $("#deathRate").html(deathRate);
}

function naturalDisaster() {
  delta = delta-50;
  pop = pop-10000;
  deathRate=deathRate+50;
  $("#deathRate").html(deathRate);
}

function Famine() {
  delta = (delta-deathRate) + childRate;
  childRate=childRate-5;
  if(childRate < 0){
    childRate = 0;
  }
  $("#childRate").html(childRate);
  deathRate=deathRate+20;
  $("#deathRate").html(deathRate);
}

function Stop() {
  clearInterval(loop);
}

function loop() {
  pop = pop+delta;
  console.log(delta)
  $("#population").html(pop);
  $("#growthrate").html(delta);
}


$(document).ready(function() {
  mainLoop = setInterval(loop,200);
})