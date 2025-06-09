import { Stack, Typography } from "@mui/material";
import { Table } from "@tanstack/react-table";
import { PaginatedRegistruResult } from "../types";

interface TablePaginationProps<T> {
  data?: PaginatedRegistruResult["data"]["result"] | undefined;
  table: Table<T>;
  title: string;
}

const sizeOptions = [15, 25, 50, 100];

export const TablePagination = <T extends { id?: number }>({
  data,
  table,
  title,
}: TablePaginationProps<T>) => {
  const currPage = table.getState().pagination.pageIndex;
  const currPageSize = table.getState().pagination.pageSize;
  const lastPage = table.getPageCount();
  const nextPage = table.getCanNextPage();
  const prevPage = table.getCanPreviousPage();
  const currFirstRow = currPage * currPageSize + 1;
  const currLastRow = currFirstRow + currPageSize - 1;
  const currRows = table.getRowModel().rows.length;
  const totalRows = table.getPrePaginationRowModel().rows.length;

  return (
    <Stack direction="row" justifyContent="space-between">
      <Stack direction="row">
        <button
          className="pagination_btn"
          onClick={() => table.previousPage()}
          disabled={!prevPage}
          style={{ marginRight: "5px" }}
        >
          {"<"}
        </button>
        {currPage - 2 > 0 && (
          <button className="page_btn" onClick={() => table.setPageIndex(0)}>
            1
          </button>
        )}
        {currPage !== 0 && (
          <button
            className="page_btn"
            onClick={() => table.setPageIndex(currPage - 1)}
          >
            {currPage}
          </button>
        )}
        <button
          className="page_btn page_btn_active"
          onClick={() => table.setPageIndex(currPage)}
        >
          {currPage + 1}
        </button>
        {nextPage && (
          <button
            className="page_btn"
            onClick={() => table.setPageIndex(currPage + 1)}
          >
            {currPage + 2}
          </button>
        )}
        {currPage + 2 < lastPage && (
          <button
            className="page_btn"
            onClick={() => table.setPageIndex(lastPage - 1)}
          >
            N
          </button>
        )}
        <button
          className="pagination_btn"
          onClick={() => table.nextPage()}
          disabled={!nextPage}
        >
          {">"}
        </button>
      </Stack>

      <Stack direction="row">
        <span>
          Sari la pagina:
          <input
            type="number"
            min={1}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
            style={{ width: "50px", marginLeft: "5px" }}
          />
        </span>
      </Stack>

      <Typography>
        {title}: {currRows}/{data ? data.total : totalRows}
      </Typography>

      <Typography>Rânduri pe pagină: {currPageSize}</Typography>

      <Typography>
        {currFirstRow}-{currLastRow} din {data ? data.total : totalRows}
      </Typography>

      <label className="table_size_label">
        <select
          className="table_size_select"
          value={currPageSize}
          onChange={(e) => table.setPageSize(Number(e.target.value))}
        >
          {[...sizeOptions].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
      </label>
    </Stack>
  );
};
