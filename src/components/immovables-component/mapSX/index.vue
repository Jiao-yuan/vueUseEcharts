<template>
  <div class="mapSXIM">
    <heat-map :data="list" />
  </div>
</template>
<script>
import heatMap from "./map3d";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      region_id: "0335_dongaohui",
      time: "",
      timer: null,
      list: [] //热图数据
    };
  },

  components: {
    heatMap
  },

  computed: {
    ...mapGetters(["heatMap", "showDialog"])
  },

  beforeDestroy() {},

  mounted() {},

  methods: {}
};
</script>
<style lang='scss'>
.mapSXIM {
  .amap-marker-label {
    font-size: 0.16rem;
    line-height: 18px;
    text-align: center;
    height: 43px;
    font-family: STLiti;
    color: green;
    color: #ffffff;
    border-radius: 1px;
    background: transparent;
    /*background-color: rgba(255,255,255,0.4);*/
    border: solid 1px rgba(100, 255, 200, 0.8);
  }
  .amap-marker-label div {
    padding: 0 10px;
  }
  .symbol {
    width: 14px;
    height: 14px;
    display: flex;
    border-radius: 50%;
    font-size: 10px;
    justify-content: center;
    border: 1px solid #cecece;
    color: white;
    background: #ff0000;
    align-items: center;
  }
  .per {
    width: 1px;
    height: 60px;
    position: relative;
    transform: rotate(180deg);
  }
  .son {
    width: 1px;
    height: 0;
    background: #b0c4de;
    position: relative;
    animation: mymove 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    border: 1px solid #b0c4de;
    position: relative;
    left: -2.5px;
    background: #b0c4de;
  }
  .floor{
    width:1180px;
    height:510px;
  }
  .btn{
    position:absolute;
    bottom:70px;
    right: -160px;
    min-width: 320px;
    color:#fff;
    height:30px;
    z-index: 10;
    background:#58b3cb;
    line-height:30px;
    text-align:center;
    padding: 0 10px;
  }
  .box {
    bottom: 60px;
    min-width: 340px;
    height: 250px;
    right: -170px;
    padding: 0 10px;
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    .infoBox {
      display:flex;
      align-items: center;
      margin-top:20px;
      .sxszf3{
        background: url("../../../assets/images/shengzf/zfwg3.jpg") no-repeat;
        background-size: 100% 100%;
      }
      .sxszf {
        background: url("../../../assets/images/shengzf/zfwg.jpg") no-repeat;
        background-size: 100% 100%;
      }
      .swwg {
        background: url("../../../assets/images/shengwei/shengweiwg.png")
          no-repeat;
        background-size: 100% 100%;
      }
      ul {
        li {
          font-size: 12px;
          color: #58b3cb;
          line-height: 24px;
          padding-left: 10px;
        }
      }
    }
  }
  .con {
    min-height: 60px;
    width: 100%;
    border-bottom: 1px solid #78f2ff;
    text-align: center;
    color: #78f2ff;
    padding: 0 10px;
    font-size: 26px;
    padding-top: 16px;
  }
  @keyframes mymove {
    from {
      height: 0px;
    }
    to {
      height: 55px;
    }
  }
  .arrow {
    color: white;
  }
  .intro {
    width: 80px;
    display: flex;
  }
  .intro b {
    color: #fff;
    font-size: 8px;
    font-weight: 600;
    text-shadow: 5px 5px 5px #000;
  }

  .intro span {
    width: 10px;
    height: 10px;
    margin-top: 3px;
    margin-right: 2px;
  }
  .train span {
    background: url(../../../assets/images/train.png) no-repeat center;
    background-size: 100%;
  }
  .floor span {
    background: url(../../../assets/images/floor.png) no-repeat center;
    background-size: 100%;
  }

  .smbox {
    width: 3px;
    height: 40px;
    position: relative;
    transform: rotate(180deg);
  }
  .sdot {
    width: 1px;
    height: 0;
    position: relative;
    border-left: 3px dotted #fff;
    animation: updot 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .win {
    height: 5px;
    display: flex;
    width: 60px;
    position: relative;
    color: #f1e8e8;
    text-shadow: 0px -2px 2px #000;
    background: transparent;
    font-weight: 600;
    font-size: 8px;
    bottom: 25px;
    right: 50%;
    justify-content: center;
    align-items: center;
  }
  .win span {
    background: url(../../../assets/images/medal.png) no-repeat center;
    width: 10px;
    margin-top: 3px;
    height: 10px;
    background-size: 100%;
  }
  @keyframes updot {
    from {
      height: 0px;
    }
    to {
      height: 15px;
    }
  }
}
</style>