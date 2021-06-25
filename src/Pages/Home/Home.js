import React from 'react'
import './Home.css'
import Card from './Card'
import { FeaturePRoduct } from './FeatureProducts/FeatureProduct';
import { Raw } from './CatogeyWiseData/Raw';
import { Elemnets } from './CatogeyWiseData/Elements';
import { SlimJim } from './CatogeyWiseData/slimjim';
import { Link } from 'react-router-dom'



function Home() {

    const rightSlider = (num) => {
        const row = document.querySelectorAll('.latestRow');
        row[num].scrollLeft += 500;
        // console.log(row[num]);

    }
    const leftSlider = (num) => {
        const row = document.querySelectorAll('.latestRow');
        row[num].scrollLeft -= 500;
        // console.log(row[num]);

    }


    const image = require('./Image/high.png').default;
    return (
        <>

        
            <div className="header">
                <div className="row">
                    <div className="col-2">

                        <h1>Give yourself the royalty You deserve!</h1>
                        <p>We deliver the world class best materialsthat makes you feel high on clouds.</p>
                        <Link to="/Product" replace
                            style={{
                                textDecoration: 'none'
                            }} className="btn">Explore Now </Link>
                    </div>
                    <div className="col-2">
                        <img src={image} width="900px" alt=""/>
                    </div>
                </div>
            </div>
            {/* Categories */}
            <div className="categories">
                <div className="small-container">
                    <div className="row">
                        <div className="col-3">
                            <img src={require('./Image/IMG_1897.JPG').default} alt=""></img>
                        </div>
                        <div className="col-3">
                            <img src={require('./Image/IMG_1904.JPG').default} alt=""></img>
                        </div>
                        <div className="col-3">
                            <img src={require('./Image/IMG_1909.JPG').default} alt=""></img>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Categories */}

            <div className="small-container">
                <h2 className="title">Featured Products</h2>
                <div className="row">
                    <Card Data={FeaturePRoduct} />
                </div>
            </div>

            {/* Latest Products */}

            <h2 className="title">Latest Products</h2>


            {/* for raw categories */}
            <h2 className="title">Raw</h2>
            <div className="latestProduct">
                <button className="leftSlider" onClick={()=>leftSlider(0)}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                <div className="latestRow">
                    <Card Data={Raw} />

                </div>
                <button className="rightSlider" onClick={()=>rightSlider(0)}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
            </div>

            {/* for Element categories */}
            <h2 className="title">Elements</h2>
            <div className="latestProduct">
                <button className="leftSlider" onClick={()=>leftSlider(1)}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                <div className="latestRow">
                    <Card Data={Elemnets} />


                </div>
                <button className="rightSlider" onClick={()=>rightSlider(1)}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
            </div>


            {/* for slimjim categories */}
            <h2 className="title">Slimjim</h2>
            <div className="latestProduct">
                <button className="leftSlider" onClick={()=>leftSlider(2)}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
                <div className="latestRow">
                    <Card Data={SlimJim} />


                </div>
                <button className="rightSlider" onClick={()=>rightSlider(2)}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
            </div>



            {/* OFFERS */}

            <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src={require('./Image/hoddie.png').default} width="900px" className="offer-img" alt=""/>
                        </div>
                        <div className="col-2">
                            <p>Coming Soon</p>
                            <h1>Roll Up Originals</h1>
                            <small>The extaordinary breathable hoddie which faishonable, trippy as well as good for your body. Will be available in both slim fit and and loose fit.</small>
                            <br />
                            <Link to="/Product" replace
                                style={{
                                    textDecoration: 'none'
                                }} className="btn">Watch other products </Link>
                        </div>
                    </div>
                </div>

            </div>

            {/* Testimonial */}

            
   <div className="testimonial">
       <div className="small-container">
       <div className="row">
           <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                      <p>The best of the best products you can get from here at a very cheap rate everything about this service is awesome.</p>
                      <div className="rating">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-o"></i>
                       </div>
                       <img src={require('./Image/user-1.png').default} alt=""/>
                       <h3>Ashu</h3>
           </div>
            <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                      <p>The best of the best products you can get from here at a very cheap rate everything about this service is awesome.</p>
                      <div className="rating">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                       </div>
                       <img src={require('./Image/user-2.png').default} alt=""/>
                       <h3>Axnav</h3>
           </div>
            <div className="col-3">
                    <i className="fa fa-quote-left"></i>
                      <p>The best of the best products you can get from here at a very cheap rate everything about this service is awesome.</p>
                      <div className="rating">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-half-o"></i>
                       </div>
                       <img src={require('./Image/user-3.png').default} alt=""/>
                       <h3>kamla</h3>
           </div>
       </div>
       </div>
   </div>


        </>
    )
}

export default Home
