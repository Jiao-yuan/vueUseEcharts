<template>
  <div id="alarm-info">
    <el-table :data="tableData" style="width:412px" >
      <el-table-column prop="date" align="center" label="车牌号" ></el-table-column>
      <el-table-column prop="name" label="司机姓名"  align="center"  >
        <template slot-scope="scope">
             <a style="color:#4F61FF;">{{scope.row.name}}</a>
        </template>
        </el-table-column>
      <el-table-column prop="alarmType" align="center"  label="告警类型">
         <template slot-scope="scope">
             <a style="color:#FF437B;">{{scope.row.alarmType}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="endTime" align="center"  label="告警时间" ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  data() {
    return {
      id: "real-order",
       tableData: [
        {
          date: "晋A-000000",
          name: "张三",
          alarmType:"无任务出行",
          endTime:"08-20 16:00",
        },
         {
          date: "晋A-000000",
          name: "张三",
          alarmType:"无任务出行",
          endTime:"08-20 16:00",
        },
         {
          date: "晋A-000000",
          name: "张三",
          alarmType:"无任务出行",
          endTime:"08-20 16:00",
        },
         {
          date: "晋A-000000",
          name: "张三",
          alarmType:"无任务出行",
          endTime:"08-20 16:00",
        },
        {
          date: "晋A-000000",
          name: "张三",
          alarmType:"无任务出行",
          endTime:"08-20 16:00",
        },
        {
          date: "晋A-000000",
          name: "张三",
          alarmType:"无任务出行",
          endTime:"08-20 16:00",
        },
          {
          date: "晋A-000000",
          name: "张三",
          alarmType:"无任务出行",
          endTime:"08-20 16:00",
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
  components: {},
  methods: {}
};
</script>
<style lang="scss">
#alarm-info {
  .el-table th {
    padding: 0 !important;
  }
  .noData{
    .el-table__body{
      height: 210px !important;
    }
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
  .el-table {
    width: 90%;
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
        height:27px;
        th {
          .cell{
              color: #59F2FD;
          }
          border:none;    
          background: #002E73 !important;
        }
        th:nth-of-type(3) .cell{
          
        }
      }
    }
    tbody tr{
       height:32px;
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
#alarm-info {
  width: 412px;
  font-size: 12px;
  height: 270px;
  margin:0 auto;
}
</style>