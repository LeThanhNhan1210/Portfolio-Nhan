import * as Icons from "lucide-react";
import { personalInfo } from "../../data/personal";

function Footer() {
    return (
        <footer style={{ padding: '80px 0 40px', background: 'var(--bg-alt)', borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
                    <div className="footer-brand">
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
                            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span> {personalInfo.name.split(' ')[1]}
                        </h3>
                        <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '300px' }}>
                            Front-end Developer đam mê tạo ra các giải pháp web độc đáo và hiệu quả cho người dùng.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Khám phá</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><a href="/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Trang chủ</a></li>
                            <li><a href="/about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Giới thiệu</a></li>
                            <li><a href="/projects" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Dự án</a></li>
                            <li><a href="/contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Liên hệ</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Kết nối</h4>
                        <div style={{ display: 'flex', gap: '1rem' }}>
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

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                        &copy; {new Date().getFullYear()} {personalInfo.name}. Built with React & Passion.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

