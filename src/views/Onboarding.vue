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
import toast from "../mixins/toast"
import SimpleVueValidation from "simple-vue-validator";
import {validText,isNum} from "../mixins/validation"
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
        signUpsignature:""
      },
      user: {},
      accounts: [],
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
      let url;
      url = `${this.$config.BASE_URL}get_user_approved/${this.accounts[0]}`;
      const result = await fetch(url, {
        method: "GET",
      });
      const resp = await result.json();
      this.user = resp;
      console.log(this.user)
    },
    async signUp() {
      if(this.everythingIsFilled() !== true){
        return this.fetched(this.everythingIsFilled(),'error')
      }
      if(web3 == null){
        return this.fetched("Install metamask wallet",'error')
      }
      const web3 = await loadweb3();
      this.accounts = await web3.eth.getAccounts();
      this.selected.metamask_address = this.accounts[0];
      const message = this.selected.adharcardNo;
      console.log(message)
      this.selected.signUpsignature = await web3.eth.personal.sign(message,this.selected.metamask_address)
      console.log(this.selected.signUpsignature)


      
      let method = "POST";
      let url = `${this.$config.BASE_URL}create_user`;
      let headers = {
        "Content-Type": "application/json",
      };
      const result = await allApi.makeCall(this.selected, {
        url,
        method,
        header: headers,
      });
      const res = result;
      console.log(res);
      localStorage.setItem("user", JSON.stringify(res.data));
      window.location.href =
              window.location.origin + "/home";
    
    },
    everythingIsFilled(){
      if(!this.selected.name || !this.selected.email || !this.selected.mobile || !this.selected.adharcardNo){
        return "Please Fill all the Fields"
      }
      if(!validText(this.selected.name)){
        return "Please enter valid name"
      }
      if(!this.isEmail(this.selected.email)){
       
        return "Please enter valid email address"
      }
      if(this.selected.mobile.length>10 || this.selected.mobile.length<10){
        
        return "Mobile Number should be 10 digit"
      }
      if(!isNum(this.selected.adharcardNo)||this.selected.adharcardNo.length>12 || this.selected.adharcardNo.length<12){
     
        return "Adhar number should be 12 digit";
      } 
      return true
    },
    isEmail(email){
      const Validator = SimpleVueValidation.Validator;
      if(Validator.value(email).required().email()._messages[0]===undefined){
        return true;
      }else{
        return false
      }
    },
    async invokeMetamask() {
      const web3 = await loadweb3();
      if(web3 == null){
        return this.fetched("Install metamask wallet",'error')
      }
      if(!isNum(this.login.adharcardNo) ||this.login.adharcardNo.length<12 ||this.login.adharcardNo.length>12){
        return this.fetched(`Please Enter Valid Adhar Number`,'error')
      }
      this.accounts = await web3.eth.getAccounts();
      this.login.metamask_address = this.accounts[0];
      
      // signing the message 
      const message = this.login.adharcardNo;
      console.log(message)
      this.signature = await web3.eth.personal.sign(message,this.login.metamask_address)
      this.signedData.signature_data= this.signature;
      this.signedData.msg = message;
      console.log(this.signedData);
      let method = "POST";
      let url = `${this.$config.BASE_URL}sign_in`;
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
      console.log(res.data)
      if(res.data != false){
        this.toast("signed in successfully","success")
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.href =
        window.location.origin + "/home";
      }
      else{
        this.login.adharcardNo = ''
        console.log(res);
        this.toast("Sign in failed","error")

      }
    },
  },
  mixins:[toast],
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
