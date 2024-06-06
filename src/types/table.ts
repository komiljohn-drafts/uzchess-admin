import { Row, Table } from "@tanstack/react-table"

export interface TrProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  withBorder?: boolean
}
export interface TableBodyProps<T> {
  table: Table<T>
  stickLast?: boolean
  borderOnLast?: boolean
  rowProps?: TrProps
}

export interface TableHeaderProps<T> {
  table: Table<T>
  stickLast?: boolean
}

export interface TableRowProps<T> {
  row: Row<T>
  stickLast?: boolean
  isLoading?: boolean
}
