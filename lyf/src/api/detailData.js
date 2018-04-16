import myajax from "@/tool/myajax.js";

export default {
  goodsData(goodsID,cb){
    const config = {
      url: "http://localhost:4000/api/list/detail?goodsID=" + goodsID ,
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  goodsList(goodID, cb) {
    const config = {
      url: "http://localhost:4000/api/kindlist/detail?goodID=" + goodID,
      options: {},
      success: (data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}
