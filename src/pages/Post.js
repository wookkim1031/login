import React, {useState,useEffect} from 'react';
import { onSnapshot, collection } from "firebase/firestore";
import BlogSection from '../components/BlogSection';
import {db} from '../firebase-config';

const Post = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const unsub = onSnapshot(
            collection(db, "blogs"),
            (snapshot) => {
                let list = [];
                snapshot.docs.forEach((doc) => {
                    list.push({id: doc.id, ...doc.data()})
                });
                setBlogs(list);
            }, (error) => {
                console.log(error)
            }
        );

        return () => {
            unsub();
        }
    }, []);

    console.log("blogs", blogs);

    return ( 
        <div>
        <h2> Blog</h2>
        <div></div>
        <BlogSection blogs = {blogs}/>
        </div>
    )
}

export default Post;