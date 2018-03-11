const axios = require('axios');
// We are going to put all of our API calls in one place so we can
// handle serialization here if needed



class API{

  constructor(sessionKey, particpantID) {
    // Model
    this.models = {
        "Resource": function(){console.log("Serialization Option")},
        "Event": function(){console.log("Serialization Option")},
        "Action": function(){console.log("Serialization Option")},
    }

    this.API_URL = "http://127.0.0.1:8000/api/"
    this.res;
    this.header = {'Api-Key': sessionKey, 'particpantID': particpantID};

    for(var model in this.models){
      // Create Get List method
      this["get" + model + "s"] = () => {
        return(axios.get(this.API_URL + model.toLowerCase() + 's/').then(res => { return(res.data) }))
      }
      // Create Get method
      this["get" + model] = (id) => {
        return(axios.get(this.API_URL + model.toLowerCase() +'/' + id + '/').then(res => { return(res.data) }))
      }
      // Create Delete method
      this["delete" + model] = (id) => {
        return(axios.delete(this.API_URL + model.toLowerCase() + '/' + id + '/').then(res => { return(res.data) }))
      }
      // Create "Create" method
      this["create" + model] = (payload) => {
        return(axios.post(this.API_URL + model.toLowerCase() +'/', payload).then(res => { return(res.data) }))
      }
      // Create Update method
      this["update" + model] = (id, payload) => {
        return(axios.post(this.API_URL + model.toLowerCase() +'/' + id + '/', payload).then(res => { return(res.data) }))
      }
    }
  }
}
module.exports = API;
