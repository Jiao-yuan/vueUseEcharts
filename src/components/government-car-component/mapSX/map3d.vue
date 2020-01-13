<template>
  <!-- 热图 -->
  <div id="m-map">
    <div id="container" class="map"></div>
    <div class="controlList">
      <h2>
        监控车辆总数
        <span>857</span>
      </h2>
      <ul>
        <li v-for="(item,index) in carTypeList" :key="index">
          <span>
            <img src="../../../assets/images/zx.png" alt v-if="index==0" />
            <img src="../../../assets/images/lx.png" alt v-if="index==1" />
            <img src="../../../assets/images/tz.png" alt v-if="index==2" />
            {{item.name}}
          </span>
          <span>{{item.value}}</span>
        </li>
      </ul>
      <p>
        <span>车牌照</span>
        <input type="text" />
        <button>搜索</button>
      </p>
    </div>
    
  </div>
</template>

<script>
import {getmarkCar} from "../../../api/govermen-car"
import {
  createFloatTitleBox,
  creattravelLine,
  createIcon,
  createTextMarak
} from "../../../utils/3d";
export default {
  data() {
    return {
      carTypeList: [
        { name: "在线车辆", value: 234 },
        { name: "离线车辆", value: 574 },
        { name: "调试车辆", value: 764 }
      ],
      defaultList: {
        first: "车牌:晋A-1009",
        second: "司机姓名:张三",
        third: "告警类型:无任务出行",
        fourth: "时间:2019-12-31"
      },
      map: null
    };
  },
  props: {
    data: {
      type: Array,
      default: () => {}
    },
    markersData: {
      type: Array,
      default: () => {}
    },
    count: {},
    height: {}
  },
  computed: {},
  watch: {},
  mounted() {

    this.map = new AMap.Map("container", {
      // features: ['bg', 'road'],
      mapStyle: "amap://styles/62ded45f1ff6c1c8d5ce898ede7d986e",
      pitch: 40,
      zoom: 19,
      // zoomEnable:false,
      // dragEnable: false,
      center: [112.245579, 37.792417], //高德
      viewMode: "2D",
      skyColor: "#041544",
      pitchEnable: true,
      animateEnable: false, //地图平移过程中是否使用动画（如调用panBy、panTo、setCenter、setZoomAndCenter等函数，将对地图产生平移操作，是否使用动画平移的效果），默认为true，即使用动画
      jogEnable: false, //地图是否使用缓动效果，默认值为true。此属性可被setStatus/getStatus 方法控制
      defaultCursor: "pointer",
      showBuildingBlock: false
    });
    creattravelLine(this.map);
    this.initMap();
  },
  components: {},
  methods: {
    // 实例化地图
    initMap(val) {
      let zooms = this.map.getZoom();
      let that = this;
      let sxJson = []
     getmarkCar().then(res=>{
         sxJson = res.data
        this.map.clearMap();
        let iconJson = [];
        this.map.setCenter(this.cityCenters);
        this.map.setZoom(this.cityZoom);
        for (let i = 0; i < sxJson.carJson.length; i++) {
            let obj = {};
            obj.center = sxJson.carJson[i].center.toString();
            iconJson.push(obj);
            createIcon(this.map, iconJson);
            createTextMarak(this.map, sxJson.carJson[i].center,sxJson.carJson[i].carcode);
        }
      })
    }
  }
};
</script>
<style lang='scss' scoped>
#m-map {
  position: relative;
  width: 1696px;
  height: 711px;
  margin-left: 82px;
  float: left;
  .controlList {
    height: 340px;
    width: 320px;
    background: url("../../../assets/images/border.png") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 0px;
    top: 60px;
    display: flex;
    border-radius: 2px;
    padding: 42px 20px;
    flex-direction: column;
    h2 {
      font-size: 20px;
      color: #78f2ff;
      padding-bottom: 30px;
      border-bottom: 1px solid #78f2ff;
      span {
        color: #78f2ff;
        font-size: 40px;
        margin-left: 8px;
      }
    }
    ul {
      margin-top: 16px;
      li {
        display: flex;
        font-size: 16px;
        justify-content: space-between;
        line-height: 23px;
        color: #78f2ff;
        height: 38px;
        img {
          height: 9px;
          width: 20px;
          margin-right: 6px;
        }
      }
    }
    p {
      margin-top:33px;
      span {
        font-size: 16px;
        color: #fff;
        line-height: 23px;
      }
      input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        width: 134px;
        color:#fff;
        padding-left:10px;
      }
      button {
        background: linear-gradient(180deg, #214daa -8.93%, #0a2e7a 100%),
          #0a2867;
        border: 1px solid #3661bb;
        border-radius: 4px;
        padding:3px 19px;
        font-size: 12px;
        color:#78F2FF;
        cursor: pointer;
      }
    }
  }
  .map {
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }
}
</style>
