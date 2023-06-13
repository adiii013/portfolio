import React from 'react'
import './Checkout.css'
import { useNavigate } from 'react-router-dom'

function Checkout() {
    const navigate = useNavigate();
    return (
        <div className='checkout__container'>
            <h5>CheckOut</h5>
            <h2>Projects and Internship</h2>
            <div className="checkout__subcontainer">
                <div className="checkout__card" onClick={()=>navigate('/experience')}>
                    <h2>Internships</h2>
                    <article>List of all the internships</article>
                </div>
                <div className="checkout__card" onClick={()=>navigate('/project/web')}>
                    <h2>Web Projects</h2>
                    <article>List of all the web projects</article>
                </div>
                <div className="checkout__card">
                    <h2>Android Projects</h2>
                    <article>List of all the android projects</article>
                </div>
            </div>
        </div>
    )
}

export default Checkout