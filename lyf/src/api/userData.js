import myajax from "@/tool/myajax.js";

export default {
  register(params,cb){
    const config = {
      url: "http://localhost:4000/api/register",
      options:{
        body:{
          phone: params.phone,
          password: params.password,
          code:params.code
        }
      },
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}
