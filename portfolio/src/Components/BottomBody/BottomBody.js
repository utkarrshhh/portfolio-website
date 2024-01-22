import React from 'react'
// import Typed from '../Typerwriter/Typed'
import Typed from 'C:/Users/utkar/Desktop/dont touch/pendrive/js/projects/portfolio/portfolio/src/Components/Typerwriter/Typed.js'
import TypeWriter from '../Typerwriter/TypeWriter'
// import TypeWriter from '../Typerwriter/TypeWriter'

export default function BottomBody() {

    const message = ", What Do i Know really?"
    const message2 = "Well i am still...."
    const message3 = "learning and improving..!"
    return (
    <div>
        <div className='bottomContainer'>
            <div className='bottomMessage'>
                <div className="name2"> Technically <Typed message={message} /></div>

                <hr className='line lineShort' />
            </div>
            <div className="skillMention">
                <hr className='lineWhite'/>
                <div className="skillLine">
                    <hr className='line3' />
                    <hr className='line3' />
                    <hr className='line3' />
                    <hr className='line3' />
                    <hr className='line3' />
                    <hr className='line3' />
                    <hr className='line3' />
                    <hr className='line3' />
                    <hr className='line3' />
                    <hr className='line3' />
                </div>
                <div className="vertical">
                    <div className='skillNaming'>Computer Networks</div>
                    <div className='skillNaming'>HTML</div>
                    <div className='skillNaming'>CSS</div>
                    <div className='skillNaming'>javaScript</div>
                    <div className='skillNaming'>React</div>
                    <div className='skillNaming'>Node</div>
                    <div className='skillNaming'>Express</div>
                    <div className='skillNaming'>Python</div>
                    <div className='skillNaming'>SQL</div>
                    <div className='skillNaming'>C/C++</div>
            </div>
            <div className="vertical">
                    <div className='skillNaming'>(Basic)</div>
                    <div className='skillNaming'>(intermediate)</div>
                    <div className='skillNaming'>(intermediate)</div>
                    <div className='skillNaming'>(intermediate)</div>
                    <div className='skillNaming'>(Beginner)</div>
               
                    <div className='skillNaming'>(Beginner)</div>
                    <div className='skillNaming'>(Beginner)</div>
                    <div className='skillNaming'>(Intermediate)</div>
                    <div className='skillNaming'>(Intermediate)</div>
                    <div className='skillNaming'>(Basic)</div>
            </div>
            </div>
            
        </div>      
        <div className="name2 stillLearning">  
            <Typed message={message2} />
            <TypeWriter message={message3}/>
            </div> 
        <hr className=' lineWhite2'/>
        </div>
    )
}
