<template>
   <div class="seckill">
    <p>
      <button @click="addseckillShow">添加</button>
    </p>
    <form action="">
        <input type="date" id="date" />
        <select name="timeperiod" id="timeperiod">
          <option value="10:00">10:00</option>
          <option value="16:00">16:00</option>
          <option value="20:00">20:00</option>
        </select>
        <input type="submit" value="查询"/>
    </form>
   <table>
      <tr>
      <th v-for="(lists,index) in columnList" :key="index">{{lists}}</th>
      </tr>
      <tr v-for="(lists,index) in inforList" :key="index">
        <td>{{lists.lessonId}}</td>
        <td>{{lists.lessonName}}</td>
        <td>{{lists.seckillPrice}}</td>
        <td>{{lists.originalPrice}}</td>
        <td>{{lists.lessonpictureUrl}}</td>
        <td>{{lists.stock}}</td>
        <td>{{lists.seckillStart}}</td>
        <td>{{lists.lessonDescribe}}</td>
        <td>{{lists.lessonStatus}}</td>
        <td>
          <button @click="editseckillShow(index)">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button @click="delt(index)">删除</button>
        </td>
      </tr>
   </table>
    <addseckill v-show="addseckill1" @hideAddseckill="hideAddseckill" />
    <editseckill v-show="editseckill1" @hideEditseckill="hideEditseckill" :selectedlist="selectedlist" @save="save" />
   </div>
</template>

<script>
import addseckill from "./addseckill.vue"
import editseckill from "./editseckill.vue"

export default {
   data() {
      return {
        selectedlist:'',
        selected: '0',
         columnList : ["课程Id","课程名称","秒杀价","原价","课程图片","库存","秒杀开始时间","课程描述","课程状态","操作"],
         inforList : [
            {
            lessonId: "02",
            lessonName: "HTML基础课程",
            seckillPrice: "￥199",
            originalPrice: "￥300",
            lessonpictureUrl: "./img.jpg",
            stock: "168",
            seckillStart: "8:00",
            lessonDescribe: "初级课程",
            lessonStatus: "正常",
            },
         ],
         addseckill1: false,
         editseckill1: false,
      }
   },
   components: {
     addseckill,
     editseckill,
   },
   methods : {
     delt(index){
      const bOn = confirm("确定删除此项数据？");
      if(bOn){
        this.inforList.splice(index,1);
      }
     },
     addseckillShow(){
       this.addseckill1 = true;
     },
     hideAddseckill(){
       this.addseckill1 = false;
     },
     editseckillShow(index){
       this.selected = index;
       this.selectedlist = JSON.parse( JSON.stringify(this.inforList[index]));
       this.editseckill1 = true;
     },
     save(){
      this.$set(this.inforList,this.selected,this.selectedlist);
    },
     hideEditseckill(){
       this.editseckill1 = false;
     }
   },
}
</script>

<style scoped>
.seckill {
  width: 100%;
  height: 900px;
  overflow: auto;
}
.seckill p{
  display: inline-block;
}
.seckill form{
  display: inline-block;
}
.seckill form input,.seckill form select{
  display: inline-block;
  width: 200px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  text-align: center;
  background-color: pink;
  border: none;
  vertical-align: middle;
  border-radius: 8px;
}
.seckill p button {
  width: 90px;
  height: 45px;
  display: inline-block;
  font-size: 18px;
  line-height: 45px;
  text-align: center;
  border-radius: 8px;
  background-color: pink;
  border: none;
  vertical-align: middle;
}
.seckill table {
  width: 100%;
  background-color: pink;
  border-collapse: collapse;
}
.seckill table tr {
  width: 90%;
  height: 30px;
}
.seckill table tr td,
.seckill table tr th {
  /* width: 6%; */
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid black;
  font-size: 15px;
}
.seckill table tr td button {
  width: 30%;
  height: 80%;
  background-color: aquamarine;
  border: none;
  font-size: 14px;
  line-height: 80%;
  text-align: center;
}
</style>
