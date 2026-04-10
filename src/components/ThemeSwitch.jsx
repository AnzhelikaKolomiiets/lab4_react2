import { useEffect, useState } from "react";
function ThemeToggle() {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const hour = new Date().getHours();
        if (hour >= 7 && hour < 21) {
            setDark(false);
        } else {
            setDark(true);
        }
    }, []);
    const toggleTheme = () => {
        setDark((prev) => !prev);
    };
    const theme = dark
        ? {
            base: "#999797", dark: "#262524", light: "#787674",
        }
        : {
            base: "#f2f0f0", dark: "#595654", light: "#dedad7",
        };
    return (
        <>
            <button
                onClick={toggleTheme}
                className="fixed top-[20px] right-[20px] w-[50px] h-[50px] rounded-full flexitems-center justify-center"
                style={{ backgroundColor: theme.base, color: theme.dark }}
            >
                {dark ? " " : " "}
            </button>
            <style>
                {`body {
background-color: ${theme.base};
color: ${theme.dark};
}
`}
            </style>
        </>
    );
}
export default ThemeToggle;