<template>
    <header class="jumbotron"> 
        <div class="container row row-header">
            <div class="col-12 col-sm-6">
                <h1>Say "Goodbye" to the hassle of taking care of taxese</h1>
                <h2>Start Your Freedom, from here</h2>
            </div>
            <div class="col-12 col-sm-6 align-self-center">
                <a class="btn btn-block btn-warning btn-sm" role="button" id="offerBtn">Enjoy Your Life</a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'welcome',
  props: {

  }
}
</script>

<style scoped>
.h1{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 50px;
}
.h2{
    color: #000;
}
.row-header {
  margin: 0px auto;
  padding: 0px 0px;
 
}
  

.jumbotron {
  padding: 70px 30px;
  background-image: url("../assets/goodbye.jpg");
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  }



button {
 border: none;
 outline: 0;
 padding: 8px;
 color: white;
 background-color: #000;
 text-align: left;
 cursor: pointer;
 width: 100%;
 font-size: 18px;
}

a {
 text-decoration: none;
 font-size: 22px;
 color: black;
}

button:hover, a:hover {
 opacity: 0.7;
}

</style>