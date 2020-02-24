$.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=LQILJ4S1AR4O88QE", 
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



  }
);

$.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=LQILJ4S1AR4O88QE", 
  function(data){
    console.log(data);

    var date = data["Meta Data"]["3. Last Refreshed"];


    var stock = data["Meta Data"]["2. Symbol"];
    var info = data["Meta Data"]["1. Information"];
    var open = data["Time Series (Daily)"][date]["1. open"];
    var close = data["Time Series (Daily)"][date]["4. close"];
    var difference = close-open;
    var high = data["Time Series (Daily)"][date]["2. high"];
    var low = data["Time Series (Daily)"][date]["3. low"];
    var vol = data["Time Series (Daily)"][date]["5. volume"];


    $(".Stock-NameT").append(stock);
    $(".infoT").append(info);
    $(".stock-openT").append(open);
    $(".stock-closeT").append(close);
    $(".differenceT").append(difference);
    $(".dateT").append(date);
    $(".highT").append(high);
    $(".lowT").append(low);
    $(".volT").append(vol);

    if(difference < 0){
      $(".stockT").css("background-color", "red");
    }
    else{
      $(".stockT").css("background-color", "green");

    }



  }
);

$.getJSON("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AMD&apikey=LQILJ4S1AR4O88QE", 
  function(data){
    console.log(data);

    var date = data["Meta Data"]["3. Last Refreshed"];


    var stock = data["Meta Data"]["2. Symbol"];
    var info = data["Meta Data"]["1. Information"];
    var open = data["Time Series (Daily)"][date]["1. open"];
    var close = data["Time Series (Daily)"][date]["4. close"];
    var difference = close-open;
    var high = data["Time Series (Daily)"][date]["2. high"];
    var low = data["Time Series (Daily)"][date]["3. low"];
    var vol = data["Time Series (Daily)"][date]["5. volume"];


    $(".Stock-NameA").append(stock);
    $(".infoA").append(info);
    $(".stock-openA").append(open);
    $(".stock-closeA").append(close);
    $(".differenceA").append(difference);
    $(".dateA").append(date);
    $(".highA").append(high);
    $(".lowA").append(low);
    $(".volA").append(vol);

    if(difference < 0){
      $(".stockA").css("background-color", "red");
    }
    else{
      $(".stockA").css("background-color", "green");

    }



  }
);