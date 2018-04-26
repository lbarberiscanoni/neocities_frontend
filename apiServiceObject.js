const axios = require('axios');
// We are going to put all of our API calls in one place so we can
// handle serialization here if needed

class API{

  constructor(particpantID) {
    // Model
    this.models = {
        "Resource": function(){console.log("Serialization Option")},
        "Event": function(){console.log("Serialization Option")},
        "Action": function(){console.log("Serialization Option")},
        "Session": function(){console.log("Serialization Option")},
        "Scenario": function(){console.log("Serialization Option")},
        "Participant": function(){console.log("Serialization Option")}
    }

    this.API_URL = "http://127.0.0.1:8000/api/"
    axios.get(this.API_URL + "initparticipant/" + particpantID + "/").then(initial => {
      this.participant = initial.data["participant"]
      this.header = {'Api-Key': initial.data["sessionToken"], 'particpantID': particpantID}
      this.dynamicData = new WebSocket('ws://' + "127.0.0.1:8000" + '/ws/api/dynamic_data/' + initial.data["sessionToken"] + '/')
      this.resource_event_states = initial.data["ResourceEventStates"]
      //console.log(initial)
    });

    Object.keys(this.models).map((model) => {
      // Create Get List method
      this["get" + model + "s"] = () => {
        return(axios.get(this.API_URL + model.toLowerCase() + '/').then(res => { return(res.data) }))
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
    });
  };
}

module.exports = API;
