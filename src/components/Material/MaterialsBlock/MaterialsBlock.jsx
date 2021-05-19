import React from 'react'
import './../style.css'


export default ({material, setMaterial}) => {
    return (
        material.map(item => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))
    )
}