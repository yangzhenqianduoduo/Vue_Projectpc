<template>
  <div class="editannounce">
    <div class="up">
      编辑公告
      <span @click="closeEditannounce">X</span>
    </div>
    <form action method="post">
      <div>
        <span>公告标题:</span>
        <input type="text" class="in1" v-model="selectedlist.announceTitle"  />
      </div>
      <div>
        <span>公告内容:</span>
        <input type="text" class="in1" v-model="selectedlist.announceContent"  />
      </div>
      <div>
        <span>公告时间:</span>
        <input type="text" class="in1" v-model="selectedlist.announceTime"  />
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
    closeEditannounce() {
      this.$emit("hideEditannounce");
    },
    save(){
      this.$emit("save");
      this.$emit("hideEditannounce");
    },
  }
};
</script>

<style scoped>
.editannounce {
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
.editannounce .up {
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.editannounce .up span {
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
.editannounce .up span:hover {
  background-color: red;
  color: wheat;
}
.editannounce form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  width: 100%;
}
.editannounce form div {
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.editannounce form div .in2 {
  display: inline-block;
  width: 80%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.editannounce form div span {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.editannounce form div .in1 {
  width: 80%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.editannounce form .in3 {
  display: block;
  width: 80px;
  height: 30px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
