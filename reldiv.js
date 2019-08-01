var timedout;
var milliseconds;
var mytimer;
var url;
 //$("#loadstuff").click(
 
 function setup() {
    milliseconds = (new Date).getTime();
var expires = Math.round(milliseconds/1000)+100;
//debugger;
var path = 'players/kvnuuipe-4FuizHuQ.js';
var secret='KsQ5gv8wydgEf6PtVuV0xqTi';
var thevalue=path+':'+expires+':'+secret;
var hash = md5(thevalue);
url = 'https://content.jwplatform.com/'+path+'?exp='+expires+'&sig='+hash;
//url='https://cdn.jwplayer.com/players/kvnuuipe-4FuizHuQ.js';
console.log(url);
console.log(expires);



mytimer = setInterval(checkurlExists, 10000);
addthescript(document);

var iframe = document.getElementById('hack_iframe');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
addthescript(innerDoc);

  }
  //);

  function addthescript(thedocument)
  {
  //debugger;
  var viddiv = thedocument.getElementById('vid'),
    script = thedocument.createElement('script'); // Create the script
// Set the script source
script.src = url;
viddiv.appendChild(script); // Append it

  }
  
  
function checkurlExists()
{
//alert('checking');
urlExists(url, function(exists){
//debugger;
var durationsec = Math.round(((new Date).getTime()-milliseconds)/1000);
if(exists){
  document.getElementById('lbltipAddedComment').innerHTML = 'URL still available after ' + durationsec + ' sec';
  document.getElementById("lbltipAddedComment").style.color = "green";
  
  console.log('still there after ' + durationsec);
  }
  else
  {
  if(!timedout)
  {
	timedout=durationsec;
	console.log('not available anymore, stopped after ' + timedout);
	}
  document.getElementById('lbltipAddedComment').innerHTML = 'URL not available anymore after ' + durationsec + ' sec';
  document.getElementById("lbltipAddedComment").style.color = "red";
  
  
  //clearTimeout(mytimer);
  }
  
});

var iframe = document.getElementById('hack_iframe');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
addthescript(innerDoc);

}  
  function urlExists(url, callback){
  $.ajax({
    type: 'HEAD',
    url: url,
    success: function(){
      callback(true);
    },
    error: function() {
      callback(false);
    }
  });
}