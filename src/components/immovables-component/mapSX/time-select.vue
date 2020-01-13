<template>
  <div class="time-select">
    <!-- <p class="sys">
      <i class="el-icon-s-order"></i>
      <span class="systime">
        <el-date-picker
            size="mini"
            value-format="yyyyMMddHHmm"
            format="yyyy-MM-dd HH:mm"
            v-model="datetime"
            :picker-options="pickerOptions"
            type="datetime"
            placeholder="选择日期时间"
        ></el-date-picker>
      </span>
    </p>-->
    <div class="select-box">
      <span>
        <i class="el-icon-location"></i>
      </span>
      <p>
        <el-select v-model="formInline.province" placeholder="请选择城市" @change="changeCity">
          <el-option
            :label="item.name"
            :value="item.code"
            v-for="(item,index) in provinceOption"
            :key="index"
          ></el-option>
        </el-select>
      </p>
      <p>
        <el-select v-model="formInline.city" placeholder="请选择区域" @change="changeArea">
          <el-option
            :value="item.name"
            v-for="(item,index) in cityOption"
            :key="index"
          ></el-option>
        </el-select>
      </p>

      <p>
        <el-select v-model="formInline.area" placeholder="请选择地点">
          <el-option
            :label="item.name"
            :value="item.code"
            v-for="(item,index) in areaOption"
            :key="index"
          ></el-option>
        </el-select>
      </p>
      <p>
        <el-button @click="toChange">搜索</el-button>
      </p>
    </div>
  </div>
</template>
<script>
import $ from "jquery"
import dayjs from "dayjs";
export default {
  name: "time-select",
  props: {
    clockTime: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      pickerOptions: {
        disabledDate: time => {
          return !this.usefulTime.includes(dayjs(time).format("YYYY-MM-DD"));
        }
      },
      usefulTime: [],
      datetime: "112.578761,37.81394",
      formInline: {
        province: "0351",
        city: "迎泽区",
        area: "912"
      },
      provinceOption: [
        {code:"0351",name:"太原市"},
        {code:"0352",name:"大同市"},
        {code:"0353",name:"阳泉市"},
        {code:"0355",name:"长治市"},
        {code:"0356",name:"晋城市"},
        {code:"0349",name:"朔州市"},
        {code:"0354",name:"晋中市"},
        {code:"0359",name:"运城市"},
        {code:"0350",name:"忻州市"},
        {code:"0357",name:"临汾市"},
        {code:"0358",name:"吕梁市"}
      ],
      cityOption: [
          {name: "小店区"},
          {name: "迎泽区"},
          {name: "杏花岭区"},
          {name: "尖草坪区"},
          {name: "万柏林区"},
          {name: "晋源区"},
          {name: "清徐县"},
          {name: "阳曲县"},
          {name: "娄烦县"},
          {name: "古交市"},
      ],
      areaOption: [{code:"912",name:"山西省委"}]
    };
  },
  mounted() {},
  methods: {
    // 改变城市
    changeCity(val) {
        let that = this
         let cityName = ""
         this.cityOption = []
        this.provinceOption.forEach(el=>{
            if(el.code === val){
              cityName = el.name
            }
         })
        $.get(this.$filePrefix + cityName +".json", function(Json) {
                    that.cityOption = Json.features.map((item,index)=>{ 
                       if(index === 0){
                            that.formInline.city = item.properties.name
                         }
                    return {"name":item.properties.name }})
           });
        
    },
    // 改变区域
    changeArea(val) {
      this.areaOption = []
      this.formInline.area = ""
      if(val === "迎泽区"){
        this.areaOption = [{code:"120",name:"山西饭店"},{code:"912",name:"山西省委"}]
        this.formInline.area = "120"
      }else if(val === "杏花岭区"){
        this.areaOption = [{code:"1101",name:"山西省政府1号楼"},{code:"1103",name:"山西省政府3号楼"}]
        this.formInline.area = "1101"
      }else if(val === "五台县"){
        this.areaOption = [{code:"119",name:"五台山栖贤阁迎宾馆"}]
        this.formInline.area = "119"
      }else if(val === "万柏林区"){
        this.areaOption = [{code:"911",name:"丽华大酒店"}]
        this.formInline.area = "911"
      }
    },
    toChange() {
       this.$emit("toChange",this.formInline.area)
    }
  }
};
</script>
<style lang="scss">
.systime .el-date-editor {
  width: 190px !important;
  height: 28px;
  background: rgba(75, 140, 211, 0.1);
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-bottom: 5px solid transparent;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #4b8cd3;
    position: absolute;
    right: 8px;
    top: 10px;
  }
}
.systime .el-date-editor {
  .el-input__inner {
    width: 190px !important;
    height: 28px;
    background: rgba(75, 140, 211, 0.1);
    border: 1px solid #4b8cd3;
    color: #fff;
    font-size: 12px;
    line-height: 22px;
    border-radius: 2px;
    padding: 0 12px;

    .el-input__suffix {
      display: none;
    }
  }
  .el-input__prefix {
    display: none;
  }
  .el-input__suffix {
    display: none;
  }
}
.select-box .el-select .el-input__inner {
  width: 170px;
  height: 28px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 12px;
  line-height: 22px;
  // border-radius: 2px;
  padding-right: 30px;
}
.select-box .el-button {
  box-sizing: border-box;
  // display: flex;
  color: #ffffff;
  height: 28px;
  width: 60px;
  border: none;
  background: #4b8cd3;
  border-radius: 2px;
  padding: 0 5px;
  font-size: 12px;
  margin-left: 0.04rem;
}
.sys .el-icon-s-order {
  color: #4b8cd3;
  font-size: 0.2rem;
}
.select-box .el-icon-location {
  color: #4b8cd3;
  font-size: 20px;
}
.select-box .el-select {
  border: 1px solid #4b8cd3;
  width: 170px !important;
  background: rgba(75, 140, 211, 0.1);
  border-radius: 2px;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-bottom: 5px solid transparent;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #4b8cd3;
    position: absolute;
    right: 8px;
    top: 10px;
  }
  .el-input__suffix {
    display: none;
  }
}
</style>

<style lang="scss" scope>
.time-select {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  display: flex;
  align-items: center;
  .sys {
    display: flex;
    align-items: center;
  }
  .systime {
    font-size: 12px;
    margin-left: 0.08rem;
  }
  p {
    font-size: 0.2rem;
  }
  .select-box {
    display: flex;
    font-size: 0.18rem;
    margin-left: 0.1rem;
    align-items: center;
    p {
      margin-left: 0.04rem;
    }
  }
}
</style>