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
import { createPolygonGraphic, createFloatTitleBox } from "../../../utils/3d";
import cityJson from "./mapCenter.json";
import { mapGetters } from "vuex";
import stop from "../../../assets/images/stop.png";
import start from "../../../assets/images/start.png";
import provincialGovernment from "../../../assets/images/3D.png";

export default {
  data() {
    return {
      tabList: ["总用能人数", "总能耗", "总用电量", "总用水量"],
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
      mapStyle: "amap://styles/62ded45f1ff6c1c8d5ce898ede7d986e",
      pitch: 40,
      zoom: 9,

      // zoomEnable:false,
      // dragEnable: false,
      center: [112.245579, 37.792417], //高德
      viewMode: "3D",
      skyColor: "#041544",
      pitchEnable: true,
      animateEnable: false, //地图平移过程中是否使用动画（如调用panBy、panTo、setCenter、setZoomAndCenter等函数，将对地图产生平移操作，是否使用动画平移的效果），默认为true，即使用动画
      jogEnable: false, //地图是否使用缓动效果，默认值为true。此属性可被setStatus/getStatus 方法控制
      defaultCursor: "pointer",
      expandZoomRange: true,
      showBuildingBlock: false
      // showLabel: false,
      // forceVector: true,
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
      if (val === 0) {
        this.defaultList = {
          first: "单位总数量:11个",
          second: "编制总人数:36人",
          third: "房产总面积:256㎡",
          fourth: "土地总面积:9657㎡"
        };
      } else if (val === 1) {
        this.defaultList = {
          first: "用能人数:9999人",
          second: "总能耗:12313j",
          third: "总用水量:392l",
          fourth: "总用电量:38.6度"
        };
      } else if (val === 2) {
        this.defaultList = {
          first: "编制数量:9999人",
          second: "出行总里程:12313j",
          third: "出行总频次:392l",
          fourth: "调度总数:38.6度",
          fifth: "跨区总数:38.6度",
          sixth: "保障总数总数:38.6度"
        };
      } else if (val === 3) {
        this.defaultList = {
          first: "本月收入总数:9999人",
          second: "本月支出总数:12313j",
          third: "本月利润:392l",
          fourth: "利润总成长:38.6度"
        };
      } else if (val === 4) {
        this.defaultList = {
          first: "党组织数量：231人",
          second: "党员总数量:12313j",
          third: "预备党员数量:392l"
        };
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
        // this.mapAnimation(this.map);
      } else {
        // console.log(this.animationSwitch);
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
            // var title = '<img style='width: 200px; height:40px;' src=' + img + '>'
            // this.map.setCenter( sxJson.features[i].properties.center)
            createPolygonGraphic(this.map, path, 3);
            // console.log(sxJson.features[0].properties.centroid, 7777);
            var object3Dlayer = new AMap.Object3DLayer();
            this.map.add(object3Dlayer);
            let obj = {};
            obj.P = sxJson.features[i].properties.centroid[1];
            obj.Q = sxJson.features[i].properties.centroid[0];
            obj.lng = sxJson.features[i].properties.centroid[0];
            obj.lat = sxJson.features[i].properties.centroid[1];
            var center_3d = this.map.lngLatToGeodeticCoord(obj);
            var topColor = [0, 1, 1, 0.9];
            var topFaceColor = [0, 1, 1, 0.4];
            var bottomColor = [0, 0, 1, 0.9];

            //添加一个圆柱体
            var addRegularPrism = function(center, segment, height, radius) {
              var cylinder = new AMap.Object3D.Mesh();
              var geometry = cylinder.geometry;
              var verticesLength = segment * 2;
              var path = [];
              for (var i = 0; i < segment; i += 1) {
                var angle = (2 * Math.PI * i) / segment;
                console.log(angle)
                var x = center.x + Math.cos(angle) * radius;
                var y = center.y + Math.sin(angle) * radius;
                path.push([x, y]);
                geometry.vertices.push(x, y, 0); //底部顶点
                geometry.vertices.push(x, y, -height); //顶部顶点

                geometry.vertexColors.push.apply(
                  geometry.vertexColors,
                  bottomColor
                ); //底部颜色
                geometry.vertexColors.push.apply(
                  geometry.vertexColors,
                  topColor
                ); //顶部颜色

                var bottomIndex = i * 2;
                var topIndex = bottomIndex + 1;
                var nextBottomIndex = (bottomIndex + 2) % verticesLength;
                var nextTopIndex = (bottomIndex + 3) % verticesLength;

                geometry.faces.push(bottomIndex, topIndex, nextTopIndex); //侧面三角形1
                geometry.faces.push(bottomIndex, nextTopIndex, nextBottomIndex); //侧面三角形2
              }


              // 构建顶面三角形,为了区分顶面点和侧面点使用不一样的颜色,所以需要独立的顶点
              for (var i = 0; i < segment; i += 1) {
                geometry.vertices.push.apply(
                  geometry.vertices,
                  geometry.vertices.slice(i * 6 + 3, i * 6 + 6)
                ); //底部顶点
                geometry.vertexColors.push.apply(
                  geometry.vertexColors,
                  topFaceColor
                );
              }

              var triangles = AMap.GeometryUtil.triangulateShape(path);
              var offset = segment * 2;

              for (var v = 0; v < triangles.length; v += 3) {
                geometry.faces.push(
                  triangles[v] + offset,
                  triangles[v + 2] + offset,
                  triangles[v + 1] + offset
                );
              }

              cylinder.transparent = true; // 如果使用了透明颜色，请设置true
              object3Dlayer.add(cylinder);
            };

            addRegularPrism(center_3d, 4, 70000, 10000); //五棱柱
         
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
  margin-left:82px;
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
  .m-test {
    font-size: 50px;
    position: absolute;
    top: 0;
  }
  .m-test2 {
    font-size: 50px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .map {
    width: 100%;
    margin: 0 auto;
    height: 100%;
  }
  .legend {
    position: absolute;
    right: 0.39rem;
    bottom: 0.6rem;
    // width: 0.72rem;
    height: 2.4rem;
    text-align: center;
    background-color: rgba(6, 38, 84, 0.8);
    border-radius: 0.02rem;
    padding: 0.16rem 0;
    .legend_top {
      display: flex;
      flex-flow: wrap;
      text-align: center;
      padding-right: 0.12rem;
      .l_color {
        width: 0.08rem;
        height: 1.88rem;
        background: linear-gradient(
          180deg,
          #ff3d3e 8.69%,
          #f9fe31 33.5%,
          #85e91d 63.89%,
          #0024e2 86.83%
        );
        border-radius: 0.1rem;
        margin-left: 0.17rem;
        margin-bottom: 0.08rem;
      }
      .legend_line {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 0.1rem;
        height: 1.77rem;
        margin-top: 0.05rem;
        margin-left: 0.02rem;
        li {
          width: 0.05rem;
          height: 0.01rem;
          background-color: rgba(255, 255, 255, 0.5);
        }
        .line {
          width: 0.1rem !important;
        }
      }
      .legend_content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 1.87rem;
        // margin-left: 0.06rem;
      }
    }
    p {
      width: 100%;
      font-size: 0.12rem;
    }
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
