import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Table() {
  const [words, setWords] = useState([
    { word: "keni", definition: "come here", tag: "V" },
  ]);
  const fetchWords = async () => {
    try {
      //   const response = await fetch("words.csv");
      //   const data = await response.text();
      //   console.log("data");
      //   console.log(data);
      //   console.log(data.length);
      //     setWords(data);
    } catch (e) {
      console.log(e);
    }
  };
  const COLUMNS = [
    {
      fieldName: "word",
      label: "word",
      field: "word",
      width: 100,
    },
    {
      fieldName: "definition",
      label: "definition",
      field: "definition",
      width: 300,
      sortable: false,
    },
    {
      fieldName: "tag",
      label: "tag",
      field: "tag",
      width: 50,
      sortable: false,
    },
  ];
  useEffect(() => {
    fetchWords();
  });
  return (
    <>
      <DataGrid
        columns={COLUMNS}
        rows={words} //replace with words
        getRowId={(word) => word.word}
      />
    </>
  );
}
