import carblue from "../assets/images/carblue.png"

// 创建地铁轨迹线路
function createBoldLocusLine(linePath) {
    //添加标志物
    linePath.forEach(function(item) {
        new AMap.Marker({
            content: '<div class="symbol">M</div',
            position: item,
            anchor: 'center',
            offset: new AMap.Pixel(0, 0)
        }).setMap(map);
    });
    var marker = new AMap.Marker({
        map: map,
        position: [114.284768, 30.605221],
        content: '<div></div>',
        //  icon: "https://webapi.amap.com/images/car.png",
        offset: new AMap.Pixel(-26, -13),
        autoRotation: true,
        angle: -90,
    });

    // 绘制轨迹
    var polyline = new AMap.Polyline({
        map: map,
        path: linePath,
        showDir: true,
        zIndex: 50,
        strokeColor: "#ffffff", //线颜色
        strokeOpacity: 0.3, //线透明度
        strokeWeight: 12, //线宽
        // strokeStyle: "solid"  //线样式
    });

    // 绘制驶过轨迹
    var passedPolyline = new AMap.Polyline({
        map: map,
        zIndex: 60,
        strokeColor: "white", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 12, //线宽
        // strokeStyle: "solid"  //线样式
    });
    marker.on('moving', function(e) {
        passedPolyline.setPath(e.passedPath);
    });

    return {
        marker,
        polyline,
        passedPolyline
    };
}
// 创建展示楼层布局盒子
export function createPicContainer(map, center, floor, animateStyle) {
    // 清除之前盒子
    map.remove(map.getAllOverlays("marker"))
    var marker = new AMap.Marker({
        position: center,
        anchor: 'center',
        offset: new AMap.Pixel(0, 0),
        content: `<img src="${floor}" class="floor animated ${animateStyle}">`
    });
    map.add(marker)
    return marker;
}
// 绘制文字标记
export function createTextMarak(map, center, carcode) {
    var marker = new AMap.Marker({
        position: center,
        anchor: "top-center",
        offset: new AMap.Pixel(0, -50),
        content: `<div class='infocar'>${carcode}</div>`
    });

    marker.setMap(map);
}
import fll from "../assets/images/fll.png"
import caryellow from "../assets/images/caryellow.png"
export function createIcon(map, json) {
    let defaultList = {
        first: "单位:省委党史研究院",
        second: "车型:SUV",
        third: "属性:应急保障用车",
        fourth: "时间:2016年12月16日"
    }
    var layer = new Loca.IconLayer({
        map: map,
        fitView: true,
        eventSupport: true
    });
    layer.setData(json, {
        lnglat: 'center'
    });
    layer.setOptions({
        source: function(res) {
            var i = res.index;
            return fll
        },
        style: {
            size: 20,
        }
    });
    layer.on('click', (ev) => {
        // map.remove(map.getAllOverlays("marker"))
        createFloatTitleBox(map, ev.rawData.center.split(","), ev.rawData.name, defaultList)
    });
    layer.render();
}
// 点到到中间的线
function dotToDot(lineArr, workCost, speed) {
    var textMarker, markerGo, markerBack, polyline, passedPolyline;
    speed = speed || 20000;
    textMarker = new AMap.Text({
        text: workCost || '',
        position: [(lineArr[0][0] + lineArr[1][0]) / 2, (lineArr[0][1] + lineArr[1][1]) / 2],
        map: map,
        style: {
            'color': '#ffffff',
            'font-size': '12px',
            'border': 'none',
            'background': 'transparent'
        }
    })
    markerGo = new AMap.Marker({
        map: map,
        position: lineArr[0],
        // icon: "https://webapi.amap.com/images/car.png",
        content: '<div class="arrow">→<div>',
        offset: new AMap.Pixel(-10, -10),
        autoRotation: true,
        angle: -90,
    });
    markerBack = new AMap.Marker({
        map: map,
        position: lineArr[1],
        // icon: "https://webapi.amap.com/images/car.png",←
        content: '<div class="arrow">→<div>',
        offset: new AMap.Pixel(-10, -10),
        autoRotation: true,
        angle: -90,
    });
    // 绘制轨迹
    polyline = new AMap.Polyline({
        map: map,
        path: lineArr,
        showDir: true,
        strokeColor: "#ffffff", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 1, //线宽
        // strokeStyle: "solid"  //线样式
    });

    passedPolyline = new AMap.Polyline({
        map: map,
        // path: lineArr,
        strokeColor: "#ffffff", //线颜色
        // strokeOpacity: 1,     //线透明度
        strokeWeight: 1, //线宽
        // strokeStyle: "solid"  //线样式
    });


    markerGo.on('moving', function(e) {
        passedPolyline.setPath(e.passedPath);
    });
    markerBack.on('moving', function(e) {
        passedPolyline.setPath([e.passedPath[1], e.passedPath[0]]);
    });
    markerGo.moveAlong(lineArr, speed, k => {
        return k
    }, true);
    markerBack.moveAlong([lineArr[1], lineArr[0]], speed, k => {
        return k
    }, true);

    return {
        clear() {
            [textMarker, markerGo, markerBack, polyline, passedPolyline].forEach(item => item.hide());
            [markerGo, markerBack].forEach(item => item.stopMove());
        },
        stop() {
            [markerGo, markerBack].forEach(item => item.stopMove());
        },
        start() {
            [textMarker, markerGo, markerBack, polyline, passedPolyline].forEach(item => item.hide());
            markerGo.moveAlong(lineArr, speed, k => {
                return k
            }, true);
            markerBack.moveAlong([lineArr[1], lineArr[0]], speed, k => {
                return k
            }, true);
        }
    }
}

// 绘制闭合多边形
export function createPolygonGraphic(map, path, border) {
    map.add(new AMap.Polygon({
        path: path,
        strokeColor: "#05DEFF",
        strokeWeight: border || 0,
        strokeOpacity: 1,
        fillOpacity: 0.6,
        fillColor: '#112C5A',
        zIndex: 50,
    }));
}
export function creattravelLine(map) {

    AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {
        if (!PathSimplifier.supportCanvas) {
            alert('当前环境不支持 Canvas！');
            return;
        }
        map.setZoom(17)
        var pathSimplifierIns = new PathSimplifier({
            zIndex: 100,
            //autoSetFitView:false,
            map: map, //所属的地图实例

            getPath: function(pathData, pathIndex) {
                console.log(pathData)
                return pathData.path;
            },
            getHoverTitle: function(pathData, pathIndex, pointIndex) {

                if (pointIndex >= 0) {
                    //point 
                    return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
                }

                return pathData.name + '，点数量' + pathData.path.length;
            },
            renderOptions: {

                renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
            }
        });

        //设置数据
        pathSimplifierIns.setData([{
            name: '路线0',
            path: [
                [112.549763, 37.870417],
                [113.366856, 40.096979],
            ]
        }]);
        //对第一条线路（即索引 0）创建一个巡航器
        var navg1 = pathSimplifierIns.createPathNavigator(0, {
            loop: true, //循环播放
            speed: 100000, //巡航速度，单位千米/小时
            pathNavigatorStyle: {
                width: 22,
                // initRotateDegree: 90,
                height: 48,
                //使用图片
                content: PathSimplifier.Render.Canvas.getImageContent(fll, onload, onerror),
                strokeStyle: null,
                fillStyle: null,
                //经过路径的样式
                pathLinePassedStyle: {
                    lineWidth: 6,
                    strokeStyle: 'black',
                    dirArrowStyle: {
                        stepSpace: 15,
                        strokeStyle: 'red'
                    }
                }
            }
        });

        navg1.start();
    });
}

// 创建浮动窗口不动产
export function createFloatTitleBoxIm(map, lngLat, cityName, imgurl, infoList) {
    var marker = new AMap.Marker({
        position: lngLat,
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, 0),
        content: `<div class="per">
            <div class="son"></div>
            <div class="dot"></div>
        </div>
        <div class="box">
          <div class="con animated zoomInDown delay-1s">${cityName}</div>
          <div class="infoBox">
          <img src="${imgurl}" style="height:120px;width:150px;display:block;" >
          <ul>
            <li>${infoList.first}</li>
            <li>${infoList.second}</li>
            <li>${infoList.third}</li>
            <li>${infoList.fourth}</li>
          </ul>
          </div>
        <div>`,
    });
    map.add(marker)
        // marker.setMap(map);
    return marker;
}

// 创建浮动窗口不动产按钮
export function createFloatTitleBoxImBtn(map, lngLat, callback, name) {
    var marker = new AMap.Marker({
        position: lngLat,
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, 0),
        content: `<div class="per" style="visibility:hidden;">
            <div class="son"></div>
            <div class="dot"></div>
        </div>
        <div class="btn">
          显示楼层
        <div>`,
    });
    map.add(marker)
    marker.on('click', function(ev) {
        // 触发事件的对象
        callback(name)
    });
    // marker.setMap(map);
    return marker;
}
// 创建扩散圆
export function createCircle(map, lngLat) {
    var marker = new AMap.Marker({
        position: lngLat,
        // anchor: 'center',
        offset: new AMap.Pixel(0, 0),
        content: `<div class="container">
        <div class="dots"></div>
        <div class="pulse"></div>
        <div class="pulse1"></div>
    </div>`,
    });
    map.add(marker)
    return marker;
}
import gradientimg from "../assets/images/gradientline.png"
// 创建渐变线
export function createGradientLine(map, lngLat) {
    var marker = new AMap.Marker({
        position: lngLat,
        // anchor: 'center',
        offset: new AMap.Pixel(0, 0),
        content: `<img src="${gradientimg}" class="gradientline" alt="">`,
    });
    map.add(marker)
    return marker;
}
// 创建浮动窗口总体态势
export function createFloatTitleBoxStatus(map, lngLat, cityName, infoList) {
    var marker = new AMap.Marker({
        position: lngLat,
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, 0),
        content: `<div class="per">
        			<div class="son"></div>
        			<div class="dot"></div>
    			</div>
    			<div class="box">
            <div class="con animated zoomInDown delay-1s">${cityName}</div>
            <ul>
              <li v-if="${infoList.first}">${infoList.first}</li>
              <li v-if="${infoList.second}">${infoList.second}</li>
              <li v-if="${infoList.third}">${infoList.third}</li>
              <li v-if="${infoList.fourth}">${infoList.fourth}</li>
            </ul>
    			<div>`,
    });
    map.add(marker)
        // marker.setMap(map);
    return marker;
}
// 添加党建Icon
import dang2 from "../assets/images/dang 2.png"
import dang from "../assets/images/dang.png"
export function createIconDang(map, json) {
    let defaultList = {
        first: "党组织数量:11个",
        second: "党组织地址:太原",
        third: "党员人数:1678人",
        fourth: "党员学历:硕士"
    }
    let layerList = []
    console.log(map.getLayers())
    map.getLayers().forEach(item => {
        if (item.CLASS_NAME == "Loca.IconLayer") {
            layerList.push(item)
        }
    })
    map.remove(layerList)
    var layer = new Loca.IconLayer({
        map: map,
        fitView: true,
        eventSupport: true
    });
    layer.setData(json, {
        lnglat: 'center'
    });
    layer.setOptions({
        source: function(res) {
            var i = res.index;
            if (i % 2 == 0) {
                return dang2;
            } else {
                return dang;
            }

        },
        style: {
            size: 40,
        }
    });
    layer.on('click', (ev) => {
        map.remove(map.getAllOverlays("marker"))
        createFloatTitleBoxDang(map, ev.rawData.center.split(","), ev.rawData.name, defaultList)
    });
    layer.render();
}
// 经营与党建浮动窗口
export function createFloatTitleBoxDang(map, lngLat, cityName, infoList) {
    var marker = new AMap.Marker({
        position: lngLat,
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, 0),
        content: `<div class="per">
          <div class="son"></div>
          <div class="dot"></div>
      </div>
      <div class="box">
        <div class="con animated zoomInDown delay-1s">${cityName}</div>
        <ul>
          <li>${infoList.first}</li>
          <li>${infoList.second}</li>
          <li>${infoList.third}</li>
          <li>${infoList.fourth}</li>
        </ul>
      <div>`,
    });
    map.add(marker)
        // marker.setMap(map);
    return marker;
}
// 创建浮动窗口
export function createFloatTitleBox(map, lngLat, cityName, infoList) {
    var marker = new AMap.Marker({
        position: lngLat,
        anchor: 'bottom-center',
        offset: new AMap.Pixel(0, 0),
        content: `<div class="per">
        			<div class="son"></div>
        			<div class="dot"></div>
    			</div>
    			<div class="box">
            <ul>
              <li v-if="${infoList.first}">${infoList.first}</li>
              <li v-if="${infoList.second}">${infoList.second}</li>
              <li v-if="${infoList.third}">${infoList.third}</li>
              <li v-if="${infoList.fourth}">${infoList.fourth}</li>
            </ul>
    			<div>`,
    });
    map.add(marker)
        // marker.setMap(map);
    return marker;
}


export function addRegularPrism(object3Dlayer, center, segment, height, radius) {

    var cylinder = new AMap.Object3D.Mesh();
    cylinder.backOrFront = 'both';
    var geometry = cylinder.geometry;
    var verticesLength = segment * 2;
    var path = []
    for (var i = 0; i < segment; i += 1) {
        var angle = 2 * Math.PI * i / segment;
        var x = center.x + Math.cos(angle) * radius;
        var y = center.y + Math.sin(angle) * radius;
        path.push([x, y]);
        geometry.vertices.push(x, y, 0); //底部顶点
        geometry.vertices.push(x, y, -height); //顶部顶点

        geometry.vertexColors.push.apply(geometry.vertexColors, [1, 0, 0, 0.4]); //底部颜色
        geometry.vertexColors.push.apply(geometry.vertexColors, [1, 0, 0, 0.4]); //顶部颜色

        var bottomIndex = i * 2;
        var topIndex = bottomIndex + 1;
        var nextBottomIndex = (bottomIndex + 2) % verticesLength;
        var nextTopIndex = (bottomIndex + 3) % verticesLength;

        geometry.faces.push(bottomIndex, topIndex, nextTopIndex); //侧面三角形1
        geometry.faces.push(bottomIndex, nextTopIndex, nextBottomIndex); //侧面三角形2
    }

    // 构建顶面三角形,为了区分顶面点和侧面点使用不一样的颜色,所以需要独立的顶点
    for (var i = 0; i < segment; i += 1) {
        geometry.vertices.push.apply(geometry.vertices, geometry.vertices.slice(i * 6 + 3, i * 6 + 6)); //底部顶点
        geometry.vertexColors.push.apply(geometry.vertexColors, [1, 0, 0, 0.4]);
    }

    var triangles = AMap.GeometryUtil.triangulateShape(path);
    var offset = segment * 2;

    for (var v = 0; v < triangles.length; v += 3) {
        geometry.faces.push(triangles[v] + offset, triangles[v + 2] + offset, triangles[v + 1] + offset);
    }

    cylinder.transparent = true; // 如果使用了透明颜色，请设置true
    object3Dlayer.add(cylinder);
};


function mapRotation(rots, pits) {
    rots = 0;
    pits = 0;

    that.map.setRotation(rots);
    that.map.setPitch(pits);
    // 画marker
    if (that.position) {
        that.position.forEach((item, index) => {
            let text = new AMap.Text({
                text: item.name,
                anchor: "center", // 设置文本标记锚点
                draggable: true,
                cursor: "pointer",
                angle: 10,
                style: {
                    border: "0",
                    background: "none",
                    opacity: "1",
                    "font-size": "20px",
                    color: "#666"
                },
                position: item.position
            });
            text.setMap(that.map);
        })
    }
    var increaseRotation = setInterval(() => {
        if (rots < 90) {
            rots++;
            that.map.setRotation(rots);
            if (rots == 90) {
                clearInterval(increaseRotation);
                var increasePitch = setInterval(() => {
                    if (pits < 60) {
                        pits++;
                        that.map.setPitch(pits);
                        if (pits == 60) {
                            clearInterval(increasePitch);
                            var increaseRotation = setInterval(() => {
                                if (rots < 180) {
                                    rots++;
                                    that.map.setRotation(rots);
                                    if (rots == 180) {
                                        clearInterval(increaseRotation)
                                        var increasePitch = setInterval(() => {
                                            if (pits > 0) {
                                                pits--;
                                                that.map.setPitch(pits);
                                                if (pits == 0) {
                                                    clearInterval(increasePitch)
                                                    var increaseRotation = setInterval(() => {
                                                        if (rots < 270) {
                                                            rots++;
                                                            that.map.setRotation(rots);
                                                            if (rots == 270) {
                                                                clearInterval(increaseRotation)
                                                                var increasePitch = setInterval(() => {
                                                                    if (pits < 60) {
                                                                        pits++;
                                                                        that.map.setPitch(pits);
                                                                        if (pits == 60) {
                                                                            clearInterval(increasePitch)
                                                                            var increaseRotation = setInterval(() => {
                                                                                if (rots < 360) {
                                                                                    rots++;
                                                                                    that.map.setRotation(rots);
                                                                                    if (rots == 360) {
                                                                                        clearInterval(increaseRotation)
                                                                                        var increasePitch = setInterval(() => {
                                                                                            if (pits > 0) {
                                                                                                pits--;
                                                                                                that.map.setPitch(pits);
                                                                                                if (pits == 0) {
                                                                                                    clearInterval(increasePitch)
                                                                                                    setTimeout(() => {
                                                                                                        mapRotation(rots, pits);
                                                                                                    }, 1000)
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
                        }
                    }
                }, 100);
            }
        }
    }, 100);
}