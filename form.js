/* Control Planet Appearance */
function updatePlanetColor(){
    document.getElementById('theplanet').style.background = document.getElementById('planetcolor').value;
}

function updatePlanetName(){
    document.getElementById('planetname').innerHTML = document.getElementById('planetnameinput').value;
}


function updatePlanetSize(){
    var size = $('#size').val();
    $('#theplanet').width(size);
    $('#theplanet').height(size);
}

$( '#build' ).click(function() {
  updatePlanetColor();
  updatePlanetSize();
  updatePlanetName();
});

$( '#build' ).click(function() {
  updatePlanetColor();
  updatePlanetSize();
  updatePlanetName();
});

$( '#moon-add' ).click(function() {
    $('.moon').toggle()
});

$( '#rocket' ).click(function() {
    $('.rocket-box').slideUp('3000')
});





