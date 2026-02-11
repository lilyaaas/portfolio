import { useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ theme, onComplete }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 1500);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="loader-container" style={{backgroundColor: theme === 'dark' ? '#0a0a0a' : '#f8fafc' }}>
            <div className="modern-spinner">
                <div className="spinner-core"></div>
            </div>
        </div>
    );
};

export default Preloader;