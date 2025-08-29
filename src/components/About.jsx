import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

export default function About() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 60_000);
        return () => clearInterval(id);
    }, []);

    const getGreeting = (date) => {
        const hour = date.getHours();
        if (hour >= 5 && hour < 12) return "Mayap a abak (Good morning)";
        if (hour >= 12 && hour < 17) return "Mayap a gatpanapun (Good afternoon)";
        return "Mayap a bengi (Good evening)";
    };

    const about = {
        flex: 1
    }

    return(
        <>
            <Box className="about" sx={about}>
                <Typography variant="h3">
                    Kapampangan Lexicon
                </Typography>

                <Typography variant="subtitle1">
                    {getGreeting(now)}, Kumusta na ka (How are you)? <br />
                    Welcome to the Kapampangan Resource based on entries 
                    from the Kapampangan Dictionary by Michael L. Forman
                </Typography>
            </Box>
        </>
    );
}  