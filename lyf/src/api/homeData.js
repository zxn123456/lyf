import myajax from "@/tool/myajax.js";

export default {
  goodsList(cb){
    const config = {
      url: "http://localhost:4000/api/list",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}
