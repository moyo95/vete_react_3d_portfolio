import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className="cta">
        <p className="cta-text">何かプロジェクトを考えていますか?<span className="sm:block hidden">一緒に何かを作りましょう！</span></p>
        <Link to="/contact" className="btn">
            contact
        </Link>

    </section>
  )
}

export default CTA