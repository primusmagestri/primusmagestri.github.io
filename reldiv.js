 $("#loadstuff").click(function() {
    var milliseconds = (new Date).getTime();
var expires = milliseconds+10;
var path = 'players/kvnuuipe-4FuizHuQ.js';
var secret='KsQ5gv8wydgEf6PtVuV0xqTi';
var thevalue=path+':'+expires+':'+secret;
var hash = md5(thevalue);
var url = 'https://content.jwplatform.com/'+path+'?exp='+expires+'&sig='+hash;
//url='https://cdn.jwplayer.com/players/kvnuuipe-4FuizHuQ.js';

var viddiv = document.getElementById('vid'),
    script = document.createElement('script'); // Create the script
// Set the script source
script.src = url;
viddiv.appendChild(script); // Append it
  });
  