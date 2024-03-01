import axios from "axios";

export async function postSignUp(values) {
  const body = values;

  return axios.post("http://localhost:8081/login", body);
}
