import React from 'react';

export function Pokemon({ pokemon }){
  return(
      <div className="pokemon">
          <div className="pokemon_name">
                <p>{pokemon.name}</p>
          </div>
          <div className="pokemon_meta">
             <span><p>{pokemon.maxHP}</p></span>
             <span><p>{pokemon.maxCP}</p></span>              
          </div>
          <div className="pokemon_image">
                <img src={pokemon.image} alt={pokemon.name} />    
          </div>
          <div className="pokemon_attacks">
              {pokemon &&
                pokemon.attacks &&
                pokemon.attacks.special
                   .slice(0,3)
                   .map(attack =>(
                       <span key={`${attack.name}-${attack.damage}`}>
                           {attack.name} 
                       </span>
                   ))}
          </div>
      </div>
  )
}