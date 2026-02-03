function SectionTitle({ tagline, title, description }) {
    return (
        <div className="section-header animate-fade-up">
            <span className="hero-tagline">{tagline}</span>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

export default SectionTitle;
