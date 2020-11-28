import React from 'react';
import ReactDOM from 'react-dom';

// Modal => popup screen. We use portal here since creating a modal without a portal is quite difficult since the components are deeply nested. body -> root -> App -> DeleteStream -> Modal -> Button
// portal can be used for making some component a direct child of the body element.
const Modal = (props) => {
    return ReactDOM.createPortal(
        // if the user clicks outside the modal, we are navigating them back to the landing page.
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            {/* stop propogation is used to stop the event from bubbling up to it's parent component */}
            <div onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal') // we have created a different div with an id of modal in the index.html file
    )
}

export default Modal;