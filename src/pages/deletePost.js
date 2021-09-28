import React from 'react';
import faunaQueries from '../../functions/fauna/fauna';

import { Link } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = require('./delete.module.css');

const deletePost = () => {

    const deletePost = async (event) => {
        console.log("deletePost");
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
                const { data } = await faunaQueries.deletePost(id);
                console.log("in try");
                // console.log(data);

                alert("Data with the id \"" + id + "\" and title \"" + data.title + "\" has been deleted");


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
                <h1>Delete Posts</h1>
                <form onSubmit={deletePost}>
                    <input type="text" name="id" id="id" placeholder="Enter ID of the data you want to delete" />
                    <br />
                    <input type="submit" name="submit" value="submit" />
                </form>
            </div>
            <br />
            <div className={styles.linkcontainer}>
                <Link to="/createPost">Create Post</Link>
                <Link to="/getPost">Get Post</Link>
                <Link to="/updatePost">Update Post</Link>
            </div>
            <Footer />
        </div>

    )
}




export default deletePost;
