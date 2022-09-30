import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL_2;

const headers = {
  'Content-Type': 'application/json',
};

class UserService {
  getUserService = () => {
    return axios
      .get(`${BASE_URL}/users`, headers)
      .then((response) => response)
      .catch((error) => error.response.data);
  };

  getUserServiceById = (id) => {
    return axios
      .get(`${BASE_URL}/users/${id}`, headers)
      .then((response) => response)
      .catch((error) => error.response.data);
  };

  addUserService = async (data) => {
    return axios
      .post(`${BASE_URL}/users`, data, headers)
      .then((response) => response)
      .catch((error) => error.response.data);
  };

  updateUserService = (dataToSend) => {
    const { id, data } = dataToSend;
    return axios
      .put(`${BASE_URL}/users/${id}`, data, headers)
      .then((response) => response)
      .catch((error) => error.response.data);
  };

  deleteUserService = (id) => {
    return axios
      .delete(`${BASE_URL}/users/${id}`, headers)
      .then((response) => response)
      .catch((error) => error.response.data);
  };
}

export default new UserService();
