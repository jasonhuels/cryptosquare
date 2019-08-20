$(function() {
  $(".form1").submit(function(event) {
    var input = $("#input").val().toLowerCase();
    var reg = /^[a-z]+$/;
    var sentence = "";
    var crypto = "";
    var output = "";

    for(let i=0; i<input.length; i++) {
      if(reg.test(input.charAt(i))) {
        sentence += input.charAt(i);
      }
    }

    var rows = Math.ceil(Math.sqrt(sentence.length));
    var cols = Math.floor(Math.sqrt(sentence.length));

    for(let a=0; a<rows-1; a++) {
      for(let i=0; i<sentence.length; i+=cols) {
        if(sentence[i+a]) {
          crypto += sentence[i+a];
        }
      }
    }

    console.log(crypto);
    event.preventDefault();
  });
});
