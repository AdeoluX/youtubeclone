import React from 'react'
import './sidebarRow.css'




const SidebarRow = ({title, selected, Icon}) => {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon"/>
            <h1 className="sidebarRow__title">{title}</h1>
        </div>
    )
}

export default SidebarRow
