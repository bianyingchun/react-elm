
export  function getLocation() {
  // function success(position) {
  //   var longitude =position.coords.longitude;
  //   var latitude = position.coords.latitude;
  // }
  // function error(position) {

  // }
  // const option = {
  //   enableHighAccuracy:true, //boolean
  // }
  // navigator.geolocation.getCurrentPosition(success, error, option);
};

export function formatDistance(number) {
  if(number < 1000) return number+'米';
  return (number / 1000).toFixed(2) + '千米';
}

export function getImgaeUrl(path, is_bg) {
  const p1 = path.substring(0,1);
  const p2 = path.substring(1,3);
  const p3 = path.substring(3);
  let p4 = 'png';
  // const reg = /\.(jpg|jpeg|png|bmp)$/
  if(p3.lastIndexOf('jpeg')===p3.length-4) p4 = 'jpeg'
  if(is_bg) {
    return `https://fuss10.elemecdn.com/${p1}/${p2}/${p3}.${p4}?imageMogr/format/webp/thumbnail/750x/`
  }
  return `https://fuss10.elemecdn.com/${p1}/${p2}/${p3}.${p4}?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/`
 }

export function getWinHeight() {
  return window.innerHeight || document.body.clientHeight||document.documentElement.clientHeight;
}