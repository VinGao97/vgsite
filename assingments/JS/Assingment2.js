function deck() {

    function card(r,s) {
        this.rank = r;
        this.suit = s;
    }

    this.order = [
    new card('A','spades'), new card('2','spades'), new card('3','spades'), new card('4','spades'), new card('5','spades'),
    new card('6','spades'), new card('7','spades'), new card('8','spades'), new card('9','spades'), new card('10','spades'),
    new card('J','spades'), new card('Q','spades'), new card('K','spades'),
    new card('A','clubs'), new card('2','clubs'), new card('3','clubs'), new card('4','clubs'), new card('5','clubs'),
    new card('6','clubs'), new card('7','clubs'), new card('8','clubs'), new card('9','clubs'), new card('10','clubs'),
    new card('J','clubs'), new card('Q','clubs'), new card('K','clubs'),
    new card('A','hearts'), new card('2','hearts'), new card('3','hearts'), new card('4','hearts'), new card('5','hearts'),
    new card('6','hearts'), new card('7','hearts'), new card('8','hearts'), new card('9','hearts'), new card('10','hearts'),
    new card('J','hearts'), new card('Q','hearts'), new card('K','hearts'),
    new card('A','diams'), new card('2','diams'), new card('3','diams'), new card('4','diams'), new card('5','diams'),
    new card('6','diams'), new card('7','diams'), new card('8','diams'), new card('9','diams'), new card('10','diams'),
    new card('J','diams'), new card('Q','diams'), new card('K','diams')
    ];

    this.shuffle = function() {
        for (var i = 0; i < this.order.length; i++) {
            var j = i;
            while (j==i) {
                j = Math.floor(Math.random() * this.order.length);
            }
            var tmp = this.order[i];
            this.order[i] = this.order[j];
            this.order[j] = tmp;
        }
    };

    this.shuffle();

    this.top_card = function() {
        if(this.order.length==0)
            return false;
        this.order.shift();
        return true;
    };
}

$(document).ready(function(){
                    var d;

                    function cardDOM(c,m) {
                        if(c) {
                            return $('<div class="card ' + c.suit + '"' + (m?' style="margin-right:'+m+';"':'') + '><div class="top_rank">' + c.rank + '</div><div class="top_suit">&' + c.suit + ';</div><div class="suit">&' + c.suit + ';</div><div class="bottom_suit">&' + c.suit + ';</div><div class="bottom_rank">' + c.rank + '</div></div>');
                        }
                    }

                    $("#new_deck").click(function(){
                        $("#cards").html('');
                        d = new deck();
                        d.order;
                        for(i=0;i<d.order.length;i++) {
                            $('#cards').prepend(cardDOM(d.order[i]));
                        }
                        $("#cards .card").animate({marginRight:"-200px"},2000,"swing");
                        $("#shuffle_deck").addClass("enabled");
                        $("#top_card_deck").addClass("enabled");
                        return false;
                    });
                    $("#shuffle_deck").click(function(){
                        if(d) {
                            d.shuffle();
                            $("#cards").html('');
                            for(i=0;i<d.order.length;i++) {
                                $('#cards').prepend(cardDOM(d.order[i],"-107px"));
                            }
                        }
                        return false;
                    });
                    $("#top_card_deck").click(function(){
                        if(d) {
                            if(d.top_card()) {
                                $("#cards .card:last").css('position','relative').animate({marginTop:"100px",marginLeft:"300px"},"slow","swing",function(){
                                    $("#cards .card:last").remove();
                                });

                            } else {
                                d = null;
                                $("#shuffle_deck").removeClass("enabled");
                                $("#top_card_deck").removeClass("enabled");
                                if(confirm("You don't have any cards left. Would you like a new Deck?")) {
                                    $("#new_deck").click();
                                }
                            }
                        }
                        return false;
                    });
                });