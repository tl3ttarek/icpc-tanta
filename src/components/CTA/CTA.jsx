import React from 'react'

import '../../styles/global.css'

function CTA() {
    return (
    <section className="section-cta">
        <div className="container">
            <div className="cta">
                <div className="cta-textbox">
                <p className="heading-sub">Start now</p>
                <h2 className="heading-secondary">Don't miss this opportunity</h2>
                <p className="cta-text">
                    Unlock Your Full Potential in Competitive Programming: Join Our
                    Thriving Community Today and Gain Access to Exclusive Resources,
                    Expert Mentorship, and Engaging Practice Sessions to Accelerate
                    Your Journey Towards Success!
                </p>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdwA_SDcWJovLzzrGYAgMGnK4W9yZ-X4ypSGOPqzTpZ1DWM5w/viewform?usp=sharing"
                    className="cta-btn">
                    Join us now
                </a>
                </div>
            </div>
        </div>
    </section>
    )
}

export default CTA
