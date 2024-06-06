import { useQuery } from "@tanstack/react-query"
import { getCoreRowModel, useReactTable } from "@tanstack/react-table"
import { useMemo } from "react"

import {
  getActiveCoursesRequest,
  IActiveCourse
} from "@/api/courses/getActiveCoursesRequest"
import { Table } from "@/components/table"

import { getCoursesTableColumns } from "./helper/getCoursesTableColumns"

export default function CoursesPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["getCoursesList"],
    queryFn: getActiveCoursesRequest
  })

  const columns = useMemo(() => {
    return getCoursesTableColumns(isLoading)
  }, [isLoading])

  const activeCourses = useMemo(
    () => (data?.data.data ? [data?.data.data] : []),
    [data]
  )

  const table = useReactTable<IActiveCourse>({
    data: isLoading ? Array.from({ length: 5 }) : activeCourses,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return <Table<IActiveCourse> table={table} />
}
