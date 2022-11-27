<template>
    <div>
       
        <el-table 
            :row-class-name="tableRowClassName"
            :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="编号" width="180" />
            <el-table-column prop="bookName" label="书名" width="180" />
            <el-table-column prop="rating" label="排名" />
        </el-table>

         <i class="fa fa-american-sign-language-interpreting fa-5x" aria-hidden="true"></i>
    </div>
</template>

<script>
export default {
    name:'Books',
    
    data() {
        return {
            tableData:[]
        }
    },
    created() {
        this.$http.get('/book/hello').then(response => {
            console.log(response.data.result)
            this.tableData = response.data.result
        })
        
    },
    methods: {
      tableRowClassName({row, rowIndex}) {
        if (rowIndex %2 === 0) {
          return 'warning-row';
        } else if (rowIndex %2 === 1) {
          return 'success-row';
        }
        return '';
      }
    },
}  
</script>
<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>