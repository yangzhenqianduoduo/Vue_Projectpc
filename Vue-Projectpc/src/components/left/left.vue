<template>
  <div>
    <ul>
      <li>
        <span @click="play">
          系统管理&nbsp;&nbsp;&nbsp;&nbsp;
          <button>+</button>
        </span>
        <ol class="h0">
          <router-link tag="li" to="/system/user">用户管理</router-link>
          <router-link tag="li" to="/system/role">角色管理</router-link>
        </ol>
      </li>
      <li>
        <span @click="play">
          课程管理&nbsp;&nbsp;&nbsp;&nbsp;
          <button>+</button>
        </span>
        <ol class="h0">
          <router-link tag="li" to="/system/courseinformation">课程详情</router-link>
          <router-link tag="li" to="/system/courseclassify">课程分类</router-link>
          <router-link tag="li" to="/system/seckill">秒杀课程</router-link>
        </ol>
      </li>
      <li>
        <span @click="play">
          订单管理&nbsp;&nbsp;&nbsp;&nbsp;
          <button>+</button>
        </span>
        <ol class="h0">
          <router-link tag="li" to="/system/orderinformation">订单信息</router-link>
          <router-link tag="li" to="/system/payinformation">支付信息</router-link>
        </ol>
      </li>
      <li>
        <span @click="play">
          公告管理&nbsp;&nbsp;&nbsp;&nbsp;
          <button>+</button>
        </span>
        <ol class="h0">
          <router-link tag="li" to="/system/announceadmin">公告管理</router-link>
          <router-link tag="li" to="/system/commentadmin">评论管理</router-link>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    play() {
      var aBtn = document.querySelectorAll("button");
      var aOl = document.querySelectorAll("ol");
      var aLi = document.querySelectorAll("ol>li");
      for (var i = 0; i < aBtn.length; i++) {
        aBtn[i].index = i;
        aBtn[i].onclick = function() {
          aOl[this.index].classList.toggle("h0");
          this.innerHTML = aOl[this.index].className == "" ? "-" : "+";
        };
      }
      for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onclick = function() {
          for (var j = 0; j < aLi.length; j++) {
            aLi[j].className = "";
          }
          this.className = "active";
        };
      }
    },
  }
};
</script>

<style scoped>
div ul,div ol {
  margin: 0;
  padding: 0;
  list-style: none;
}
div ul li {
  width: 100%;
  position: relative;
}
div ul li span {
  display: block;
  width: 100%;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px rgb(96, 92, 87) solid;
  text-align: center;
  background-color: #515a6e;
  color: #eeeeee;
}
div ul li span button {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border: none;
  background-color: pink;
  border-radius: 5px;
}
div ul li ol {
  background-color: #464c5b;
  overflow: auto;
}
div ul li ol li {
  height: 45px;
  line-height: 45px;
  color: #f0f0f0;
  text-align: center;
}
div ul li ol li.active {
  background-color: greenyellow;
  color: grey;
}
div ul li ol.h0 {
  height: 0;
  background-color: #464c5b;
}
</style>
