import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
    // Встановлюємо початковий стан на основі часу або збереженого значення
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('darkmode');
        if (saved) return saved === 'active' ? 'dark' : 'light';

        const hour = new Date().getHours();
        return (hour >= 7 && hour < 21) ? 'light' : 'dark';
    });

    // Додаємо/видаляємо клас darkmode для body
    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('darkmode');
            localStorage.setItem('darkmode', 'active');
        } else {
            document.body.classList.remove('darkmode');
            localStorage.setItem('darkmode', 'inactive');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className="app-wrapper">
            {/* Кнопка зміни теми - тепер вона працює! */}
            <button id="theme-switch" onClick={toggleTheme}>
                {theme === 'light' ? '🌙 Темна тема' : '☀️ Світла тема'}
            </button>

            {/* Компонент з модалкою відгуків */}
            <Reviews />

            <div className="resume-page">
                <header className="main-header">
                    <Header />
                </header>

                <div className="resume-content">
                    <aside className="left-column">
                        <Sidebar />
                    </aside>

                    <main className="right-column">
                        <About />
                        <Experience />
                        <Education />
                    </main>
                </div>

                <footer id="site-footer">
                    <Footer />
                </footer>
            </div>

            <ContactForm />
        </div>
    );
}

export default App;