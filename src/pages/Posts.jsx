import React from 'react';
import coffee from "../images/coffee.png"
import "./Posts.css"
const Posts = () => {
    return (
        <div className="post">
            <img className="coffeeimg" src={coffee}/>
            <a href="https://www.instagram.com/p/Cv-ucAksGYV/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==">Ссылка на пост</a>

        </div>
    );
};

export default Posts;