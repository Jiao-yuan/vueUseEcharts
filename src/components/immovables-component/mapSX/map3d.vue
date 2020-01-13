<template>
  <!-- 热图 -->
  <div id="m-map">
    <div id="container" class="map"></div>
    <shanxi-map></shanxi-map>
    <time-select @toChange="toChange"></time-select>
    <div class="map-animation-switch" @click="animalSwitch">
      <img :src="mapAnimationSwitch" alt="图片" />
    </div>
  </div>
</template>
<script>
import swwg from "../../../assets/images/shengwei/shengweiwg.png";
import sxszf1 from "../../../assets/images/shengzf/zfwg.jpg";
import sxszf3 from "../../../assets/images/shengzf/zfwg3.jpg";
import timeSelect from "./time-select";
import shanxiMap from "../../shanxi-map/index";
import $ from "jquery";
import stop from "../../../assets/images/stop.png";
import start from "../../../assets/images/start.png";
import echarts from "echarts";
import "echarts/extension/bmap/bmap";
import buildingLayerJson from "./buildingLayer.json";
import {
  createFloatTitleBoxIm,
  createPicContainer,
  createFloatTitleBoxImBtn
} from "../../../utils/3d";
import cityJson from "./mapCenter.json";
import { mapGetters } from "vuex";
import provincialGovernment from "../../../assets/images/3D.png";
export default {
  data() {
    return {
      animateStyleList: [
        "bounceIn",
        "fadeInLeft",
        "flipInY",
        "flipInX",
        "lightSpeedIn",
        "rotateIn",
        "rotateInUpLeft",
        "slideInLeft",
        "rollIn"
      ],
      map: null,
      chart: null,
      data1: [],
      position: [],
      shanxiCity: "太原市",
      cityCenters: "",
      cityZoom: 10,
      increaseRotation: null,
      increaseArrange: null,
      animationSwitch: false,
      rotts: 0,
      pitts: 0,
      mapAnimationSwitch: stop,
      marker: null,
      markerPosition: [112.576555, 37.818927],
      defaultList: {
        first: "总使用面积:8816.21平方米",
        second: "总建筑面积:14434平方米",
        third: "总楼层数:9",
        fourth: "地上面积:14434平方米"
      },
      defaultList3: {
        first: "总使用面积:5196.84平方米",
        second: "总建筑面积:6761.12平方米",
        third: "总楼层数:4 建成年份:1998",
        fourth: "地上面积:6761.12平方米"
      }
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
  computed: {
    ...mapGetters([])
  },
  watch: {
    cityName(val) {
      for (let key in cityJson) {
        if (key === val) {
          this.cityCenters = cityJson[key].center;
          this.cityZoom = cityJson[key].zoom;
        }
      }
      this.shanxiCity = val;
      this.initMap();
    },
    cityCenter(val) {
      this.map.setCenter(val);
      this.map.setZoom(this.zoom);
    },
    markersData(val) {
      this.position = val;
    },
    data(val) {
      this.data1 = [];
      if (val) {
        val.forEach(element => {
          this.data1.push({
            coordinate: [element.longitude, element.latitude],
            value: element.countNum
          });
        });
        this.$nextTick(() => {
          //  this.setHeat()
        });
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.increaseArrange);
  },
  mounted() {
    var buildingLayer = new AMap.Buildings({
      zIndex: 130,
      merge: false,
      sort: false,
      zooms: [15, 20]
    });
    buildingLayer.setStyle(buildingLayerJson); //此配色优先级高于自定义mapStyle
    this.map = new AMap.Map("container", {
      mapStyle: "amap://styles/62ded45f1ff6c1c8d5ce898ede7d986e",
      pitch: 60,
      zoom: 17,
      center: [112.541197, 37.860263], //高德
      viewMode: "3D",
      skyColor: "#041544",
      pitchEnable: true,
      animateEnable: false, //地图平移过程中是否使用动画（如调用panBy、panTo、setCenter、setZoomAndCenter等函数，将对地图产生平移操作，是否使用动画平移的效果），默认为true，即使用动画
      jogEnable: false, //地图是否使用缓动效果，默认值为true。此属性可被setStatus/getStatus 方法控制
      defaultCursor: "pointer",
      layers: [new AMap.TileLayer({}), buildingLayer]
    });

    this.map.plugin(["AMap.ControlBar"], () => {
      var controlBar = new AMap.ControlBar({
        position: {
          top: "150px",
          right: "30px"
        }
      });
      this.map.addControl(controlBar);
    });

    buildingLayerJson.areas.forEach((v, i) => {
      new AMap.Polygon({
        bubble: true,
        fillOpacity: 0.4,
        strokeWeight: 1,
        path: v.path,
        map: this.map
      });
    });
    createFloatTitleBoxIm(
      this.map,
      [112.542973, 37.860275],
      "山西省委",
      swwg,
      (this.defaultList = {
        first: "总使用面积:17440.45平方米",
        second: "总建筑面积:33725平方米",
        third: "总楼层数:18 建成年份2009",
        fourth: "地上面积:33725平方米"
      })
    );
    createFloatTitleBoxImBtn(
      this.map,
      [112.542973, 37.860275],
      this.arrange,
      "sxsw"
    );
    this.mapAnimation(this.map);
    // this.arrange();
  },
  components: { shanxiMap, timeSelect },
  methods: {
    animalSwitch() {
      if (this.animationSwitch == false) {
        this.animationSwitch = true;
        this.mapAnimationSwitch = start;
      } else {
        this.animationSwitch = false;
        this.mapAnimationSwitch = stop;
      }
      if (this.animationSwitch === true) {
        clearInterval(this.increaseRotation);
      } else if (this.animationSwitch === false) {
        let rot = this.map.getRotation();
        this.mapRotation(rot);
      }
    },
    toChange(val) {
      this.map.remove(this.map.getAllOverlays("marker"));
      clearInterval(this.increaseArrange);
      if (val === "1101") {
        this.map.setCenter([112.578748, 37.81402]);
        this.map.setZoom(17);
        createFloatTitleBoxIm(
          this.map,
          [112.578748, 37.81402],
          "山西省政府1号楼",
          sxszf1,
          (this.defaultList = {
            first: "总使用面积:8816.21平方米",
            second: "总建筑面积:14434平方米",
            third: "总楼层数:9",
            fourth: "地上面积:14434平方米"
          })
        );
        createFloatTitleBoxImBtn(
          this.map,
          [112.578748, 37.81402],
          this.arrange,
          "sxszf1"
        );
      } else if (val === "1103") {
        this.map.setCenter([112.576819, 37.814304]);
        this.map.setZoom(17);
        createFloatTitleBoxIm(
          this.map,
          [112.576819, 37.814304],
          "山西省政府3号楼",
          sxszf3,
          (this.defaultList = {
            first: "总使用面积:5196.84平方米",
            second: "总建筑面积:6761.12平方米",
            third: "总楼层数:4 建成年份:1998",
            fourth: "地上面积:6761.12平方米"
          })
        );
        createFloatTitleBoxImBtn(
          this.map,
          [112.576819, 37.814304],
          this.arrange,
          "sxszf3"
        );
      } else if (val === "120") {
        this.map.setCenter([112.570518, 37.864602]);
        createFloatTitleBoxIm(
          this.map,
          [112.570518, 37.864602],
          "山西饭店",
          "sxszf",
          this.defaultList
        );
        this.map.setZoom(17);
      } else if (val === "119") {
        this.map.setCenter([113.583012, 38.98796]);
        createFloatTitleBoxIm(
          this.map,
          [113.583012, 38.98796],
          "五台山栖贤阁迎宾馆",
          "sxszf",
          this.defaultList
        );
        this.map.setZoom(17);
      } else if (val === "911") {
        this.map.setCenter([112.533884, 37.819438]);
        createFloatTitleBoxIm(
          this.map,
          [112.533884, 37.819438],
          "丽华大酒店",
          "sxszf",
          this.defaultList
        );
        this.map.setZoom(17);
      } else if (val === "912") {
        this.map.setCenter([112.541197, 37.860263]);
        createFloatTitleBoxIm(
          this.map,
          [112.542973, 37.860275],
          "山西省委",
          swwg,
          (this.defaultList = {
            first: "总使用面积:17440.45平方米",
            second: "总建筑面积:33725平方米",
            third: "总楼层数:18 建成年份2009",
            fourth: "地上面积:33725平方米"
          })
        );
        createFloatTitleBoxImBtn(
          this.map,
          [112.542973, 37.860275],
          this.arrange,
          "sxsw"
        );
        this.map.setZoom(17);
      }
    },
    // 地图动画
    mapAnimation(map) {
      var rot = map.getRotation();
      rot = 0;
      this.mapRotation(rot);
    },
    mapRotation(rots) {
      this.map.setRotation(rots);
      clearInterval(this.increaseRotation);
      this.increaseRotation = setInterval(() => {
        if (rots < 360) {
          rots++;
          this.map.setRotation(rots);
        } else {
          clearInterval(this.increaseRotation);
          setTimeout(() => {
            rots = 0;
            this.mapRotation(rots);
          }, 1000);
        }
      }, 100);
    },
    //整体动画编排
    arrange(val) {
      let center = this.map.getCenter()
      let i = 0;
      this.increaseArrange = setInterval(() => {
        i++;
        let animateStyle = this.animateStyleList[
          Math.floor(Math.random() * this.animateStyleList.length)
        ];
        if (val === "sxsw") {
          let imageUrl = require(`../../../assets/images/shengwei/floor${i}.jpg`);
                this.map.remove(this.map.getAllOverlays("marker"));
          createPicContainer(this.map, center, imageUrl, animateStyle);
          if (i == 18) {
            clearInterval(this.increaseArrange);
            let currentcenter = this.map.getCenter();
            this.map.remove(this.map.getAllOverlays("marker"));
            createFloatTitleBoxIm(
              this.map,
              [112.542973, 37.860275],
              "山西省委",
              swwg,
              (this.defaultList = {
                first: "总使用面积:17440.45平方米",
                second: "总建筑面积:33725平方米",
                third: "总楼层数:18 建成年份2009",
                fourth: "地上面积:33725平方米"
              })
            );
            createFloatTitleBoxImBtn(
              this.map,
              [112.542973, 37.860275],
              this.arrange,
              "sxsw"
            );
          }
        } else if (val === "sxszf3") {
          let centerzfthree = this.map.getCenter();
          let imageUrl = require(`../../../assets/images/shengzf/zfthree${i}.jpg`);
                this.map.remove(this.map.getAllOverlays("marker"));
          createPicContainer(this.map, centerzfthree, imageUrl, animateStyle);
          if (i == 4) {
            clearInterval(this.increaseArrange);
            let currentcenter = this.map.getCenter();
            this.map.remove(this.map.getAllOverlays("marker"));
            createFloatTitleBoxIm(
              this.map,
              [112.576819, 37.814304],
              "山西省政府3号楼",
              sxszf3,
              (this.defaultList = {
                first: "总使用面积:5196.84平方米",
                second: "总建筑面积:6761.12平方米",
                third: "总楼层数:4 建成年份:1998",
                fourth: "地上面积:6761.12平方米"
              })
            );
            createFloatTitleBoxImBtn(
              this.map,
              [112.576819, 37.814304],
              this.arrange,
              "sxszf3"
            );
          }
        } else if (val === "sxszf1") {
          let centerzfOne = this.map.getCenter();
          this.map.remove(this.map.getAllOverlays("marker"));
          let imageUrl = require(`../../../assets/images/shengzf/zfone${i}.jpg`);
          createPicContainer(this.map, centerzfOne, imageUrl, animateStyle);
          if (i == 9) {
            clearInterval(this.increaseArrange);
            let currentcenter = this.map.getCenter();
            this.map.remove(this.map.getAllOverlays("marker"));
            createFloatTitleBoxIm(
              this.map,
              currentcenter,
              "山西省政府1号楼",
              sxszf1,
              (this.defaultList = {
                first: "总使用面积:8816.21平方米",
                second: "总建筑面积:14434平方米",
                third: "总楼层数:9",
                fourth: "地上面积:14434平方米"
              })
            );
            createFloatTitleBoxImBtn(
              this.map,
              currentcenter,
              this.arrange,
              "sxszf1"
            );
          }
        }
      }, 3000);
    },
    // 实例化地图
    initMap(val) {}
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
  .map {
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }
  .map-animation-switch {
    width: 80px;
    height: 80px;
    position: absolute;
    right: 37px;
    top: 60px;
    z-index: 9999;
    cursor: pointer;
    img {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
  }
}
</style>
