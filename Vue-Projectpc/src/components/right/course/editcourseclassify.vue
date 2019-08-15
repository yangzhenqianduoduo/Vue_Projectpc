<template>
  <div class="editcourseclassify">
    <div class="up">
      编辑课程分类
      <span @click="closeEditcourseclassify">X</span>
    </div>
    <form action method="post">
      <div>
        <span>课程Id:</span>
        <input type="text" class="in1" v-model="selectedlist.lessonId" />
      </div>
      <div>
        <span>父类别Id:</span>
        <input type="text" class="in1" v-model="selectedlist.parentId" />
      </div>
      <div>
        <span>类别名称:</span>
        <input type="text" class="in1" v-model="selectedlist.kindName" />
      </div>
      <div>
        <span>类别状态:</span>
        <div class="in2">
          <input type="radio" name="kindStatus" v-model="selectedlist.kindStatus" value="正常" />正常
          <input type="radio" name="kindStatus" v-model="selectedlist.kindStatus" value="禁用" />禁用
          <input type="radio" name="kindStatus" v-model="selectedlist.kindStatus" value="已删除" />已删除
        </div>
      </div>
      <div>
        <span>课程状态:</span>
        <div class="in2">
          <input type="radio" name="lessonStatus" v-model="selectedlist.lessonStatus" value="正常" />正常
          <input type="radio" name="lessonStatus" v-model="selectedlist.lessonStatus" value="禁用" />禁用
          <input type="radio" name="lessonStatus" v-model="selectedlist.lessonStatus" value="已删除" />已删除
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
    closeEditcourseclassify() {
      this.$emit("hideEditcourseclassify");
    },
    save(){
      this.$emit("save");
      this.$emit("hideEditcourseclassify");
    },
  }
};
</script>

<style scoped>
.editcourseclassify {
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
.editcourseclassify .up {
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.editcourseclassify .up span {
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
.editcourseclassify .up span:hover {
  background-color: red;
  color: wheat;
}
.editcourseclassify form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  width: 100%;
}
.editcourseclassify form div {
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.editcourseclassify form div .in2 {
  display: inline-block;
  width: 80%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.editcourseclassify form div span {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.editcourseclassify form div .in1 {
  width: 80%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.editcourseclassify form .in3 {
  display: block;
  width: 80px;
  height: 30px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
