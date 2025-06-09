import FilterDialog from "@/components/FilterDialog";
import useProba from "@/hooks/queries/useProba";
import { useFilterStore } from "@/stores/filter";
import { Box, Stack } from "@mui/material";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  PaginationState,
  SortingState,
  TableOptions,
  useReactTable,
} from "@tanstack/react-table";
import React, { useMemo, useState } from "react";
import { pacientColumns } from "../pacientColumns";
import { Registru } from "../types";
import { RegistruColumnFilters } from "./RegistruColumnFilters";
import { TablePagination } from "./TablePagination";

interface RegistruTableProps {
  options?: TableOptions<Registru>;
}

const RegistruTable: React.FC<RegistruTableProps> = ({ options }) => {
  const filter = useFilterStore((state) => state.filter);
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 15,
  });
  const [sorting, setSorting] = useState<SortingState>([]);
  const [openDialog, setOpenDialog] = useState(false);

  // const { status, data: response } = useProba(pageSize, pageIndex, filter);
  const { status, data: response } = useProba();

  const data = response?.data?.result;
  console.log(data)
  // const data = response?.data.result;

  const defaultData = useMemo(() => [], []);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable<Registru>({
    data: data?.pacients ?? defaultData,
    columns: pacientColumns,
    columnResizeMode: "onChange",
    // pageCount: data?.pageCount ?? -1,
    state: {
      pagination,
      sorting,
    },
    onPaginationChange: setPagination,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
    debugTable: true,
    ...options,
  });

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  return (
    <Stack direction="row">
      <Stack
        sx={{
          width: "100%",
          height: "900px",
        }}
      >
        <RegistruColumnFilters
          pacients={data?.pacients}
          handleClickOpen={handleClickOpen}
        />

        <div className="wrapper_table" style={{ border: "1px solid gray" }}>
          <table
            {...{
              style: {
                width: table.getCenterTotalSize(),
              },
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
                      />
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {status === "loading" ? (
                <tr>
                  <td>Se încarcă...</td>
                </tr>
              ) : (
                table.getRowModel().rows.map((row) => (
                  <tr
                    key={row.id}
                    style={{
                      borderBottom: "1px solid #656565",
                    }}
                  >
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        key={cell.id}
                        style={{
                          borderLeft:
                            index === 0 ? "1px solid #656565" : "none",
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
                ))
              )}
            </tbody>
          </table>
        </div>

        <Box
          sx={{
            background: "#076AC9",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            height: "22px",
            mb: 2,
          }}
        />

        {status === "loading" ? (
          <span style={{ width: "100px" }}>Se încarcă paginarea...</span>
        ) : (
          <TablePagination data={data} table={table} title="Pacienti afisati" />
        )}
      </Stack>

      <FilterDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Stack>
  );
};

export default RegistruTable;
