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

//var html_string= composehacked(url);
//document.getElementById('hack_iframe').src = "data:text/html;charset=utf-8," + html_string;
//debugger;
//document.getElementById('hack_iframe')
var iframe = document.getElementById('hack_iframe');
var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
addthescript(innerDoc);
//var innerviddiv = innerDoc.getElementById('vid');
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
  
  function composehacked(url)
  {
  var hackedcontent='<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8" /><title>Video sample</title></head><body><p>This is a JWPlayer video sample HTML</p><div id="videomine" style="width: 500px; height: 400px;" itemscope itemtype="https://schema.org/VideoObject"><meta itemprop="uploadDate" content="Thu Aug 01 2019 00:00:00 GMT+0300 (Eastern European Summer Time)"/><meta itemprop="name" content="Yoda &amp; Furry"/><meta itemprop="duration" content="PT57.4S" /><script src="'+url+'"></script></div></body></html>';
  return hackedcontent;
  }
function checkurlExists()
{
//alert('checking');
urlExists(url, function(exists){
//debugger;
if(exists){
  document.getElementById('lbltipAddedComment').innerHTML = 'URL available!';
  document.getElementById("lbltipAddedComment").style.color = "green";
  var duration = (new Date).getTime()-milliseconds;
  console.log('still there after ' + duration);
  }
  else
  {
  document.getElementById('lbltipAddedComment').innerHTML = 'URL not available!';
  document.getElementById("lbltipAddedComment").style.color = "red";
  var timedout = (new Date).getTime()-milliseconds;
  console.log('not available anymore, stopped after ' + timedout);
  clearTimeout(mytimer);
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