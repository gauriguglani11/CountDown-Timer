var dest= new Date("sept 11, 2020 00:00:00").getTime();


var x= setInterval(function(){

var now = new Date().getTime();

var Diff = dest - now;

var Days = Math.floor(Diff/(24*60*60*1000));

var hours = Math.floor((Diff% (24*60*60*1000))/(60*60*1000));

var mins = Math.floor((Diff% (24*60*60*1000))/(60*1000));

var secs = Math.floor((Diff% (24*60*60*1000))/(1000));
document.getElementById("demo").innerHTML = Days + "D : " + hours + "Hrs : " + mins + "Mins : " + secs + "sec"

},1000);
