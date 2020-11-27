import React, { Component } from 'react'
import Pokedex from './Pokedex';
 
class Pokegames extends Component{
    static defaultProps={
        pokemon:[
    
            {id: 4, name: 'Charmander', type: 'fire', exp: 62},
            {id: 7, name: 'Squirtle', type: 'water', exp: 63},
            {id: 11, name: 'Metapod', type: 'bug', exp: 72},
            {id: 12, name: 'Butterfree', type: 'flying', exp: 178},
            {id: 25, name: 'Pikachu', type: 'electric', exp: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', exp: 95},
            {id: 94, name: 'Gengar', type: 'poison', exp: 225},
            {id: 133, name: 'Eevee', type: 'normal', exp: 65}
            ]
    };
    render() {
        let set1=[];
        let set2=[...this.props.pokemon];
        while(set1.length<set2.length){
            let idx=Math.floor(Math.random()*set2.length);
            let removed=set2.splice(idx,1)[0];
            set1.push(removed);
        }
        let set1exp= set1.reduce((ex,pokemon)=> ex+ pokemon.exp,0);
        let set2exp= set2.reduce((ex,pokemon)=> ex+ pokemon.exp,0);
        console.log(set1);
        console.log(set2);

        return (
            <div>
                <Pokedex pokemon={set1} exp={set1exp} isWinner={set1exp>set2exp}/>
                <Pokedex pokemon={set2} exp={set2exp} isWinner={set1exp<set2exp}/>
            </div>
        )
    }
}
export default Pokegames;