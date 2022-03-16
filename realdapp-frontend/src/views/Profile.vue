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
     width="50%"
     no-close-on-backdrop
     backdrop-variant="dark"
     >
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left" >
          <label for="propertyName" class="col-form-label">Property Name<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text" v-model="selected.propName"  id="title" class="form-control w-100" placeholder="Please enter property name" >
        </div>  
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label">Property Address<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text" v-model="selected.propAddress"  id="title" class="form-control w-100" placeholder="Please enter property name" >
        </div>  
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label">Property Symbol<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text"  v-model="selected.propSym" id="title" class="form-control w-100" placeholder="Please enter property name" >
        </div>  
      </div>
      <div class="row g-3 align-items-center w-100 mt-4" id="titles">
        <div class=" text-left col-lg-3 col-md-3 text-left">
          <label for="propertyName" class="col-form-label">Property price<span style="color: red">*</span>: </label>
        </div>
        <div class="col-lg-9 col-md-9 px-0">
          <input  type="text"  v-model="selected.propPrice" id="title" class="form-control w-100" placeholder="Please enter property name" >
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
             class="btn btn-primary" style="width:200px;">Deploy Property</button>
            </div>
            <div class="edit" v-if="properties.isApproved && !properties.isPending">
            <!-- <i class="fas fa-edit" 
            v-on:click="editProp(properties)"
            title="Edit your property details"></i> -->
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
export default {
name:'Profile',
data(){
return{
  isPropEditing:false,
  user:{
    id:1, 
    did:"did2t273t2t",
    name:"yash",
    email:"yash@gmail.com",
    props:[]
  },
  selected:{
    propId: 6,
    propAddress:'',
    propName:'',
    propPrice:'',
    propSym:'',
    isApproved:false,
    isPending:true
  },
  propList:[],
   det:{
   id:'',
   did:'',
   name:'',
   email:'',
   isApproved:false,
   isPending:false,
   props:[]
    },
    id:3,
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
        let result = await axios.get(`http://localhost:3000/users/2`,{
         
        });
        this.det=  result.data;
        
        console.log(this.det);
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
        const result = await axios.post(`http://localhost:3000/users/${this.id}`,{
         props:this.selected
         })
         if(!result.ok){
           alert("not okay")
         }else{
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
    
     propId: 6,
    propAddress:'',
    propName:'',
    propPrice:'',
    propSym:'',
    isApproved:false,
    isPending:true
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
  margin-right: -10px;
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
.edit{
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