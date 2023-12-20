function myFunction() {
  var txt;
  if (confirm("Ok but like– are you sure?")) {
    txt = "I don't think so man, I'm getting bad vibes.";
  } else {
    txt = "This isn't the vibe today; pick another one, please. For the love of God.";
  }
  
  document.getElementById("demo").innerHTML = txt;
}
