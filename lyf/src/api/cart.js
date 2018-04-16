import myajax from "@/tool/myajax.js";

export default {
  cart(params,cb){
    const config = {
      url: "http://localhost:4000/api/users/cart?mpName=" + params.mpName + "&picUrl=" + params.picUrl + "&price=" + params.price + "&stockNum" + params.stockNum+"&num="+params.num*1+"&code="+params.code,
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  cartData(cb) {
    const config = {
      url: "http://localhost:4000/api/users/cartfind",
      options: {},
      success: (data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  cartupdata(params,cb) {
    const config = {
      url: "http://localhost:4000/api/users/cartupdata?code=" + params.code + "&picUrl=" + params.picUrl + "&mpName=" + params.mpName + "&price=" + params.price + "&num=" + params.num + "&stockNum=" + params.stockNum,
      options: {},
      success: (data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },

//在数据库中查询
  cartid(params, cb) {
    const config = {
      url: "http://localhost:4000/api/users/cartID?code=" + params.code ,
      options: {
        
      },
      success: (data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
}
