import myajax from "@/tool/myajax.js";

export default {
  register(params,cb){
    const config = {
      url: "http://localhost:4000/users/getCode?phone="+params.phone,
      options:{
        body:{
          phone: params.phone
        }
      },
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },


  registerUser(params,cb){
    const config = {
      url: 'http://localhost:4000/api/users?phone='+params.phone+'&password='+params.password,
      options:{
      //  params:{
      //      phone: params.phone,
      //     password:params.password
      //  }
      },
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  
  registerGohome(params,cb){
    const config = {
      url: 'http://localhost:4000/api/users/find?phone='+params.phone,
      options:{
      },
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }

}
