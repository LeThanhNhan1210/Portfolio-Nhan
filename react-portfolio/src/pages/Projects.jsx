import { projects } from "../data/projects";
import ProjectCard from "../components/cards/ProjectCard";

function Projects() {
    return (
        <div className="projects-page" style={{ paddingTop: '80px' }}>
            <section className="projects-hero">
                <div className="container">
                    <div className="section-header">
                        <span className="hero-tagline">My Portfolio</span>
                        <h2>Khám phá các <span className="gradient-text">Dự án</span> của tôi</h2>
                        <p>Tổng hợp các sản phẩm mà tôi đã tham gia phát triển, từ các bài tập lớn đến các dự án thực tế.</p>
                    </div>

                    <div className="projects-grid">
                        {projects.map(p => (
                            <ProjectCard key={p.id} project={p} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;
