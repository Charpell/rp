import axios from 'axios'

const baseUrl = 'https://rubeepay.herokuapp.com/rbq/v1'

import { getStorageData } from './AsyncStorage'

const setAuthorization =  async () => {
  // Apply authorization token to every request if logged in
  try {
    let data = await getStorageData()
    if (!data) delete axios.defaults.headers.common["access_token"];
    else axios.defaults.headers.common["access_token"] = `Bearer ${data}`;
  } catch (err) {
    return
  }
};

export default async function (url, formData) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'access_token': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDgyMTI2ZDM0MDUyMDA2ODQ0NGI0ZSIsInJvbGUiOiJzdXBlckFkbWluIiwidXNlcklkIjoiUlEyYTFlNDkxMC01MDEzLTExZWEtODczOC1lZDlhYzAyZjllMGQiLCJpYXQiOjE1ODI3NTE2MDV9.WYCzLFsBuEInttbON7idJ6z92UHGx3YEt0fgGNmaRLY'
    }
  }
  
  // await setAuthorization()
  try {
    return await axios.post(`${baseUrl}/${url}`, formData, config);
  } catch (error) {
    return error.response
  }

}

export async function getMethod(url) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'access_token': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDgyMTI2ZDM0MDUyMDA2ODQ0NGI0ZSIsInJvbGUiOiJzdXBlckFkbWluIiwidXNlcklkIjoiUlEyYTFlNDkxMC01MDEzLTExZWEtODczOC1lZDlhYzAyZjllMGQiLCJpYXQiOjE1ODI3NTE2MDV9.WYCzLFsBuEInttbON7idJ6z92UHGx3YEt0fgGNmaRLY'
    }
  }
  
  // await setAuthorization()
  try {
    return await axios.get(`${baseUrl}/${url}`, config);
  } catch (error) {
    return error.response
  }

}