import axios from "axios";

export async function getCaurosel() {
  return await axios.get("https://run.mocky.io/v3/e639e58f-77c7-4800-bbcf-2d2b95a7feb7").then((reponse) => {
    return reponse.data;
  });
}
export async function getAllProducts() {
  return await axios
    .get("https://run.mocky.io/v3/9e2feeda-dc32-431b-ad72-ea9228ee431d")
    .then((reponse) => {
      return reponse.data;
    });
}
