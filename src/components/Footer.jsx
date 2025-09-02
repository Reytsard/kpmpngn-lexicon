import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
    return <footer className="w-full bg-secondary">
        <NavLink to={'/words'} className="px-2 text-white rounded">Words</NavLink>
        Footer
        </footer>;
}