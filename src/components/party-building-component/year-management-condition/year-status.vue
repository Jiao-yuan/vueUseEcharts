<template>
  <div id="year-status">
    <el-table :data="tableData" style="width:412px" :show-header="false" :height="81">
      <el-table-column prop="name" align="left" label="公共机构" min-width="100" ></el-table-column>
      <el-table-column prop="Company" label="数量"  >
        <template slot-scope="scope">
             <a style="color: #4F61FF; display:block;">{{scope.row.Company}}<i style="color: #fff;margin-left:10px;">万元</i></a>
        </template>
        </el-table-column>
      <el-table-column prop="names" align="right"  label="单位 " ></el-table-column>
      <el-table-column prop="Companys" align="right"  label="单位" >
        <template slot-scope="scope">
             <a style="color: #FFEC3F; display:block;">{{scope.row.Companys}}<i style="color: #fff;margin-left:10px">万元</i></a>
        </template>
      </el-table-column>
    </el-table>
    <div class="pie-box">
        <one-pie></one-pie> 
        <two-pie></two-pie>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import onePie from "./pie-component/pie-chart-one"
import twoPie from "./pie-component/pie-chart-two"
export default {
  name: "pointStatus",
  data() {
    return {
      id: "tripMode",
      tableData: [
        {
          name: "本年目标收入",
          Company: "1132",
          names:"本年总收入",
          Companys: "5892"
        },
       {
          name: "本年目标收入",
          Company: "1132",
          names:"本年总收入",
          Companys: "5892"
        },
       {
          name: "本年目标收入",
          Company: "1132",
          names:"本年总收入",
          Companys: "5892"
        },
      ]
    };
  },
  props:{
    count:{
      type:Number,
      default:0
    }
  },
  computed: {},
  mounted() {},
  watch: {},
  components: {onePie,twoPie},
  methods: {}
};
</script>
<style lang="scss">
#year-status {
  .el-table th {
    padding: 0 !important;
  }

  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #182e4d;
  }
  .el-table td,
   .building-top .el-table th.is-leaf {
      border-bottom: 1px solid #214470;
   }
      .el-table__body-wrapper::-webkit-scrollbar {
      //滚动条样式
      width: 2px;
      height: 2px;
      background: #182e4d !important;
    }
    .el-table__body-wrapper::-webkit-scrollbar-thumb {
      // 滚动条小方块
      border-radius: 3px;
      background: #1475e8;
      width: 2px;
      height: 2px;
    }
    .el-table__body-wrapper::-webkit-scrollbar-track {
      // 滚动条里面轨道
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 3px;
      background: #1c2b42 !important;
    }
    .el-table::before{
      background:transparent;
    }
    .el-table__body{
      width:412px !important;
      height:81!important;
    }
  .el-table {
    width: 100% !important;
    background: linear-gradient(
      269.22deg,
      rgba(30, 109, 230, 0.04) 0.36%,
      rgba(33, 115, 236, 0.16) 49.43%,
      rgba(29, 112, 236, 0.04) 99.54%
    );
  
    font-size:12px;
    thead { 
      tr {
        background: transparent;
        height:27px !important;
        th {
          .cell{
              color: #59F2FD;
          }
          border:none;    
          background: #002E73 !important;
        }
        th:nth-of-type(3) .cell{
          text-align: right;
        }
      }
    }
    tbody tr{
       height:27px;
       background :#041544;
      .el-table_1_column_2  {
        cursor: pointer;
      }
    }
    tbody tr td {
      padding: 0 !important;
      color:#fff;
    }
  }
}
</style>
<style lang="scss" scoped>
#year-status {
  width: 412px;
  font-size: 12px;
  height:270px;
  margin:0 auto;
  .pie-box{
      height:135px;
      width:100%;
      margin-top:40px;
      display:flex;
  }
}
</style>