<template>
 <div>
<main class="l-main">
            <!--========== HOME ==========-->
            <section class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <h1 class="home__title">Welcome to RealDApp</h1>
                        <h2 class="home__subtitle">Make your Real estate <br> assets unique.</h2>
                    </div>
    
                    <img src="../assets/landing.jpg" alt="" class="home__img">
                </div>
            </section>
            
            <!--========== ABOUT ==========-->
            <section class="about section bd-container" id="about">
                <div class="about__container  bd-grid">
                    <div class="about__data">
                        <!-- <span class="section-subtitle about__initial">About us</span> -->
                        <h2 class="section-title about__initial">Buy Real Ownership</h2>
                        <p class="about__description">Buy ans sell your real estate assets on decentralized platform</p>
                        <a href="/marketplace" class="button">Explore Marketplace</a>
                    </div>

                    <img src="../assets/key.jpg" alt="" class="about__img">
                </div>
            </section>

            <!--========== SERVICES ==========-->
            <section class="services section bd-container" id="services">
                <!-- <span class="section-subtitle">Offering</span> -->
                <h2 class="section-title">How It Works</h2>

                <div class="services__container  bd-grid">
                    <div class="services__content">
                        
                        <img src="../assets/seller.png" alt="" class="services__img">
                        <h3 class="services__title">Link Your Profile</h3>
                        <p class="services__description">Link your profile by sign up on RealDApp and KYC at moderator office</p>
                    </div>

                    <div class="services__content">
                        <img src="../assets/ownershipkey.png" alt="" class="services__img">
                        <h3 class="services__title">Get NFT Ownership </h3>
                        <p class="services__description">Once Your Profile is linked with your existing properties, create NFT for that property.</p>
                    </div>

                    <div class="services__content">
                        <img src="../assets/buy.png" alt="" class="services__img"> <span style="margin:5px;"></span>
                        <img src="../assets/sell.png" alt="" class="services__img">
                        <h3 class="services__title">Buy or Sell </h3>
                        <p class="services__description">Your Real Estate NFT will list on RealDApp Marketplace</p>
                    </div>
                </div>
            </section>
        </main>
 </div>
</template>

<script>
import loadweb3 from "../utils/getWeb3";
import { abi, address } from "../utils/contractAbi";
import allApi from "../mixins/allApi";

// import Web3 from "web3"
export default {
  name:"Home",
  data() {
    return {
      selected: {
        metamask_address: "",
        name: "",
        mobile: "",
        email: "",
        adharcardNo: "",
      },
      user: {},
      accounts: [],
    };
  },
  async mounted() {
	  console.log(this.accounts)
    // await this.invokeMetamask();
    // this.checkWeb3Injection()
//     await this.gerUser();
  },
  methods: {
    async gerUser() {
	    if(this.accounts.length==0){
      const web3 = await loadweb3();
      this.accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(abi, address);
      await contract.methods.connectMetamask(this.accounts[0]).call();
	    }
      // const acc =  await res.json();
      // console.log(acc);
      // await contract.methods.createProperty(1, '5', 'abc', 'abc', 'abc', 100000, 'abc').send({from:accounts[0]});
      // // await contract.methods.sellProperty(accounts[0],'0xc47f5B4C41e6dF65B60A6d4c36Cf6e8a2310ae53',1).send({from:accounts[0]});
      // await contract.methods.buyProperty('0x17c416329270CE5B2b791F7BdbA384895dcA74Ea',1).send({from:accounts[0],value:'100000000'});
      // const bal = await contract.methods.getBalance(accounts[0]).call();
      // console.log(bal);
      //         console.log(this.accounts[0]);
      // this.selected.metamask_address=this.accounts[0]
      // console.log(this.selected.metamask_address)
      // let result = await axios.get(`http://localhost:3000/get_user/${this.accounts[0]}`);
      // console.log(result.data)
      // get_user_approved
      let url;
      url = `http://localhost:3000/get_user_approved/${this.accounts[0]}`;
      const result = await fetch(url, {
        method: "GET",
      });
      // console.log(result)
      const resp = await result.json();
      // console.log(resp)
      this.user = resp;
      console.log(this.user)
    },
    // checkWeb3Injection() {
    //   try {
    //     if (ethereum && ethereum.isMetaMask) {
    //       this.web3 = new Web3(window.ethereum);
    //     }
    //   } catch (error) {
    //     console.log(error);

    //   }
    // },
    async signUp() {
	    console.log("hi");
      const web3 = await loadweb3();
      this.accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(abi, address);
      await contract.methods.connectMetamask(this.accounts[0]).call();
      this.selected.metamask_address = this.accounts[0];
      console.log(this.selected);

      let method = "POST";
      let url = `http://localhost:3000/create_user`;
      //    if(this.isPropEditing==true){
      //      method = "PUT"
      //      url = `http://localhost:3000/property_update`;
      //    }
      // const result = await axios.post(`http://localhost:3000/property_upload`,formData,{
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      //  })
      let headers = {
        "Content-Type": "application/json",
      };
      const result = await allApi.makeCall(this.selected, {
        url,
        method,
        header: headers,
      });
      // const res= await result.json();
      const res = result;
      console.log(res);
//       await this.gerUser();
      // if(this.isPropEditing){
      //   await this.detail();
      //   this.$root.$emit("bv::toggle::collapse", "sidebar-right");
      //   return
      // }
      // }
    },
    async invokeMetamask() {
      const web3 = await loadweb3();
      if (web3 !== null) {
        const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const contract = new web3.eth.Contract(abi, address);
        const resp = await contract.methods.connectMetamask(accounts[0]).call();
        //  const resp = await contract.methods.createProperty().send({from:accounts[0]});
        console.log(resp);
        window.location.href =
              window.location.origin + "/profile";
      }
    },
  },
};
</script>

<style>
.absolute top-0 w-full h-full bg-center bg-cover{
  background-image: url(../assets/logoonly1.png);
}
</style>