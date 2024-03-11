import * as React from "react"

// complete the import here
// replace here because we have an issue with types here
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  SortingState,
  getPaginationRowModel,
} from "@tanstack/react-table"

import "../styles/usersTable.css"

import mockData from "./data.json"
import { FaChevronLeft } from "react-icons/fa"
import { FaChevronRight } from "react-icons/fa6"

// interface
type Person = {
  id: number
  name: string
  email: string
  phone: string
}

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor("id", {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor("name", {
    cell: info => info.getValue(),
  }),
  columnHelper.accessor(row => row.email, {
    id: "email",
    cell: info => <i>{info.getValue()}</i>,
    header: () => <span>Email</span>,
  }),
  columnHelper.accessor("phone", {
    header: () => "Phone",
    cell: info => info.renderValue(),
  }),
]

export default function UsersTable() {
  const [data] = React.useState(() => [...mockData])
  const [sorting, setSorting] = React.useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageSize: 8,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (
    <>
      <table className="table-fixed w-full">
        <thead className="border-b-2">
          {table.getHeaderGroups().map(headerGroup => (
            <tr
              key={headerGroup.id}
              className="border-b text-gray-800 uppercase"
            >
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  className="px-4 pr-2 py-4 font-medium text-left"
                >
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none flex min-w-[36px]"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {{
                        asc: <span className="pl-2">↑</span>,
                        desc: <span className="pl-2">↓</span>,
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}

          {/**
         * <tr className="">
          <th>Song</th>
          <th>Artist</th>
          <th>Year</th>
        </tr>
         * 
         */}
        </thead>

        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}

          {/**
         * <tr className="">
          <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
          <td>Malcolm Lockyer</td>
          <td>1961</td>
        </tr>
        <tr>
          <td>Witchy Woman</td>
          <td>The Eagles</td>
          <td>1972</td>
        </tr>
        <tr>
          <td>Shining Star</td>
          <td>Earth, Wind, and Fire</td>
          <td>1975</td>
        </tr>
         * 
         * 
         */}
        </tbody>
      </table>
      {/** pagination */}
      <div className="flex justify-between items-center p-4">
        <div>
          <span className="">{data.length} results</span>
        </div>
        <div className=" flex justify-center items-center">
          <button
            className=""
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <FaChevronLeft className="text-[0.8rem] cursor-pointer" />
          </button>
          <div className="mx-4 text-[0.9rem]">
            <input
              type="text"
              className="main-bg outline-none border-0 rounded w-[2rem] h-[2rem] pl-[16%] mr-[0.5rem] placeholder:text-black"
              placeholder={table.getState().pagination.pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }}
            />
            <span className="">of {table.getPageCount()}</span>
          </div>
          <button
            className=""
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <FaChevronRight className="text-[0.8rem] cursor-pointer" />
          </button>
        </div>
      </div>
    </>
  )
}
