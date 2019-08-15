<template>
   <div class="courseclassify">
    <p>
    <button @click="addcourseclassifyShow">添加</button>
    </p>
    <table>
        <tr>
        <th v-for="(lists,index) in columnList" :key="index">{{lists}}</th>
        </tr>
        <tr v-for="(lists,index) in inforList" :key="index">
        <td>{{lists.lessonId}}</td>
        <td>{{lists.parentId}}</td>
        <td>{{lists.kindName}}</td>
        <td>{{lists.kindStatus}}</td>
        <td>{{lists.lessonStatus}}</td>
        <td>
          <button @click="editcourseclassifyShow(index)">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button @click="delt(index)">删除</button>
        </td>
        </tr>
    </table>
    <addcourseclassify v-show="addcourseclassify1" @hideAddcourseclassify="hideAddcourseclassify" />
    <editcourseclassify v-show="editcourseclassify1" @hideEditcourseclassify="hideEditcourseclassify" :selectedlist="selectedlist" @save="save" />
   </div>
</template>

<script>
import addcourseclassify from "./addcourseclassify.vue"
import editcourseclassify from "./editcourseclassify.vue"

export default {
   data() {
      return {
        selectedlist:'',
        selected: '0',
         columnList : ["课程id","父类别id","类别名称","类别状态","课程状态","操作"],
         inforList : [
            {
            lessonId: "01",
            parentId: "01",
            kindName: "HTML",
            kindStatus: "正常",
            lessonStatus: "正常",
            },
         ],
         addcourseclassify1: false,
         editcourseclassify1: false,
      }
   },
   components: {
     addcourseclassify,
     editcourseclassify,
   },
   methods : {
     delt(index){
      const bOn = confirm("确定删除此项数据？");
      if(bOn){
        this.inforList.splice(index,1);
      }
     },
     addcourseclassifyShow(){
       this.addcourseclassify1 = true;
     },
     hideAddcourseclassify(){
       this.addcourseclassify1 = false;
     },
    editcourseclassifyShow(index){
      this.selected = index;
      this.selectedlist = JSON.parse( JSON.stringify(this.inforList[index]));
      this.editcourseclassify1 = true;
     },
     save(){
      this.$set(this.inforList,this.selected,this.selectedlist);
    },
     hideEditcourseclassify(){
       this.editcourseclassify1 = false;
     },
   },
}
</script>

<style scoped>
.courseclassify {
  width: 100%;
  height: 900px;
  overflow: auto;
}
.courseclassify p button {
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
.courseclassify table {
  width: 100%;
  background-color: pink;
  border-collapse: collapse;
}
.courseclassify table tr {
  width: 90%;
  height: 30px;
}
.courseclassify table tr td,
.courseclassify table tr th {
  width: 14.3%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid black;
  font-size: 15px;
}
.courseclassify table tr td button {
  width: 30%;
  height: 80%;
  background-color: aquamarine;
  border: none;
  font-size: 14px;
  line-height: 80%;
  text-align: center;
}
</style>
