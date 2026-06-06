import "../styles/ContactSectionStyle.css";

export function ContactSection() {
    return (
        <div className="contact-section-main-container" id="contact-us">
            <div className="contact-container">

                <div className="contact-promotional-text">
                    <span className="contact-eyebrow">Kontaktirajte nas</span>
                    <h2 className="contact-head-text">Izgradimo nešto <br /><span className="contact-head-gradient">zajedno.</span></h2>
                    <p className="contact-sub-text">Zatražite besplatnu ponudu i analizu vaše trenutne situacije. Bez obaveza.</p>
                </div>

                <form
                    action="https://formspree.io/f/mnjbekkq"
                    method="POST"
                    className="contact-form"
                >
                    <div className="contact-form-row">
                        <div className="contact-input-group">
                            <label className="contact-label">Ime i prezime</label>
                            <div className="contact-input-wrapper">
                                <span className="material-symbols-outlined contact-input-icon">person</span>
                                <input type="text" name="name" placeholder="Vaše ime i prezime" />
                            </div>
                        </div>

                        <div className="contact-input-group">
                            <label className="contact-label">Email adresa</label>
                            <div className="contact-input-wrapper">
                                <span className="material-symbols-outlined contact-input-icon">mail</span>
                                <input type="email" name="email" placeholder="vas@email.com" />
                            </div>
                        </div>
                    </div>

                    <div className="contact-input-group">
                        <label className="contact-label">Poruka</label>
                        <div className="contact-input-wrapper contact-input-wrapper--textarea">
                            <span className="material-symbols-outlined contact-input-icon contact-input-icon--top">chat_bubble</span>
                            <textarea name="message" placeholder="Opišite vaš projekat ili upit..." rows={6}></textarea>
                        </div>
                    </div>

                    <button type="submit" className="contact-submit-btn">
                        <span className="material-symbols-outlined">send</span>
                        Pošalji poruku
                    </button>
                </form>

            </div>
        </div>
    );
}
