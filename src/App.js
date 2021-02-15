import React,{useState} from 'react';
import { Transition,CSSTransition } from 'react-transition-group';
import logo from './logo.svg';
import './App.css';

const [toggle,setToggle]=useState(true)
const [toggle2,setToggle2]=useState(true)
const [items,setItems]=useState([
  {id:1,title:'Item 1'},
  {id:2,title:'Item 2'},
  {id:3,title:'Item 3'},
])

function App() {
  const removeItem=id=>setItems(items.filter(i=>i.id!==id))
  const addItem=()=>{
    const title=prompt('Enter item title')
    const id=Date.now()
    settems(*)items.concat([{title,id}]))
  }
  return (
    <div className="container">
      <button onCLick={()=>setToggle(!toggle)} >Toggle</button>
      <button onCLick={()=>setToggle2(!toggle2)} >Toggle2</button>
      <button onCLick={()=>addItem()} >Add item</button>
      <hr/>
      <div className={'blocks'}>
      {/* {toggle && <div className={'square blue'}>{toggle.toString()} */}
    {/* <Transition in={toggle} timeout={1000} mountOnEnter unmountOnExit> */}
    <Transition in={toggle} timeout={{enter:1000,exit:500}} mountOnEnter unmountOnExit onEnter={()=>} onEntering={()=>} onEntered={()=>} onExit={()=>} onExiting={()=>} onExited={()=>}>
      {/* {state=> <div className={'square blue'}>{toggle.toString()}</div>} */}
      {state=> <div className={`square blue ${state}`}>{state}</div>}     
      
      </Transition>
      <CSSTransition in={toggle2} timeout={1000} mountOnEnter unmountOnExit classNames="os">
      <div className="square orange">{toggle2.toString()}</div>
      </CSSTransition>
      
      <div className="blocks">
      <List items={items} onRemove={removeItem}/>
      </div>
  </div>
</div>
  );
}

export default App;
