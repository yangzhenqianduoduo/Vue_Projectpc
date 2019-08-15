<template>
  <div class="page">
    <img src="../../static/img/registrbgpicture.jpg" alt />
    <div class="welcome">
      <h1>Dream</h1>
      <h2>欢迎来到Dreaming Cloudclass<br/>后台管理系统</h2>
    </div>
    <div class="registr">
        <h1>用户登录</h1>
        <h2>欢迎来到后台管理系统</h2>
        <div>
          <input type="text" placeholder="请输入用户名" v-model="username"/>
          <input type="password" placeholder="请输入密码" v-model="password"/>
          <input type="button" value="登录" @click="pass" />
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
        username : "",
        password : "",
    };
  },
  methods : {
    pass(){
      if(!this.username.trim() || !this.password.trim()){
          alert("用户名或密码为空");
          return false;
      }else{
        this.$router.push({
        path: "/system",
      })
      }
      // fetch({
      //   url: "",
      //   method: "post",
      //   header: new Header({

      //   }),
      //   body: `username=${this.username}&password=${this.password}`
      // })
      // .then((res)=>{
      //   return res.text();
      // })
      // .then((data)=>{
      //   if(data==1){
      //     this.$router.push({
      //       path: "/system",
      //     })
      //   }else{
      //     alert("用户名或密码错误")
      //   }
      // })
    }
  }
};
</script>

<style scoped>
.page {
  width: 100%;
  height: 800px;
  position: relative;
}
.page img {
  width: 100%;
  height: 100%;
  opacity: 0.6;
  display: block;
}
.page .welcome {
  position: absolute;
  top: 200px;
  left: 300px;
}
.page .welcome h1{
    font-size: 60px;
    color: blue;
    height: 60px;
    line-height: 70px;
}
.page .welcome h2{
    font-size: 30px;
    color: purple;
    height: 40px;
    line-height: 40px;
    margin-top: 23px;
    line-height: 40px;
}
.page .registr{
    width: 360px;
    height: 470px;
    background-color: white;
    text-align: center;
    opacity: 0.8;
    position: absolute;
    top: 150px;
    left: 850px;
}
.page .registr h1{
    font-size: 24px;
    color: #0a0d0f;
    text-align: center;
    margin-top: 80px;
}
.page .registr h2{
    font-size: 18px;
    color: #545450;
    text-align: center;
    margin-top: 20px;
}
.page .registr div{
  display: inline-block;
}
.page .registr div input{
  display: block;
  width: 300px;
  height: 35px;
  margin-top: 25px;
}
.page .registr div input:nth-of-type(3){
  display: block;
  width: 300px;
  height: 35px;
  margin-top: 25px;
  background-color: #00a3ff;
  color: white;
  border: none;
}
</style>
