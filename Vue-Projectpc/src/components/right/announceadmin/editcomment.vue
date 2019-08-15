<template>
  <div class="editcomment">
    <div class="up">
      编辑评论
      <span @click="closeEditcomment">X</span>
    </div>
    <form action method="post">
      <div>
        <span>订单id:</span>
        <input type="text" class="in1" v-model="selectedlist.orderId" />
      </div>
      <div>
        <span>课程id:</span>
        <input type="text" class="in1" v-model="selectedlist.lessonId" />
      </div>
      <div>
        <span>评论:</span>
        <input type="text" class="in1" v-model="selectedlist.comment" />
      </div>
      <div>
        <span>星级:</span>
        <input type="text" class="in1" v-model="selectedlist.star" />
      </div>
      <div>
        <span>创建时间:</span>
        <input type="text" class="in1" v-model="selectedlist.createTime" />
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
  props: ["selectedlist"],
  data() {
    return {};
  },
  methods: {
    closeEditcomment() {
      this.$emit("hideEditcomment");
    },
    save() {
      this.$emit("save");
      this.$emit("hideEditcomment");
    }
  }
};
</script>

<style scoped>
.editcomment {
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
.editcomment .up {
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.editcomment .up span {
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
.editcomment .up span:hover {
  background-color: red;
  color: wheat;
}
.editcomment form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  width: 100%;
}
.editcomment form div {
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.editcomment form div .in2 {
  display: inline-block;
  width: 80%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.editcomment form div span {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.editcomment form div .in1 {
  width: 80%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.editcomment form .in3 {
  display: block;
  width: 80px;
  height: 30px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
