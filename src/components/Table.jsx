import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function Table() {
  const [words, setWords] = useState([]);
  const fetchWords = async () => {
    try {
      const response = await fetch("words.csv");
      const data = await response.json();
      setWords(data);
    } catch (e) {
      console.log(e);
    }
  };
  const COLUMNS = [
    {
      fieldName: "word",
      label: "word",
      width: 50,
    },
    {
      fieldName: "definition",
      label: "definition",
      width: 300,
    },
  ];
  useEffect(() => {
    fetchWords();
  });
  return (
    <>
      <DataGrid
        columns={COLUMNS}
        rows={[]} //replace with words
      />
    </>
  );
}
