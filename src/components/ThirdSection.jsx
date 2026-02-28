import "../styles/ThirdSectionStyle.css"

export function ThirdSection(){
    return(
        <div className="third-section-main-container">

            <div className="section-info-text">
                <h3 className="main-text">Što nudimo?</h3>
                <p className="sub-text">Sve što vam je potrebno za uspješan online nastup na jednom mjestu.</p>
            </div>
            
            <div className="features">
                <div className="feature-card">
                    <div className="feature-icon">
                        <span class="material-symbols-outlined">
                            auto_awesome_mosaic
                        </span>
                    </div>
                    <div className="feature-text">
                        <h4 className="feature-main-text">Moderni dizajn</h4>
                        <p className="feature-sub-text">Unikatan izgled prilagođen vašem brendu koji ostavlja snažan prvi dojam na posjetitelje.</p>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <span class="material-symbols-outlined">
                            bolt
                        </span>
                    </div>
                    <div className="feature-text">
                        <h4 className="feature-main-text">Brzina i Performanse</h4>
                        <p className="feature-sub-text">Optimizacija učitavanja za najbolje korisničko iskustvo i bolje pozicioniranje na Googleu.</p>
                    </div>
                </div>

                <div className="feature-card">
                    <div className="feature-icon">
                        <span class="material-symbols-outlined">
                            mobile
                        </span>
                    </div>
                    <div className="feature-text">
                        <h4 className="feature-main-text">Mobilna Prilagodba</h4>
                        <p className="feature-sub-text">Vaša stranica će izgledati savršeno na svakom uređaju, od mobitela do desktop računara.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}