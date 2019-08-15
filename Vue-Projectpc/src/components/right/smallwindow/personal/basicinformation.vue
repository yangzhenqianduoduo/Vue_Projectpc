<template>
   <div class="basicinformation">
     <form action="" method="post">
        <div><span>姓名:</span><input type="text" name="username" class="in1"/></div>
        <div><span>性别:</span><div class="in2"><input type="radio" name="sex" id="man"/>男<input type="radio" name="sex" id="woman"/>女</div></div>
        <div><span>出生年月:</span><input type="date" class="in1"/></div>
        <div><span>手机:</span><input type="text" class="in1"/></div>
        <div><span>邮箱:</span><input type="email" class="in1"/></div>
        <div><span>联系地址:</span><input type="text" class="in1"/></div>
        <input type="submit" class="in3" value="保存">
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
.basicinformation form{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 300px;
  width: 100%;
}
.basicinformation form div{
  height: 30px;
  width: 70%;
  display: flex;
  justify-content: space-between;
}
.basicinformation form div .in2{
  display: inline-block;
  width: 87%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.basicinformation form div span{
  display: inline-block;
  width: 13%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.basicinformation form div .in1{
  width: 87%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.personal form .in3{
  display: block;
  width: 100px;
  height: 50px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
