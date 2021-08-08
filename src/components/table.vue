<template>
    <table id="userData" class="table table-striped table-bordered table-sm">
    <thead>
        <tr>
        <th scope="col" @click="sortTable(0)">id</th>
        <th scope="col" @click="sortTable(1)">Name</th>
        <th scope="col" @click="sortTable(2)">Salary</th>
        <th scope="col" @click="sortTable(3)">Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>1</td>
        <td>Mark</td>
        <td>$ 19000</td>
        <td>20</td>
        </tr>
        <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>$ 40000</td>
        <td>23</td>
        </tr>
        <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td>$ 500000</td>
        <td>50</td>
        </tr>
    </tbody>
</table>
</template>

<script>
export default {
 name: 'table',
 props: {
     
 },
 methods: {
    sortTable:function(n){
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("userData");
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
    }
 },
 
}

// Jquery(document).ready(function () {
// $('#dtBasicExample').DataTable();
// $('.dataTables_length').addClass('bs-select');
// });


</script>

<style scoped>
table.dataTable thead .sorting:after,
table.dataTable thead .sorting:before,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_asc:before,
table.dataTable thead .sorting_asc_disabled:after,
table.dataTable thead .sorting_asc_disabled:before,
table.dataTable thead .sorting_desc:after,
table.dataTable thead .sorting_desc:before,
table.dataTable thead .sorting_desc_disabled:after,
table.dataTable thead .sorting_desc_disabled:before {
bottom: .5em;
}
</style>