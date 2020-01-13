<template>
  <div id="surveyContainer">
    <el-table :data="tableData" style="width:412px" class="noData">
      <el-table-column
        prop="date"
        align="left"
        label="公共机构"
        min-width="100"
      ></el-table-column>
      <el-table-column prop="name" label="数量" min-width="50">
        <template slot-scope="scope">
          <a style="color: #FF3C21;">{{ scope.row.name }}</a>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        align="right"
        label="单位"
        min-width="100"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "tripMode",
  data() {
    return {
      id: "tripMode",
      tableData: [
        {
          date: "建筑面积",
          name: "1132",
          address: "万㎡"
        },
        {
          date: "用能人数",
          name: "2123",
          address: "个"
        },
        {
          date: "总能耗",
          name: "5653",
          address: "吨标煤"
        },
        {
          date: "用电量",
          name: "2334",
          address: "万千瓦时"
        },
        {
          date: "用水量",
          name: "1435",
          address: "万吨"
        },
        {
          date: "单位面积能耗",
          name: "2334",
          address: "千克标煤/㎡"
        },
        {
          date: "人均能耗",
          name: "1435",
          address: "千克标煤/人"
        }
      ]
    };
  },
  props: {
    count: {
      type: Number,
      default: 0
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
#surveyContainer {
  .el-table th {
    padding: 0 !important;
  }
  .noData {
    .el-table__body {
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
  .el-table::before {
    background: transparent;
  }
  .el-table {
    width: 90%;
    background: linear-gradient(
      269.22deg,
      rgba(30, 109, 230, 0.04) 0.36%,
      rgba(33, 115, 236, 0.16) 49.43%,
      rgba(29, 112, 236, 0.04) 99.54%
    );

    font-size: 12px;
    thead {
      tr {
        background: transparent;
        height: 27px;
        th {
          .cell {
            color: #59f2fd;
          }
          border: none;
          background: #002e73 !important;
        }
        th:nth-of-type(3) .cell {
          text-align: right;
        }
      }
    }
    tbody {
    }
    tbody tr {
      height: 32px;
      background: #041544;
      .el-table_1_column_2 {
        cursor: pointer;
      }
    }
    tbody tr td {
      padding: 0 !important;
      color: #fff;
    }
  }
}
</style>
<style lang="scss" scoped>
#surveyContainer {
  width: 412px;
  font-size: 12px;
  height: 270px;
  margin: 0 auto;
}
</style>