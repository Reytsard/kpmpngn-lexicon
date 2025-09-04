import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";

export default function Footer() {
    return <footer className="w-full bg-secondary">
        <NavLink to={'/words'} className="px-2 text-white rounded">Words</NavLink>
            <div className="footer-main">
                <div className="footer-left">
                    Copyright © 2025 Kapampangan Group
                </div>
                <div className="footer-right">
                    Saint Louis University
                </div>
            </div>

            <div className="footer-bottom">
                <Typography variant="body2">
                    Based on "Kapampangan Dictionary" by Michael L. Forman, licensed under CC BY-NC-SA 4.0. No commercial use permitted.
                </Typography>
            </div>
        </footer>;
}