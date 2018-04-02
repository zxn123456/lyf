import myajax from "@/tool/myajax.js";

export default {
  bannerList(cb){
    const config = {
      url: "http://10.8.162.74:4000/api/banner",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  
  navList(cb){
    const config = {
      url: "http://10.8.162.74:4000/api/product",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  
   homeList(cb){
    const config = {
      url: "http://10.8.162.74:4000/api/list",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}
