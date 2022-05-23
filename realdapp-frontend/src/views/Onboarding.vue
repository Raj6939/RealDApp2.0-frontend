<template>
  <div class="main">
    <input type="checkbox" id="chk" aria-hidden="true" />
    <div class="signup">
      <form onsubmit="event.preventDefault">
        <label for="chk" aria-hidden="true">Sign up</label>
        <input
          type="text"
          name="txt"
          placeholder="Name"
          v-model="selected.name"
          required=""
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          v-model="selected.email"
          required=""
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone number"
          v-model="selected.mobile"
          required=""
        />
        <input
          type="text"
          name="adhar"
          placeholder="Adhar number"
          v-model="selected.adharcardNo"
          required=""
        />
        <button class="b" @click.prevent="signUp">Sign up</button>
      </form>
    </div>
    <div class="login">
      <form>
        <label for="chk" aria-hidden="true">Login</label>
        <input
          type="text"
          name="adhar"
          placeholder="Adhar number"
          v-model="login.adharcardNo"
          required=""
        />
        <button class="b" @click.prevent="invokeMetamask()">Metamask Login</button>
        <img
          src="../../src/assets/metamask.svg"
          alt=""
          height="50px"
          width="50px"
        />
      </form>
    </div>
  </div>
</template>

<script>
import loadweb3 from "../utils/getWeb3";
import { abi, address } from "../utils/contractAbi";
import allApi from "../mixins/allApi";
// import web3 from "web3"
export default {
  name: "Onboarding",
  data() {
    return {
      login:{
      adharcardNo:'',
      metamask_address:'',
      },
      selected: {
        metamask_address: "",
        name: "",
        mobile: "",
        email: "",
        adharcardNo: "",
      },
      user: {},
      accounts: [],
      sign_message:'',
      signature:'',
      signedData:{
        signature_data:'',
        msg:''
      }
    };
  },
  async mounted() {
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
//     async messageSign(){
//       const message = "You are signing in RealDApp"
//       this.sign_message =  message
//       this.signature = await this.web3.eth.personal.sign(this.message,this.selected.metamask_address)


// // recover the signing account address using original message and signed message
//      const verifySign = await this.web3.eth.personal.ecRecover(this.sign_message,this.signature)
//      console.log(verifySign);
//     },
    async signUp() {
	    console.log("hi");
      const web3 = await loadweb3();
      this.accounts = await web3.eth.getAccounts();
      // const contract = new web3.eth.Contract(abi, address);
      // await contract.methods.connectMetamask(this.accounts[0]).call();
      this.selected.metamask_address = this.accounts[0];
      console.log(this.selected);

      // signing the message 
      const message = this.selected.adharcardNo
      this.sign_message =  message
      this.signature = await web3.eth.personal.sign(message,this.selected.metamask_address)

      // recover the signing account address using original message and signed message
     const verifySign = await web3.eth.personal.ecRecover(this.sign_message,this.signature)
     console.log(verifySign);



      localStorage.setItem("user", JSON.stringify(this.selected));
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
      window.location.href =
              window.location.origin + "/home";
     
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
      this.accounts = await web3.eth.getAccounts();
      // const contract = new web3.eth.Contract(abi, address);
      // await contract.methods.connectMetamask(this.accounts[0]).call();
      this.login.metamask_address = this.accounts[0];

      // signing the message 
      const message = this.login.adharcardNo;
      this.sign_message =  message
      console.log(message)
      this.signature = await web3.eth.personal.sign(message,this.login.metamask_address)
      this.signedData.signature_data= this.signature;
      this.signedData.msg = message;
      console.log(this.signedData);
      let method = "POST";
      let url = `http://localhost:3000/sign_in`;
      let headers = {
        "Content-Type": "application/json",
      };
      const result = await allApi.makeCall(this.signedData, {
        url,
        method,
        header: headers,
      });
      // const res= await result.json();
      const res = result;
      if(res.data && res.status == 200){
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href =
        window.location.origin + "/home";
      }
        //  const resp = await contract.methods.createProperty().send({from:accounts[0]});

        // window.location.href =
        //       window.location.origin + "/home";
      
    },
  },
};
</script>

<style>
.main {
  display: inline-block;
  margin-top: 50px;
  font-family: "Jost", sans-serif;
  background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
  width: 350px;
  height: 500px;
  /* background: red; */
  overflow: hidden;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38")
    no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
}
#chk {
  display: none;
}
.signup {
  position: relative;
  width: 100%;
  height: 100%;
}
label {
  color: #573b8a;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
input {
  width: 60%;
  height: 40px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 10px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
}
.b {
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #573b8a;
  /* background: teal; */
  font-size: 1em;
  font-weight: bold;
  margin-top: 20px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;
}
.login {
  height: 460px;
  background: #eee;
  border-radius: 60% / 10%;
  transform: translateY(-180px);
  transition: 0.8s ease-in-out;
}
.login label {
  color: #573b8a;
  transform: scale(0.6);
}

#chk:checked ~ .login {
  transform: translateY(-500px);
}
#chk:checked ~ .login label {
  transform: scale(1);
}
#chk:checked ~ .signup label {
  transform: scale(0.6);
}
</style>
