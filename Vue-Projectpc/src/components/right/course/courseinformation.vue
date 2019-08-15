<template>
   <div class="courseinformation">
    <p>
      <button @click="addcourseinformationShow">添加</button>
    </p>
     <table>
       <tr>
         <th v-for="(lists,index) in columnList" :key="index">{{lists}}</th>
       </tr>
       <tr v-for="(lists,index) in inforList" :key="index">
         <td>{{lists.lessonName}}</td>
         <td>{{lists.lessonSecondname}}</td>
         <td>{{lists.mainPictureurl}}</td>
         <td>{{lists.pictureUrl}}</td>
         <td>{{lists.activePrice}}</td>
         <td>{{lists.originalPrice}}</td>
         <td>{{lists.lessonStatus}}</td>
         <td>
           <button @click="editcourseinformationShow(index)">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button @click="delt(index)">删除</button>
         </td>
       </tr>
     </table>
     <addcourseinformation v-show="addcourseinformation1" @hideAddcourseinformation="hideAddcourseinformation" />
     <editcourseinformation v-show="editcourseinformation1" @hideEditcourseinformation="hideEditcourseinformation" :selectedlist="selectedlist" @save="save" />
   </div>
</template>

<script>
import addcourseinformation from "./addcourseinformation.vue"
import editcourseinformation from "./editcourseinformation.vue"

export default {
   data() {
       return {
        selectedlist:'',
        selected: '0',
         columnList : ["课程名","课程副标题","课程主图地址","图片地址","活动价","原价","课程状态","操作"],
         inforList : [
           {
            lessonName: "初级教程",
            lessonSecondname: "html",
            mainPictureurl: "../img.jpg",
            pictureUrl: "../img1.png",
            activePrice: "￥199",
            originalPrice: "￥300",
            lessonStatus: "正常",
           },
         ],
         addcourseinformation1: false,
         editcourseinformation1: false,
       }
   },
   components: {
     addcourseinformation,
     editcourseinformation,
   },
   methods : {
     delt(index){
      const bOn = confirm("确定删除此项数据？");
      if(bOn){
        this.inforList.splice(index,1);
      }
     },
     addcourseinformationShow(){
       this.addcourseinformation1 = true;
     },
     hideAddcourseinformation(){
       this.addcourseinformation1 = false;
     },
    editcourseinformationShow(index){
      this.selected = index;
      this.selectedlist = JSON.parse( JSON.stringify(this.inforList[index]));
      this.editcourseinformation1 = true;
    },
    save(){
      this.$set(this.inforList,this.selected,this.selectedlist);
    },
      hideEditcourseinformation(){
        this.editcourseinformation1 = false;
      }
   }
}
</script>

<style scoped>
.courseinformation {
  width: 100%;
  height: 900px;
  overflow: auto;
}
.courseinformation p button {
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
.courseinformation table {
  width: 100%;
  background-color: pink;
  border-collapse: collapse;
}
.courseinformation table tr {
  width: 90%;
  height: 30px;
}
.courseinformation table tr td,
.courseinformation table tr th {
  width: 12.5%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid black;
  font-size: 15px;
}
.courseinformation table tr td button {
  width: 30%;
  height: 80%;
  background-color: aquamarine;
  border: none;
  font-size: 14px;
  line-height: 80%;
  text-align: center;
}
</style>
