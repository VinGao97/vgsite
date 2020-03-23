$(`#stock-search`).click(function(){
  var searchValue = $('#stock-name').val();
  $.getJSON(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${searchValue}&apikey=LQILJ4S1AR4O88QE`, 
    function(data){
    console.log(data);

    var date = data["Meta Data"]["3. Last Refreshed"];

    var stock = data["Meta Data"]["2. Symbol"];
    var info = data["Meta Data"]["1. Information"];
    var open = data["Time Series (Daily)"][date]["1. open"];
    var close = data["Time Series (Daily)"][date]["4. close"];
    var high = data["Time Series (Daily)"][date]["2. high"];
    var low = data["Time Series (Daily)"][date]["3. low"];
    var vol = data["Time Series (Daily)"][date]["5. volume"];
    var difference = close-open;
  
    $(".Stock-Name").append(stock);
    $(".info").append(info);
    $(".stock-open").append(open);
    $(".stock-close").append(close);
    $(".difference").append(difference);
    $(".date").append(date);
    $(".high").append(high);
    $(".low").append(low);
    $(".vol").append(vol);
    
    if(difference < 0){
      $(".stock").css("background-color", "red");
    }

    else{
      $(".stock").css("background-color", "green");

    }
  });
});
