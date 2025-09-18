import { DataGrid } from "@mui/x-data-grid";

export default function Table({ columns, rows }) {
  return (
    <>
      <DataGrid
        className="mx-4"
        columns={columns}
        rows={rows} //replace with words
        getRowId={(word) => word.id}
        getRowHeight={() => "auto"}
        initialState={{
          pagination: { paginationModel: { pageSize: 25 } },
        }}
        // disableRowSelectionOnClick
        sx={{
          border: "2px solid #5fbb57ff",
          "& .MuiDataGrid-cell": {
            color: "black",
            whiteSpace: "normal",
            wordWrap: "break-word",
            lineHeight: "1.4",
          },
          "& .MuiDataGrid-columnHeaders": {
            color: "green",
            fontSize: "1rem",
            borderBottom: "2px solid #5fbb57ff",
          },

          "& .MuiDataGrid-row": {
            alignItems: "start", // ensures top alignment for wrapped text
          },
        }}
      />
    </>
  );
}
