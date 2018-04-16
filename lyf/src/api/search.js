import myajax from "@/tool/myajax.js";

export default {
  txtData(txt,cb){
    const config = {
      url: 'http://localhost:4000/api/list/txt?name=' + txt ,
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}
