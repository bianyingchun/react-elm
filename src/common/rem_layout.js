function calc_size() {
  const dpr = window.devicePixelRatio || 1;
  var scale = 1 / dpr;
  document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
  var deviceWidth = document.documentElement.clientWidth;
  if(deviceWidth > 640) deviceWidth = 640;
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + 'px';
}
calc_size();
window.onresize = calc_size;