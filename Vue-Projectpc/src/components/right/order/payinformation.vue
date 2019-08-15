<template>
  <div class="payinformation">
    <p>
      <button @click="addpayinformationShow">添加</button>
    </p>
    <table>
      <tr>
        <th v-for="(lists,index) in columnList" :key="index">{{lists}}</th>
      </tr>
      <tr v-for="(lists,index) in inforList" :key="index">
        <td>{{lists.orderNumber}}</td>
        <td>{{lists.payplatform}}</td>
        <td>{{lists.alipayNumber}}</td>
        <td>{{lists.alipayStatus}}</td>
        <td>{{lists.createTime}}</td>
        <td>{{lists.orderStatus}}</td>
        <td>
          <button @click="editpayinformationShow(index)">编辑</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button @click="delt(index)">删除</button>
        </td>
      </tr>
    </table>

    <addpayinformation v-show="addpayinformation1" @hideAddpayinformation="hideAddpayinformation" />
    <editpayinformation
      v-show="editpayinformation1"
      @hideEditpayinformation="hideEditpayinformation"
      :selectedlist="selectedlist"
      @save="save"
    />
  </div>
</template>

<script>
import addpayinformation from "./addpayinformation.vue";
import editpayinformation from "./editpayinformation.vue";

export default {
  data() {
    return {
      selectedlist: "",
      selected: "0",
      columnList: [
        "订单编号",
        "支付平台",
        "支付宝流水号",
        "支付状态",
        "创建时间",
        "订单状态",
        "操作"
      ],
      inforList: [
        {
          orderNumber: "90934893849724834",
          payplatform: "支付宝",
          alipayNumber: "809537450374683",
          alipayStatus: "正常",
          createTime: "8:00",
          orderStatus: "正常",
        }
      ],
      addpayinformation1: false,
      editpayinformation1: false
    };
  },
  components: {
    addpayinformation,
    editpayinformation
  },
  methods: {
    delt(index) {
      const bOn = confirm("确认删除此项数据？");
      if (bOn) {
        this.inforList.splice(index, 1);
      }
    },
    addpayinformationShow() {
      this.addpayinformation1 = true;
    },
    hideAddpayinformation() {
      this.addpayinformation1 = false;
    },
    editpayinformationShow(index) {
      this.selected = index;
      this.selectedlist = JSON.parse( JSON.stringify(this.inforList[index]));
      this.editpayinformation1 = true;
    },
    save(){
      this.$set(this.inforList,this.selected,this.selectedlist);
    },
    hideEditpayinformation() {
      this.editpayinformation1 = false;
    }
  }
};
</script>

<style scoped>
.payinformation {
  width: 100%;
  height: 900px;
  overflow: auto;
}
.payinformation p button {
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
.payinformation table {
  width: 100%;
  background-color: pink;
  border-collapse: collapse;
}
.payinformation table tr {
  width: 90%;
  height: 30px;
}
.payinformation table tr td,
.payinformation table tr th {
  /* width: 12.5%; */
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid black;
  font-size: 15px;
}
.payinformation table tr td button {
  width: 30%;
  height: 80%;
  background-color: aquamarine;
  border: none;
  font-size: 14px;
  line-height: 80%;
  text-align: center;
}
</style>
