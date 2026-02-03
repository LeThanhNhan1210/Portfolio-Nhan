import { Link, useLocation } from "react-router-dom";
import { personalInfo } from "../../data/personal";

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar glass">
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    <span className="gradient-text">{personalInfo.name}</span>
                </Link>

                <div className="nav-links">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Trang chủ</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Giới thiệu</Link>
                    <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Dự án</Link>
                    <Link to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>Phân tích</Link>
                    <Link to="/contact" className={`btn btn-primary btn-sm ${location.pathname === '/contact' ? 'active' : ''}`}>Liên hệ</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

