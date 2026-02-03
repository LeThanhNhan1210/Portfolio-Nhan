import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { personalInfo } from "../data/personal";
import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { education, experience } from "../data/experience";
import ProjectCard from "../components/cards/ProjectCard";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content animate-fade-up">
                        <span className="hero-tagline">Sẵn sàng sáng tạo</span>
                        <h1>
                            Xây dựng <span className="gradient-text">trải nghiệm</span> số hiện đại
                        </h1>
                        <p className="hero-description">
                            {personalInfo.objective}
                        </p>
                        <div className="hero-actions">
                            <Link to="/projects" className="btn btn-primary">
                                Xem dự án <Icons.ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline">Liên hệ ngay</Link>
                        </div>
                    </div>
                    <div className="hero-image-container animate-fade-up" style={{ animationDelay: '0.2s' }}>
                        <img
                            src={personalInfo.avatar}
                            alt={personalInfo.name}
                            className="hero-avatar animate-float"
                        />
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="skills-section">
                <div className="container">
                    <div className="section-header animate-fade-up">
                        <span className="hero-tagline">Kỹ năng & Chuyên môn</span>
                        <h2>Công nghệ tôi <span className="gradient-text">tin dùng</span></h2>
                        <p>Những công cụ và kỹ năng tôi đã tích lũy và sử dụng thành thạo trong quá trình phát triển dự án thực tế.</p>
                    </div>
                    <div className="skills-grid">
                        {skills.map((skill, index) => {
                            const IconComponent = Icons[skill.icon] || Icons.Code;
                            return (
                                <div key={index} className="skill-card animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <IconComponent className="skill-icon" />
                                    <span className="skill-name">{skill.name}</span>
                                    <div className="skill-desc">{skill.desc}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header animate-fade-up">
                        <span className="hero-tagline">Sản phẩm hoàn thiện</span>
                        <h2>Dự án <span className="gradient-text">tiêu biểu</span></h2>
                        <p>Một số giải pháp tiêu biểu mà tôi đã tham gia phát triển, chú trọng vào hiệu năng và trải nghiệm người dùng.</p>
                    </div>
                    <div className="projects-grid">
                        {projects.slice(0, 3).map((project, index) => (
                            <div key={project.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }}>
                                <ProjectCard project={project} />
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '4rem' }} className="animate-fade-up">
                        <Link to="/projects" className="btn btn-outline">
                            Xem tất cả dự án <Icons.ChevronRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Education & Experience */}
            <section className="timeline-section">
                <div className="container">
                    <div className="timeline-grid">
                        <div className="education animate-fade-up">
                            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 30px' }}>
                                <span className="hero-tagline">Học vấn</span>
                                <h2>Con đường <span className="gradient-text">tri thức</span></h2>
                            </div>
                            <div className="timeline-list">
                                {education.map((item, index) => (
                                    <div key={index} className="timeline-item">
                                        <span className="timeline-period">{item.period}</span>
                                        <h3 className="timeline-title">{item.school}</h3>
                                        <p className="timeline-subtitle">{item.degree}</p>
                                        <ul className="timeline-details">
                                            {item.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="experience animate-fade-up" style={{ animationDelay: '0.2s' }}>
                            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 30px' }}>
                                <span className="hero-tagline">Kinh nghiệm</span>
                                <h2>Hành trình <span className="gradient-text">nghề nghiệp</span></h2>
                            </div>
                            <div className="timeline-list">
                                {experience.map((item, index) => (
                                    <div key={index} className="timeline-item">
                                        <span className="timeline-period">{item.period}</span>
                                        <h3 className="timeline-title">{item.role}</h3>
                                        <p className="timeline-subtitle">{item.company}</p>
                                        <ul className="timeline-details">
                                            {item.description.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-card animate-fade-up">
                        <h2>Bắt đầu <span style={{ color: 'var(--accent)' }}>dự án</span> của bạn?</h2>
                        <p>
                            Tôi luôn sẵn sàng thảo luận về những ý tưởng mới và cơ hội hợp tác.
                            Hãy kết nối để cùng nhau tạo nên những điều tuyệt vời.
                        </p>
                        <Link to="/contact" className="btn btn-primary" style={{ background: '#ffffff', color: '#0f172a', textShadow: 'none' }}>
                            Gửi tin nhắn ngay <Icons.Send size={20} />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;

