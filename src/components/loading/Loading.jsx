import "./Loading.scss";

function Loading() {
    return (
        <div className="loader-wrap">
            <div className="logo-scene">
                <div className="glow-bg"></div>
                <div className="dot-top"></div>

                <div className="rocket-svg">
                    <svg width="80" height="220" viewBox="0 0 80 220" fill="none">
                        <polygon points="40,10 18,70 62,70" fill="#f5f0dc" />
                        <polygon points="18,70 27,70 27,85 53,85 53,70 62,70 62,90 18,90" fill="#f5f0dc" />
                        <rect x="27" y="85" width="26" height="105" rx="2" fill="#f5f0dc" />
                        <polygon points="27,190 53,190 45,215 35,215" fill="#c9a000" />
                        <rect x="36" y="70" width="8" height="140" rx="3" fill="rgba(255,255,200,0.35)" />
                    </svg>
                </div>

                <div className="orbit-ring">
                    <svg width="200" height="80" viewBox="0 0 200 80" fill="none">
                        <ellipse cx="100" cy="40" rx="95" ry="32" stroke="#c9a000" strokeWidth="5" fill="none" />
                        <line x1="40" y1="65" x2="72" y2="35" stroke="#c9a000" strokeWidth="3" opacity="0.5" />
                        <line x1="130" y1="65" x2="162" y2="35" stroke="#c9a000" strokeWidth="3" opacity="0.5" />
                    </svg>
                </div>
            </div>

            <div className="progress-bar-wrap">
                <div className="progress-bar"></div>
            </div>

            <div className="load-text">
                Loading<span className="dots-anim"></span>
            </div>
        </div>
    );
}

export default Loading;