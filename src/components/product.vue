<template>
    <div class="container">
        <div id= "oddContent" class="row row-content align-items-center">
            <div class="col-12 col-sm-4  order-sm-last col-md-3"> 
                <h3>Saving Your Money</h3>
            </div>
            <div  class="col col-sm order-sm-first col-md">
                <div class="media">
                    <img class="d-flex mr-3 align-self-center" src="../assets/goodbye.jpg" alt="Uthappiza">
                    <div class="media-body">
                        <h2 class="mt-0">Low Monthly Fee<span class="badge badge-danger">LOW PRICE</span> <span class="badge badge-pill badge-secondary">5000</span></h2>
                        <p class="d-none d-sm-block">A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.</p>
                    </div>
                </div>
            </div>
        </div>

        <div id= "evenContent" class="row row-content align-items-center">
            <div class="col-12 col-sm-4 col-md-3">
                <h3>Protect Your Privacy</h3>
            </div>
            <div class="col-12 col-sm col-md">
                <div class="media">
                    <div class="media-body">
                        <h2 class="mt-0">Your Data Will Not Leak<span class="badge badge-warning">SAFETY</span></h2>
                        <p class="d-none d-sm-block">Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>
                    </div>
                    <img class="d-flex mr-3 align-self-center" src="../assets/goodbye.jpg" alt="Grand Buffet">
                </div>
            </div>
        </div>

        <div  id= "oddContent" class="row row-content align-items-center">
            <div class="col-12 col-sm-4  order-sm-last col-md-3">
                <h3>Faster Than The Blink Of An Eye</h3>
            </div>
            <div class="col-12 col-sm order-sm-first col-md">
                <div class="media">
                    <img class="d-flex mr-3 align-self-center" src="../assets/goodbye.jpg" alt="Alberto Sommaya">
                    <div class="media-body">
                      <h2 class="mt-0">No Need To Wait Too Long<span class="badge badge-success">FAST</span></h2>
                        <p class="d-none d-sm-block">Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
</template>

<script>
export default {
  name: 'product',
  props: {

  }
}
</script>

<style scoped>
img{
    width:100%;
    max-width:500px;
}
#oddContent{
    background-color: #368BC1;
}
#evenContent{
    background-color: #4682B4;
}
</style>