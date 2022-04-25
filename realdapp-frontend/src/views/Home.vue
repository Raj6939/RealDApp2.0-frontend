<template>
  
   <div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="Name" required="">
					<input type="email" name="email" placeholder="Email" required="">
					<input type="text" name="phone" placeholder="Phone no" required="">
					<button class="b">Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
          <img src="../../src/assets/metamask.svg" alt="" height="50px" width="50px">
					<button class="b" @click="invokeMetamask()">Metamask Login</button>
				</form>
			</div>
    </div>
</template>

<script>
import loadweb3 from '../utils/getWeb3'
import {abi,address} from '../utils/contractAbi'
// import Web3 from "web3"
export default {
name:"Home",
data(){
  return{

  }
},
async mounted(){
// await this.invokeMetamask();
// this.checkWeb3Injection()
},
methods:{
    // checkWeb3Injection() {
    //   try {
    //     if (ethereum && ethereum.isMetaMask) {
    //       this.web3 = new Web3(window.ethereum);
    //     }
    //   } catch (error) {
    //     console.log(error);
       
    //   }
    // },
  async invokeMetamask(){
        const web3 =await loadweb3();
		if(web3!==null){
 const accounts = await web3.eth.getAccounts();
        console.log(accounts);
        const contract = new web3.eth.Contract(abi,address);
        const resp = await contract.methods.connectMetamask(accounts[0]).call();
//  const resp = await contract.methods.createProperty().send({from:accounts[0]});
console.log(resp);
		}

  
        
  }
}
}
</script>

<style>
.main{
  display: inline-block;
  margin-top: 50px;
  font-family: 'Jost', sans-serif;
	background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);
	width: 350px;
	height: 500px;
	/* background: red; */
	overflow: hidden;
	background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
	border-radius: 10px;
	box-shadow: 5px 20px 50px #000;
}
#chk{
	display: none;
}
.signup{
	position: relative;
	width:100%;
	height: 100%;
}
label{
	color: #573b8a;
	font-size: 2.3em;
	justify-content: center;
	display: flex;
	margin: 60px;
	font-weight: bold;
	cursor: pointer;
	transition: .5s ease-in-out;
}
input{
	width: 60%;
	height: 40px;
	background: #e0dede;
	justify-content: center;
	display: flex;
	margin: 20px auto;
	padding: 10px;
	border: none;
	outline: none;
	border-radius: 5px;
}
.b{
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
	transition: .2s ease-in;
	cursor: pointer;
}
.login{
	height: 460px;
	background: #eee;
	border-radius: 60% / 10%;
	transform: translateY(-180px);
	transition: .8s ease-in-out;
}
.login label{
	color: #573b8a;
	transform: scale(.6);
}

#chk:checked ~ .login{
	transform: translateY(-500px);
}
#chk:checked ~ .login label{
	transform: scale(1);	
}
#chk:checked ~ .signup label{
	transform: scale(.6);
}

</style>