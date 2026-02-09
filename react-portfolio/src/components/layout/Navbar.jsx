import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { personalInfo } from "../../data/personal";

function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar glass">
            <div className="container nav-container">
                <Link to="/" className="nav-logo" onClick={handleLinkClick}>
                    <span className="gradient-text">{personalInfo.name}</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="nav-links">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Trang chủ</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>Giới thiệu</Link>
                    <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Dự án</Link>
                    <Link to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''}>Phân tích</Link>
                    <Link to="/contact" className={`btn btn-primary btn-sm ${location.pathname === '/contact' ? 'active' : ''}`}>Liên hệ</Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Navigation */}
                <div className={`mobile-nav ${isOpen ? 'active' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={handleLinkClick}>Trang chủ</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={handleLinkClick}>Giới thiệu</Link>
                    <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={handleLinkClick}>Dự án</Link>
                    <Link to="/analytics" className={location.pathname === '/analytics' ? 'active' : ''} onClick={handleLinkClick}>Phân tích</Link>
                    <Link to="/contact" className={`btn btn-primary ${location.pathname === '/contact' ? 'active' : ''}`} onClick={handleLinkClick}>Liên hệ</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

