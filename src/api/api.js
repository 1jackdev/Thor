import axios from "axios";
import { Redirect } from "react-router";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 */

class BackendApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      return Redirect("/");
    }
  }

  // Category API routes

  static async getOptions(searchData) {
    const { type, location, distance } = searchData;
    let res = await this.request("search", { type, location, distance });
    return res;
  }

  static async getDetails(id) {
    let res = await this.request(`places/${id}`);
    return res;
  }
}

export default BackendApi;
