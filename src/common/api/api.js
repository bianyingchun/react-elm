import axios from 'axios';
export function getShopList(pos, offset, option) {
  return new Promise((resolve, reject) => {
   axios.get('/api/shopList.json').then(res => {
      resolve({err:null, data:res.data})
    }).catch(error => {
      reject({err:error})
    })   
  })
}
export function getShopDetail(id) {
  console.log('getShopDetail', id)
  return new Promise((resolve, reject) => {
    axios.get('/api/shopDetail.json').then(res => {
      resolve({err:null, data:res.data})
    }).catch(error => {
      reject({err:error});
    })
  })
}
  // pos = {
  //   latitude:31,
  //   longitude:121
  // }
  // option = {
  //   quality_union:1,
  //   activity_types:2
  // }
  // offset = 0;
  // var url = 'https://h5.ele.me/restapi/shopping/v3/restaurants',
  // params = {
  //   latitude: pos.latitude,
  //   longitude: pos.longitude,
  //   offset: offset,
  //   limit: 8,
  //   'extras[]': 'activities',
  //   'extra_filters': 'home',
  //   quality_union: option.quality_union,
  //   'activity_types[]': option.activity_types,
  //   rank_id: option.rank_id,
  //   terminal: 'h5',
  // };
  // axios.get(url, {
  //   params :params
  // }).then(res => {
  //   console.log(res)
  // }).catch(err => {
  //   console.log(err)
  // })
