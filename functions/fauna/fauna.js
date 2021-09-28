// const faunadb = require('faunadb'),
//     q = faunadb.query;

// require('dotenv').config();


// exports.handler = async (event, context) => {
//     try {
//         var client = new faunadb.Client({ 
//             secret: process.env.FAUNADB_ADMIN_SECRET,
//             domain: 'db.us.fauna.com',
//             scheme: 'https',
//         });



//         //for getting data
//         var result = await client.query(
//             q.Get(q.Ref(q.Collection('posts'), '310721822939152448'))
//         );
//         console.log("Document retrived from Container in Database: " + result.data.title);

//         return {
//             statusCode: 200,
//             body: JSON.stringify({ message: `${result.data.id}` }),
//             // // more keys you can return:
//             // headers: { "headerName": "headerValue", ... },
//             // isBase64Encoded: true,
//         }
//     } catch (err) {
//         return { statusCode: 500, body: err.toString() }
//     }
// }

import faunadb, { query as q, query } from 'faunadb';

class QueryManager {
    constructor() {
        this.client = new faunadb.Client({
            secret: "fnAEUJs9NIAAQElv0b6kmQDyOeOsqTPrP4wktL9I",
            domain: 'db.us.fauna.com',
            scheme: 'https',
        });
    }

    createPost({ id, title }) {
        return this.client.query(
            q.Create(q.Collection("posts"), {
                data: {
                    id,
                    title
                }
            })
        )
    }

    getPost(id) {
        return this.client.query(q.Get(q.Match(q.Index('post_by_id'), id)))
    }

    async updatePost(id, title) {
        let { ref } = await this.getPost(id);
        console.log(ref.value.id);

        let idPost = ref.value.id;
        return this.client.query(
            q.Update(q.Ref(q.Collection("posts"), idPost), {
                data: {
                    id,
                    title
                }
            })
        )
    }

    async deletePost(id) {
        // console.log(await this.getPost(id));
        let { ref } = await this.getPost(id);
        console.log(ref.value.id);

        id = ref.value.id;

        return this.client.query(
            q.Delete(q.Ref(q.Collection("posts"), id))
        )
    }
}

const faunaQueries = new QueryManager();
export default faunaQueries;
