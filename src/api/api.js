import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 */

class BackendApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const headers = { Authorization: `Bearer ${BackendApi.token}` };
    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};
    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      // console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Category API routes

  static async getOptions(searchData) {
    const { type, location, distance, username } = searchData;
    let res = await this.request("search", {
      type,
      location,
      distance,
      username,
    });
    return res;
  }

  static async getDetails(id) {
    let res = await this.request(`places/${id}`);
    return res;
  }

  // User API routes

  static async LoginUser(credentials) {
    let res = await this.request("auth/token", { credentials }, "post");
    return res.token;
  }

  static async RegisterUser(credentials) {
    let res = await this.request("auth/register", { credentials }, "post");
    return res.token;
  }

  static async GetUser(username) {
    console.log(username)
    let res = await this.request(`user/${username}`);
    return res.user;
  }

  static async AddSelection(username, placeId, placeName) {
    let res = await this.request(
      `user/${username}/place`,
      { placeId, placeName },
      "post"
    );
    return res.user;
  }

  static async getSelections(username) {
    let res = await this.request(`user/${username}/place`);
    return res.user;
  }
}

export default BackendApi;
