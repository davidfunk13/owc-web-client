import { DataGrid } from "@mui/x-data-grid";
import { FC } from "react";

interface IListTable {
    data: any[]
    rowCount: number
    isLoading: boolean
    page: number
    pageSize: number
    columns: any[]
}

const ListTable: FC<IListTable> = ({ data, rowCount, isLoading, page, pageSize, columns }) => {

    function handlePageChange(newPage: number) {
        console.log("change the page", newPage);
    }
    function handlePageSizeChange(newPageSize: number) {
        console.log("change the page size", newPageSize);
    }

    return (
        <DataGrid
            rows={data}
            rowCount={rowCount}
            loading={isLoading}
            rowsPerPageOptions={[5]}
            pagination
            page={page}
            pageSize={pageSize}
            paginationMode={"server"}
            onPageChange={(newPage) => handlePageChange(newPage)}
            onPageSizeChange={(newPageSize) => handlePageSizeChange(newPageSize)}
            columnBuffer={columns.length}
            columns={columns}
        />
    );
};

export default ListTable;