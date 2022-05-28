<template>
  <div>
    <h1>Hi, {{ user.name }} these are your Properties</h1>
    <b-sidebar id="sidebar-1" 
    shadow width="50%" 
    right
    :title="isPropEditing ? 'Set Price' : 'Preview Details'"
    >
      <div class="px-3 py-2">
        <div class="row g-3 align-items-center w-100 mt-4" id="titles">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property Area<span style="color: red">*</span>:
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
              >Property No or House No<span style="color: red">*</span>:
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
              >Property Landmark<span style="color: red">*</span>:
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
              >Property City<span style="color: red">*</span>:
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
              >Property State<span style="color: red">*</span>:
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
              >Property Survey Number<span style="color: red">*</span>:
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
        <div class="row g-3 align-items-center w-100 mt-4" id="titles" v-if="!selected.prop_price">
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property Price<span style="color: red">*</span>:
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              
              type="number"
              v-model="prop_price"
              id="title"
              class="form-control w-100"
              placeholder="Please set property price "
              
            />
          </div>
        </div>
        <div class="row g-3 align-items-center w-100 mt-4" id="titles" v-else>
          <div class="text-left col-lg-3 col-md-3 text-left">
            <label for="propertyName" class="col-form-label"
              >Property Price<span style="color: red">*</span>:
            </label>
          </div>
          <div class="col-lg-9 col-md-9 px-0">
            <input
              disabled
              type="text"
              v-model="selected.prop_price"
              id="title"
              class="form-control w-100"
              placeholder="Please enter property servey number"
              
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
              >Preview Document<span style="color: red">*</span>:
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
      <b-img class="imgslide"
                      fluid-grow
                      
                      :src="link"
                      alt="Random image"
                      target="_blank"
                    ></b-img>
      <button
        class="btn btn-primary mt-3 button-theme"
        type="button"
        @click="saveProperty"
        v-if="isPropEditing"
      >
        Submit
      </button>
    </b-sidebar>

    <section style="margin-left: 10px">
      <div class="container-fluid">
        <div class="row" id="main">
          <div
            class="col-md-4 py-2"
            v-for="property in properties"
            :key="property._id"
          >
            <div class="card h-100">
              <div class="card-body d-flex flex-column align-items-center">
                <h5 class="card-title">{{ property.prop_landmark }}</h5>
                <p class="card-text" style="font-weight: bold">
                  {{ property.prop_area }}sq.ft
                </p>
                <p class="card-text" style="font-weight: bold">
                  {{ property.prop_city }}
                </p>
                <p class="card-text" v-if="property.prop_price">Price {{ property.prop_price }}</p>
              </div>
              <div class="py-2">
                <b-badge pill variant="success" title="Approved by Government"
                  >Verified</b-badge
                >
              </div>
              <div class="py-2">
                <b-badge pill variant="success" title="Deployed on Blockchain"
                  >Deployed</b-badge
                >
              </div>
              <div v-if="!property.deployed">
              <div class="enquireBt" v-if="property.prop_price">
                <button
                  v-on:click="addProductToCart(property)"
                  class="btn btn-primary"
                  style="width: 200px"
                >
                  Deploy Property
                </button>
              </div>
              <div class="enquireBt" v-else>
                <button
                  v-b-toggle.sidebar-1
                  @click="setPrice(property)"
                  class="btn btn-primary"
                  style="width: 200px"
                >
                  Set Property Price
                </button>
              </div>
              </div>
              <div v-else>
               <div class="enquireBt">
                <button
                  @click="etherescan(property)"
                  class="btn btn-primary"
                  style="width: 200px"
                >
                  View On Etherscan
                </button>
              </div>
              </div>
              <div class="edit">
                <b-button
                  v-b-toggle.sidebar-1
                  @click="open(property)"
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
// import Loading from "vue-loading-overlay";
// import "vue-loading-overlay/dist/vue-loading.css";
export default {
name:'Profile',
// components:{Loading},
data(){
return{
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
  accounts:[]
}
},
async mounted(){
  if(!localStorage.getItem("user")){
    window.location.href =
        window.location.origin + "/";
  }
  //  await invokeMetamask()
  await this.detail();
},
methods:{
  etherescan(property){
    console.log(property)
  },
 async saveProperty(){
   this.selected.prop_price= this.prop_price;
   console.log(this.selected);
   const result = await axios.post(
        `http://localhost:3000/set_prop_price/${this.selected._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: this.selected,
        }
      );
      {
        const res = result;
        console.log(res);
        // await this.detail();
      }
      // this.clearAll();
      this.$root.$emit("bv::toggle::collapse", "sidebar-right");
      // this.$root.$emit("callClearFromProject");
  },
  setPrice(property){
    this.isPropEditing = true;
  console.log(property)
  this.selected = { ...property}  
  },
  open(property){
    this.isPropEditing = false;
    console.log(property)
    this.selected = { ...property}
  },
 async preview(){
    console.log(this.selected.prop_document);
//     this.$swal.fire({
//   position:'center',
//   title: 'Sweet!',
//   text: this.selected.prop_document,
//   imageUrl: `https://ipfs.io/ipfs/${this.selected.prop_document}`,
//   imageWidth: 400,
//   imageHeight: 200,
//   imageAlt: 'Custom image',
// })
// this.link = `https://ipfs.io/ipfs/${this.selected.prop_document}`;
// console.log(this.link);
 const url = `http://localhost:3000/file/${this.selected.prop_document}`

        const result = await fetch(url, {
          method: "GET",
        });
        console.log(result)
  },
  selectFile(){
    this.selected.prop_document = this.$refs.file.files[0];
    console.log(this.selected.prop_document);

  },
 async addProductToCart(property){
   console.log(property)
    const web3 =await loadweb3();
        this.accounts = await web3.eth.getAccounts();
if(this.user.metamask_address == this.accounts[0])
{
          const contract = new web3.eth.Contract(abi,address);
      const status = await contract.methods.connectMetamask(this.accounts[0]).call();
      if(status==false){
       const contractStatus = await contract.methods.createUser().send({from:this.accounts[0]})
       console.log(contractStatus)
       if(contractStatus==true){
         const createProperty = await contract.methods.createProperty(
          property.prop_house_no,
          property.prop_area,
          property.prop_landmark,
          property.prop_city,
          property.prop_state,
          property.prop_price,
          property.prop_document,
          property.adharNo,
          property.prop_surveyNumber
          ).send({from:this.accounts[0]})
          const propertyNft = createProperty.events.mint_property.returnValues.id;
          console.log(propertyNft)
            const result = await axios.post(
        `http://localhost:3000/addnft/${property._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: propertyNft,
        }
      );
      {
        const res = result;
        console.log(res);
        // await this.detail();
      }
      // this.clearAll();
      this.$root.$emit("bv::toggle::collapse", "sidebar-right");

         
      }
        }
        else{
          console.log("already Account")
          const createProperty = await contract.methods.createProperty(
          property.prop_house_no,
          property.prop_area,
          property.prop_landmark,
          property.prop_city,
          property.prop_state,
          property.prop_price,
          property.prop_document,
          property.adharNo,
          property.prop_surveyNumber
          ).send({from:this.accounts[0]})
          const propertyNft = createProperty.events.mint_property.returnValues.id;
          console.log(propertyNft)
          const result = await axios.post(
        `http://localhost:3000/addnft/${property._id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          obj: propertyNft
        }
      );
      {
        const res = result;
        console.log(res);
        // await this.detail();
      }
      // this.clearAll();
      this.$root.$emit("bv::toggle::collapse", "sidebar-right");


        }
        }
        else{
          alert("Please change your metamask wallet address");
        }

    // alert(JSON.stringify(prop))
  },
  editProp(prop){
    this.$root.$emit("bv::toggle::collapse", "sidebar-right");
    this.clearAll()
    this.selected = { ...prop }
    // this.$root.$emit("bv::toggle::collapse", "sidebar-right");
  },

  async detail(){
        this.user = JSON.parse(localStorage.getItem("user"));
        console.log(this.user.metamask_address)
        // const web3 =await loadweb3();
        // this.accounts = await web3.eth.getAccounts();
        // const contract = new web3.eth.Contract(abi,address);
        // await contract.methods.connectMetamask(this.accounts[0]).call();
        // const acc =  await res.json();
        // console.log(acc);
        // await contract.methods.createProperty(1, '5', 'abc', 'abc', 'abc', 100000, 'abc').send({from:accounts[0]});
        // // await contract.methods.sellProperty(accounts[0],'0xc47f5B4C41e6dF65B60A6d4c36Cf6e8a2310ae53',1).send({from:accounts[0]});
        // await contract.methods.buyProperty('0x17c416329270CE5B2b791F7BdbA384895dcA74Ea',1).send({from:accounts[0],value:'100000000'});
        // const bal = await contract.methods.getBalance(accounts[0]).call();
        // console.log(bal);
        // this.selected.metamask_address=this.accounts[0]
        // console.log(this.selected.metamask_address)
        // let result = await axios.get(`http://localhost:3000/get_user/${this.accounts[0]}`);
        // console.log(result.data)
        // get_user_approved
         if(this.user.approved==true){
        const url = `http://localhost:3000/approved_properties/${this.user.metamask_address}`

        const result = await fetch(url, {
          method: "GET",
        });
        const resp = await result.json()
        this.properties = resp;
        console.log(this.properties)
        }
   },
// isValidate(){
//     if(!this.selected.propName){
//         alert("please fill the info")
//         return false
//     }
// },
clearAll(){
  this.user={
  metamask_address:'',
  name:'',
  email:'',
  mobile:'',
  adharcardNo:'',
  approved:'',
  },
  this.properties=[]
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
}
}
</script>

<style>
.slight-left-margin {
  margin-left: 5px;
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
#sidebar-right {
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
  #sidebar-right {
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

.switchToggle {
}
</style>
