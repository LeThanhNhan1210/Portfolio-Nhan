import * as Icons from "lucide-react";
import { personalInfo } from "../data/personal";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus({ type: '', message: '' });

        const SERVICE_ID = 'service_km0xqfb';
        const TEMPLATE_ID_ADMIN = 'template_wvkt8dd';
        const TEMPLATE_ID_AUTOREPLY = 'template_2aqfioa';
        const PUBLIC_KEY = 'AavL0EmPFUV1sdxMc';

        if (SERVICE_ID.startsWith('YOUR_') || TEMPLATE_ID_ADMIN.startsWith('YOUR_') || PUBLIC_KEY.startsWith('YOUR_')) {
            setStatus({
                type: 'error',
                message: 'Vui lòng hoàn tất cấu hình SERVICE_ID, TEMPLATE_ID và PUBLIC_KEY trong code trước khi gửi.'
            });
            setIsSending(false);
            return;
        }

        const formData = new FormData(formRef.current);
        const templateParams = {
            // Admin template uses these exact names
            name: formData.get('user_name'),
            email: formData.get('user_email'),
            message: formData.get('message'),
            // Standard params for other logic/templates
            user_name: formData.get('user_name'),
            user_email: formData.get('user_email'),
            subject: formData.get('subject'),
            to_email: formData.get('user_email'), // Fallback for auto-reply
            reply_to: formData.get('user_email'), // Standard for reply-to
        };

        try {
            await Promise.all([
                emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID_ADMIN,
                    templateParams,
                    PUBLIC_KEY
                ),
                emailjs.send(
                    SERVICE_ID,
                    TEMPLATE_ID_AUTOREPLY,
                    templateParams,
                    PUBLIC_KEY
                )
            ]);

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
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <div className="section-header">
                        <span className="hero-tagline">Get in touch</span>
                        <h2>Hãy cùng tạo nên điều <span className="gradient-text">Tuyệt vời</span></h2>
                        <p>Tôi luôn sẵn lòng lắng nghe và thảo luận về các cơ hội hợp tác mới.</p>
                    </div>

                    <div className="contact-container">
                        <div className="contact-info">
                            <h3>Thông tin liên hệ</h3>

                            <div className="contact-methods">
                                <div className="contact-method glass">
                                    <div className="contact-icon-wrapper">
                                        <Icons.Mail className="gradient-text" />
                                    </div>
                                    <div className="contact-details">
                                        <h4>Email</h4>
                                        <p>{personalInfo.email}</p>
                                    </div>
                                </div>

                                <div className="contact-method glass">
                                    <div className="contact-icon-wrapper">
                                        <Icons.Phone className="gradient-text" />
                                    </div>
                                    <div className="contact-details">
                                        <h4>Số điện thoại</h4>
                                        <p>{personalInfo.phone}</p>
                                    </div>
                                </div>

                                <div className="contact-method glass">
                                    <div className="contact-icon-wrapper">
                                        <Icons.Globe className="gradient-text" />
                                    </div>
                                    <div className="contact-details">
                                        <h4>Địa chỉ</h4>
                                        <p>{personalInfo.address}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <a href={personalInfo.github} className="btn-icon" target="_blank" rel="noopener noreferrer">
                                    <Icons.Github />
                                </a>
                                <a href={personalInfo.linkedin} className="btn-icon" target="_blank" rel="noopener noreferrer">
                                    <Icons.Linkedin />
                                </a>
                            </div>
                        </div>

                        <div className="contact-form-container glass">
                            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label>Họ tên</label>
                                        <input name="user_name" type="text" placeholder="Nguyễn Văn A" required className="form-input" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input name="user_email" type="email" placeholder="example@gmail.com" required className="form-input" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Tiêu đề</label>
                                    <input name="subject" type="text" placeholder="Hợp tác phát triển dự án" required className="form-input" />
                                </div>
                                <div className="form-group">
                                    <label>Tin nhắn</label>
                                    <textarea name="message" rows="5" placeholder="Nội dung tin nhắn của bạn..." required className="form-textarea"></textarea>
                                </div>

                                {status.message && (
                                    <div className={`status-message ${status.type === 'success' ? 'status-success' : 'status-error'}`}>
                                        {status.message}
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary submit-btn" disabled={isSending} style={{ opacity: isSending ? 0.7 : 1 }}>
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
