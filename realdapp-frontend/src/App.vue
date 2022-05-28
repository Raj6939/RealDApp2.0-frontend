<template>
<div id="app">
  <b-navbar toggleable="lg">
    <b-navbar-brand class="centerNav" href="/"> <img src="./assets/logoonly1.png" alt="Kitten" width="60px" title="RealDApp2.0">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav >
      <b-navbar-nav >
        <b-nav-item  href="/home">Home</b-nav-item>
        <b-nav-item  href="/marketplace">MarketPlace</b-nav-item>
        <b-nav-item  href="/about">About</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto"  >
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button v-b-tooltip.hover title="Search Properties" size="sm" class="my-2 my-sm-0" type="submit" variant="info">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right style="padding-left:10px" v-if="logdedIn==true">
          <template #button-content>
          <b-icon icon="person-fill" variant="info"
          v-b-tooltip.hover title="Account"
          >
          </b-icon>
          </template>
          <b-dropdown-item  href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 <router-view/>
<footer>
  <div class="container">
    <div class="row">
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item" id="logoandtext">
            <img src="./assets/logoonly1.png" alt="Kitten" width="100px" title="RealDApp2.0">
            <p class="realtext">RealDApp</p>
          </li>
        </ul>
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Company</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" >Whitepaper <b-badge  variant="info" style="display:flex;">Comming Soon</b-badge></a>
            
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blogs</a>
          </li>
        </ul>
      </div>
      <div class="col-md-4 footer-column">
        <ul class="nav flex-column">
          <li class="nav-item">
            <span class="footer-title">Contact & Support</span>
          </li>
          <li class="nav-item">
            <span class="nav-link"><i class="fas fa-phone"></i>+47 45 80 80 80</span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-envelope"></i>Contact us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><i class="fas fa-star"></i>Give feedback</a>
          </li>
        </ul>
      </div>
    </div>


    <div id="copyright">
      <span>Powered By RealDApp Protocol</span>
      <span class="quick-links">2022&copy; RealDApp </span>
    </div>

    
    
  </div>
</footer>
</div>
</template>
<script>
import LocalstorageMixin from "./mixins/LocalstorageMixin"
export default {
name:'App',
  data(){
return{
    logdedIn:false
 
}
},
mounted(){
if(localStorage.getItem("user")){
  this.logdedIn = true;
}
},
methods:{
  logout(){
    this.clean();
    window.location.href =
              window.location.origin + "/";
  }
},
mixins: [LocalstorageMixin],
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.centerNav{
  padding-left: 18%;
}
.ml-auto{
  padding-right: 25%;
}
#logoandtext{
  cursor:pointer;
}
#copyright span{
  display:flex;
justify-content: center;
  color:white;
}
$link-light-grey: #6c757d;
$primary-orange: #fec503; //before: fed136
$footer-background-light-grey: #212529;
$footer-background-grey: #1a1d20;
$social-buttons-circle-dark-grey: #1a1d20;

.col-md-4:nth-child(even) {
  // background: blue;
}
.col-md-4:nth-child(odd) {
  // background: red;
}

a {
  color: $link-light-grey;
}
a:hover {
  color: $primary-orange;
  text-decoration: none;
}

::selection {
  background: $primary-orange;
  text-shadow: none;
}

footer {
  padding: 2rem 0;
  background-color: #212529;
  // .container .row:not(:last-child) {
  //   padding-bottom: 2rem;
  // }
}

.footer-column:not(:first-child) {
    padding-top: 2rem;
    @media (min-width: 768px) {
      padding-top: 0rem;
    }
  }

.footer-column {
  text-align: center;
  //border: red solid 1px;
  .nav-item {
    .nav-link {
      padding: 0.1rem 0;
      color:teal;
    }
    .nav-link:hover{
      color:white;
    }
    span.nav-link {
      color: $link-light-grey;
      // color:white;
    }
    span.footer-title {
      font-size: 14px;
      font-weight: 700;
      color: #fff;
      text-transform: uppercase;
    }
    .fas {
      margin-right: 0.5rem;
    }
  }
  ul {
    display: inline-block;
    @media (min-width: 768px) {
      text-align: left;
    }
    //border: yellow solid 1px;
  }
}

ul.social-buttons {
  margin-bottom: 0;
}

ul.social-buttons li a:active,
ul.social-buttons li a:focus,
ul.social-buttons li a:hover {
  background-color: $primary-orange;
}

ul.social-buttons li a {
  font-size: 20px;
  line-height: 40px;
  display: block;
  width: 40px;
  height: 40px;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
  color: #fff;
  border-radius: 100%;
  outline: 0;
  background-color: $footer-background-grey;
}

footer .quick-links {
  font-size: 90%;
  line-height: 40px;
  margin-bottom: 0;
  text-transform: none;
  font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.realtext{
  margin-top:10px;
  font-size:20px;
  color:white;
  text-align:center;
}

</style>
