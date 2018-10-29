// Imports: Dependencies
import axios from 'axios';

// Import: API Key
import eaiAPIKey from '../../config/config';

// GraphQL: Resolvers
const RESOLVERS = {
  Query: {

    // CONSUMPTION FOR ELECTRICITY GENERATION
    // Coal (Thousand Tons)
    getCoalConsumptionForElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.CONS_EG.COW-US-99.M`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },

    // Natural Gas (Thousand MCF)
    getNaturalGasConsumptionForElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.CONS_EG.NG-US-99.M`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },
    
    // Petroleum Liquids (Thousand Barrels)
    getPetroleumLiquidsConsumptionForElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.CONS_EG.PEL-US-99.M`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },

    // Petroleum Coke (Thousand Tons)
    getPetroleumCokeConsumptionForElectricity: (parent, args) => {
      return axios.get(`http://api.eia.gov/series/?api_key=${eaiAPIKey}&series_id=ELEC.CONS_EG.PC-US-99.M`)
        .then(response => response.data)
        .catch(error => console.log(error));
    },

  },
};

// Exports
export default RESOLVERS;
