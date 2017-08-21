var iframe = document.createElement('iframe')
iframe.src = 'http://x.stuq.com:7001/public/hash.html'
document.body.appendChild(iframe)

window.onhashchange = function () {
  // 小练习，做个工具方法，取出query的值
  // var reg=/(?<=\?|&)[\w\={}\\\\,-:'\s'""]*(?=[^#\s]|)/;
  // var msg=l
  console.log(location.hash)
}