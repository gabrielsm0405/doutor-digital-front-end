import axios from "axios";

const session = axios.create({
  //baseURL: "http://localhost:8000/",
  baseURL: "http://ec2-3-140-18-246.us-east-2.compute.amazonaws.com/",
  headers: {
    //Authorization: "Api-Key b8TnfSIq.uq8vcQqbCEERu263q6HNt8tdeyBeFOvs",
    //Authorization: "Api-Key Tq3LIX4L.7IIqbfnbq7gcAhR8jD8etBbmdkUbCpTr",
    Authorization: "Api-Key L5O5vCrq.goUtmiHaHQQcYo3HZFMRtSRpdtNLkiiz",
  },
});

export default session;
