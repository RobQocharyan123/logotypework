import React, { useState } from 'react'
import logo from '../../assets/header/Logotype.png'
import search from '../../assets/header/W.png'
import { useDispatch } from 'react-redux'
import { actions } from './../../actions';


export default function Header() {
const dispatch = useDispatch()
const [isOpen, setIsOpen] = useState()

function handelClick(e){
    const value = e.currentTarget.innerHTML;
    dispatch({type: actions.ITEM, payload: value})

}

function handelSubmit(e){
    e.preventDefault()
    let value = e.target[0].value
    dispatch({type: actions.INPUT_VALUE, payload: value})
    value = " "
}

function handlFocus(e){
   return e.target.value = ""
}


  return (
    <div className='navbar'>
        <div className="navbar_top_section">
        <div className="" onClick={()=> setIsOpen(!isOpen)}>
            <div className={`burger_menu ${isOpen ? "span_visible": "span_hidden"}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
            <div className="logo_section">
                <img src={logo}alt="logo" />
            </div>
            <div className="serch">
                <form action="submit" onSubmit={(e) => handelSubmit(e)} >
                    <input type="text" onFocus={(e)=>handlFocus(e)} />
                    <button className='search_btn' type='submit'>
                        <img src={search} alt="search" className="search_img" />
                    </button>
                </form>
            </div>            
        </div>
        <div className={`filter_side ${isOpen?"active" :" "}`}>
            <ul>
                <li>
                    <button value="all" onClick={(e)=>handelClick(e)}>All</button>
                </li>
                <li>
                    <button value="Lifestyle" onClick={(e)=>handelClick(e)}>Lifestyle</button>
                </li>
                <li>
                    <button value="Style" onClick={(e)=>handelClick(e)}>Style</button>
                </li>
                <li>
                    <button value="Events" onClick={(e)=>handelClick(e)}>Events</button>
                </li>
                <li>
                    <button value="Travel" onClick={(e)=>handelClick(e)}>Travel</button>
                </li>
                <li>
                    <button value="Music" onClick={(e)=>handelClick(e)}>Music</button>
                </li>
            </ul>
        </div>
    </div>
  )
}
