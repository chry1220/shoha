import React from 'react';
import './blog.css'
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"
import { motion } from "framer-motion";

function Blog(props) {
    return (
        <motion.div
            className="gpt3__blog section__padding"
            id='blog'
            whileInView={{ opacity: [0, 1], y: [200, 0] }}
            transition={{ duration: 1 }}
        >
            <div className="gpt3__blog-heading">
                <h1 className="gradient__text">
                    A lot is happening, We are blogging about it.
                </h1>
            </div>
            <div className="gpt3__blog-container">
                <div className="gpt3__blog-container_groupC">
                    <Article imgUrl={blog02} date={"Sep 26, 2021"}
                        title={" Visit us online or in-store today and take the first step towards fashion-forward footwear bliss!"} />
                    <Article imgUrl={blog03} date={"Sep 26, 2021"}
                        title={" Visit us online or in-store today and take the first step towards fashion-forward footwear bliss!"} />
                    
                </div>
                <div className="gpt3__blog-container_groupA">
                    <Article imgUrl={blog01} date={"Sep 26, 2021"}
                        title={" Visit us online or in-store today and take the first step towards fashion-forward footwear bliss!"} />
                </div>
                <div className="gpt3__blog-container_groupC">
                    <Article imgUrl={blog04} date={"Sep 26, 2021"}
                        title={" Visit us online or in-store today and take the first step towards fashion-forward footwear bliss!"} />
                    <Article imgUrl={blog05} date={"Sep 26, 2021"}
                        title={" Visit us online or in-store today and take the first step towards fashion-forward footwear bliss!"} />
                </div>
            </div>
        </motion.div>
    );
}

export default Blog;