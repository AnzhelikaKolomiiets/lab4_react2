import React, { useState, useEffect } from 'react';

const ContactForm = ({ isDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);
        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => setIsOpen(false);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div
                className={`modal-content feedback-v3 ${isDarkMode ? 'darkmode-modal' : ''}`}
                onClick={e => e.stopPropagation()}
            >
                <span className="close-x" onClick={closeModal}>&times;</span>

                <h2 className="form-title">Зворотній зв'язок</h2>

                <form action="https://formspree.io/f/mwvrrldz" method="POST" className="form-v3-layout">
                    <div className="form-group-v3">
                        <label>Ім’я:</label>
                        <input type="text" name="name" required placeholder="Ім'я" />
                    </div>

                    <div className="form-group-v3">
                        <label>Email:</label>
                        <input type="email" name="email" required placeholder="Email" />
                    </div>

                    <div className="form-group-v3">
                        <label>Номер телефону:</label>
                        <input type="tel" name="phone" required placeholder="Номер телефону" />
                    </div>

                    <div className="form-group-v3">
                        <label>Повідомлення:</label>
                        <textarea name="message" rows="4" required placeholder="Ваш текст"></textarea>
                    </div>

                    <div className="form-buttons-v3">
                        <button type="submit" className="btn-submit-v3">Відправити</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;