<template>
  <div class="edituser">
    <div class="up">
      用户编辑
      <span @click="closeEdituser">X</span>
    </div>
    <form action="" method="post">
      <div>
        <span>编号:</span>
        <input type="text" class="in1" v-model="selectedlist.number" />
      </div>
      <div>
        <span>用户名:</span>
        <input type="text" class="in1" v-model="selectedlist.username"/>
      </div>
      <div>
        <span>密码:</span>
        <input type="password" class="in1" v-model="selectedlist.passward" />
      </div>
      <div>
        <span>邮箱:</span>
        <input type="email" class="in1" v-model="selectedlist.email" />
      </div>
      <div>
        <span>电话:</span>
        <input type="text" class="in1" v-model="selectedlist.telephone" />
      </div>
      <div>
        <span>头像地址:</span>
        <input type="url" class="in1" v-model="selectedlist.headurl" />
      </div>
      <div>
        <span>状态:</span>
        <div class="in2">
          <input type="radio" name="status" value="正常" v-model="selectedlist.status" />正常
          <input type="radio" name="status" value="禁用" v-model="selectedlist.status" />禁用
          <input type="radio" name="status" value="已删除" v-model="selectedlist.status" />已删除
        </div>
      </div>
      <input type="button" class="in3" value="保存" @click="save" />
    </form>
  </div>
</template>

<script>
export default {
  props: ['selectedlist',],
  data() {
    return {};
  },
  methods: {
    closeEdituser() {
      this.$emit("hideEdituser");
    },
    save(){
      this.$emit("save");
      this.$emit("hideEdituser");
    },
  },
};
</script>

<style scoped>
.edituser {
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
.edituser .up {
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.edituser .up span {
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
.edituser .up span:hover {
  background-color: red;
  color: wheat;
}
.edituser form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  width: 100%;
}
.edituser form div {
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.edituser form div .in2 {
  display: inline-block;
  width: 85%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.edituser form div span {
  display: inline-block;
  width: 15%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.edituser form div .in1 {
  width: 85%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.edituser form .in3 {
  display: block;
  width: 80px;
  height: 30px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
