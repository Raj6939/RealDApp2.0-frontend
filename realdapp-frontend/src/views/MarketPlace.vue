<template>
<!-- <div id="market">
  <div class="row" style="margin-top: 2%" id="main">
    <div
        class="col-md-4"
        v-for="properties in det"
        v-bind:key="properties.id"
       
      >
  <b-card
    title="Card Title"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
  >
    <b-card-text>
     Name :{{properties.name}} <br>
     did :{{properties.did}} <br>
     email :{{properties.email}}
    </b-card-text>
  </b-card>
    </div>
</div>
</div> -->
 <div class="container-fluid">
   <div class="intro">
   <h1>Welcome to RealDApp Marketplace</h1>
   <h2>First Real Estate <span style="color:teal; font-weight:bold">NFT</span> marketplace to</h2>
   <h2>create, buy and sell your properties on blockchain</h2>
   
   </div>
  <div class="row">
    <div class="col-md-12">
      <h2 class="text-center" style="color:teal">Latest Properties</h2>
      <!-- <hr /> -->
    </div>
  </div>
    
  <!-- <img v-if="loading" src="//placehold.it/100" /> -->
    
  <section id="app" style="margin-left: 10px;">
    <div class="container-fluid">
      <div class="row" id="main">
        <div class="col-md-4 py-2" v-for="properties in det.props"
        :key="properties.propId">
          <div class="card h-100">
            <!-- <img class="card-img-top" src="assets/logo.png" height="50vh"> -->
             <div class="sold_status" v-if="properties.isPending">
               <span>Comming Soon</span>
                <!-- <h2 v-if="properties.isPending"><b-badge>Sold out</b-badge></h2> -->
                </div>
                <div class="sold_status_availabe" v-if="properties.isPending==false">
               <span>Available</span>
                <!-- <h2 v-if="properties.isPending"><b-badge>Sold out</b-badge></h2> -->
                </div>
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title">{{properties.propName}} </h5>
              <p class="card-text" style="font-weight:bold">{{properties.propAddress}}</p>
              <p class="card-text"> Price {{properties.propPrice}}</p>
              <!-- <button v-on:click="addProductToCart(properties)" class="btn btn-primary mt-auto">Enquire now</button> -->
            
              <div>
                <b-badge pill variant="success"  v-if="properties.isApproved" title="Approved by Government"
                >Verified</b-badge>
                <b-badge pill variant="warning" v-else title="Not yet approved by Government"
                >Pending</b-badge>
                </div>
            </div>
            <div class="enquireBt" v-if="properties.isApproved && !properties.isPending">
             <button  v-on:click="addProductToCart(properties)"
             class="btn btn-primary" style="width:200px;">Sign In / Sign Up</button>
            </div>
            <div class="enquireBt" v-else>
            <button class="btn btn-default" style="width:200px;" disabled></button>
            </div>
               
            <!-- <div class="card-body d-flex flex-column align-items-top">
              <h5 class="card-title">Property {{properties.id}} </h5>
              <p class="card-text">Product </p>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
import axios from 'axios'
export default {
name:'MarketPlace',
  data(){
return{
  det:{
   id:'',
   did:'',
   name:'',
   email:'',
   isApproved:false,
   isPending:false,
   props:[]
    },
    id:2,
}
}, async mounted(){
  await this.detail();
},
methods:{
  addProductToCart(prop){
    alert(JSON.stringify(prop))
  },
   async detail(){
        let result = await axios.get(`http://localhost:3000/users/${this.id}`,{
         
        });
        this.det=  result.data;
        
        console.log(this.det);
   },
}
}
</script>

<style >

/* .row{
 display: flex;
 justify-content: center;

} */
/* .market{
  display: flex;
 justify-content: center;

} */
#main{
    display: inline-flex;
    margin-right: -1rem;
    margin-left: -1rem;
    padding: 2rem;
}
 @media only screen and (max-width: 600px) {
  #main {
    /* display: inline-flex; */
      display: flex;
    /* flex-wrap: wrap; */
    margin-right: -1rem;
    margin-left: -1rem;
    padding: 2rem;
  }
}
.col-md-4{
  /* flex: 0 0 33.33%; */
    max-width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    position:relative;
}
.card{
    box-shadow: 0 1px 6px rgba(61, 65, 84, 0.15);
    min-height: 150px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    border-radius: .5rem;
    transition: 0.2s ease-in-out;
    cursor:pointer;
}
.card:before{
 width: 0;
    transition: 0.2s;
    z-index: 0;
    content: "";
    background-color: #4c86e7;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
}
.col-md-4:hover .card:before{
 width: 100%;
}
.col-md-4:hover .card{
    top: -2px;
    box-shadow: 0px 20px 40px 0px rgba(61, 65, 84, 0.15);
}
.enquireBt{
display: flex;
/* display: inline-flex; */
justify-content: center;
/* padding-bottom: 10px; */
}
.intro{
  padding: 10px;
}
.sold_status{
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  /* padding: 6px 40px; */
    padding: 6px;
  background-color: #646464;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4em;
  text-transform: uppercase;
  text-align: center;
}
.sold_status_availabe{
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  /* padding: 6px 40px; */
    padding: 6px;
  background-color: teal;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4em;
  text-transform: uppercase;
  text-align: center;
}
</style>