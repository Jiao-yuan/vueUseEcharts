<template>
  <!-- 热图 -->
  <div id="m-map">
    <ul class="tabList">
      <li
        v-for="(item,index) in tabList"
        :key="index"
        @click="changeli(index)"
        :class="{'active':isActive==index}"
      >{{item}}</li>
    </ul>
    <div id="container" class="map"></div>
    <shanxi-map></shanxi-map>
    <div class="map-animation-switch" @click="animalSwitch">
      <img :src="mapAnimationSwitch" alt="图片" />
    </div>
  </div>
</template>

<script>
import shanxiMap from "../../shanxi-map/index";
import $ from "jquery";
import echarts from "echarts";
import "echarts/extension/bmap/bmap";
import { createPolygonGraphic, createFloatTitleBoxStatus ,createCircle,createGradientLine} from "../../../utils/3d";
import cityJson from "./mapCenter.json";
import { mapGetters } from "vuex";
import stop from "../../../assets/images/stop.png";
import start from "../../../assets/images/start.png";
import provincialGovernment from "../../../assets/images/3D.png";

export default {
  data() {
    return {
      tabList: [
        "办公用房及不动产",
        "公共机构节能",
        "公务用车",
        "经营管理",
        "智慧党建"
      ],
      defaultList: {
        first: "单位总数量:11个",
        second: "编制总人数:36人",
        third: "房产总面积:256㎡",
        fourth: "土地总面积:9657㎡"
      },
      isActive: 0,
      map: null,
      chart: null,
      data1: [],
      position: [],
      shanxiCity: "太原市",
      cityCenters: "",
      cityZoom: 10,
      increaseZoom: null,
      radius: 10,
      mapAnimationSwitch: stop,
      increaseRotation: null,
      increasePitch: null,
      animationSwitch: false,
      rotts: 0,
      pitts: 0,
      marker: null
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
  mounted() {
    this.map = new AMap.Map("container", {
      // features: ['bg', 'road'],
      mapStyle: "amap://styles/8762ed466f44c2d2603bb610657c73d3",
      pitch: 40,
      zoom: 9,
      center: [112.245579, 37.792417], //高德
      viewMode: "3D",
      skyColor: "#041544",
      pitchEnable: true,
      animateEnable: false, //地图平移过程中是否使用动画（如调用panBy、panTo、setCenter、setZoomAndCenter等函数，将对地图产生平移操作，是否使用动画平移的效果），默认为true，即使用动画
      jogEnable: false, //地图是否使用缓动效果，默认值为true。此属性可被setStatus/getStatus 方法控制
      defaultCursor: "pointer",
      showBuildingBlock: false
    });

    this.map.plugin(["AMap.ControlBar"],()=>{
        var controlBar = new AMap.ControlBar({
          position:{
            top:'150px',
            right:'30px'
          }
        })
        this.map.addControl(controlBar)
    });
    this.mapAnimation(this.map);
    this.initMap();
  },
  components: { shanxiMap },
  methods: {
    changeli(val) {
      this.isActive = val;
      if(val === 0){
       this.defaultList = {
        first: "单位总数量:11个",
        second: "编制总人数:36人",
        third: "房产总面积:256㎡",
        fourth: "土地总面积:9657㎡"
        }
      }else if(val === 1){
        this.defaultList = {
        first: "用能人数:9999人",
        second: "总能耗:12313j",
        third: "总用水量:392l",
        fourth: "总用电量:38.6度"
        }
      }else if(val === 2){
         this.defaultList = {
        first: "编制数量:9999人",
        second: "出行总里程:12313j",
        third: "出行总频次:392l",
        fourth: "调度总数:38.6度",
        fifth: "跨区总数:38.6度",
        sixth: "保障总数总数:38.6度"
        }
      }else if(val === 3){
         this.defaultList = {
        first: "本月收入总数:9999人",
        second: "本月支出总数:12313j",
        third: "本月利润:392l",
        fourth: "利润总成长:38.6度",
        }
      }else if(val === 4){
         this.defaultList = {
        first: "党组织数量：231人",
        second: "党员总数量:12313j",
        third: "预备党员数量:392l",
        }
      }
      this.initMap();
    },
    toChange() {
      this.map.setCenter([112.578748, 37.81402]);
      this.map.setZoom(15);
    },
    animalSwitch() {
      if (this.animationSwitch == false) {
        this.animationSwitch = true;
        this.mapAnimationSwitch = start;
      } else {
        this.animationSwitch = false;
        this.mapAnimationSwitch = stop;
      }
      if (this.animationSwitch === false) {
        this.rotts = this.map.getRotation();
        this.pitts = this.map.getPitch();
        if (this.rotts < 90) {
          this.mapRotation(this.rotts, this.pitts);
        } else if (this.rotts == 90 && this.pitts < 60) {
          this.increasePitch = setInterval(() => {
            if (this.pitts < 60) {
              this.pitts++;
              this.map.setPitch(this.pitts);
              if (this.pitts == 60) {
                clearInterval(this.increasePitch);
                this.increaseRotation = setInterval(() => {
                  if (this.rotts < 180) {
                    this.rotts++;
                    this.map.setRotation(this.rotts);
                    if (this.rotts == 180) {
                      clearInterval(this.increaseRotation);
                      this.increasePitch = setInterval(() => {
                        if (this.pitts > 0) {
                          this.pitts--;
                          this.map.setPitch(this.pitts);
                          if (this.pitts == 0) {
                            clearInterval(this.increasePitch);
                            this.increaseRotation = setInterval(() => {
                              if (this.rotts < 270) {
                                this.rotts++;
                                this.map.setRotation(this.rotts);
                                if (this.rotts == 270) {
                                  clearInterval(this.increaseRotation);
                                  this.increasePitch = setInterval(() => {
                                    if (this.pitts < 60) {
                                      this.pitts++;
                                      this.map.setPitch(this.pitts);
                                      if (this.pitts == 60) {
                                        clearInterval(this.increasePitch);
                                        this.increaseRotation = setInterval(
                                          () => {
                                            if (this.rotts < 360) {
                                              this.rotts++;
                                              this.map.setRotation(this.rotts);
                                              if (this.rotts == 360) {
                                                clearInterval(
                                                  this.increaseRotation
                                                );
                                                this.increasePitch = setInterval(
                                                  () => {
                                                    if (this.pitts > 0) {
                                                      this.pitts--;
                                                      this.map.setPitch(
                                                        this.pitts
                                                      );
                                                      if (this.pitts == 0) {
                                                        clearInterval(
                                                          this.increasePitch
                                                        );
                                                        setTimeout(() => {
                                                          this.rotts = 0;
                                                          this.pitts = 0;
                                                          this.mapRotation(
                                                            this.rotts,
                                                            this.pitts
                                                          );
                                                        }, 1000);
                                                      }
                                                    }
                                                  },
                                                  100
                                                );
                                              }
                                            }
                                          },
                                          100
                                        );
                                      }
                                    }
                                  }, 100);
                                }
                              }
                            }, 100);
                          }
                        }
                      }, 100);
                    }
                  }
                }, 100);
              }
            }
          }, 100);
        } else if (this.rotts > 90 && this.rotts < 180) {
          this.increaseRotation = setInterval(() => {
            if (this.rotts < 180) {
              this.rotts++;
              this.map.setRotation(this.rotts);
              if (this.rotts == 180) {
                clearInterval(this.increaseRotation);
                this.increasePitch = setInterval(() => {
                  if (this.pitts > 0) {
                    this.pitts--;
                    this.map.setPitch(this.pitts);
                    if (this.pitts == 0) {
                      clearInterval(this.increasePitch);
                      this.increaseRotation = setInterval(() => {
                        if (this.rotts < 270) {
                          this.rotts++;
                          this.map.setRotation(this.rotts);
                          if (this.rotts == 270) {
                            clearInterval(this.increaseRotation);
                            this.increasePitch = setInterval(() => {
                              if (this.pitts < 60) {
                                this.pitts++;
                                this.map.setPitch(this.pitts);
                                if (this.pitts == 60) {
                                  clearInterval(this.increasePitch);
                                  this.increaseRotation = setInterval(() => {
                                    if (this.rotts < 360) {
                                      this.rotts++;
                                      this.map.setRotation(this.rotts);
                                      if (this.rotts == 360) {
                                        clearInterval(this.increaseRotation);
                                        this.increasePitch = setInterval(() => {
                                          if (this.pitts > 0) {
                                            this.pitts--;
                                            this.map.setPitch(this.pitts);
                                            if (this.pitts == 0) {
                                              clearInterval(this.increasePitch);
                                              // this.map.setRotation(rotts);
                                              setTimeout(() => {
                                                this.rotts = 0;
                                                this.pitts = 0;
                                                this.mapRotation(
                                                  this.rotts,
                                                  this.pitts
                                                );
                                              }, 1000);
                                            }
                                          }
                                        }, 100);
                                      }
                                    }
                                  }, 100);
                                }
                              }
                            }, 100);
                          }
                        }
                      }, 100);
                    }
                  }
                }, 100);
              }
            }
          }, 100);
        } else if (this.rotts == 180 && this.pitts > 0) {
          this.increasePitch = setInterval(() => {
            if (this.pitts > 0) {
              this.pitts--;
              this.map.setPitch(this.pitts);
              if (this.pitts == 0) {
                clearInterval(this.increasePitch);
                this.increaseRotation = setInterval(() => {
                  if (this.rotts < 270) {
                    this.rotts++;
                    this.map.setRotation(this.rotts);
                    if (this.rotts == 270) {
                      clearInterval(this.increaseRotation);
                      this.increasePitch = setInterval(() => {
                        if (this.pitts < 60) {
                          this.pitts++;
                          this.map.setPitch(this.pitts);
                          if (this.pitts == 60) {
                            clearInterval(this.increasePitch);
                            this.increaseRotation = setInterval(() => {
                              if (this.rotts < 360) {
                                this.rotts++;
                                this.map.setRotation(this.rotts);
                                if (this.rotts == 360) {
                                  clearInterval(this.increaseRotation);
                                  this.increasePitch = setInterval(() => {
                                    if (this.pitts > 0) {
                                      this.pitts--;
                                      this.map.setPitch(this.pitts);
                                      if (this.pitts == 0) {
                                        clearInterval(this.increasePitch);
                                        setTimeout(() => {
                                          this.rotts = 0;
                                          this.pitts = 0;
                                          this.mapRotation(
                                            this.rotts,
                                            this.pitts
                                          );
                                        }, 1000);
                                      }
                                    }
                                  }, 100);
                                }
                              }
                            }, 100);
                          }
                        }
                      }, 100);
                    }
                  }
                }, 100);
              }
            }
          }, 100);
        } else if (this.rotts > 180 && this.rotts < 270) {
          this.increaseRotation = setInterval(() => {
            if (this.rotts < 270) {
              this.rotts++;
              this.map.setRotation(this.rotts);
              if (this.rotts == 270) {
                clearInterval(this.increaseRotation);
                this.increasePitch = setInterval(() => {
                  if (this.pitts < 60) {
                    this.pitts++;
                    this.map.setPitch(this.pitts);
                    if (this.pitts == 60) {
                      clearInterval(this.increasePitch);
                      this.increaseRotation = setInterval(() => {
                        if (this.rotts < 360) {
                          this.rotts++;
                          this.map.setRotation(this.rotts);
                          if (this.rotts == 360) {
                            clearInterval(this.increaseRotation);
                            this.increasePitch = setInterval(() => {
                              if (this.pitts > 0) {
                                this.pitts--;
                                this.map.setPitch(this.pitts);
                                if (this.pitts == 0) {
                                  clearInterval(this.increasePitch);
                                  setTimeout(() => {
                                    this.rotts = 0;
                                    this.pitts = 0;
                                    this.mapRotation(this.rotts, this.pitts);
                                  }, 1000);
                                }
                              }
                            }, 100);
                          }
                        }
                      }, 100);
                    }
                  }
                }, 100);
              }
            }
          }, 100);
        } else if (this.rotts == 270 && this.pitts < 60) {
          this.increasePitch = setInterval(() => {
            if (this.pitts < 60) {
              this.pitts++;
              this.map.setPitch(this.pitts);
              if (this.pitts == 60) {
                clearInterval(this.increasePitch);
                this.increaseRotation = setInterval(() => {
                  if (this.rotts < 360) {
                    this.rotts++;
                    this.map.setRotation(this.rotts);
                    if (this.rotts == 360) {
                      clearInterval(this.increaseRotation);
                      this.increasePitch = setInterval(() => {
                        if (this.pitts > 0) {
                          this.pitts--;
                          this.map.setPitch(this.pitts);
                          if (this.pitts == 0) {
                            clearInterval(this.increasePitch);
                            setTimeout(() => {
                              this.rotts = 0;
                              this.pitts = 0;
                              this.mapRotation(this.rotts, this.pitts);
                            }, 1000);
                          }
                        }
                      }, 100);
                    }
                  }
                }, 100);
              }
            }
          }, 100);
        } else if (this.rotts > 270 && this.rotts < 360) {
          this.increaseRotation = setInterval(() => {
            if (this.rotts < 360) {
              this.rotts++;
              this.map.setRotation(this.rotts);
              if (this.rotts == 360) {
                clearInterval(this.increaseRotation);
                this.increasePitch = setInterval(() => {
                  if (this.pitts > 0) {
                    this.pitts--;
                    this.map.setPitch(this.pitts);
                    if (this.pitts == 0) {
                      clearInterval(this.increasePitch);
                      setTimeout(() => {
                        this.rotts = 0;
                        this.pitts = 0;
                        this.mapRotation(this.rotts, this.pitts);
                      }, 1000);
                    }
                  }
                }, 100);
              }
            }
          }, 100);
        } else if (this.rotts == 360 && this.pitts > 0) {
          this.increasePitch = setInterval(() => {
            if (this.pitts > 0) {
              this.pitts--;
              this.map.setPitch(this.pitts);
              if (this.pitts == 0) {
                clearInterval(this.increasePitch);
                setTimeout(() => {
                  this.rotts = 0;
                  this.pitts = 0;
                  this.mapRotation(this.rotts, this.pitts);
                }, 1000);
              }
            }
          }, 100);
        }
      } else {
        clearInterval(this.increaseRotation);
        clearInterval(this.increasePitch);
      }
    },
    // 地图动画
    mapAnimation(map) {
      var rot = map.getRotation();
      var pit = map.getPitch();
      rot = 0;
      pit = 0;
      this.mapRotation(rot, pit);
    },
    mapRotation(rots, pits) {
      this.map.setRotation(rots);
      this.map.setPitch(pits);
      // console.log(roos);
      this.increaseRotation = setInterval(() => {
        if (rots < 90) {
          rots++;
          this.map.setRotation(rots);
          if (rots == 90) {
            clearInterval(this.increaseRotation);
            this.increasePitch = setInterval(() => {
              if (pits < 60) {
                pits++;
                this.map.setPitch(pits);
                if (pits == 60) {
                  clearInterval(this.increasePitch);
                  this.increaseRotation = setInterval(() => {
                    if (rots < 180) {
                      rots++;
                      this.map.setRotation(rots);
                      if (rots == 180) {
                        clearInterval(this.increaseRotation);
                        this.increasePitch = setInterval(() => {
                          if (pits > 0) {
                            pits--;
                            this.map.setPitch(pits);
                            if (pits == 0) {
                              clearInterval(this.increasePitch);
                              this.increaseRotation = setInterval(() => {
                                if (rots < 270) {
                                  rots++;
                                  this.map.setRotation(rots);
                                  if (rots == 270) {
                                    clearInterval(this.increaseRotation);
                                    this.increasePitch = setInterval(() => {
                                      if (pits < 60) {
                                        pits++;
                                        this.map.setPitch(pits);
                                        if (pits == 60) {
                                          clearInterval(this.increasePitch);
                                          this.increaseRotation = setInterval(
                                            () => {
                                              if (rots < 360) {
                                                rots++;
                                                this.map.setRotation(rots);
                                                if (rots == 360) {
                                                  clearInterval(
                                                    this.increaseRotation
                                                  );
                                                  this.increasePitch = setInterval(
                                                    () => {
                                                      if (pits > 0) {
                                                        pits--;
                                                        this.map.setPitch(pits);
                                                        if (pits == 0) {
                                                          clearInterval(
                                                            this.increasePitch
                                                          );
                                                          setTimeout(() => {
                                                            rots = 0;
                                                            pits = 0;
                                                            this.mapRotation(
                                                              rots,
                                                              pits
                                                            );
                                                          }, 1000);
                                                        }
                                                      }
                                                    },
                                                    100
                                                  );
                                                }
                                              }
                                            },
                                            100
                                          );
                                        }
                                      }
                                    }, 100);
                                  }
                                }
                              }, 100);
                            }
                          }
                        }, 100);
                      }
                    }
                  }, 100);
                }
              }
            }, 100);
          }
        }
      }, 100);
    },
    // 实例化地图
    initMap(val) {
      let zooms = this.map.getZoom();
      if (zooms >= 15) {
        var icon = new AMap.Icon({
          size: new AMap.Size(82, 25),
          image: provincialGovernment,
          imageSize: new AMap.Size(82, 25)
        });
        this.marker = new AMap.Marker({
          map: this.map,
          icon: icon,
          position: [112.576555, 37.816927]
        });
        this.marker.setAnimation("AMAP_ANIMATION_BOUNCE");
      }
      let that = this;
      setTimeout(() => {
        this.map.clearMap();
        let sxJson = require("../../../../static/map-json/" +
          this.shanxiCity +
          ".json");
        this.map.setCenter(this.cityCenters);
        // this.map.setPitch(35);
        this.map.setZoom(this.cityZoom);
        for (let i = 0; i < sxJson.features.length; i++) {
          setTimeout(() => {
            var path = sxJson.features[i].geometry.coordinates[0];
            createPolygonGraphic(this.map, path, 3);
            createFloatTitleBoxStatus(
              this.map,
              sxJson.features[i].properties.centroid,
              sxJson.features[i].properties.name,
              this.defaultList
              // title
            );
            createCircle(this.map,sxJson.features[i].properties.centroid)
                createGradientLine(this.map,[112.245579, 37.792417])

          }, 400 * i);
        }
      }, 300);
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
  .tabList {
    position: absolute;
    top: 37px;
    z-index: 100;
    left: 30px;
    li {
      cursor: pointer;
      width: 176px;
      margin-top: 10px;
      height: 44px;
      text-align: center;
      line-height: 44px;
      font-size: 16px;
      color: #2181ea;
      background: url("../../../assets/images/btn_bg_defauft.png") no-repeat;
      background-size: 176px 44px;
    }
    .active {
      background: url("../../../assets/images/btn_bg_active.png") no-repeat;
      background-size: 176px 44px;
      color: #36f5ff;
    }
  }
  .map {
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }

  .map-animation-switch {
    width: 80px;
    height: 80px;
    // background: #0024e2;
    // border-radius: 20px;
    position: absolute;
    right: 37px;
    top: 60px;
    z-index: 9999;
    // color: #fff;
    // text-align: center;
    // line-height: 30px;
    // font-size: 16px;
    cursor: pointer;
    img {
      display: inline-block;
      width: 80px;
      height: 80px;
    }
  }
}
</style>
