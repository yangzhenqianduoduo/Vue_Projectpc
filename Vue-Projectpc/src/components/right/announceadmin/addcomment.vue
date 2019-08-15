<template>
   <div class="addcomment">
     <div class="up">增加评论<span @click="closeAddcomment">X</span></div>
     <form action="" method="post">
       <div><span>订单id:</span><input type="text" class="in1"/></div>
       <div><span>课程id:</span><input type="text" class="in1"/></div>
       <div><span>评论:</span><input type="text" class="in1"/></div>
       <div><span>星级:</span><input type="text" class="in1"/></div>
       <div><span>创建时间:</span><input type="text" class="in1"/></div>
       <div><span>状态:</span><div class="in2"><input type="radio" name="status"/>正常<input type="radio" name="status"/>禁用<input type="radio" name="status"/>已删除</div></div>
       <input type="submit" class="in3" value="保存"/>
     </form>
   </div>
</template>

<script>
export default {
   data() {
       return {

       }
   },
   methods: {
     closeAddcomment(){
       this.$emit("hideAddcomment");
     },
   }
}
</script>

<style scoped>
.addcomment{
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
.addcomment .up{
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.addcomment .up span {
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
.addcomment .up span:hover {
  background-color: red;
  color: wheat;
}
.addcomment form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  width: 100%;
}
.addcomment form div{
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.addcomment form div .in2{
  display: inline-block;
  width: 80%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.addcomment form div span{
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.addcomment form div .in1{
  width: 80%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.addcomment form .in3{
  display: block;
  width: 80px;
  height: 30px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
