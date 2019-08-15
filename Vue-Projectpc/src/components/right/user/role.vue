<template>
  <div class="role">
    <p>
      <button @click="addroleShow">添加</button>
    </p>
    <table>
      <tr>
        <th v-for="(lists,index) in columnList" :key="index">{{lists}}</th>
      </tr>
      <tr v-for="(item,index) in inforList" :key="index">
        <td>{{item.number}}</td>
        <td>{{item.username}}</td>
        <td>{{item.question}}</td>
        <td>{{item.answer}}</td>
        <td>{{item.role}}</td>
        <td>{{item.status}}</td>
        <td>
          <button @click="editroleShow(index)">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button @click="delt(index)">删除</button>
        </td>
      </tr>
    </table>
    <addrole v-show="addrole1" @hideAddrole="hideAddrole" />
    <editrole v-show="editrole1" @hideEditrole="hideEditrole" :selectedlist="selectedlist" @save="save" />
  </div>
</template>

<script>
import addrole from "./addrole.vue"
import editrole from "./editrole.vue"

export default {
  data() {
    return {
      selectedlist:'',
      selected: '0',
      columnList: [
          "编号",
          "用户名",
          "问题",
          "答案",
          "角色",
          "状态",
          "操作",
      ],
      inforList: [
        {
          number: "01",
          username: "张三",
          question: "你爸爸是谁",
          answer: "我是你爸爸",
          role: "普通用户",
          status: "正常",
        },
      ],
      addrole1: false,
      editrole1: false,
    };
  },
  components: {
    addrole,
    editrole,
  },
  methods: {
    delt(i) {
      const bOn = confirm("确定删除此项数据？");
      if (bOn) {
        this.inforList.splice(i,1); 
      }
    },
    addroleShow(){
      this.addrole1 = true;
    },
    hideAddrole(){
      this.addrole1 = false;
    },
    editroleShow(index){
      this.selected = index;
      this.selectedlist = JSON.parse( JSON.stringify(this.inforList[index]));
      this.editrole1 = true;
    },
    save(){
      this.$set(this.inforList,this.selected,this.selectedlist);
    },
    hideEditrole(){
      this.editrole1 = false;
    },
  }
};
</script>

<style scoped>
.role {
  width: 100%;
  height: 900px;
  overflow: auto;
}
.role p button {
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
.role table {
  width: 100%;
  background-color: pink;
  border-collapse: collapse;
}
.role table tr {
  width: 100%;
  height: 30px;
}
.role table tr td,.role table tr th {
  width: 14.3%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid black;
  font-size: 15px;
}
.role table tr td button {
  width: 30%;
  height: 80%;
  background-color: aquamarine;
  border: none;
  font-size: 14px;
  line-height: 80%;
  text-align: center;
}
</style>
