import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [systemInfo, setSystemInfo] = useState({
        os: '',
        browser: '',
        language: ''
    });

    useEffect(() => {
        const systemData = {
            os: navigator.platform,
            browser: navigator.userAgent,
            language: navigator.language || navigator.userLanguage
        };
        localStorage.setItem('userBrowserInfo', JSON.stringify(systemData));

        setSystemInfo(systemData);
    }, []);

    const footerStyle = {
        marginTop: "-110px", 
        padding: "20px 0",
        borderTop: "1px solid rgba(204, 204, 204, 0.5)",
        textAlign: "center",
        clear: "both",
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        fontFamily: "serif",
        width: "100%",
        position: "relative",
        zIndex: 10
    };

    return (
        <footer style={footerStyle}>
            <p style={{ margin: 0, paddingBottom: "5px" }}>
                © 2026 Anzhelika Kolomiiets
            </p>
            <p style={{ margin: 0, fontSize: "12px", color: "#555" }}>
                ОС: {systemInfo.os}, {systemInfo.browser}, {systemInfo.language}
            </p>
        </footer>
    );
};

export default Footer;