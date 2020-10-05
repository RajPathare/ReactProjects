import React, { useState } from 'react';

const Accordion = (props) => {


    //useState is a hook which can be used for declaring states inside a functional component in React.
    //Hooks are just used for making functional components more dynamic, like class based components.
    const [activeIndex, setActiveIndex] = useState(null);

    // in class based components, you don't need to use const while writing any function.
    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = props.items.map((item,index)=>{

        // we need to append the active className for expanding the particular question.
        // console.log(index, activeIndex)
        const active = index === activeIndex ? 'active': '';

        return (
        <React.Fragment key={item.title}>
            <div className={`title ${active}`}
            onClick={()=> onTitleClick(index)}>
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>
        )
    })

    return (
    <div className="ui styled accordion">
        {renderedItems}
    </div>
    );

}

export default Accordion;