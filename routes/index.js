var express = require('express');
var router = express.Router();
var db=require('../sql');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/main',function(req,res,next){
  //获取到用户输入的内容
  var uName=req.body.userName;
  var userPwd=req.body.userPwd;
  //查询数据
  db.query(`select * from user where userName=? and userPwd=?`,[uName,userPwd],function(err,data){
    if(err){
      throw err;
    }else if(data.length>0){
      res.render('main');
    }else{
      res.write('<head><meta charset="utf-8"/></head>');
      res.end('登录失败');
    }
  })
});
module.exports = router;
