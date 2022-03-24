import React from "react";
import CategoryItem from "../category/category.component";
import './directory.style.scss';

const Directory = ({category}) => (
    <div className="directory-container">
      {
        category.map(cat=>(
          <CategoryItem category={cat} key={cat.id}/>
        ))
      }      
    </div>
);

export default Directory;