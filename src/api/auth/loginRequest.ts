import { authEndpoints } from "../endpoints"
import { request } from "../request"

interface Props {
  email: string
  password: string
}

export const loginRequest = (body: Props) =>
  request.post(authEndpoints.login, body)
