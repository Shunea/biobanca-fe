import { Box, Stack } from "@mui/material";
import {
  ColumnDef,
  ColumnResizeMode,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { TablePagination } from "./TablePagination";

interface CustomTableProps<TData> {
  initialData: TData[];
  columns: ColumnDef<TData, any>[];
  open: boolean;
  options?: TableOptions<TData>;
}

const CustomTable = <TData extends object>({
  initialData,
  columns,
  open,
  options,
}: CustomTableProps<TData>) => {
  const [columnResizeMode] = useState<ColumnResizeMode>("onChange");
  const [sorting, setSorting] = useState<SortingState>([]);

  const [data, setData] = useState<TData[]>(() => initialData);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const table = useReactTable<TData>({
    data,
    columns,
    columnResizeMode,
    initialState: {
      pagination: {
        pageSize: 15,
      },
    },
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
    ...options,
  });

  return (
    <Stack direction="row">
      <Stack
        sx={{
          width: "100%",
          maxWidth: open ? "1050px" : "1250px",
          maxHeight: "900px",
        }}
      >
        <Box className="wrapper_table">
          <table
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      style={{
                        background: "#e7e7e7",
                        padding: "5px",
                        width: header.getSize(),
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            style: {
                              cursor: "pointer",
                            },
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {{
                            asc: " 🔼",
                            desc: " 🔽",
                          }[header.column.getIsSorted() as string] ?? null}
                        </div>
                      )}

                      <div
                        {...{
                          className: `resizer ${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`,
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                        }}
                      ></div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  style={{
                    borderBottom: "1px solid #656565",
                  }}
                >
                  {row.getVisibleCells().map((cell, index) => (
                    <td
                      key={cell.id}
                      className="clasificator_td"
                      style={{
                        borderLeft: index === 0 ? "1px solid #656565" : "none",
                        borderRight: "1px solid #656565",
                        width: cell.column.getSize(),
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Box>

        <Box
          sx={{
            background: "#076AC9",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height: "22px",
            mb: 2,
          }}
        />

        <TablePagination table={table} title="Clasificatoare afisate" />
      </Stack>
    </Stack>
  );
};

export default CustomTable;
