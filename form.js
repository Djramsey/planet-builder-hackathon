function updatePlanetColor(){
    document.getElementById('theplanet').style.background = document.getElementById('planetcolor').value
}


function updatePlanetSize(){
    var size = $('#size').val()
    $('#theplanet').width(size)
    $('#theplanet').height(size)
}

$( '#build' ).click(function() {
  updatePlanetColor()
  updatePlanetSize()
});