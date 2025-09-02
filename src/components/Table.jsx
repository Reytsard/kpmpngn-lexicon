import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Papa from "papaparse";

export default function Table() {
  const [words, setWords] = useState([]);

const fetchWords = async () => {
  try {
    const response = await fetch("Panga Lexicon - Dictionary.csv");
    const text = await response.text();

    const { data } = Papa.parse(text, {
      header: true,
      skipEmptyLines: true,
    });

    // Add a unique id (required by MUI DataGrid)
    const dataWithIds = data.map((row, index) => ({
      ...row,
      id: index,
    }));

    setWords(dataWithIds);
  } catch (e) {
    console.error("CSV parsing error:", e);
  }
};
  const COLUMNS = [
    {
      field: "word",
      headerName: "Word",
      width: 120,
      sortable: false,
    },
    {

      field: "part_of_speech",
      headerName: "Part of Speech",
      width: 130,
      sortable: false,
    },
    {
      field: "definition",
      headerName: "Definition",
      width: 330,
      sortable: false,
    },
  ];
  useEffect(() => {
    fetchWords();
  });
  return (
    <>
      <DataGrid
      className="mx-4"
        columns={COLUMNS}
        rows={words} //replace with words
        getRowId={(word) => word.id}
        getRowHeight={() => 'auto'}
       // disableRowSelectionOnClick
        sx={{
          border: '2px solid #5fbb57ff',
          '& .MuiDataGrid-cell': {
            color: 'black',
            whiteSpace: 'normal',
            wordWrap: 'break-word',
            lineHeight: '1.4',
          
          },
          '& .MuiDataGrid-columnHeaders': {
            color: 'green',
            fontSize: '1rem',
            borderBottom: '2px solid #5fbb57ff',
          },
 
          '& .MuiDataGrid-row': {
            alignItems: 'start', // ensures top alignment for wrapped text
          },
        }}
      />
    </>
  );
}
