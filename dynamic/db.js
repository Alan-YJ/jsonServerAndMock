//引入mockjs文件
let Mock  = require('mockjs');
let Random = Mock.Random;
module.exports = function() {
  var data = { 
      inventory: [],//定义接口名称为news
      type:{
        a:"a",
        b:"b"
      },
      inventoryList:[
        {site_no:1,title:'南校区'},
        {site_no:2,title:'北校区'},
        {site_no:3,title:'东校区'},
        {site_no:4,title:'珠海校区'},
      ]
  };
  var images = [1,2,3].map(x=>Random.image('200x100', Random.color(), Random.word(2,6)));
//动态生成10条新闻数据
  for (var i = 0; i < 10; i++) {
    var content = Random.cparagraph(0,10);
    //site_no -> 场馆ID   title -> 场馆名称  desc -> 场馆描述  price -> 价格  state -> 状态 
    //  
    data.inventory.push({
        "site_no": i,
        "title": Random.cword(8,20),
        "desc": content.substr(0,140),
        "pic": images.slice(0,Random.integer(1,3)),
        "price": Random.integer(1,100),
        "state":Random.boolean(),
        "direction":Random.integer(1,4)
    })
  }

  return data
}