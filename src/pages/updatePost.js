import React from 'react';
import faunaQueries from '../../functions/fauna/fauna';

import { Link } from 'gatsby';

import Header from '../components/Header';
import Footer from '../components/Footer';

const styles = require('./update.module.css');

const updatePost = () => {

    const updatePost = async (event) => {
        console.log("updatePost");
        event.preventDefault();
        console.log(event.target[0].value);
        let id = event.target[0].value;

        console.log(event.target[1].value);
        let title = event.target[1].value;

        if (id == "") {
            alert("enter valid id")
        }

        else if (title == "") {
            alert("enter valid name");
        }

        else {
            id = parseInt(id);
            console.log(id);
            try {
                const { data } = await faunaQueries.updatePost(id, title);
                console.log("in try");
                console.log(data);

                alert("Data with id \"" + data.id + "\" and title \"" + data.title + "\" has been added updated");

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
                <h1>Update Posts</h1>
                <form onSubmit={updatePost}>
                    <input type="text" name="id" id="id" placeholder="enter id" />
                    <br />
                    <input type="text" name="title" id="title" placeholder="enter title" />
                    <br />
                    <input type="submit" name="submit" value="submit" />
                </form>
            </div>
            <br />
            <div className={styles.linkcontainer}>
                <Link to="/createPost">Create Post</Link>
                <Link to="/getPost">Get Post</Link>
                <Link to="/deletePost">Delete Post</Link>
            </div>
            <Footer />
        </div>

    )
}




export default updatePost;
