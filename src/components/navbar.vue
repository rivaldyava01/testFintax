<template>
     <div>
        <div class="topnav" >
            <a v-for= "list in navbarList" :key="list.id" :href="list.url" >{{list.title}}</a>
            <button>Login</button>
              <span class="navbar-text" >
                    <a role="button" id="loginBtn">
                        <span class="fa fa-sign-in"></span> Login
                    </a>
                </span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return{
      navbarList : [
          {
              id: "homeId",
              title: "Home",
              url: "#home"
          },
          {
              id: "taxListId",
              title: "Tax List",
              url: "#taxlist"
          },
          {
              id: "aboutUsId",
              title: "About Us",
              url: "#aboutus"
          },
      ]
    }
  },
  props: {

  }
}
</script>

<style scoped>
.topnav {
 overflow: hidden;
 background-color: #333;
}

.topnav a {
 float: left;
 color: #f2f2f2;
 text-align: center;
 padding: 14px 16px;
 text-decoration: none;
 font-size: 17px;
}

.topnav a:hover {
 background-color: #ddd;
 color: black;
}
</style>