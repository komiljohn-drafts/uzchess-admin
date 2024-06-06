import { getHeaderWithToken } from "@/lib/getHeaderWithToken"
import { Response } from "@/types/common"

import { courseEndpoints } from "../endpoints"
import { request } from "../request"

export interface IActiveCourse {
  _id: string
  categories: string[]
  completed_lessons_count: number
  description: string
  duration: number
  icon: string
  is_enrolled: true
  lessons_count: number
  name: string
  short_description: string
}

export const getActiveCoursesRequest = async () => {
  try {
    const response = await request.get<Response<IActiveCourse>>(
      courseEndpoints.getList,
      {
        headers: getHeaderWithToken()
      }
    )
    return response
  } catch (error) {
    return Promise.reject(error)
  }
}
