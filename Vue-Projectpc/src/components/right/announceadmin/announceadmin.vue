<template>
   <div class="announceadmin">
      <p>
      <button @click="addannounceShow">添加</button>
      </p>
    <table>
      <tr>
        <th v-for="(lists,index) in columnList" :key="index">{{lists}}</th>
      </tr>
      <tr v-for="(lists,index) in inforList" :key="index">
        <td>{{lists.announceTitle}}</td>
        <td>{{lists.announceContent}}</td>
        <td>{{lists.announceTime}}</td>
        <td>
        <button @click="editannounceShow(index)">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button @click="delt(index)">删除</button>
        </td>
      </tr>
    </table>

    <addannounce v-show="addannounce1" @hideAddannounce="hideAddannounce" />
    <editannounce v-show="editannounce1" @hideEditannounce="hideEditannounce" :selectedlist="selectedlist" @save="save"  />
   </div>
</template>

<script>
import addannounce from "./addannounce.vue"
import editannounce from "./editannounce.vue"

export default {
   data() {
       return {
         selectedlist:'',
         selected: '0',
         columnList: [ "公告标题", "公告内容","公告时间","操作"],
         inforList:[
            {
               announceTitle: "上新",
               announceContent: "什么什么上新了",
               announceTime: "8:00",
            },
        ],
        addannounce1: false,
        editannounce1: false,
       }
   },
   components: {
     addannounce,
     editannounce,
   },
   methods : {
     delt(index){
       const bOn = confirm("确认删除此项数据？");
       if(bOn){
         this.inforList.splice(index,1);
       }
     },
     addannounceShow(){
       this.addannounce1 = true;
     },
     hideAddannounce(){
       this.addannounce1 = false;
     },
     editannounceShow(index){
       this.selected = index;
       this.selectedlist = JSON.parse( JSON.stringify(this.inforList[index]));
       this.editannounce1 = true;
     },
     save(){
       this.$set(this.inforList,this.selected,this.selectedlist);
      },
     hideEditannounce(){
       this.editannounce1 = false;
     }
   }
}
</script>

<style scoped>
.announceadmin {
  width: 100%;
  height: 900px;
  overflow: auto;
}
.announceadmin p button {
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
.announceadmin table {
  width: 100%;
  background-color: pink;
  border-collapse: collapse;
}
.announceadmin table tr {
  width: 90%;
  height: 30px;
}
.announceadmin table tr td,
.announceadmin table tr th {
  /* width: 12.5%; */
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid black;
  font-size: 15px;
}
.announceadmin table tr td button {
  width: 30%;
  height: 80%;
  background-color: aquamarine;
  border: none;
  font-size: 14px;
  line-height: 80%;
  text-align: center;
}
</style>
