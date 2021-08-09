<template>
    <div class="container">
        <form class="col-6">
            <label class="col-12 col-sm-4 col-md-3" for="amount">Amount</label>
            <input class="col-sm-auto col-md-6" type="number" id="amountId" value="0">
        </form> 
        <form class="col-6">
            <label class="col-12 col-sm-4 col-md-3" for="taxRate">Tax Rate</label>
            <input class="col-sm-auto col-md-6" type="number" id="taxRateId" value="0">
        </form>
        <form id="button">
            <input class=" order-sm-last btn btn-success btn-sm" role="button" id="offerBtn" type="button" value="Calculate" @click="calculate()">
        </form>
        <form id="result" class="col-6">
            <label class="col-12 col-sm-4 col-md-3" for="result">Result</label>
            <input class="col-sm-auto col-md-6" type="number" id="resultId" readonly value="0">
        </form>
    </div>
</template>

<script>
export default {
    name: 'mathTax', 
     methods: {
    calculate:function(){
        let amount = document.getElementById('amountId').value
        let taxRate = document.getElementById('taxRateId').value 
        

        let tax = taxRate/ 100
        document.getElementById('resultId').value = amount * tax 
    }
     }
}
</script>

<style scoped>
.container{
    min-height: 500px;
    margin-top: 50px
}
#button{
    margin-top: 20px;
    margin-left: 280px;
}
label{
     margin-bottom: 20px;
}
#result{
    margin-top: 20px;
}
</style>