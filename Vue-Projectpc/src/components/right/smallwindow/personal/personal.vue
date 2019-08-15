<template>
  <div class="personal">
    <div class="up">
      个人资料中心
      <span @click="closePersonal">X</span>
    </div>
    <div class="button">
      <button :class="{active:flag==1}" @click="active1(1)">基本资料</button>
      <button :class="{active:flag==2}" @click="active1(2)">修改密码</button>
    </div>
    <basicinformation v-show="flag==1"/>
    <changepassword v-show="flag==2" />
  </div>
</template>

<script>
import basicinformation from "./basicinformation.vue";
import changepassword from "./changepassword.vue";

export default {
  data() {
    return {
      flag: 1
    };
  },
  components: {
    basicinformation,
    changepassword,
  },
  methods: {
    closePersonal() {
      this.$emit("hidePersonal");
    },
    active1(flag) {
      this.flag = flag;
    }
  }
};
</script>

<style scoped>
.personal {
  z-index: 5;
  width: 80%;
  height: 500px;
  background-color: white;
  opacity: 0.93;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.personal .up {
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.personal .up span {
  display: inline-block;
  height: 40px;
  width: 60px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  background-color: #e6e5e5;
  opacity: 0.5;
  color: black;
  position: absolute;
  right: 0;
  top: 0;
}
.personal .up span:hover {
  background-color: red;
  color: wheat;
}
.personal .button {
  height: 50px;
  width: 100%;
  background-color: gray;
  margin-bottom: 20px;
}
.personal .button button {
  display: inline-block;
  width: 10%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  margin-left: 30px;
  border: none;
  border-radius: 15px;
}
.personal .button button:hover {
  opacity: 0.7;
}
.personal .button button.active {
  background-color: green;
  color: yellowgreen;
}
</style>
