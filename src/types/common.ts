export interface IAxiosError {
  response: {
    data: {
      error: string
      message: string[] | string
      statusCode: number
    }
  }
}
