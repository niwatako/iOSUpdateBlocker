function FindProxyForURL(url,host){
  var lowerCaseURL = url.toLowerCase();
  if(shExpMatch(lowerCaseURL, "*://mesu.apple.com/*") || shExpMatch(lowerCaseURL, "*://appldnld.apple.com/*")){
    return "PROXY 8.8.8.8:53";
  }
  return "DIRECT";
}
