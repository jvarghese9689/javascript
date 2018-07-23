var firstInterval;
document.getElementById("front").addEventListener('click', function() {
    firstInterval = setInterval(function() {
    document.getElementById("output").value += document.getElementById("input").value.charAt(0);
    document.getElementById("input").value = document.getElementById("input").value.substr(1);
    if (document.getElementById("input").value.length == 0) {
      clearInterval(firstInterval);
    }

  }, 1000)
});

document.getElementById("reverse").addEventListener('click', function() {
   firstInterval = setInterval(function() {
    document.getElementById("input").value = 
    document.getElementById("output").value.charAt(document.getElementById("output").value.length - 1) + 
    document.getElementById("input").value;
    document.getElementById("output").value = 
    document.getElementById("output").value.substr(0, document.getElementById("output").value.length - 1);
    if (document.getElementById("output").value.length == 0) {
      clearInterval(firstInterval);
    }
  }, 1000)
});

document.getElementById("pause").addEventListener('click', function() {
  clearInterval(firstInterval);

});
