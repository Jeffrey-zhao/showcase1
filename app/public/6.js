var iframe=document.createElement('iframe');
iframe.src='http://x.stuq.com:7001/public/6.child.hash.html';
document.body.appendChild(iframe);

window.onhashchange=function(){
	console.log('zhao');
	console.log(location.hash.substring(1).split('=')[1])
	console.log(getQueryString(location.hash,'msg'));
}

function getQueryString(url,name) { 
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
var r = url.substr(1).match(reg); 
if (r != null) return unescape(r[2]); return null; 
} 