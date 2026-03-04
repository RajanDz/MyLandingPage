import "../styles/ContactSectionStyle.css";

export function ContactSection(){
    return(
        <div className="contact-section-main-container" id="contact-us">
           
                <div className="contact-container">
                    <div className="contact-promotional-text">
                        <h2 className="contact-head-text">Spremni za rast?</h2>
                        <p className="contact-sub-text">Zatražite besplatnu ponudu i analizu vaše trenutne situacije. <br /> Bez obaveza.</p>
                    </div>

                    <div className="contact-option">
                        <form
                            action="https://formspree.io/f/mnjbekkq"
                            method="POST"
                            >
                                <div className="input-container">
                                    <span className="material-symbols-outlined">
                                            person
                                    </span>

                                    <label>
                                        <input type="email" name="email" placeholder="Email address"/>
                                    </label>
                                </div>

                                <div className="input-container-msg">
                                    <span className="material-symbols-outlined">
                                            chat_bubble
                                    </span>                                    
                                    <label>
                                        <textarea  name="message" placeholder="Unesite vašu poruku ovdje..." rows={4}></textarea>
                                    </label>
                                </div>
                            <button type="submit">Send</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}