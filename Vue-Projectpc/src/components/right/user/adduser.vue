<template>
  <div class="adduser">
    <div class="up">
      增加用户
      <span @click="closeAdduser">X</span>
    </div>
    <form method="post">
      <div>
        <span>编号:</span>
        <input type="text" class="in1" v-model="number" />
      </div>
      <div>
        <span>用户名:</span>
        <input type="text" class="in1" v-model="username" />
      </div>
      <div>
        <span>密码:</span>
        <input type="password" class="in1" v-model="passward" />
      </div>
      <div>
        <span>邮箱:</span>
        <input type="email" class="in1" v-model="email" />
      </div>
      <div>
        <span>电话:</span>
        <input type="text" class="in1" v-model="telephone" />
      </div>
      <div>
        <span>头像地址:</span>
        <input type="url" class="in1" v-model="headurl" />
      </div>
      <div>
        <span>状态:</span>
        <div class="in2">
          <input type="radio" name="status" value="正常" v-model="status" />正常
          <input type="radio" name="status" value="禁用" v-model="status" />禁用
          <input type="radio" name="status" value="已删除" v-model="status" />已删除
        </div>
      </div>
      <input type="button" class="in3" value="保存" @click="add" />
    </form>
  </div>
</template>

<script>
export default {
  props: {
    adduser: Function,
  },
  data() {
    return {
      number: '',
      username: '',
      passward: '',
      email: '',
      telephone: '',
      headurl: '',
      status: '',
    };
  },
  methods: {
    closeAdduser() {
      this.$emit("hideAdduser");
    },
    add() {
      const number = this.number;
      const username = this.username;
      const passward = this.passward;
      const email = this.email;
      const telephone = this.telephone;
      const headurl = this.headurl;
      const status = this.status;
      const additem = {
        number,
        username,
        passward,
        email,
        telephone,
        headurl,
        status,
      };
      this.adduser(additem);
      this.number = '';
      this.username = '';
      this.passward = '';
      this.email = '';
      this.telephone = '';
      this.headurl = '';
      this.status = '';
      this.$emit("hideAdduser");
    }
  }
};
</script>

<style scoped>
.adduser {
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
.adduser .up {
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.adduser .up span {
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
.adduser .up span:hover {
  background-color: red;
  color: wheat;
}
.adduser form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  width: 100%;
}
.adduser form div {
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.adduser form div .in2 {
  display: inline-block;
  width: 85%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.adduser form div span {
  display: inline-block;
  width: 15%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.adduser form div .in1 {
  width: 85%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.adduser form .in3 {
  display: block;
  width: 80px;
  height: 30px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
