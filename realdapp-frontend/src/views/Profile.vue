<template>
<div>
    <h1>Hi, {{this.user.name}} this is your Profile</h1>
    <b-button v-b-tooltip.hover title="Create your Property" 
    v-b-toggle.sidebar-right variant="primary" class="bt" 
    @click="openSlider">Create Property</b-button>
    <b-sidebar 
     id="sidebar-right"
     :title="isPropEditing ? 'Edit Property' : 'Create Property'"
     right shadow
     no-close-on-backdrop
     backdrop-variant="dark"
     >
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left" >
          <label for="propertyName" class="col-form-label">Property Area<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text" v-model="selected.prop_area"  id="title" class="form-control w-100" placeholder="Please enter property area" >
        </div>  
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label">Property No or House No<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text" v-model="selected.prop_house_no"  id="title" class="form-control w-100" placeholder="Please enter property number" >
        </div>  
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label">Property Landmark<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text"  v-model="selected.prop_landmark" id="title" class="form-control w-100" placeholder="Please enter property landmark" >
        </div>  
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label">Property City<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text"  v-model="selected.prop_city" id="title" class="form-control w-100" placeholder="Please enter property city" >
        </div>  
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label">Property State<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text"  v-model="selected.prop_state" id="title" class="form-control w-100" placeholder="Please enter property state" >
        </div>  
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label">Property Survey Number<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text"  v-model="selected.prop_surveyNumber" id="title" class="form-control w-100" placeholder="Please enter property servey number" >
        </div>  
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label">Property Price<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="number"  v-model="selected.prop_price" id="title" class="form-control w-100" placeholder="Please enter property servey number" >
        </div>  
      </div>
        <button
          class="btn btn-primary mt-3 button-theme"
          type="button"
          @click="saveProperty"
        >
          Submit
        </button>
    </b-sidebar>
  
   <section style="margin-left: 10px;">
    <div class="container-fluid">
      <div class="row" id="main">
        <div class="col-md-4 py-2" v-for="properties in user.properties"
        :key="properties._id">
          <div class="card h-100">
            <!-- <img class="card-img-top" src="assets/logo.png" height="50vh"> -->
             <div class="sold_status" v-if="properties.prop_isApproved==false">
               <span>Comming Soon</span>
                <!-- <h2 v-if="properties.isPending"><b-badge>Sold out</b-badge></h2> -->
                </div>
                <div class="sold_status_availabe" v-if="properties.prop_isApproved">
               <span>Available</span>
                <!-- <h2 v-if="properties.isPending"><b-badge>Sold out</b-badge></h2> -->
                </div>
            <div class="card-body d-flex flex-column align-items-center">
              <h5 class="card-title">{{properties.prop_landmark}} </h5>
              <p class="card-text" style="font-weight:bold">{{properties.prop_area}}sq.ft</p>
              <p class="card-text" style="font-weight:bold">{{properties.prop_city}}</p>
              <p class="card-text"> Price {{properties.prop_price}}</p>
              <!-- <button v-on:click="addProductToCart(properties)" class="btn btn-primary mt-auto">Enquire now</button> -->
            
              <div>
                <b-badge pill variant="success"  v-if="properties.prop_isApproved" title="Approved by Government"
                >Verified</b-badge>
                <b-badge pill variant="warning" v-else title="Not yet approved by Government"
                >Pending</b-badge>
                </div>
             
            </div>
            <div class="enquireBt" v-if="properties.prop_isApproved">
               <button  v-on:click="addProductToCart(properties)"
               class="btn btn-primary" style="width:200px;"
               >Deploy Property</button>
            </div>
            <div class="enquireBt" v-else>
              <button
              class="btn btn-primary" style="width:200px;"
              disabled
              >Deploy Property</button>
            </div>
            <div class="edit" v-if="properties.prop_isApproved">
           <b-icon icon="pencil-square" font-scale="1.5"
           v-on:click="editProp(properties)"
            title="Edit your property details"
           ></b-icon>
           </div>
            <div class="edit" v-else>
           <b-icon icon="pencil-square" font-scale="1.5"
           v-on:click="editProp(properties)"
            title="Edit your property details"
           ></b-icon>
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
import loadweb3 from '../utils/getWeb3'
import {abi,address} from '../utils/contractAbi'
export default {
name:'Profile',
data(){
return{
  isPropEditing:false,
  user:{
    _id:'',
    name:'',
    email:'',
    metamask_address:'',
    properties:[]
  },
  selected:{
    metamask_address:'0x39613B3F3B4260287537AA25FD40aFe1BE371D98',
    propId: 5,
    prop_area:'',
    prop_house_no:'',
    prop_landmark:'',
    prop_city:'',
    prop_state:'',
    prop_price:'',
    prop_document:'ABC',
    prop_surveyNumber:'',
  },
}
},
async mounted(){
  await this.detail();
},
methods:{
  addProductToCart(prop){
    alert(JSON.stringify(prop))
  },
   editProp(prop){
    this.isPropEditing = true;
    // prop.isApproved= false;
    // console.log(prop.isApproved);
    console.log(prop)
    this.$root.$emit("bv::toggle::collapse", "sidebar-right");
      // this.$root.$emit("callClearFromProject");'
      this.selected = prop
  },
  async detail(){
        const web3 =await loadweb3();
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(abi,address);
        const res = await contract.methods.connectMetamask(accounts[0]).call();
        console.log(res);
        // await contract.methods.createProperty(1, '5', 'abc', 'abc', 'abc', 100000, 'abc').send({from:accounts[0]});
        // // await contract.methods.sellProperty(accounts[0],'0xc47f5B4C41e6dF65B60A6d4c36Cf6e8a2310ae53',1).send({from:accounts[0]});
        // await contract.methods.buyProperty('0x17c416329270CE5B2b791F7BdbA384895dcA74Ea',1).send({from:accounts[0],value:'100000000'});
        // const bal = await contract.methods.getBalance(accounts[0]).call();
        // console.log(bal);
        console.log(accounts[0]);
        let result = await axios.get(`http://localhost:3000/get_user/${accounts[0]}`);
        console.log(result.data)
        this.user=  result.data
        // console.log(this.user.props);
        // console.log(this.propList);
   },
openSlider(){
  this.isPropEditing = false;
    this.clearAll();
//  this.$root.$emit("bv::toggle::collapse", "sidebar-right");
},
async saveProperty(){
  console.log(this.selected)
    // if(this.isValidate()){
  // this.user.props= this.selected
  // this.propList.push(this.selected);
  // this.user.props = this.propList
  console.log(this.user);
        const result = await axios.post(`http://localhost:3000/property_upload`,{
        // "Content-Type": "application/json",
         props:this.selected
         })
         {
          // const res= await result.json();
          const res = result
          console.log(res)
         }
    // }
    this.clearAll()
       this.$root.$emit("bv::toggle::collapse", "sidebar-right");
       this.$root.$emit("callClearFromProject");
},
// isValidate(){
//     if(!this.selected.propName){
//         alert("please fill the info")
//         return false
//     }
// },
clearAll(){
  this.selected={
    metamask_address:'0x39613B3F3B4260287537AA25FD40aFe1BE371D98',
    prop_id: 5,
    prop_area:'',
    prop_house_no:'',
    prop_landmark:'',
    prop_city:'',
    prop_state:'',
    prop_price:'',
    prop_surveyNumber:'',
    prop_document:'ABC'
  },
  this.propList=[]
}
}
}
</script>

<style>
.slight-left-margin{
  margin-left: 5px;
}
.topMargin{
  margin-top: 20px;
}
.bt{
  /* float:right; */
  /* margin-left: auto; */
  margin-top: 20px;
}

#titles{
    padding-left:40px;
}

/* cards css below */
#main{
    display: inline-flex;
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
  .edit{
  margin-top: 20px;
  margin-right: 20px;
  display: flex;
  justify-content:right;
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
.edit{
  margin-top:20px;
  cursor: pointer;
  display: flex;
  justify-content:right;

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
</style>