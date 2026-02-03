import * as Icons from "lucide-react";
import { personalInfo } from "../data/personal";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: '', message: '' });

        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        if (SERVICE_ID.startsWith('YOUR_') || TEMPLATE_ID.startsWith('YOUR_') || PUBLIC_KEY.startsWith('YOUR_')) {
            setStatus({
                type: 'error',
                message: 'Vui lòng hoàn tất cấu hình SERVICE_ID, TEMPLATE_ID và PUBLIC_KEY trong code trước khi gửi.'
            });
            setIsSending(false);
            return;
        }

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                PUBLIC_KEY
            );

            setStatus({ type: 'success', message: 'Cảm ơn bạn! Tin nhắn của bạn đã được gửi thành công.' });
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus({
                type: 'error',
                message: error?.text || 'Đã có lỗi xảy ra khi kết nối tới EmailJS. Vui lòng kiểm tra lại các ID cấu hình.'
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div className="contact-page" style={{ paddingTop: '80px' }}>
            <section className="contact-hero">
                <div className="container">
                    <div className="section-header">
                        <span className="hero-tagline">Get in touch</span>
                        <h2>Hãy cùng tạo nên điều <span className="gradient-text">Tuyệt vời</span></h2>
                        <p>Tôi luôn sẵn lòng lắng nghe và thảo luận về các cơ hội hợp tác mới.</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1.5fr',
                        gap: '4rem',
                        marginTop: '4rem'
                    }}>
                        <div className="contact-info">
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '2rem' }}>Thông tin liên hệ</h3>

                            <div className="contact-methods">
                                <div className="contact-method glass" style={{ padding: '1.5rem', borderRadius: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div className="icon-wrapper" style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '0.75rem' }}>
                                        <Icons.Mail className="gradient-text" />
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Email</h4>
                                        <p style={{ margin: 0, fontWeight: 600 }}>{personalInfo.email}</p>
                                    </div>
                                </div>

                                <div className="contact-method glass" style={{ padding: '1.5rem', borderRadius: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div className="icon-wrapper" style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '0.75rem' }}>
                                        <Icons.Phone className="gradient-text" />
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Số điện thoại</h4>
                                        <p style={{ margin: 0, fontWeight: 600 }}>{personalInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="contact-method glass" style={{ padding: '1.5rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div className="icon-wrapper" style={{ background: 'var(--primary-light)', padding: '1rem', borderRadius: '0.75rem' }}>
                                        <Icons.Globe className="gradient-text" />
                                    </div>
                                    <div>
                                        <h4 style={{ margin: '0 0 0.25rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>Địa chỉ</h4>
                                        <p style={{ margin: 0, fontWeight: 600 }}>{personalInfo.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links" style={{ marginTop: '3rem', display: 'flex', gap: '1rem' }}>
                                <a href={personalInfo.github} className="btn-icon" target="_blank" rel="noopener noreferrer">
                                    <Icons.Github />
                                </a>
                                <a href={personalInfo.linkedin} className="btn-icon" target="_blank" rel="noopener noreferrer">
                                    <Icons.Linkedin />
                                </a>
                            </div>
                        </div>

                        <div className="contact-form-container glass" style={{ padding: '3rem', borderRadius: '2rem' }}>
                            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Họ tên</label>
                                        <input name="user_name" type="text" placeholder="Nguyễn Văn A" required style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'white', display: 'block' }} />
                                    </div>
                                    <div className="form-group">
                                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
                                        <input name="user_email" type="email" placeholder="example@gmail.com" required style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'white', display: 'block' }} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Tiêu đề</label>
                                    <input name="subject" type="text" placeholder="Hợp tác phát triển dự án" required style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'white' }} />
                                </div>
                                <div className="form-group">
                                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>Tin nhắn</label>
                                    <textarea name="message" rows="5" placeholder="Nội dung tin nhắn của bạn..." required style={{ width: '100%', padding: '1rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'white', resize: 'none' }}></textarea>
                                </div>

                                {status.message && (
                                    <div style={{
                                        padding: '1rem',
                                        borderRadius: '0.75rem',
                                        backgroundColor: status.type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                        color: status.type === 'success' ? '#15803d' : '#b91c1c',
                                        fontSize: '0.875rem',
                                        fontWeight: 500
                                    }}>
                                        {status.message}
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary" disabled={isSending} style={{ width: '100%', opacity: isSending ? 0.7 : 1 }}>
                                    {isSending ? 'Đang gửi...' : 'Gửi tin nhắn'}
                                    {!isSending && <Icons.Send size={18} />}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
