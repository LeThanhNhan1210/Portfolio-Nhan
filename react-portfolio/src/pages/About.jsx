import { personalInfo } from "../data/personal";
import { education, experience } from "../data/experience";
import * as Icons from "lucide-react";

function About() {
    return (
        <div className="about-page" style={{ paddingTop: '80px' }}>
            <section className="about-hero">
                <div className="container">
                    <div className="section-header">
                        <span className="hero-tagline">About Me</span>
                        <h2>Đam mê tạo ra <span className="gradient-text">Giá trị</span></h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
                        <div className="about-image-wrapper">
                            <img src={personalInfo.avatar} alt={personalInfo.name} style={{ width: '100%', borderRadius: '2rem', boxShadow: 'var(--shadow-lg)' }} />
                            <div className="personal-details glass" style={{ marginTop: '2rem', padding: '2rem', borderRadius: '1.5rem' }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Icons.MapPin className="gradient-text" /> <span>{personalInfo.address}</span>
                                </div>
                                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Icons.Mail className="gradient-text" /> <span>{personalInfo.email}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Icons.Phone className="gradient-text" /> <span>{personalInfo.phone}</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-content">
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Tôi là {personalInfo.name}</h3>
                            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
                                {personalInfo.objective}
                                <br /><br />
                                Với niềm đam mê mãnh liệt trong việc xây dựng các giao diện người dùng tinh tế và hiệu quả, tôi không ngừng cập nhật các công nghệ mới nhất để mang lại những sản phẩm chất lượng cao. Mục tiêu của tôi là trở thành một mắt xích quan trọng trong các dự án quy mô lớn, nơi tôi có thể đóng góp khả năng chuyên môn và cùng đội ngũ tạo ra những đột phá.
                            </p>

                            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
                                <div className="stat-card glass" style={{ padding: '1.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                                    <h4 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>1+</h4>
                                    <p style={{ margin: 0, fontWeight: 600 }}>Năm kinh nghiệm</p>
                                </div>
                                <div className="stat-card glass" style={{ padding: '1.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                                    <h4 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>10+</h4>
                                    <p style={{ margin: 0, fontWeight: 600 }}>Dự án hoàn thành</p>
                                </div>
                                <div className="stat-card glass" style={{ padding: '1.5rem', borderRadius: '1rem', textAlign: 'center' }}>
                                    <h4 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>5+</h4>
                                    <p style={{ margin: 0, fontWeight: 600 }}>Công nghệ sử dụng</p>
                                </div>
                            </div>

                            <a href="/cv.pdf" download="Le-NHAN-CV.pdf" className="btn btn-primary">
                                <Icons.Download size={18} /> Tải CV của tôi
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="details-section" style={{ background: 'var(--bg-alt)' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 40px' }}>
                                <h2>Hành trình học tập</h2>
                            </div>
                            <div className="timeline-list">
                                {education.map((edu, index) => (
                                    <div key={index} className="timeline-item">
                                        <span className="timeline-period">{edu.period}</span>
                                        <h3 className="timeline-title">{edu.school}</h3>
                                        <h4 className="timeline-subtitle">{edu.degree}</h4>
                                        <ul className="timeline-details">
                                            {edu.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <div className="section-header" style={{ textAlign: 'left', margin: '0 0 40px' }}>
                                <h2>Kinh nghiệm làm việc</h2>
                            </div>
                            <div className="timeline-list">
                                {experience.map((exp, index) => (
                                    <div key={index} className="timeline-item">
                                        <span className="timeline-period">{exp.period}</span>
                                        <h3 className="timeline-title">{exp.role}</h3>
                                        <h4 className="timeline-subtitle">{exp.company}</h4>
                                        <ul className="timeline-details">
                                            {exp.description.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
