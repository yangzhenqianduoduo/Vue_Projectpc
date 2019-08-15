<template>
   <div class="addseckill">
     <div class="up">增加秒杀课程<span @click="closeAddseckill">X</span></div>
     <form action="" method="post">
       <div><span>课程Id:</span><input type="text" class="in1"/></div>
       <div><span>课程名称:</span><input type="text" class="in1"/></div>
       <div><span>秒杀价:</span><input type="text" class="in1"/></div>
       <div><span>原价:</span><input type="text" class="in1"/></div>
       <div><span>课程图片:</span><input type="text" class="in1"/></div>
       <div><span>库存:</span><input type="text" class="in1"/></div>
       <div><span>秒杀开始时间:</span><input type="text" class="in1"/></div>
       <div><span>课程描述:</span><input type="text" class="in1"/></div>
       <div><span>课程状态:</span><div class="in2"><input type="radio" name="status"/>正常<input type="radio" name="status"/>禁用<input type="radio" name="status"/>已删除</div></div>
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
     closeAddseckill(){
       this.$emit("hideAddseckill");
     }
   }
}
</script>

<style scoped>
.addseckill{
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
.addseckill .up{
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.addseckill .up span {
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
.addseckill .up span:hover {
  background-color: red;
  color: wheat;
}
.addseckill form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  width: 100%;
}
.addseckill form div{
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.addseckill form div .in2{
  display: inline-block;
  width: 80%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.addseckill form div span{
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.addseckill form div .in1{
  width: 80%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.addseckill form .in3{
  display: block;
  width: 80px;
  height: 30px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
