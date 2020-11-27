import React, { Component } from 'react';
import './Pokecard.css';

const base_url = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let zerostuffed = (number) => `000${number}`.slice(-3);


class Pokecard extends Component {
    render() {
        const imgsrc = `${base_url}${zerostuffed(this.props.id)}.png`;
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-name'>{this.props.name}</h1>
                <div className="Pokecard-img">
                    <img src={imgsrc} alt={this.props.name} />
                </div>
                <div > TYPE: {this.props.type}</div>
                {/* space after : is also counted */}
                <div > EXP: {this.props.exp}</div>
            </div>);


    }
}
export default Pokecard;