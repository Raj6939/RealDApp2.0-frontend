import loadweb3 from "..getWeb3"
import {abi,address} from '..contractAbi'



export  default{ 
   async mounted(){
         this.web3 =await loadweb3();
         this.contract = new web3.eth.Contract(abi,address);
        
    },
    methods:{
   async createNFT(property,accounts) {
   const abc = await this.contract.methods.createProperty(
        property.prop_house_no,
        property.prop_area,
        property.prop_landmark,
        property.prop_city,
        property.prop_state,
        property.prop_price,
        property.prop_document,
        property.adharNo,
        property.prop_surveyNumber
        ).send({from:accounts[0]})
        return abc;
  }
}
}

  