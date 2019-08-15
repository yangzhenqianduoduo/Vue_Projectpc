<template>
  <div class="editseckill">
    <div class="up">
      编辑秒杀课程
      <span @click="closeEditseckill">X</span>
    </div>
    <form action method="post">
      <div>
        <span>课程Id:</span>
        <input type="text" class="in1" v-model="selectedlist.lessonId"/>
      </div>
      <div>
        <span>课程名称:</span>
        <input type="text" class="in1" v-model="selectedlist.lessonName" />
      </div>
      <div>
        <span>秒杀价:</span>
        <input type="text" class="in1" v-model="selectedlist.seckillPrice" />
      </div>
      <div>
        <span>原价:</span>
        <input type="text" class="in1" v-model="selectedlist.originalPrice" />
      </div>
      <div>
        <span>课程图片:</span>
        <input type="text" class="in1" v-model="selectedlist.lessonpictureUrl" />
      </div>
      <div>
        <span>库存:</span>
        <input type="text" class="in1" v-model="selectedlist.stock" />
      </div>
      <div>
        <span>秒杀开始时间:</span>
        <input type="text" class="in1" v-model="selectedlist.seckillStart" />
      </div>
      <div>
        <span>课程描述:</span>
        <input type="text" class="in1" v-model="selectedlist.lessonDescribe" />
      </div>
      <div>
        <span>课程状态:</span>
        <div class="in2">
          <input type="radio" name="lessonStatus" value="正常" v-model="selectedlist.lessonStatus" />正常
          <input type="radio" name="lessonStatus" value="禁用" v-model="selectedlist.lessonStatus" />禁用
          <input type="radio" name="lessonStatus" value="已删除" v-model="selectedlist.lessonStatus" />已删除
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
    closeEditseckill() {
      this.$emit("hideEditseckill");
    },
    save(){
      this.$emit("save");
      this.$emit("hideEditseckill");
    },
  }
};
</script>

<style scoped>
.editseckill {
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
.editseckill .up {
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.editseckill .up span {
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
.editseckill .up span:hover {
  background-color: red;
  color: wheat;
}
.editseckill form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  width: 100%;
}
.editseckill form div {
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.editseckill form div .in2 {
  display: inline-block;
  width: 80%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.editseckill form div span {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.editseckill form div .in1 {
  width: 80%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.editseckill form .in3 {
  display: block;
  width: 80px;
  height: 30px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
