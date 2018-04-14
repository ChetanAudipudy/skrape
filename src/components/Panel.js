import React from 'react';
import ArticleItem from './ArticleItem';

const Panel = (props) => {
    return(
        <div>
        <h1>Here are the scraped articles</h1>
        {
         props.articles.map((article) => (
            <ArticleItem 
             key= {article}
             articleText= {article} 
            />
         ))
        }
        </div>
    );
};
export default Panel;