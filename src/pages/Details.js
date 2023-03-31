import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        id && getBlogDetail();
    }, [id])

    const getBlogDetail = async () => {
        const docRef = doc(db, 'blogs', id);
        const blogDetail = await getDoc(docRef);
        setBlog(blogDetail.data());
    }  
    
    return (
        <div>Detail</div>
    )
}