import React from 'react';
import faunaQueries from '../../functions/fauna/fauna';

import { Link } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = require('./get.module.css');

const getPost = () => {

    const getPost = async (event) => {
        console.log("getPost");
        event.preventDefault();
        console.log(event.target[0].value);
        let id = event.target[0].value;

        if (id == "") {
            alert("enter valid id")
        }
        else {
            id = parseInt(id);
            console.log(id);
            try {
                const { data } = await faunaQueries.getPost(id);
                console.log("in try");
                console.log(data);

                alert("Title: " + data.title);

            } catch (error) {
                console.log("in catch");
                console.log(error);
                alert(error.message);
            }
        }
    }
    return (
        <div>
            <Header text="CRUD app with Netlify Functions and Faunadb" />
            <div className={styles.container}>
                <h1>Get Posts</h1>
                <form onSubmit={getPost}>
                    <input type="text" name="id" id="id" placeholder="Enter ID of the data you want to get" />
                    <br />
                    <input type="submit" name="submit" value="submit" />
                </form>
            </div>
            <br />
            <div className={styles.linkcontainer}>
                <Link to="/createPost">Create Post</Link>
                <Link to="/updatePost">Update Post</Link>
                <Link to="/deletePost">Delete Post</Link>
            </div>
            <Footer />
        </div>

    )
}




export default getPost;
