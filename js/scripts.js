$(function() {
  $(".form1").submit(function(event) {
    var input = $("#input").val().toLowerCase();
    var reg = /^[a-z]+$/;
    var sentence = "";

    for(let i=0; i<input.length; i++) {
      if(reg.test(input.charAt(i))) {
        sentence += input.charAt(i);
      }
    }

    var rows = Math.ceil(Math.sqrt(sentence.length));
    var cols = 0;

    if(Math.sqrt(sentence.length) % 1 === 0) {
      cols = rows;
    } else {
      cols = rows-1;
    }


    for(let i=0; i<sentence.length; i+=cols) {
      console.log(sentence[i]);
    }


    event.preventDefault();
  });
});
