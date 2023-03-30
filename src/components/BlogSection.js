import React from 'react';

const BlogSection = ({blogs, user}) => {
    return ( 
        <div>
        <div>BlogSection</div>
        {blogs?.map((item) => (
                <div key={item.id}> 
                    <div>
                        <img src={item.imgUrl} alt={item.title}/>
                        <div> </div>
                    </div>
                    <div>
                        <h6>{item.category}</h6>
                        <span>{item.title}</span>
                        <span>
                            <p className="author">{item.author}</p>
                            {item.timestamp.toDate().toDateString}
                        </span>
                    </div>
                    <div>
                        {item.description}
                    </div>
                </div>
        ))}
        </div>
    )
}

export default BlogSection