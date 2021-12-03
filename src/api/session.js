import axios from "axios";

const session = axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    Authorization: "Api-Key b8TnfSIq.uq8vcQqbCEERu263q6HNt8tdeyBeFOvs",
  },
});

export default session;
