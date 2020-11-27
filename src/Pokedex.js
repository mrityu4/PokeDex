import React, { Component } from 'react';
import Pokecard from "./Pokecard";
import './Pokedex-cards.css'

class Pokedex extends Component{  
    render(){
        
        let decision;
        if(this.props.isWinner){
            
            decision=<h1 className="Pokedex-Winner"> WINNER!</h1>;
        }
        else{
            decision=<h1 className="Pokedex-Loser"> LOSER!</h1>;
        }
        return(
                <div className='Pokedex'>
                    <div className="Pokedex-cards">
               
                    {decision}
                    <h4> Total EXP: {this.props.exp}</h4>
                    <div className="Pokedex-cards">
                        {this.props.pokemon.map((p)=> (
                            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
                         ))}
                     </div>
                    </div>
            </div>
        )
    }
}

export default Pokedex;