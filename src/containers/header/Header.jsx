import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import AI from '../../assets/ai.png'
import {motion} from "framer-motion";

function Header(props) {
    return (
        <motion.div
            className="gpt3__header section__padding"
            id="home"
            whileInView={{opacity: [0, 1], y: [100, 0]}}
            transition={{duration: 0.5}}
        >
            <div className="gpt3__header-content">
                <h1 className="gradient__text">
                    Looking for the perfect pair to elevate your stride?
                </h1>
                <p>Look no further! At Shoe Haven, we're passionate about footwear that combines comfort and flair..</p>
            </div>
            <div className="gpt3__header-img">
                <img src={AI} alt='AI'/>
            </div>
        </motion.div>
    );
}

export default Header;