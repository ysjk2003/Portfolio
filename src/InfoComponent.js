import React, { Component } from 'react';
import './Info.css';

class InfoComponent extends Component {
    render() {
        return (
            <div className="Infobox">
                <img src={ this.props.image } alt={this.props.alt} width="15rem"></img>
                <p>{this.props.ptag}</p>
            </div>
        );
    }
};

export default InfoComponent;