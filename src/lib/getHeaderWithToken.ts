import { getStorageItem } from "./storageUtils"

const token = getStorageItem("token")

export const getHeaderWithToken = () =>
  token ? { Authorization: `Bearer ${token}` } : {}
