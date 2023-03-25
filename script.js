/*(function() {
'use strict';
document.getElementById('convert').addEventListener('submit', function(event) {
event.preventDefault();
var distance = parseFloat(document.getElementById('distance').value);
var answer = document.getElementById('answer');
if (distance) {
    var conversion = distance * 1.609344;
    var roundedconversion = conversion.toFixed(3);
    //alert(roundedconversion);
    answer.innerHTML = distance + ' ' + 'miles converts to' + ' ' + roundedconversion + ' ' + 'kilometers';
} else {
    answer.innerHTML = 'Please provide a number';
}

});
})();

(function() {
    document.getElementById('conv').addEventListener('sub', function(eve) {
        eve.preventDefault();
        var distancee = parseFloat(document.getElementById('distancee').value);
        var ans = document.getElementById('ans');
        if (distancee) {
            var convert = distancee / 1.609344;
            var roundedconvert = convert.toFixed(3);
            //alert(roundedconversion);
            ans.innerHTML = distancee + ' ' + 'KMs converts to' + ' ' + roundedconvert + ' ' + 'miles';
        } else {
            ans.innerHTML = 'Please provide a number';
        }

    });
})();

*/

function convertToKilometers() {
    const miles = parseFloat(document.getElementById("miles-input").value);
    const km = miles * 1.60934;
    document.getElementById("result-km").innerHTML = km.toFixed(2) + " km";
}

function convertToMiles() {
    const km = parseFloat(document.getElementById("km-input").value);
    const miles = km / 1.60934;
    document.getElementById("result-miles").innerHTML = miles.toFixed(2) + " miles";
}