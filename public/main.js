
function countdown() {
    var countDownDate = new Date("Mar 21, 2021 23:59:00").getTime();
        var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "→ Submissions end in " + days + " days " + hours + " hours "
  + minutes +  " minutes " + seconds + " seconds. ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "→ Submissions for this event are now closed.";
  }
}, 1000);
}