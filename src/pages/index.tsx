
import React, { useState, useEffect } from "react"

import Header from '../components/Header';
import Footer from '../components/Footer';

import { Link } from "gatsby";

const styles = require('./index.module.css');

export default function Home() {


    return (<div>
        <Header text="CRUD app with Netlify Functions and Faunadb" />
        <div className={styles.container}>
            <Link to="/createPost">Create Post</Link>
            <Link to="/getPost">Get Post</Link>
            <Link to="/updatePost">Update Post</Link>
            <Link to="/deletePost">Delete Post</Link>
        </div>
        <Footer />
    </div>)
}