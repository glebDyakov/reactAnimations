import {TransitionGroup,CSSTransition} from 'react-transition-group' 
import React from 'react'
export const List=({items,onRemove})=>(
    <TransitionGroup component={'ul'}>
        {items.map(item=>(
            <CSSTransition classNames={'os'} timeout={750} key={item.id}>
            <li key={item.id} onClick={()=>onRemove(item.id)}>{item.title}</li>
            </CSSTransition>
        ))}
    </TransitionGroup>
)