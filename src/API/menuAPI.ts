import axios from "axios";

const instance = axios.create({
  baseURL: `http://localhost:4000`
})

export type TreeType = {
  [key: string]: TreeType
}

export const userAPI = {
  async getObject(): Promise<TreeType> {
    return instance.get<TreeType>(`/myTree`).then(res => res.data)
  }
}