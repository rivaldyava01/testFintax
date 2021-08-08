<template>
 <div>
 <div class="footer">
 <p>This is a demo footer. (c) 2018-19</p>
 </div>
 </div>
</template>

<script>
export default {
 name: 'Footer',
 props: {
 }
}
</script>

<style scoped>
.footer {
 position: fixed;
 left: 0;
 bottom: 0;
 width: 100%;
 background-color: #333;
 color: white;
 text-align: center;
}
</style>