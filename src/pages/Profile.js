import { UserAuth } from "../context/AuthContext";
import { useEffect,useState } from "react";
import { upload, storage } from "../firebase-config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Avatar from '@mui/material/Avatar';


export default function Profile() {
    const currentUser = UserAuth();
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [photoURL, setPhotoURL] = useState("https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg"); 
 
    const handleChange = (e) => {
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    } ;  
    const handleClick =() => {
       const imageRef = ref(storage,"image");
       uploadBytes(imageRef, image).then(() => {
        getDownloadURL(imageRef).then(() => {
            setPhotoURL(photoURL);
        }).catch(error => {
            console.log(error.message, "error getting the image url")
        })
        setImage(null);
       })
    } 
/*
    useEffect(() => {
        if(currentUser?.photoURL) { //currentUser && currentUser.photoURL
            setPhotoURL(currentUser.photoURL);
        }
    },[currentUser])
*/
    

    return (
        <div>
            <input type='file' onChange={handleChange}></input>
            <button disabled ={loading || !image} onClick={handleClick}>Upload</button>
            <Avatar src={photoURL} alt="Avatar" />
        </div>
    );
}