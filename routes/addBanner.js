var express = require('express');
var router = express.Router();
var db=require('../sql');
var multiparty=require('multiparty');

/* GET home page. */
router.post('/', function(req, res, next) {
    var form=new multiparty.Form();
    // 上传的图片需要保存某一个目录，目录必须存在
    form.uploadDir='./public/upload';
    form.parse(req,function(err,fields,files){
      console.log(fields);
      console.log(files);
      
    //     var imgName=fields.imgName[0];
    //     //上传图片的路径
    //     var pic=files.pic[0].path;
    //     console.log(imgName);
    //     db.query(`insert into banner value(?,?,?)`,[0,imgName,pic],function(err,data){
    //         if(err){
    //             throw err;
    //         }else{
    //             db.query(`select * from banner`,function(err,data){
    //                 var pager={};
    //   //当前第几页，默认第一页
    //   pager.pageCurrent=1;
    //   //总记录数
    //   pager.maxNum=data.length;
    //   //每页显示多少条记录
    //   pager.pageSize=5;
    //   //一共有多少页
    //   pager.pageCount=parseInt(Math.ceil(pager.maxNum/pager.pageSize));
    //   //修改了传递的数据数量
    //   var dataList=data.slice((pager.pageCurrent-1)*pager.pageSize,(pager.pageCurrent-1)*pager.pageSize+pager.pageSize);
      
    //   if(err){
    //     throw err;
    //   }else{
    //     res.render('bannerList',{
    //         bannerList:dataList,
    //         pager:pager
    //     })
    //   }
    //             })
    //         }
    //     })
    })
  });

module.exports = router;