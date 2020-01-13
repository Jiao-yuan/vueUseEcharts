<template>
  <div class="regionbg">
    <!-- <div cla ss="line"></div> -->
    <div class="title-head">
      <div class="title">
        <span class="round">
          <img src="../../assets/images/Frame.png" alt />
        </span>
        <p>{{titlename}}</p>
      </div>
      <span class="magnify" @click="showbigpicture()">
        <img src="../../assets/images/zoomin.png" alt />
      </span>
    </div>
    <div class="canvas">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "basebg",
  data() {
    return {};
  },
  props: ["titlename"],
  computed: {},
  mounted() {},
  components: {},
  methods: {
    showbigpicture() {
      this.$emit("showbigpicture", 1);
    }
  }
};
</script>

<style lang="scss" scoped>
.regionbg {
  height: 335px;
  padding: 26px 20px 26px;
  position: relative;
  // background:url(../../assets/images/bg-tip.png) no-repeat;
  // background-size: 100% 100%;
  // border-radius: 4px;
  margin-bottom: 8px;
  // .line {
  //   position: absolute;
  //   top: 0;
  //   left: 0%;
  //   width: 100%;
  //   height: 1px;
  //   // background-image: linear-gradient(
  //   //   90deg,
  //   //   rgba(24, 39, 61, 0.07) 5%,
  //   //   rgba(32, 129, 244, 1) 45%,
  //   //   #2081f3 60%,
  //   //   rgba(28, 82, 147, 0.5) 85%,
  //   //   rgba(24, 39, 61, 0.07) 100%
  //   // );
  // }
  .title-head {
    width: 100%;
    height: 16px;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 26px;
    .title {
      position: relative;
      width: 100%;
      display: flex;
      align-items: center;
      color: #fff;
      // margin-bottom: 0.3rem;
      .round {
        display: flex;
        margin-right: 8px;
      }
      p {
        font-size: 18px;
        color: #78F2FF;
      }
    }
   .magnify {
      position: absolute;
      right: 1px;
      top: 1px;
      width: 17px;
      height: 17px;
      cursor: pointer;
      img {
        width: 17px;
        height:17px;
      }
    }
  }
  .canvas {
    width: 100%;
    // height: 100%;
    // height: 1.8rem;
  }
}
</style>