<template>
  <nav class="navbar navbar-dark navbar-expand-sm sticky-top">
    <div class="container collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><a class="nav-link" v-for= "list in navbarList" :key="list.id" :href="list.url" >{{list.title}}</a></li>
      </ul>
      <span class="navbar-text" >
        <a role="button" v-for= "user in userButton" :key="user.id"  >
        {{ user.title }}
        </a>
      </span>
    </div>
  </nav>
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
      ],
      userButton:[
        {
          id: "loginBtn",
          title: "Login",
          url: '#login'
        },
          {
          id: "signUpBtn",
          title: "Sign Up",
          url: '#signUp'
        }
      ]
    }
  },
  props: {

  }
}
</script>

<style>
.navbar {
 overflow: hidden;
 background-color:  #512DA8;
}

.navbar a {
 float: left;
 color: #f2f2f2;
 text-align: center;
 padding: 14px 16px;
 font-size: 17px;
}

.navbar a:hover {
 background-color: #ddd;
 color: black;
}

</style>