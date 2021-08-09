<template>
    <table id="userList" class="table table-striped table-bordered table-sm">
    <thead>
        <tr>
        <th @click="sortTable(0)">Id</th>
        <th @click="sortTable(1)">First Name</th>
        <th @click="sortTable(2)">Last name</th>
        <th @click="sortTable(3)">Email</th>
        </tr>
    </thead>
    <tbody id="userData">
        
    </tbody>
</table>
</template>

<script>

import axios from 'axios'
import $ from 'jquery'

export default {
 name: 'userTable',
 props: {
     
 },
 setup(){
      axios
        .get('https://reqres.in/api/users')
        .then(function(response){
            const taxData = response.data.data;
            $("#userData").html('');
            taxData.forEach(function (data){
                 const optFormat =
                `
                <tr>
                    <td>${data.id}</td>
                    <td>${data.first_name}</td>
                    <td>${data.last_name}</td>
                    <td>${data.email}</td>
                </tr>
                `;
                $("#userData").append(optFormat);

            })
        })
    // };
 },
 methods: {
    sortTable:function(n){
        let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("userList");
        switching = true;

        dir = "asc"; 
        while(switching){
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
      
                x = rows[i].getElementsByTagName("TD")[n];
                y = rows[i + 1].getElementsByTagName("TD")[n];

                if (dir == "asc") {
                    if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            
                    shouldSwitch= true;
                    break;
                    }
                }
                else if (dir == "desc") {
                    if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                    }
                }
            }
             if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount ++;
             }
            else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    },
   

 },
 
}

</script>

<style scoped>

</style>