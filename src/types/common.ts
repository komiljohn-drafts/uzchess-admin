export interface IAxiosError {
  response: {
    data: {
      error: string
      message: string[] | string
      statusCode: number
    }
  }
}

export interface Response<T> {
  data: T
}
