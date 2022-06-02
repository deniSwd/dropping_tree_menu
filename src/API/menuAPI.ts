import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:4000`
})

export const userAPI = {
  async getObject(): Promise<any> {
    return instance.get<any>(`/myTree`).then(res => res.data)
  }
}