import React from 'react';
import './features.css'
import {Feature} from "../../components";


const featuresData = [
    {
        title: 'Unbeatable Selection',
        text: 'From sleek sneakers to elegant heels, we have got the styles to suit every taste and occasion.',
    },
    {
        title: 'Quality Craftsmanship',
        text: 'Our shoes are crafted with precision and care, using premium materials to ensure durability and comfort with every step.',
    },
    {
        title: 'Fashion Forward',
        text: 'Stay ahead of the curve with our curated collection of the latest trends and timeless classics.',
    },
    {
        title: 'Personalized Service',
        text: 'Our friendly staff is here to help you find the perfect fit, ensuring you leave feeling confident and stylish.',
    },
];

function Features(props) {
    return (
        <div className="gpt3__features section__padding">
            <div className="gpt3__features-heading">
                <h1 className="gradient__text">Visit us today and discover the Shoe Haven difference.</h1>
                <br></br>
                <h1 className="gradient__text">Your feet will thank you! .</h1>
                
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((feature, ind) => (
                    <Feature title={feature.title} text={feature.text} key={ind}/>
                ))}
            </div>
        </div>
    );
}

export default Features;