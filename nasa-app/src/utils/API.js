import axios from "axios";
const BASEURL = "https://api.nasa.gov/planetary/apod?";
const APIKEY = "&apikey=Aj3mIbwhWlQ45lYfRr3ld9Ue3VEdkeiJPkgBRLBX";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
