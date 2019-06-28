import React from 'react'
import Title from '../Title';
import aboutBcg from '../../images/aboutBcg.jpeg';

const Info = () => {
    return (
        <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <img src={aboutBcg} alt="about" className="img-fluid img-thumbnail" style={{background: 'var(--darkGrey)'}}/>
                </div>
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="about us" />
                    <p className="text-lead text-muted my-3" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo expedita doloribus similique error facere ducimus necessitatibus, nostrum praesentium modi laboriosam fugit accusantium incidunt odio exercitationem optio reprehenderit ex sed illum, iusto mollitia numquam, reiciendis quo.</p>
                    <p className="text-lead text-muted my-3" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste explicabo expedita doloribus similique error facere ducimus necessitatibus, nostrum praesentium modi laboriosam fugit accusantium incidunt odio exercitationem optio reprehenderit ex sed illum, iusto mollitia numquam, reiciendis quo.</p>
                    <button className="main-link" type="button" style={{marginTop: '2rem'}}>more info</button>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Info
