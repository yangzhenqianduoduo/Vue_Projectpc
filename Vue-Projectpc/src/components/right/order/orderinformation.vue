<template>
  <div class="orderinformation">
    <p>
      <button @click="addorderinformationShow">添加</button>
    </p>
    <table>
      <tr>
        <th v-for="(lists,index) in columnList" :key="index">{{lists}}</th>
      </tr>
      <tr v-for="(lists,index) in inforList" :key="index">
        <td>{{lists.userNumber}}</td>
        <td>{{lists.orderNumber}}</td>
        <td>{{lists.payment}}</td>
        <td>{{lists.paytype}}</td>
        <td>{{lists.orderStatus}}</td>
        <td>{{lists.isComment}}</td>
        <td>{{lists.createTime}}</td>
        <td>
          <button @click="editorderinformationShow(index)">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button @click="delt(index)">删除</button>
        </td>
      </tr>
    </table>
    <addorderinformation
      v-show="addorderinformation1"
      @hideAddorderinformation="hideAddorderinformation"
    />
    <editorderinformation
      v-show="editorderinformation1"
      @hideEditorderinformation="hideEditorderinformation"
      :selectedlist="selectedlist"
      @save="save"
    />
  </div>
</template>

<script>
import addorderinformation from "./addorderinformation.vue";
import editorderinformation from "./editorderinformation.vue";

export default {
  data() {
    return {
      selectedlist: "",
      selected: "0",
      columnList: [
        "用户ID",
        "订单编号",
        "支付金额",
        "支付类型",
        "订单状态",
        "是否评价",
        "创建时间",
        "操作"
      ],
      inforList: [
        {
          userNumber: "01",
          orderNumber: "90934893849724834",
          payment: "￥198",
          paytype: "支付宝",
          orderStatus: "正常",
          isComment: "否",
          createTime: "8:00"
        }
      ],
      addorderinformation1: false,
      editorderinformation1: false
    };
  },
  components: {
    addorderinformation,
    editorderinformation
  },
  methods: {
    delt(index) {
      const bOn = confirm("确认删除此项数据？");
      if (bOn) {
        this.inforList.splice(index, 1);
      }
    },
    addorderinformationShow() {
      this.addorderinformation1 = true;
    },
    hideAddorderinformation() {
      this.addorderinformation1 = false;
    },
    editorderinformationShow(index) {
      this.selected = index;
      this.selectedlist = JSON.parse( JSON.stringify(this.inforList[index]));
      this.editorderinformation1 = true;
    },
    save(){
      this.$set(this.inforList,this.selected,this.selectedlist);
    },
    hideEditorderinformation() {
      this.editorderinformation1 = false;
    }
  }
};
</script>

<style scoped>
.orderinformation {
  width: 100%;
  height: 900px;
  overflow: auto;
}
.orderinformation p button {
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
.orderinformation table {
  width: 100%;
  background-color: pink;
  border-collapse: collapse;
}
.orderinformation table tr {
  width: 90%;
  height: 30px;
}
.orderinformation table tr td,
.orderinformation table tr th {
  /* width: 12.5%; */
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid black;
  font-size: 15px;
}
.orderinformation table tr td button {
  width: 30%;
  height: 80%;
  background-color: aquamarine;
  border: none;
  font-size: 14px;
  line-height: 80%;
  text-align: center;
}
</style>
