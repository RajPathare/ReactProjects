import React, { useState, useEffect, useRef } from 'react';

const Dropdown = (props) => {

    const [open, setOpen] = useState(false);

    // useRef is used for referencing a specific element inside the DOM.
    const ref = useRef();

    //[] => run only once the component is initiated.
    useEffect(()=>{

        const onBodyClick = (event) => {
            // console.log('Click!!!')
            // console.log(event.target);
            if(ref.current.contains(event.target))
            {
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click',onBodyClick)
        }
    },[])

    const renderedOptions = props.options.map((option)=>{

        // when a color is selected, remove it from the dropdown list.
        if(option.value === props.selected.value)
        {
            return null;
        }

        return (
            <div className="item" key={option.value} onClick={() => props.onSelectedChange(option)}>
                {option.label}
            </div>
        )
    })

    // referencing the ui form div element with the help of useRef hook.
    // console.log(ref.current);


    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{props.label}</label>
                <div className={`ui selection dropdown ${open ? 'visible active': ''}`} onClick={()=> setOpen(!open)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{props.selected.label}</div>
                    <div className={`menu ${open ? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;