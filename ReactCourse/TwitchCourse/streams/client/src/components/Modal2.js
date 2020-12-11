import React from 'react';
import { Modal, Button } from 'antd';

import './streams/antd.css'

class Modal2 extends React.Component {

    render() {
        return (
            <Modal
            visible={this.props.visible}
            title={this.props.title}
            onOk={this.props.onOk}
            onCancel={this.props.onCancel}
            footer={[
              <button className="ui button red" key="back" onClick={this.props.handleCancel}>
                Return
              </button>,
              <button className="ui button primary" key="submit" type="primary" loading={this.props.loading} onClick={this.props.handleOk}>
                Submit
              </button>,
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        )
    }
}


export default Modal2;