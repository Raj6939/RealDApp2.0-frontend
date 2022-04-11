<template>
<div id="app">
  <b-navbar toggleable="lg">
    <b-navbar-brand class="centerNav" href="/"> <img src="./assets/logoonly1.png" alt="Kitten" width="60px" title="RealDApp2.0">
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav >
      <b-navbar-nav >
        <b-nav-item  href="/">Home</b-nav-item>
        <b-nav-item  href="/marketplace">MarketPlace</b-nav-item>
        <b-nav-item  href="/about">About</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto"  >
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button v-b-tooltip.hover title="Search Properties" size="sm" class="my-2 my-sm-0" type="submit" variant="info">Search</b-button>
        </b-nav-form>
        <b-nav-item-dropdown right style="padding-left:10px">
          <template #button-content>
          <b-icon icon="person-fill" variant="info"
          v-b-tooltip.hover title="Account"
          >
          </b-icon>
          </template>
          <b-dropdown-item  href="/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="/">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
 <router-view/>
</div>
</template>

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
</style>
