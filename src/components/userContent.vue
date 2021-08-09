<template>
    <div class="container">
        <div class="align-items-center">
              <h1>User Data Table</h1>
              <p>Click table title to sorting data</p>
              <userTable></userTable>
        </div>
    </div>
</template>

<script>
import userTable from './table.vue'
  export default {
  name: 'userContent',
  components: {
      userTable
  }
}
</script>

<style scoped>
    .container{
    min-height: 510px

    }
</style>