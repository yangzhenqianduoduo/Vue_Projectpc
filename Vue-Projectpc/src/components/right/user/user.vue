<template>
  <div class="user">
    <p>
      <button @click="adduserShow">添加</button>
    </p>
    <table>
      <tr>
        <th v-for="(lists,index) in columnList" :key="index">{{lists}}</th>
      </tr>
      <tr v-for="(item,index) in inforList" :key="index">
        <td>{{item.id}}</td>
        <td>{{item.username}}</td>
        <td>{{item.password}}</td>
        <td>{{item.email}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.image}}</td>
        <td>{{item.isAlive}}</td>
        <td>
          <button @click="edituserShow(index)">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button @click="delt(index)">删除</button>
        </td>
      </tr>
    </table>

    <adduser v-show="adduser1" @hideAdduser="hideAdduser" :adduser="adduser" />
    <edituser
      v-show="edituser1"
      @hideEdituser="hideEdituser"
      :selectedlist="selectedlist"
      @save="save"
    />
  </div>
</template>

<script>
import adduser from "./adduser.vue";
import edituser from "./edituser.vue";
import axios from "axios";

export default {
  data() {
    return {
      selectedlist: "",
      selected: "0",
      columnList: [
        "编号",
        "用户名",
        "密码",
        "邮箱",
        "电话",
        "头像地址",
        "状态",
        "操作"
      ],
      inforList: [],
      //从localstorage中读
      // inforList: JSON.parse(window.localStorage.getItem('inforList_key') || '[]'),
      adduser1: false,
      edituser1: false
      // item: {},
    };
  },
  components: {
    adduser,
    edituser
  },
  created: function() {
    // fetch({
    //   url: "http://yaobin.xyz/user/findAll",
    //   method: "get",
    //    mode: 'cors',
    //   headers: new Headers({
    //     'Content-Type':"application/json"
    //   })
    // }).then((res)=>{
    //   // console.log("hahaha"+res.status());
    //   return res.text()
    // }).then((data)=>{
    //   console.log(data.data);
    //   this.inforList = data.data
    // })
    // .catch((res)=>{
    // //输出一些错误信息
    //   console.log(res.status);
    // })
    axios({
      url: "http://yaobin.xyz/user/findAll",
      method: "get"

    })
    .then(response => {
        console.log(response.data);
        // console.log(typeof response.data);
        this.inforList = response.data;
      })
    .catch(function(error) {
      console.log(error);
    });
  },
  methods: {
    adduserShow() {
      this.adduser1 = true;
    },
    hideAdduser() {
      this.adduser1 = false;
    },
    edituserShow(index) {
      this.selected = index;
      this.selectedlist = JSON.parse(JSON.stringify(this.inforList[index]));
      this.edituser1 = true;
    },
    save() {
      this.$set(this.inforList, this.selected, this.selectedlist);
    },
    adduser(additem) {
      this.inforList.unshift(additem);
    },
    hideEdituser() {
      this.edituser1 = false;
    },
    delt(i) {
      const bOn = confirm("确定删除此项数据？");
      if (bOn) {
        this.inforList.splice(i, 1);
      }
    }
  }
  //深度监视
  // watch: {
  //   inforList: {
  //     deep: true,
  //     handler: function(value){
  //       //将inforList最新的JSON数据保存到localStorage中去
  //       window.localStorage.setItem('inforList_key',JSON.stringify(value))
  //     }
  //   }
  // }
};
</script>

<style scoped>
.user {
  width: 100%;
  height: 900px;
  overflow: auto;
}
.user p button {
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
.user table {
  width: 100%;
  background-color: pink;
  border-collapse: collapse;
}
.user table tr {
  width: 100%;
  height: 30px;
}
.user table tr td,
.user table tr th {
  width: 12.5%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid black;
  font-size: 15px;
}
.user table tr td button {
  width: 30%;
  height: 80%;
  background-color: aquamarine;
  border: none;
  font-size: 14px;
  line-height: 80%;
  text-align: center;
}
</style>
