<template>
   <div class="addrole">
     <div class="up">增加角色<span @click="closeAddrole">X</span></div>
     <form action="" method="post">
      <div><span>编号:</span><input type="text" class="in1"/></div>
      <div><span>用户名:</span><input type="text" class="in1"/></div>
      <div><span>问题:</span><input type="text" class="in1"/></div>
      <div><span>答案:</span><input type="text" class="in1"/></div>
      <div><span>角色:</span><div class="in2"><input type="radio" name="role"/>普通用户<input type="radio" name="role"/>管理员</div></div>
      <div><span>状态:</span><div class="in2"><input type="radio" name="status"/>正常<input type="radio" name="status"/>禁用<input type="radio" name="status"/>已删除</div></div>
      <input type="submit" class="in3"/>
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
     closeAddrole(){
       this.$emit("hideAddrole");
     },
   }
}
</script>

<style scoped>
.addrole{
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
.addrole .up{
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.addrole .up span {
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
.addrole .up span:hover {
  background-color: red;
  color: wheat;
}
.addrole form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 450px;
  width: 100%;
}
.addrole form div{
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.addrole form div .in2{
  display: inline-block;
  width: 85%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.addrole form div span{
  display: inline-block;
  width: 15%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.addrole form div .in1{
  width: 85%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.addrole form .in3{
  display: block;
  width: 100px;
  height: 50px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
