import * as Icons from "lucide-react";
import { personalInfo } from "../../data/personal";
import "../../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-brand">
                        <h3>
                            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span> {personalInfo.name.split(' ')[1]}
                        </h3>
                        <p>
                            Front-end Developer đam mê tạo ra các giải pháp web độc đáo và hiệu quả cho người dùng.
                        </p>
                    </div>

                    <div className="footer-section footer-links">
                        <h4>Khám phá</h4>
                        <ul>
                            <li><a href="/">Trang chủ</a></li>
                            <li><a href="/about">Giới thiệu</a></li>
                            <li><a href="/projects">Dự án</a></li>
                            <li><a href="/contact">Liên hệ</a></li>
                        </ul>
                    </div>

                    <div className="footer-section footer-social">
                        <h4>Kết nối</h4>
                        <div className="footer-social-icons">
                            <a href={personalInfo.github} className="btn-icon" target="_blank" rel="noopener noreferrer">
                                <Icons.Github size={20} />
                            </a>
                            <a href={personalInfo.linkedin} className="btn-icon" target="_blank" rel="noopener noreferrer">
                                <Icons.Linkedin size={20} />
                            </a>
                            <a href={`mailto:${personalInfo.email}`} className="btn-icon">
                                <Icons.Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>
                        &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React & Passion.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

