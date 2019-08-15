<template>
  <div class="editorderinformation">
    <div class="up">
      编辑订单信息
      <span @click="closeEditorderinformation">X</span>
    </div>
    <form action method="post">
      <div>
        <span>用户Id:</span>
        <input type="text" class="in1" v-model="selectedlist.userNumber" />
      </div>
      <div>
        <span>订单编号:</span>
        <input type="text" class="in1" v-model="selectedlist.orderNumber" />
      </div>
      <div>
        <span>支付金额:</span>
        <input type="text" class="in1" v-model="selectedlist.payment" />
      </div>
      <div>
        <span>支付类型:</span>
        <div class="in2">
          <input type="radio" name="status" checked="checked" value="支付宝" v-model="selectedlist.paytype"   />支付宝
        </div>
      </div>
      <div>
        <span>订单状态:</span>
        <div class="in2">
          <input type="radio" name="orderStatus"  value="正常" v-model="selectedlist.orderStatus" />正常
          <input type="radio" name="orderStatus"  value="禁用" v-model="selectedlist.orderStatus" />禁用
          <input type="radio" name="orderStatus" value="已删除" v-model="selectedlist.orderStatus" />已删除
        </div>
      </div>
      <div>
        <span>是否评价:</span>
        <div class="in2">
          <input type="radio" name="isComment"  value="是" v-model="selectedlist.isComment" />是
          <input type="radio" name="isComment"  value="否" v-model="selectedlist.isComment" />否
        </div>
      </div>
      <div>
        <span>创建时间:</span>
        <input type="text" class="in1" v-model="selectedlist.createTime" />
      </div>
      <input type="button" class="in3" value="保存" @click="save" />
    </form>
  </div>
</template>

<script>
export default {
  props: ["selectedlist"],
  data() {
    return {};
  },
  methods: {
    closeEditorderinformation() {
      this.$emit("hideEditorderinformation");
    },
    save() {
      this.$emit("save");
      this.$emit("hideEditorderinformation");
    }
  }
};
</script>

<style scoped>
.editorderinformation {
  z-index: 5;
  width: 80%;
  height: 500px;
  background-color: white;
  opacity: 0.93;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.editorderinformation .up {
  width: 100%;
  height: 60px;
  font-size: 30px;
  font-family: "微软雅黑";
  color: #726a8f;
  text-align: center;
  line-height: 60px;
}
.editorderinformation .up span {
  display: inline-block;
  height: 40px;
  width: 60px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  background-color: #e6e5e5;
  opacity: 0.5;
  color: black;
  position: absolute;
  right: 0;
  top: 0;
}
.editorderinformation .up span:hover {
  background-color: red;
  color: wheat;
}
.editorderinformation form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 420px;
  width: 100%;
}
.editorderinformation form div {
  height: 30px;
  width: 80%;
  display: flex;
  justify-content: space-between;
}
.editorderinformation form div .in2 {
  display: inline-block;
  width: 80%;
  height: 100%;
  font-size: 22px;
  line-height: 150%;
}
.editorderinformation form div span {
  display: inline-block;
  width: 20%;
  height: 100%;
  text-align: right;
  font-size: 22px;
  line-height: 150%;
}
.editorderinformation form div .in1 {
  width: 80%;
  height: 100%;
  display: inline-block;
  font-size: 22px;
  line-height: 100%;
}
.editorderinformation form .in3 {
  display: block;
  width: 80px;
  height: 30px;
  background-color: pink;
  border: none;
  border-radius: 15px;
}
</style>
