import React, { useState } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/posts/6/comments';

const Reviews = ({ isDarkMode }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadComments = async () => {
        if (comments.length > 0) return;
        setIsLoading(true);
        try {
            const response = await fetch(URL);
            const data = await response.json();
            setComments(data);
        } catch (err) {
            console.error("Error loading reviews");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button id="openModalBtn" onClick={() => { setIsModalOpen(true); loadComments(); }}>
                Переглянути відгуки
            </button>

            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-x" onClick={() => setIsModalOpen(false)}>&times;</button>

                        <h2>Відгуки попередніх роботодавців</h2>

                        {isLoading ? <p>Завантаження...</p> : (
                            <div className="feedback-list">
                                {comments.map((comment) => (
                                    <div key={comment.id} className="feedback-item">
                                        <strong className="feedback-title">{comment.name}</strong>
                                        <span className="feedback-author">({comment.email})</span>
                                        <p className="feedback-text">{comment.body}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Reviews;