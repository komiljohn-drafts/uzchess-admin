import { IAxiosError } from "@/types/common"

export const formatErrorMsgs = (error: IAxiosError) => {
  const message = error.response.data?.message
  return Array.isArray(message) ? message.join(", ") : message
}
