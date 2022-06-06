<template>
  <div>
    <h3 v-if="switchOpt">Untoggle this to know who have requested to your properties</h3>
    <h3 v-else>Toggle this to know about request you have made to other properties</h3>
    <b-form-checkbox v-model="switchOpt" @change="opt" name="check-button" switch>
            </b-form-checkbox>
    <b-sidebar id="sidebar-1" 
    shadow width="50%" 
    right
    title="Buy this Property"
    >
      <div class="px-3 py-2">
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Seller Metamask Address :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="buyInfo.seller_metamask_address"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property city"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Seller Email ID :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="buyInfo.seller_email"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property city"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property ID :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="buyInfo.prop_id"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property city"
            />
          </div>
        </div>
      </div>
      <button
        class="btn btn-primary mt-3 button-theme"
        type="button"
        @click="initiateBuy"
      >
        Buy
      </button>
    </b-sidebar>
<!--  -->
<b-sidebar id="sidebar-2" 
    shadow width="50%" 
    right
    title="Approve Property to Buyer"
    >
      <div class="px-3 py-2">
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Buyer Name :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="sellInfo.buyer_name"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property area"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Buyer Metamask Address :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="sellInfo.buyer_metamask_address"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property city"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Buyer Email ID :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="sellInfo.buyer_email"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property city"
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property ID :
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="sellInfo.prop_id"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property city"
            />
          </div>
        </div>
      </div>
       <button
        class="btn btn-danger slight-left-margin mt-3 button-theme"
        type="button"
        @click="reject"
      >
        Reject
      </button>
      <button
        class="btn btn-primary slight-left-margin mt-3 button-theme"
        type="button"
        @click="approveForSell"
      >
        Approve
      </button>
     
    </b-sidebar>
<!--  -->
    <section style="margin-left: 10px" v-if="switchOpt">
      <div class="container-fluid">
        <div class="row" id="main">
          <div
            class="col-md-4 py-2"
            v-for="property in notificationsToNft"
            :key="property._id"
          >
            <div class="card h-100">
              <div class="card-body d-flex flex-column align-items-center">
        
                  <b-avatar class="mb-4"  badge="1" variant="primary" badge-variant="dark"
                  v-if="property.buyer_address"
                  title="You have one request for this property"
                  ></b-avatar>
                
                <h5 class="card-title">Property ID: {{ property.prop_id }}</h5>
                <p class="card-text" style="font-weight: bold">
                 Seller Email ID: {{ property.seller_email }}
                </p>
                <p class="card-text" style="font-weight: bold">
                 Buyer Metamask address: {{ property.seller_metamask_address }}
                </p>
              </div>
              <div class="enquireBt">
                <button
                  v-b-toggle.sidebar-1
                  @click="buySlider(property)"
                  class="btn btn-warning"
                  style="width: 200px"
                >
                  Buy this
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
<!--  -->

<section style="margin-left: 10px" v-else>
      <div class="container-fluid">
        <div class="row" id="main">
          <div
            class="col-md-4 py-2"
            v-for="property in notificationsForNft"
            :key="property._id"
          >
            <div class="card h-100">
              <div class="card-body d-flex flex-column align-items-center">
        
                  <b-avatar class="mb-4"  badge="1" variant="primary" badge-variant="dark"
                  v-if="property.buyer_address"
                  title="You have one request for this property"
                  ></b-avatar>
                
                <h5 class="card-title">Property ID: {{ property.prop_id }}</h5>
                <p class="card-text" style="font-weight: bold">
                  Buyer Name: {{ property.buyer_name }}
                </p>
                <p class="card-text" style="font-weight: bold">
                 Buyer Email ID: {{ property.buyer_email }}
                </p>
                <p class="card-text" style="font-weight: bold">
                 Buyer Metamask address: {{ property.buyer_metamask_address }}
                </p>
              </div>
              <div class="enquireBt">
                <button
                  v-b-toggle.sidebar-2
                  @click="openSellSlider(property)"
                  class="btn btn-warning"
                  style="width: 200px"
                >
                  Approve or reject
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>


<!--  -->
  </div>
</template>

<script>
import axios from 'axios'
import loadweb3 from '../utils/getWeb3'
import {abi,address} from '../utils/contractAbi'
import toast from "../mixins/toast"
export default {
name:'Notifications',
data(){
return{
  sellInfo:{
    buyer_metamask_address:'',
    seller_metamask_address:'',
    buyer_email:'',
    prop_id:'',
    approved_status:false
  },
  buyInfo:{
    buyer_metamask_address:'',
    seller_metamask_address:'',
    buyer_email:'',
    prop_id:'',
    approved_status:false
  },
  switchOpt:false,
  notificationsForNft:[],
  notificationsToNft:[],
  link:'',
  prop_price:'',
  isLoading: false,
  fullPage: true,
  isPropEditing:false,
  user:{
  metamask_address:'',
  name:'',
  email:'',
  mobile:'',
  adharcardNo:'',
  approved:'',

  },
  properties:[],
  NFTproperties:[],
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
  accounts:[],
  transfertoback:{
    buyer_metamask_address:'',
    prop_id:'',
  },
  weiPrice:'',
}
},
async mounted(){
  if(!localStorage.getItem("user")){
    window.location.href =
        window.location.origin + "/";
  }
  await this.detail();
},
methods:{
async initiateBuy(){
    const web3 =await loadweb3();
        this.accounts = await web3.eth.getAccounts();
if(this.user.metamask_address == this.accounts[0]){
 const contract = new web3.eth.Contract(abi,address);
const result = await axios.post(
        `${this.$config.BASE_URL}get_eth`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: this.buyInfo.prop_id,
        }
      );
        const res = result;        
        this.weiPrice = res.data*1000000000000000000
         const swalWithBootstrapButtons =  this.$swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success mx-2',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

 swalWithBootstrapButtons.fire({
  title: `You need to pay ${res.data} ethers`,
  text: "Are you sure to proceed!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, proceed!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then(async(result)=>{
  if(result.isConfirmed){
    const approval = await contract.methods.buyProperty(
          this.buyInfo.seller_metamask_address,
          this.buyInfo.prop_id
          ).send({from:this.accounts[0],value:this.weiPrice})
          if(approval.status==true)
          {
            this.$root.$emit("bv::toggle::collapse", "sidebar-1");
            this.fetched(`property trasnfered to you`,'success');
      this.transfertoback.buyer_metamask_address = this.buyInfo.buyer_metamask_address;  
      this.transfertoback.prop_id = this.buyInfo.prop_id
   
      const resp = await axios.post(
        `${this.$config.BASE_URL}transfer_property`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: this.transfertoback
        }
      );
        console.log(resp)
        await this.detail();
     }
     else{
       this.fetched(`property not trasnfered`,'error')
     }
  }
})

} else{
  this.fetched(`Use metamask address linked to RealDapp`,'error')
}

},
 async approveForSell(){
    if(this.sellInfo.approved_status==false)
    {

            const web3 =await loadweb3();
          this.accounts = await web3.eth.getAccounts();
    if(this.user.metamask_address == this.accounts[0]){
          const contract = new web3.eth.Contract(abi,address);
          const approval = await contract.methods.sellProperty(
          this.sellInfo.seller_metamask_address,
          this.sellInfo.buyer_metamask_address,
          this.sellInfo.prop_id
          ).send({from:this.accounts[0]})
          if(approval.status ==  true){
          this.$root.$emit("bv::toggle::collapse", "sidebar-2");
          this.fetched(`Approved to ${this.sellInfo.buyer_metamask_address}`,'success');
           const result = await axios.post(
        `${this.$config.BASE_URL}property_approval`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: this.sellInfo._id,
        }
      );
      {
        const res = result;
        console.log(res);
        await this.detail();
       
      }
  }
}   
    }
    else{
      this.fetched(`Property is already Approved`);
    }
  },
async reject(){
  if(this.sellInfo.approved_status== true){
   const web3 =await loadweb3();
  this.accounts = await web3.eth.getAccounts();
      if(this.user.metamask_address == this.accounts[0]){
      const contract = new web3.eth.Contract(abi,address);
      const approval = await contract.methods.rejectApprovedProperty(
          this.sellInfo.prop_id
          ).send({from:this.accounts[0]})
          console.log(approval.status);
             if(approval.status ==  true){
        this.$root.$emit("bv::toggle::collapse", "sidebar-2");
        this.fetched(`Rejected to ${this.sellInfo.buyer_metamask_address}`,'success');
           const result = await axios.post(
        `${this.$config.BASE_URL}reject_approval`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: this.sellInfo._id,
        }
      );
      {
        const res = result;
        console.log(res);
        await this.detail();
      }
  }
}
  }else{
    this.fetched("Not Yet Approved")
  }

  },
  openSellSlider(property){
this.sellInfo = {...property}
  },
    buySlider(property){
this.buyInfo = {...property}
  },
 async opt(){
  
   await this.detail();   
  },
  async detail(){
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user.metamask_address);
     
        if(this.switchOpt == true){
          const url = `${this.$config.BASE_URL}buyer_notifications/${this.user.metamask_address}`

        const result = await fetch(url, {
          method: "GET",
        });
        this.notificationsToNft = await result.json()
        this.fetched(`You have approched ${this.notificationsToNft.length} properties`,'success');
        }
        
        else
        {
           const url = `${this.$config.BASE_URL}seller_notifications/${this.user.metamask_address}`

        const result = await fetch(url, {
          method: "GET",
        });
        this.notificationsForNft = await result.json()
        this.fetched(`You have ${this.notificationsForNft.length} request for your properties`,'success')
        }

        
   },
clearAll(){
   this.sellInfo={
    buyer_metamask_address:'',
    seller_metamask_address:'',
    buyer_email:'',
    prop_id:'',
    approved_status:false
  },
  this.buyInfo={
    buyer_metamask_address:'',
    seller_metamask_address:'',
    buyer_email:'',
    prop_id:'',
    approved_status:false
  },
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
  this.NFTproperties=[]
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

<style>
.slight-left-margin {
  margin-left: 10px;
}
.topMargin {
  margin-top: 20px;
}
.bt {
  /* float:right; */
  /* margin-left: auto; */
  margin-top: 20px;
}

#titles {
  padding-left: 40px;
}

/* cards css below */
#main {
  margin-right: -1rem;
  margin-left: -1rem;
  padding: 2rem;
}
#sidebar-1 {
  width: 50%;
}
#sidebar-2 {
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
  .bell {
    margin-top: 20px;
    margin-right: 20px;
    display: flex;
    justify-content: right;
  }
  #sidebar-1 {
    width: 70%;
  }
  #sidebar-2 {
    width: 70%;
  }
}
.col-md-4 {
  /* flex: 0 0 33.33%; */
  max-width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  position: relative;
}
.card {
  /* display: flex; */
  /* justify-content: center; */
  box-shadow: 0 1px 6px rgba(61, 65, 84, 0.15);
  min-height: 150px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  transition: 0.2s ease-in-out;
  width: 100%;
}
.card:before {
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
.col-md-4:hover .card:before {
  width: 100%;
}
.col-md-4:hover .card {
  top: -2px;
  box-shadow: 0px 20px 40px 0px rgba(61, 65, 84, 0.15);
}
.edit {
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: right;
}
.bell {
  margin-top: 20px;
  cursor: pointer;
  display: flex;
  justify-content: right;
}
.intro {
  padding: 10px;
}
.sold_status {
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
.sold_status_availabe {
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
.enquireBt {
  display: flex;
  /* display: inline-flex; */
  justify-content: center;
  /* padding-bottom: 10px; */
}
a.notif {
  position: relative;
  display: block;
  height: 50px;
  width: 50px;
  background: url('http://i.imgur.com/evpC48G.png');
  background-size: contain;
  text-decoration: none;
}
.num {
  position: absolute;
  right: 11px;
  top: 6px;
  color: #fff;
}
.switchToggle {
}
</style>
