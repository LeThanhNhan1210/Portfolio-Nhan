import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Analytics() {
    const googleSheetId = "1ep5gKjX7mdKpJx8_NImflnNs39qE1lTjK_EgR3gce-0";
    const embedUrl = `https://docs.google.com/spreadsheets/d/${googleSheetId}/edit?usp=sharing`;

    return (
        <div className="analytics-page" style={{ backgroundColor: "#f9fafb" }}>
            {/* Header */}
            <div style={{ paddingTop: "2rem", paddingBottom: "1rem" }}>
                <div className="container">
                    <Link to="/" className="btn btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "2rem" }}>
                        <ArrowLeft size={18} />
                        Quay lại
                    </Link>

                    <div className="section-header animate-fade-up">
                        <span className="hero-tagline">Phân tích Dữ liệu</span>
                        <h2>Coffee Shop Sales & <span className="gradient-text">Revenue</span></h2>
                        <p>Phân tích doanh số bán hàng và doanh thu từ cửa hàng cà phê</p>
                    </div>
                </div>
            </div>

            {/* Full Dashboard */}
            <div style={{ 
                width: "100vw",
                marginLeft: "calc(-50vw + 50%)",
                paddingTop: "2rem",
                paddingBottom: "3rem",
                backgroundColor: "#ffffff"
            }}>
                <div style={{ 
                    maxWidth: "95%",
                    margin: "0 auto",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
                }}>
                    <iframe
                        title="Coffee Shop Sales Analytics Dashboard"
                        src={`https://docs.google.com/spreadsheets/d/${googleSheetId}/preview`}
                        style={{
                            width: "100%",
                            height: "90vh",
                            border: "none",
                            borderRadius: "12px"
                        }}
                        allowFullScreen
                    />
                </div>

                {/* Info */}
                <div className="container" style={{ marginTop: "2rem" }}>
                    <div style={{
                        padding: "1.5rem",
                        backgroundColor: "rgba(59, 130, 246, 0.1)",
                        borderRadius: "8px",
                        borderLeft: "4px solid #3b82f6"
                    }}>
                        <p style={{ margin: 0, color: "#1f2937" }}>
                            📊 <strong>Tip:</strong> Xem tại <a href={embedUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#3b82f6", textDecoration: "none", fontWeight: "600" }}>Google Sheets</a> để có toàn quyền truy cập, chỉnh sửa và tương tác với dữ liệu.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analytics;
