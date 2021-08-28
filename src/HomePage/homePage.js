import React from 'react'
import Home from '../Components/Leave_section/Leave'
import Display from '../Components/MainDisplay/Display'
import Empolyee from '../Components/Employee/Empolyee'

export default function homePage() {
    return (
        <div>
             <Home/>
             <Display/>
             <Empolyee/>
        </div>
    )
}
