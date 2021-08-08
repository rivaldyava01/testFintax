<template>
 <div>
 <div class="footer sticky-bottom">
 <p>Copyright (c) 2021 SitePoint</p>
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