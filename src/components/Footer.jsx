import { Link } from 'react-router-dom'
import "../style/Footer.css"

export default function Footer() {
    return (
        <div className="footer">
            <Link to="/contact" className="contact">Contact</Link>
        </div>
    );
};