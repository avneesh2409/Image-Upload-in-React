import React,{Component} from 'react';
import $ from 'jquery';

const hoverHandler = (e) =>{
        $(`.contentwrapper`).css({display:'block'})
    }
const outHandler = (e) =>{
    $(`.contentwrapper`).css({display:'none'})
}
const Child2 = () =>{
    
      return (
      <div className='child2wrapper'>
            <p onMouseOver = {hoverHandler} onMouseOut={outHandler}>Hi Please Hover to see the Content</p>
            <div className='contentwrapper'>
                <div className='image'><img src='#' /></div>
                <div className='description'></div>
            </div>
      </div>
      )
    }

export default Child2