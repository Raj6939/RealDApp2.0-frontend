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
    
    <b-sidebar id="sidebar-right" 
    shadow width="50%" 
    right
    title="Preview"
    >
      <div class="px-3 py-2">
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property Area :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="selected.prop_area"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property area"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property No or House No :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="selected.prop_house_no"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property number"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property Landmark :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="selected.prop_landmark"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property landmark"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property City :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="selected.prop_city"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property city"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property State :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="selected.prop_state"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property state"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property Survey Number :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="selected.prop_surveyNumber"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property servey number"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property Price :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="number"
              v-model="selected.prop_price"
              id="title"
              class="form-control w-100"
              placeholder="Please set property price "
              
            />
          </div>
        </div>
      
        <div
          class="row g-3 align-items-center w-100 mt-4"
          id="titles"
          v-if="selected.prop_document"
        >
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Preview Document :
            </label>
          </div>
          <button
            class="btn btn-primary mt-3 button-theme"
            type="button"
            @click="preview"
          >
            Preview
          </button>
        </div>
      </div>     
    </b-sidebar>
    
    <!--  -->
  <section style="margin-left: 10px;">
    <div class="container-fluid">
      <div class="row" id="main">
        <div class="col-md-4 py-2" v-for="property in properties"
        :key="property._id">
          <div class="card h-100">
          
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
               <button  @click="enquire(property)"
               class="btn btn-primary" style="width:200px;"
               >Interested</button>
            </div>
            <div class="edit">
                <b-button
                  v-b-toggle.sidebar-right
                  @click="openNFT(property)"
                  title="View Property Details"
                >
                  <b-icon icon="eye-fill" font-scale="1"></b-icon>
                </b-button>
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
import loadweb3 from '../utils/getWeb3'
import {abi,address} from '../utils/contractAbi'
import toast from "../mixins/toast"
export default {
name:'MarketPlace',
  data(){
return{
  user:{},
  notifications:[],
  notify:{
  buyer_metamask_address:'',
  seller_metamask_address:'',
  buyer_email:'',
  buyer_name:'',
  prop_id:''
  },
  logdedIn:false,
  properties:[],
    selected:{
    metamask_address:'',
    _id:'',
    prop_area:'',
    prop_house_no:'',
    prop_landmark:'',
    prop_city:'',
    prop_state:'',
    prop_price:'',
    prop_document:'',
    prop_surveyNumber:'',
  },
}
}, async mounted(){
  await this.detail();  
},
methods:{
   async preview(){
    console.log(this.selected.prop_document);
    this.$swal.fire({
  position:'center',
  title: `Document of ${this.selected.prop_landmark} house no ${this.selected.prop_house_no}`,
  imageUrl: `http://localhost:3000/file/${this.selected.prop_document}`,
  imageWidth: 400,
  imageHeight: 300,
  imageAlt: 'Custom image',
  confirmButtonColor:'teal',
})
  },
  openNFT(property){
console.log(property)
this.selected ={ ...property}
  },
  buyProperty(property){
    console.log(property)
//      const web3 =await loadweb3();
//         this.accounts = await web3.eth.getAccounts();
// if(this.user.metamask_address == this.accounts[0])
// {
//       const contract = new web3.eth.Contract(abi,address);
//       const status = await contract.methods.connectMetamask(this.accounts[0]).call();
//       console.log(status)
//       if(status==false){
//        const contractStatus = await contract.methods.createUser().send({from:this.accounts[0]})
//        console.log(contractStatus)
//        if(contractStatus==true){
//          const createProperty = await contract.methods.sellProperty(
//        this.notify.seller_metamask_address,
//        this.notify.buyer_metamask_address,
//        this.notify.prop_id
//           ).send({from:this.accounts[0]})
//           const propertyNft = createProperty.events.mint_property.returnValues.id;
//           console.log(propertyNft)
//             const result = await axios.post(
//         `http://localhost:3000/addnft/${property._id}`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           obj: propertyNft,
//         }
//       );
//       {
//         const res = result;
//         console.log(res);
//       }
        
//       }}}
  },
 async enquire(property){
  console.log(this.user)
  console.log(property)
    if(this.user.approved==true){
      if(this.user.metamask_address == property.metamask_address){
        return this.fetched(`You are owner of this property`,'error')
      }
     const web3 =await loadweb3();
        this.accounts = await web3.eth.getAccounts();
if(this.user.metamask_address == this.accounts[0])
{
      const contract = new web3.eth.Contract(abi,address);
      const status = await contract.methods.connectMetamask(this.accounts[0]).call();
      console.log(status)
      if(status==false){
const swalWithBootstrapButtons =  this.$swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success mx-2',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

 swalWithBootstrapButtons.fire({
  title: 'Create Your Account',
  text: "Please create your account on our  Smart Contract",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, create it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then(async(result) => {
  if (result.isConfirmed) {
       const contractStatus = await contract.methods.createUser().send({from:this.accounts[0]})
       console.log(contractStatus)
       if(contractStatus==true){
        this.notify.seller_metamask_address =  property.metamask_address;
        this.notify.prop_id = property.prop_id;
        this.notify.buyer_email = this.user.email;
        this.notify.buyer_name = this.user.name;
        this.notify.buyer_metamask_address = this.user.metamask_address;
        console.log(this.notify);
            const result = await axios.post(
        `http://localhost:3000/request_to_transfer`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: this.notify,
        }
      );
      {
        const res = result;
        console.log(res);
      }
        
      }

  } 
})
       }
        else{
      const swalWithBootstrapButtons =  this.$swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success mx-2',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

 swalWithBootstrapButtons.fire({
  title: 'Inform Seller',
  text: "Inform Seller about you",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes,!',
  cancelButtonText: 'No,cancel!',
  reverseButtons: true
}).then(async(result)=>{
  if(result.isConfirmed){
 this.notify.seller_metamask_address =  property.metamask_address;
  this.notify.prop_id = property.prop_id;
  this.notify.buyer_email = this.user.email;
  this.notify.buyer_name = this.user.name;
  this.notify.buyer_metamask_address = this.user.metamask_address;
  
  console.log(this.notify);
  const result = await axios.post(
        `http://localhost:3000/request_to_transfer/`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: this.notify,
        }
      );
      {
        const res = result;
        console.log(res);
      }
  }
})
}
        }
        else{
          this.fetched(`Please change your metamask wallet address!`,'error')
        }
 }else{
   this.fetched(`You have not done KYC yet`,'error')
 }
  },
  login(){
      window.location.href =
        window.location.origin + "/";
  },
   async detail(){
        if(localStorage.getItem("user")){
        this.user = JSON.parse(localStorage.getItem("user"));
        this.logdedIn = true;
        }
        let result = await axios.get(`http://localhost:3000/marketplace`);
        this.properties=  result.data;
        this.fetched(`Fetched ${this.properties.length} properties`,'success')
   },
   clearAll(){
  this.switchOpt = false,
  this.user={
  metamask_address:'',
  name:'',
  email:'',
  mobile:'',
  adharcardNo:'',
  approved:'',
  },
  this.properties=[],
  this.selected={
    metamask_address:'',
    _id:'',
    prop_area:'',
    prop_house_no:'',
    prop_landmark:'',
    prop_city:'',
    prop_state:'',
    prop_price:'',
    prop_surveyNumber:'',
    prop_document:'',
  }
}
},
mixins:[toast]
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
   .edit {
    margin-top: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: right;
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
.edit {
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: right;
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