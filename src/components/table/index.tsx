import { flexRender, Table as TTable } from "@tanstack/react-table"

import { TableBody } from "./table-body"
import { TableBodyCell } from "./table-body-cell"
import { TableHead } from "./table-head"
import { TableHeadCell } from "./table-head-cell"
import { TableRow } from "./table-row"

interface Props<T> {
  table: TTable<T>
}

export function Table<T>({ table }: Props<T>) {
  return (
    <table className="bg-white dark:bg-black rounded-md border-collapse shadow-table-shadow">
      <TableHead className="rounded-md">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="border-b border-gray-200 ">
            {headerGroup.headers.map((header) => (
              <TableHeadCell
                key={header.id}
                style={{ width: `${header.column.getSize()}px` }}
                className="py-3 px-4 font-medium text-gray-600 dark:text-gray-400 whitespace-nowrap text-start"
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHeadCell>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {table.getRowModel().rows.map((row, idx, arr) => (
          <TableRow
            key={row.id}
            className={arr.length - 1 !== idx ? "border-b border-gray-200" : ""}
          >
            {row.getVisibleCells().map((cell) => (
              <TableBodyCell
                style={{ width: `${cell.column.getSize()}px` }}
                className="px-4 py-2"
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableBodyCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </table>
  )
}
