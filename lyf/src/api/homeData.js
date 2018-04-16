import myajax from "@/tool/myajax.js";

export default {
  //首页
  //banner图
  bannerList(cb){
    const config = {
      url: "http://localhost:4000/api/banner",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  //nav
  navList(cb){
    const config = {
      url: "http://localhost:4000/api/product",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  //list
  homeList(cb){
    const config = {
      url: "http://localhost:4000/api/list",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },

  //搜索
   searchList(cb){
    const config = {
      url: "http://localhost:4000/api/list",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  searchInput(params,cb){
    const config = {
      url: "http://localhost:4000/api/list/input?input="+params.value,
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },


  //列表页首页面数据
  //名字
  kindName(cb){
    const config = {
      url: "http://localhost:4000/api/kindname",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  } ,
  //右侧数据
  kindList(cb){
    const config = {
      url: "http://localhost:4000/api/kind",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  } ,
  //列表数据
  kindData(cb){
    const config = {
      url: "http://localhost:4000/api/kindlist",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  },
  //新闻数据
  XinwenData(cb){
    const config = {
      url: "http://localhost:4000/api/xinwen",
      options:{},
      success:(data) => {
        cb(data)
      }
    }
    myajax.fetch(config);
  }
}


