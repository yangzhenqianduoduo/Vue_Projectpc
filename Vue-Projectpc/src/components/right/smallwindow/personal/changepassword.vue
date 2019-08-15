<template>
   <div class="changepassword">
     <form action="" method="post">
       <div><span>旧密码:</span><input type="password" class="in1"/></div>
       <div><span>新密码:</span><input type="password" class="in1"/></div>
       <div><span>确认密码:</span><input type="password" class="in1"/></div>
       <input type="submit" value="保存" class="in2"/>
     </form>
   </div>
</template>

<script>
export default {
   data() {
       return {

       }
   }
}
</script>

<style scoped>
.changepassword form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  width: 100%;
}
.changepassword form div{
  height: 40px;
  width: 60%;
  display: flex;
  justify-content: space-between;
}
.changepassword form div span{
  display: inline-block;
  width: 13%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.changepassword form div .in1{
  width: 87%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.changepassword form .in2{
  display: block;
  width: 100px;
  height: 50px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
