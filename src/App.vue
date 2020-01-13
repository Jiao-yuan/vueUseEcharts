<template>
  <div id="app">
    <!-- <globalMap/> -->
    <div class="head" v-if="this.$route.name!='login'">
      <div class="platform">
        <!-- <span class="logo"><img src="../src/assets/images/moblieLog.png" alt=""></span> -->
      </div>
      <div class="logo-tip">
        <!-- <img src="../src/assets/images/title.png" alt=""> -->
        <!-- <ul class="tabs">
         <li v-for="(item, index) in menulist" :key="index"><router-link :to="{name:item.link}" tag="div">{{item.name}}</router-link></li>
         <li><div><a href="http://www.baidu.com">场馆视频监控</a></div></li>
        </ul>-->
      </div>
      <div class="login">
        <!-- <p>咨询发布</p> -->
        <p>{{currentTime}}</p>
        <!-- <el-button  size="small" @click="isdangerShow = true">发送应急短信</el-button> -->
      </div>
    </div>
    <!-- <keep-alive> -->
      <router-view class="router-view" v-if="isRouterAlive" />
    <!-- </keep-alive> -->
    <!-- <danger v-show="isdangerShow" @closeDanger="closeDanger"></danger> -->
    <ul class="btmTabList">
      <li v-for="(item,index) in tabList" :key="index"  @click="chooseLi(index)" :class="{'isActive':isActive==index}">
        <img src="./assets/images/Frame 36.png" alt  v-if="index==0"/>
        <img src="./assets/images/Frame 37.png" alt  v-if="index==1" />
        <img src="./assets/images/Frame 35.png" alt  v-if="index==2" />
        <img src="./assets/images/Frame 40.png" alt  v-if="index==3" />
        <img src="./assets/images/Frame 42.png" alt  v-if="index==4" />
        <span>{{item}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import globalMap from "./components/mapSX";
export default {
  name: "App",
  provide() {
    return {
      reload: this.reload,
      map: null
    };
  },
  data() {
    return {
      tabList: [
        "办公用房不动产",
        "公共机构节能",
        "总体态势",
        "公务用车",
        "经营与党建"
      ],
      isActive:2,
      heightTotal: 0,
      isdangerShow: false,
      isRouterAlive: true,
      currentTime: "",
      list: [],
      menulist: [
        // {name:'冬奥会概览', link:'populationDistribution'},
        { name: "场馆人群热力", link: "populationDistribution" }
        // {name:'场馆视频监控', link:'regionEmergency'},
      ]
    };
  },
  watch:{
     $route(){
        if(this.$route.path === "/immovables"){
           this.isActive = 0
        }else if(this.$route.path === "/overall-situation"){
           this.isActive = 2
        }else if(this.$route.path === "/public-energy-save"){
          this.isActive = 1
        }else if(this.$route.path === "/party-building-manage"){
          this.isActive = 4
        }else if(this.$route.path === "/government-car"){
          this.isActive = 3
        }
     }
  },
  mounted() {
    if(this.$route.path === "/immovables"){
           this.isActive = 0
        }else if(this.$route.path === "/overall-situation"){
           this.isActive = 2
        }else if(this.$route.path === "/public-energy-save"){
          this.isActive = 1
        }else if(this.$route.path === "/party-building-manage"){
          this.isActive = 4
        }else if(this.$route.path === "/government-car"){
          this.isActive = 3
        }
    
    this.timer = setInterval(() => {
      var dateTime = new Date();
      var day;
      if (dateTime.getDay() == 6) {
        day = "六";
      }
      if (dateTime.getDay() == 1) {
        day = "一";
      }
      if (dateTime.getDay() == 2) {
        day = "二";
      }
      if (dateTime.getDay() == 3) {
        day = "三";
      }
      if (dateTime.getDay() == 4) {
        day = "四";
      }
      if (dateTime.getDay() == 5) {
        day = "五";
      }
      if (dateTime.getDay() == 0) {
        day = "日";
      }
      var currentyear = new Date().getFullYear(); //得到年份
      var currentmonth = new Date().getMonth() + 1; //得到月份
      var currentdate = new Date().getDate(); //得到日期
      var currentHours = new Date().getHours(); //获取当前小时数(0-23)
      var currentMinutes = new Date().getMinutes(); //获取当前分钟数(0-59)
      var currentSeconds = new Date().getSeconds(); //获取当前秒数(0-59)
      if (currentHours < 10) {
        currentHours = "0" + currentHours;
      }
      if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
      }
      if (currentSeconds < 10) {
        currentSeconds = "0" + currentSeconds;
      }
      if (currentmonth < 10) {
        currentmonth = "0" + currentmonth;
      }
      if (currentdate < 10) {
        currentdate = "0" + currentdate;
      }
      this.currentTime =
        currentyear +
        "年" +
        currentmonth +
        "月" +
        currentdate +
        "日  " +
        currentHours +
        ":" +
        currentMinutes +
        ":" +
        currentSeconds +
        "  星期" +
        day;
    }, 1000);
  },
  components: {
    // globalMap
  },
  methods: {
    chooseLi(val){
       if(val === 0){
            this.$router.push({name:"immovables"})
       }else if(val === 2){
            this.$router.push({name:"overallSituation"})
       }else if(val === 1){
         this.$router.push({name:"publicEnergySave"})
       }else if(val === 4){
         this.$router.push({name:"partyBuildingManage"})
       }else if(val === 3){
         this.$router.push({name:"governmentCar"})
       }
    },
    closeDanger() {
      this.isdangerShow = false;
    },
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    }
  }
};
</script>
<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
font,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
center,
u,
b,
i {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-weight: normal;
  font-style: normal;
  font-family: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
body {
  line-height: 1;
  background: #f7f7f7;
  color: #333333;
  font-size: 0.14rem;
}
:focus {
  outline: 0;
}
ol,
ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
}
blockquote,
q {
  quotes: "";
}
input,
textarea {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
hr {
  margin: 0;
  padding: 0;
  border: 0;
  color: #000;
  background-color: #000;
  height: 1px;
}
/*input placeholder颜色*/

:-moz-placeholder {
  color: #bababa;
}

::-moz-placeholder {
  color: #bababa;
}

input:-ms-input-placeholder {
  color: #bababa;
}

input::-webkit-input-placeholder {
  color: #bababa;
}
/*清浮动*/
.clearfix:after,
.clearfix:before {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
/*浮动*/
.floatleft {
  float: left;
}
.floatright {
  float: right;
}
/*字体*/
.fz12 {
  font-size: 12px;
}
.fz14 {
  font-size: 14px;
}
.fz16 {
  font-size: 16px;
}
.fz18 {
  font-size: 18px;
}
/* 对齐方式 */
.text-align-center {
  text-align: center;
}
.text-align-left {
  text-align: left;
}
.text-align-right {
  text-align: right;
}
.login .el-button {
  background: #ed0707;
  color: #fff;
  border: none;
  font-size: 0.16rem;
  margin-left: 0.3rem;
}
</style>
<style scoped lang="scss">
#app {
  // position: absolute;
  position: relative;
  width: 3840px;
  height: 813px;
  top: 50%;
  margin-top: -410px;
  background: #041544;
  // background: url('../src/assets/images/bg-light.jpg') no-repeat;
  // background-size: 100% 100%;
  .btmTabList {
    padding: 0 100px;
    position: absolute;
    bottom: 0;
    height: 80px;
    width: 1440px;
    display: flex;
    left: 1274px;
    line-height: 80px;
    z-index: 100;
    background: url("./assets/images/bottom_bg.png") no-repeat;
    background-size: 1440px 80px;
    li {
      width: 20%;
      color: #78f2ff;
      font-size: 20px;
      text-align: center;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 20px;
        width: 20px;
        margin-right: 10px;
      }
    }
    .isActive{
      background:url("./assets/images/bottom_focus.png") no-repeat;
      background-size: 248px 72px;
      position: relative;
      top:-16px;
    }
  }
  #map {
    height: 100%;
    width: 100%;
  }
  .head {
    position: absolute;
    width: 100%;
    height: 100px;
    display: flex;
    background: url("../src/assets/images/title.png");
    background-size: 3840px 126px;
    justify-content: space-between;
    color: #ffffff;
    .platform {
      display: flex;
      align-items: center;
      .logo {
        margin-left: 20px;
        img {
          height: 40px;
        }
      }

      .title {
        padding-left: 24px;
        // margin-top:.1rem;
      }
    }
    .logo-tip {
      display: flex;
      margin-left: 200px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        height: 40px;
      }
    }

    .login {
      margin-right: 20px;
      display: flex;
      align-items: center;

      p {
        line-height: 100px;
        font-size: 16px;
      }
      p:nth-of-type(1) {
        color: #4567e1;
        cursor: pointer;
      }
    }
  }
  .tabs {
    display: flex;
    align-items: center;
    color: #5c80b8;
    margin-top: 0.1rem;
    justify-content: center;
    font-size: 20px;
    li {
      margin: 0 10px;
      div {
        cursor: pointer;
        color: #5c80b8;
        font-size: 0.2rem;
        padding-bottom: 0.07rem;
        &.router-link-active {
          color: #2effff;
          border-bottom: 1px solid #2effff;
        }
      }
      a {
        cursor: pointer;
        color: #5c80b8;
        font-size: 0.2rem;
        padding-bottom: 0.07rem;
      }
    }
  }
  .router-view {
    position: absolute;
    width: 100%;
    height: 711px;
    top: 100px;
    padding: 20px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
</style>
