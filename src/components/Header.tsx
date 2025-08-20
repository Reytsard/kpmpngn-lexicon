"use client";
import React, { useEffect } from "react";

export default function Header() {
  return (
    <header className="flex align-center place-content-between px-2">
      <a href="/">Logo</a>
      <div className="flex flex-row gap-2">
        <a href="words" className=" ">
          Words
        </a>
        <a href="structure">Structure</a>
      </div>
    </header>
  );
}
