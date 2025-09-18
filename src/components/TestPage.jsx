import React, { useEffect, useState } from "react";
import About from "./About";
import Table from "./Table";
import Header from "./Header";
import Footer from "./Footer";
import Papa from "papaparse";
import { Typography } from "@mui/material";

function TestPage() {
  const [words, setWords] = useState([]);
  const [phrases, setPhrases] = useState([]);
  const [affixes, setAffixes] = useState([]);

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
  const fetchPhrases = async () => {
    try {
      const response = await fetch("Panga Lexicon - phrase.csv");
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

      setPhrases(dataWithIds);
    } catch (e) {
      console.error("CSV parsing error:", e);
    }
  };
  const fetchAffix = async () => {
    try {
      const response = await fetch("Panga Lexicon - Affixation.csv");
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

      setAffixes(dataWithIds);
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
  const phraseColumns = [
    {
      field: "phrase",
      headerName: "phrase",
      width: 120,
      sortable: false,
    },
    {
      field: "meaning",
      headerName: "meaning of Speech",
      width: 130,
      sortable: false,
    },
    {
      field: "tag",
      headerName: "tag",
      width: 330,
      sortable: false,
    },
    {
      field: "english",
      headerName: "english",
      width: 330,
      sortable: false,
    },
    {
      field: "filipino",
      headerName: "filipino",
      width: 330,
      sortable: false,
    },
    {
      field: "context",
      headerName: "context",
      width: 330,
      sortable: false,
    },
    {
      field:
        "Actual words that kapampangan would say [Consulted kapampangan speaker]",
      headerName:
        "Actual words that kapampangan would say [Consulted kapampangan speaker]",
      sortable: false,
    },
  ];
  const affixesColumns = [
    {
      field: "Affix",
      headerName: "Affix",
      flex: 1,
      sortable: false,
    },
    {
      field: "Type",
      headerName: "Type",
      flex: 1,
      sortable: false,
    },
  ];

  useEffect(() => {
    fetchWords();
    fetchPhrases();
    fetchAffix();
  });
  return (
    <>
      <div>
        <About />
        <Table columns={COLUMNS} rows={words} />
        <Typography variant="h3" className="ps-3 pt-5">
          Phrases
        </Typography>
        <Table columns={phraseColumns} rows={phrases} />
        <Typography variant="h3" className="ps-3 pt-5">
          Affixation
        </Typography>
        <Table columns={affixesColumns} rows={affixes} />
      </div>
    </>
  );
}

export default TestPage;
