<template>
   <div class="commentadmin">
      <p>
      <button @click="addcommentShow">添加</button>
      </p>
    <table>
      <tr>
        <th v-for="(lists,index) in columnList" :key="index">{{lists}}</th>
      </tr>
      <tr v-for="(lists,index) in inforList" :key="index">
        <td>{{lists.orderId}}</td>
        <td>{{lists.lessonId}}</td>
        <td>{{lists.comment}}</td>
        <td>{{lists.star}}</td>
        <td>{{lists.createTime}}</td>
        <td>{{lists.status}}</td>
        <td>
        <button @click="editcommentShow(index)">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button @click="delt(index)">删除</button>
        </td>
      </tr>
    </table>

    <addcomment v-show="addcomment1" @hideAddcomment="hideAddcomment" />
    <editcomment v-show="editcomment1" @hideEditcomment="hideEditcomment" :selectedlist="selectedlist" @save="save" />
   </div>
</template>

<script>
import addcomment from "./addcomment.vue"
import editcomment from "./editcomment.vue"

export default {
  data() {
      return {
        selectedlist:'',
        selected: '0',
        columnList: [ "订单id", "课程id","评论","星级","创建时间","状态","操作"],
        inforList:[
          {
              orderId: "12345646",
              lessonId: "123456",
              comment: "vue讲的真好",
              star: "五星",
              createTime: "8:00",
              status: "正常",
          },
        ],
        addcomment1: false,
        editcomment1: false,
      }
  },
   components: {
     addcomment,
     editcomment,
   },
   methods : {
     delt(index){
       const bOn = confirm("确认删除此项数据？");
       if(bOn){
         this.inforList.splice(index,1);
       }
     },
     addcommentShow(){
       this.addcomment1 = true;
     },
     hideAddcomment(){
       this.addcomment1 = false;
     },
     editcommentShow(index){
      this.selected = index;
      this.selectedlist = JSON.parse( JSON.stringify(this.inforList[index]));
      this.editcomment1 = true;
     },
    save(){
      this.$set(this.inforList,this.selected,this.selectedlist);
    },
     hideEditcomment(){
       this.editcomment1 = false;
     },
   }
}
</script>

<style scoped>
.commentadmin {
  width: 100%;
  height: 900px;
  overflow: auto;
}
.commentadmin p button {
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
.commentadmin table {
  width: 100%;
  background-color: pink;
  border-collapse: collapse;
}
.commentadmin table tr {
  width: 90%;
  height: 30px;
}
.commentadmin table tr td,
.commentadmin table tr th {
  /* width: 12.5%; */
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid black;
  font-size: 15px;
}
.commentadmin table tr td button {
  width: 30%;
  height: 80%;
  background-color: aquamarine;
  border: none;
  font-size: 14px;
  line-height: 80%;
  text-align: center;
}
</style>
