import * as Icons from "lucide-react";

function ProjectCard({ project }) {
    const GithubIcon = Icons.Github;
    const ExternalLinkIcon = Icons.ExternalLink;

    return (
        <div className="project-card">
            <div className="project-img-wrapper">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                    <div className="overlay-actions">
                        {project.github && (
                            <a href={project.github} className="btn-icon" target="_blank" rel="noopener noreferrer">
                                <GithubIcon size={20} />
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} className="btn-icon" target="_blank" rel="noopener noreferrer">
                                <ExternalLinkIcon size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                    {project.tech.map((t, idx) => {
                        const iconMap = {
                            "ReactJS": "Atom",
                            "React": "Atom",
                            "C#": "Code",
                            "SQL Server": "Database",
                            "JavaScript": "Globe",
                            "JS": "Globe",
                            "HTML": "Layout",
                            "CSS": "Paintbrush",
                            "API": "Server",
                            "MVC": "Layers",
                            "AJAX": "Zap"
                        };
                        const IconName = iconMap[t] || "Cpu";
                        const TechIcon = Icons[IconName] || Icons.Cpu;

                        return (
                            <span key={idx} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <TechIcon size={12} />
                                {t}
                            </span>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
