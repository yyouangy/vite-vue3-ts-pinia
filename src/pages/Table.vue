<template>
  <el-button @click="getList" type="success">刷新</el-button>
  <el-table :data="tableData" style="width: 100%" border v-loading="loading">
    <el-table-column prop="Date" label="Date" width="180" />
    <el-table-column prop="Name" label="Name" width="180" />
    <el-table-column prop="Address" label="Address" />
  </el-table>
  <div class="example-pagination-block">
      <el-pagination  background      layout="total, sizes, prev, pager, next, jumper" :total="page.total"   @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
    </div>


</template>

<script lang="ts" setup>
import {getCurrentInstance, onMounted, ref} from "vue"

import { useTable } from '@/hooks/useTable';
// api
import { getMenuList ,getTableList} from '@/apis/module/auth';

// import "@/apis/mock"

// require('@/apis/mock.js')

// 解构出列表数据和loading
const { tableData,
  page,
  loading,
  getList,
  resetParams,
  handleSizeChange,
  handleCurrentChange } = useTable({
    apiFn: getTableList,
    isPageable: true,
    immediate:false
  });
console.log(tableData,)
//   page,
//   loading,
//   getList,
//   resetParams,
//   handleSizeChange,
//   handleCurrentChange);
// onMounted(async ()=>{
//   const tlist=await getTableList({ page: 0 , pageSize: 20})
//   console.log(tlist);
// })


</script>