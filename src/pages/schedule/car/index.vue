<template>
  <d2-container type="full" class="page">
    <template>
      <el-form :inline="true" :model="searchItem" size="mini">
        <el-form-item>
          <el-select v-model="searchItem.routerDetailAliaSearchKey" placeholder="线路别名" clearable>
            <el-option v-for="(item, index) in routerDetail" :key="index" :label="item.routerAlia" :value="item.routerAlia"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="searchItem.carPlateNumberSearchKey" placeholder="车牌号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="searchItem.driverNameSearchKey" placeholder="司机姓名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSearch" icon="el-icon-search">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onAdd" icon="el-icon-plus">新增</el-button>
        </el-form-item>
      </el-form>
      <d2-crud
          :columns="columns"
          :index-row="indexRow"
          :data="tableInlineData"
          :pagination="pagination"
          :loading="loading"
          :rowHandle="rowHandle"
          @delete="onDelete"/>
      <el-dialog title="新增车辆" :visible.sync="addDialog">
        <el-form :inline="true" :model="searchItemAdd" size="mini">
          <el-form-item>
            <el-input v-model="searchItemAdd.carPlateNumberSearchKey" placeholder="车牌号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="searchItemAdd.driverNameSearchKey" placeholder="司机姓名"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="searchItemAdd.driverPhoneSearchKey" placeholder="手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSearchAdd" icon="el-icon-search">查询</el-button>
          </el-form-item>
        </el-form>
        <el-table
          size="mini"
          :data="tablePopData"
          highlight-current-row
          style="width: 100%"
          height="400">
          <el-table-column
            fixed
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="carPlateNumber"
            label="车牌号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="driverName"
            label="司机姓名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="driverIdentityId"
            label="身份证"
            width="160">
          </el-table-column>
          <el-table-column
            prop="workSpace"
            label="接单区域起始地"
            width="200">
          </el-table-column>
          <el-table-column
            prop="district"
            label="省/市/区">
          </el-table-column>
          <el-table-column
            prop="carTypeRealName"
            label="车型">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="60">
            <template slot-scope="scope">
              <el-button @click="onAddRouterToCar(scope.row)" type="text" size="small">添加</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog
          width="18%"
          title="线路别名"
          :visible.sync="innerVisible"
          append-to-body>
          <el-form :inline="true" :model="searchItem" size="mini">
            <el-form-item>
              <el-select v-model="addItemParam.routerDetailSeries" placeholder="线路别名" clearable>
                <el-option v-for="(item, index) in routerDetail" :key="index" :label="item.routerAlia" :value="item.series"></el-option>
              </el-select>
            </el-form-item>
            <el-button type="primary" @click="onAddRouterToCarComfirm" size="mini">确定</el-button>
          </el-form>
        </el-dialog>
      </el-dialog>
    </template>
  </d2-container>
</template>

<script>
import {
  getRouterAliaList,
  getAllDriver,
  getAllRouterAndCar,
  deleteRouterAndCar,
  addRouterToCar
} from "@/api/schedule";
import Cookies from "js-cookie";

export default {
  data() {
    return {
      loading: false,
      indexRow: {
        title: '#'
      },
      columns: [
        {
          title: "线路别名",
          key: "routerAlia"
        },
        {
          title: "司机姓名",
          key: "driverName"
        },
        {
          title: "车牌号",
          key: "carPlateNumber"
        },
        {
          title: "手机号",
          key: "driverPhone"
        }
      ],
      pagination: {
        pageSize: 10,
        layout: "sizes, prev, pager, next, jumper, ->, total"
      },
      rowHandle: {
        fixed: 'right',
        custom: [
          {
            text: "删除",
            type: "text",
            size: "mini",
            emit: "delete"
          }
        ]
      },
      customerNumId: Cookies.get("__user__customernumid"),
      currentPage: 1,
      pageSize: 1000,
      curPage: 1,
      pgSize: 1000,
      routerDetail: [],
      searchItem: {
        routerDetailAliaSearchKey: "",
        carPlateNumberSearchKey: "",
        driverNameSearchKey: ""
      },
      searchItemAdd: {
        carPlateNumberSearchKey: "",
        driverNameSearchKey: "",
        driverPhoneSearchKey: "",
        motorcadeId: "",
        checkStatus: 1
      },
      addItemParam: {
        routerDetailSeries: "",
        driverSeries: ""
      },
      tableData: [],
      searching: false,
      addDialog: false,
      customerDrivers: [],
      dialogTableVisible: false,
      innerVisible: false
    };
  },
  computed: {
    totalPage() {
      return this.tableData.length;
    },
    addTotalPage() {
      return this.customerDrivers.length;
    },
    tableInlineData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
    tablePopData() {
      this.customerDrivers.forEach(item => {
        item.district = `${item.prvRealName}/${item.cityRealName}/${
          item.cityAreaRealName
        }`;
      });
      return this.customerDrivers.slice(
        (this.curPage - 1) * this.pgSize,
        this.curPage * this.pgSize
      );
    }
  },
  created() {
    this._getRouterAliaList({
      customerNumId: this.customerNumId
    });
    this.onSearch();
  },
  methods: {
    _addRouterToCar(params) {
      addRouterToCar(params)
        .then(res => {
          if (res.code === 0) {
            this.$message({
              type: "success",
              message: "添加成功!"
            });
            this.addDialog = false;
            this.onSearch();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getAllDriver(params) {
      getAllDriver(params)
        .then(res => {
          if (res.code === 0) {
            this.customerDrivers = res.customerDrivers;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    _deleteRouterAndCar(params, index) {
      deleteRouterAndCar(params)
        .then(res => {
          if (res.code === 0) {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.tableData.splice(index, 1);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getAllRouterAndCar(params) {
      this.loading = true;
      getAllRouterAndCar(params)
        .then(res => {
          if (res.code === 0) {
            this.tableData = res.carRouterModel;
            this.loading = false;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    _getRouterAliaList(params) {
      getRouterAliaList(params)
        .then(res => {
          if (res.code === 0) {
            this.routerDetail = res.routerDetail;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    onSearch() {
      const params = {
        current: this.currentPage,
        pageSize: this.pageSize,
        customerNumId: this.customerNumId,
        driverNameSearchKey: this.searchItem.driverNameSearchKey,
        carPlateNumberSearchKey: this.searchItem.carPlateNumberSearchKey,
        routerDetailAliaSearchKey: this.searchItem.routerDetailAliaSearchKey
      };
      this._getAllRouterAndCar(params);
    },
    onSearchAdd() {
      this._getAllDriver({
        current: this.curPage,
        carPlateNumberSearchKey: this.searchItemAdd.carPlateNumberSearchKey,
        checkStatus: 1,
        customerNumId: this.customerNumId,
        driverNameSearchKey: this.searchItemAdd.driverNameSearchKey,
        driverPhoneSearchKey: this.searchItemAdd.driverPhoneSearchKey,
        motorcadeId: this.searchItemAdd.motorcadeId,
        pageSize: 1000
      });
    },
    onAdd() {
      this.addDialog = true;
    },
    onAddRouterToCar(row) {
      console.log(row);
      this.innerVisible = true;
      this.addItemParam.driverSeries = row.driverId;
    },
    onAddRouterToCarComfirm() {
      this.innerVisible = false;
      this._addRouterToCar({
        customerNumId: this.customerNumId,
        driverSeries: this.addItemParam.driverSeries,
        routerDetailSeries: this.addItemParam.routerDetailSeries
      });
    },
    onDelete({ index, row }) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this._deleteRouterAndCar(
            {
              customerNumId: this.customerNumId,
              series: row.series
            },
            index
          );
        })
        .catch(() => {
          console.log("取消删除");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.page {
  .block {
    padding: 10px 0;
    text-align: right;
  }
}
</style>
