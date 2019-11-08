import axios from "axios"

export default axios.create({
  baseURL: process.env.GATSBY_CONTACT_API_URL,
  responseType: "json",
  headers: { "Access-Control-Allow-Origin": "http://localhost:8000" },
})
