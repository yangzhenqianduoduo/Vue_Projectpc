<template>
  <div>
    <div class="head">
      <div>
        <img src="../../static/img/cloudclass1.png" alt />
      </div>
      <h1>筑梦云课堂后台管理系统</h1>
    </div>
    <div class="section">
      <div class="left">
        <left />
      </div>
      <div class="right">
        <div class="search">
          <input type="text" placeholder="请输入要搜索的内容..." />
          <img src="../../static/img/search.png" alt />
        </div>
        <button @click="personalShow">个人中心</button>&nbsp;&nbsp;
        <button @click="out">退出</button>
        <div class="list">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <personal v-show="show1" @hidePersonal="hidePersonal"/>
  </div>
</template>

<script>
import left from "./left/left.vue"
import personal from "./right/smallwindow/personal/personal.vue"

export default {
  data() {
    return {
      show1: false,
    };
  },
  components: {
    left,
    personal,
  },
  methods: {
    personalShow(){
      this.show1 = true;
    },
    hidePersonal(){
      this.show1 = false;
    },
    out() {
      this.$router.push({
        path: "/"
      });
    },
  }
};
</script>

<style scoped>
div {
  position: relative;
}
div .head {
  width: 100%;
  height: 100px;
  background-color: rgb(64, 65, 86);
  opacity: 0.7;
}
div .head div {
  width: 15.8%;
  height: 100%;
  line-height: 100%;
  display: inline-block;
  vertical-align: middle;
}
div .head div img {
  width: 70%;
  height: 70%;
  border-radius: 15px;
  vertical-align: middle;
  margin: 8%;
}
div .head h1 {
  width: 70%;
  text-align: center;
  font-size: 40px;
  color: rgb(148, 144, 144);
  line-height: 100%;
  vertical-align: middle;
  display: inline-block;
}
div .section {
  height: 700px;
  width: 100%;
  overflow: hidden;
}
div .section .left {
  width: 15.8%;
  height: 700px;
  background-color: #515a6e;
  float: left;
  position: relative;
  overflow: auto;
}
div .section .right {
  width: 84.2%;
  float: left;
  height: 700px;
  background-color: rgb(64, 65, 86);
  padding-left: 5%;
  padding-top: 5%;
  overflow: auto;
}
div .section .right .search {
  width: 70%;
  height: 55px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  border-radius: 15px;
  padding-left: 20px;
}
div .section .right .search input {
  width: 100%;
  height: 55px;
  display: inline-block;
  background-color: rgb(230, 229, 229);
  color: black;
  border: none;
  font-size: 24px;
  line-height: 55px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 15px;
  padding-left: 20px;
}
div .section .right .search img {
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10px;
  top: 8px;
}
div .section .right button {
  width: 80px;
  height: 30px;
  display: inline-block;
  font-size: 15px;
  line-height: 30px;
  text-align: center;
  border-radius: 8px;
  background-color: pink;
  border: none;
  vertical-align: middle;
  margin-left: 90px;
}
div .section .right button:nth-of-type(2) {
  margin-left: 0;
}
div .section .right .list {
  width: 96%;
  height: 900px;
  background-color: aqua;
  margin-top: 30px;
  overflow: auto;
}

</style>
