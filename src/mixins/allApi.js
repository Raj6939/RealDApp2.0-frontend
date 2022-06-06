const axios = require("axios");

class APICalls {
  handleResponse(response) { 

 
    if(response.message == "Network Error"){
      return new Error("Please check your connection"); 
    }
    
    if (
      response.code &&
      (response.code == "ECONNREFUSED" || response.code == "ENOTFOUND")
    ) {
      return new Error("Please check your connection");
      
    }

    if (!response) {
      return  new Error("No repsonse");
    }
    if (
      (response.status >= 300 && response.status < 400) ||
      (response.response &&
        response.response.status >= 300 &&
        response.response.status < 400)
    ) {
      return  new Error("REDIRECTING") ;
    }

    if (
      (response.status >= 400 && response.status < 500) ||
      (response.response &&
        response.response.status >= 400 &&
        response.response.status < 500)
    ) {
      
      return response.response.data || new Error("BAD REQUEST: Please check your request") 
    }

    if (
      (response.status >= 500 && response.status < 600) ||
      (response.response &&
        response.response.status >= 500 &&
        response.response.status < 600)
    ) {
      
      return response.response.data || new Error("INTERNAL SERVER ERROR: Please try agan after some time") 
    }


    return response;
  }

  makeCall(formData,{ method, url, header, isFile }) {
    console.log(formData,method,url,header,isFile);
    // if (validateParameters(method, url, body, header).err) {
    //   return validateParameters(method, url, body, header);
    // }

    let res;
    return new Promise((resolve, reject) => {
      if (method == "GET") {
        res = axios.get(url, {
          headers: header,
           responseType: isFile ? 'blob': ""
        });
      }

      if (method == "POST") {
        res = axios.post(url,formData,{
          headers: header,
        });
      }


      if (method == "PUT") {
          console.log("put")
        res = axios.put(url,formData,{
          headers: header,
        });
      }



      res
        .then((res) => {
  
          const handledRes = this.handleResponse(res);
          resolve(handledRes);
        })
        .catch((err) => {
          reject(this.handleResponse(err));
        });
    });
  }
}


export default new APICalls();