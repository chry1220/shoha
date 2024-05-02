import React from 'react';
import'./cta.css';
function CTA(props) {
    return (
        <div className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Request Early Access to Get Started</p>
                <h3>Visit us online or in-store today and take the first step towards fashion-forward footwear bliss!</h3>
            </div>
            <div className="gpt3__cta-button">
                <button>Get Started</button>
            </div>
        </div>
    );
}

export default CTA;