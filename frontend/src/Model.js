import React from 'react'
import ReactDOM from 'react-dom'

const MODEL_STYLES={
    position:'fixed',
    top:'50%',
    left:'50%',
    backgroundColor:'grey',
    transform:'translate(-50%,-50%)',
    zIndex:100,
    height:'90%',
    width:'90%'
}

const OVERLAY_STYLES={
    position:'fixed',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,.7)',
    zIndex:100
}

export default function Model({children,onClose}){
    return ReactDOM.createPortal(
        <>
        <div style={OVERLAY_STYLES}/>
            <div style={MODEL_STYLES}>
                <button className='btn bg-danger fs-4' style={{marginLeft:"95%",marginTop:"-1%"}} onClick={onClose}>X</button>
                {children}
            </div>
        
        </>,
        document.getElementById('cart-root')
    )
}