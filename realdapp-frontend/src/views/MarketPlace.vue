<template>
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
    
  <section style="margin-left: 10px;">
    <div class="container-fluid">
      <div class="row" id="main">
        <div class="col-md-4 py-2" v-for="property in properties"
        :key="property._id">
          <div class="card h-100">
            <div>
            <!-- <img src="../assets/prop1.jpeg" class="py-2" alt="Kitten" height="100" width="200" title="RealDApp2.0"> -->
             <b-carousel class="story-carousel py-2" controls indicators :interval="0">
                <b-carousel-slide v-for="n in 4" :text="'RealDApp ' + n" :key="n">
                  <template #img>
                    <b-img class="imgslide"
                      fluid-grow
                      
                      :src="'https://picsum.photos/1024/480/?image=' + n"
                      alt="Random image"
                    ></b-img>
                  </template>
                </b-carousel-slide>
              </b-carousel>
             </div>
             
             <!--  -->
             <div class="sold_status" v-if="property.prop_approved==false">
               <span>Comming Soon</span>
                </div>
                <div class="sold_status_availabe" v-if="property.prop_approved">
               <span>Available</span>
                </div>
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title">{{property.prop_landmark}} </h5>
              <p class="card-text" style="font-weight:bold">{{property.prop_area}}sq.ft</p>
              <p class="card-text" style="font-weight:bold">{{property.prop_city}}</p>
              <p class="card-text"> Price {{property.prop_price}}</p>
              <div>
                <b-badge pill variant="success"  title="Approved by Government"
                >Verified</b-badge>
                </div>
             
            </div>
            <div class="enquireBt" v-if="!logdedIn">
               <button  @click="login"
               class="btn btn-primary" style="width:200px;"
               >Register or Login</button>
            </div>
            <div class="enquireBt" v-if="logdedIn">
               <button  @click="buyProperty(property)"
               class="btn btn-primary" style="width:200px;"
               >Buy this</button>
            </div>                     
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
  user:{},
  logdedIn:false,
  properties:[]
 
}
}, async mounted(){
  await this.detail();
},
methods:{
 async buyProperty(property){
  

  console.log(property)
  const result = await axios.post(
        `http://localhost:3000/transfer_property/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          // obj: propertyNft,
        }
      );
      {
        const res = result;
        console.log(res);
        // await this.detail();
      }
  },
  login(){
      window.location.href =
        window.location.origin + "/";
  },
   async detail(){
        if(localStorage.getItem("user")){
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user)
        console.log((this.user.email))
        this.logdedIn = true;
        }
        let result = await axios.get(`http://localhost:3000/marketplace`);
        this.properties=  result.data;
        
        console.log(this.properties);
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
    margin-right: -1rem;
    margin-left: -1rem;
    padding: 2rem;
}
#sidebar-right{
    width: 50%;
  }
 @media only screen and (max-width: 600px) {
  #main {
      display: flex;
    /* flex-wrap: wrap; */
    margin-right: -1rem;
    margin-left: -1rem;
    padding: 2rem;
  }

  #sidebar-right{
    width: 70%;
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
   /* display: flex; */
  /* justify-content: center; */
    box-shadow: 0 1px 6px rgba(61, 65, 84, 0.15);
    min-height: 150px;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    border-radius: .5rem;
    transition: 0.2s ease-in-out;
    width: 100%;
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
.enquireBt{
display: flex;
/* display: inline-flex; */
justify-content: center;
/* padding-bottom: 10px; */
}


/* //// */
.imgslide{
  /* position: initial; */
  width: 200px;
  height: 200px;
}
</style>