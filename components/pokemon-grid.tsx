'use client'
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react"
import PokemonCard from "./pokemon-card";

interface PokemonGridProps {
    pokemonList: any
}

//This components fills the data

export function PokemonGrid( { pokemonList } : PokemonGridProps){
    const[searchText, setSearchText] = useState("");

    const searchFilter = (pokemonList: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(searchText.toLowerCase())
        )
    }

    // save the filtered array of objects
    const filteredPokemonList = searchFilter(pokemonList);

    return(
        <>
        <div>
        <h3 className="text-2xl py-6 text-center">
            Search for a Pokemon.
        </h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="pokemonName">Pokemon Name</Label>
            <Input type="text" value={searchText}
            id="pokemonName"
            placeholder="Charizard, Pikachu, etc."
            onChange={(e) => setSearchText(e.target.value)}
            />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">POKEMON COLLECTION</h3>
        </div>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            {filteredPokemonList.map((pokemon: any) => {
                return(
                    <PokemonCard name={pokemon.name} key = {pokemon.name  + "Card"}/>
                )
            })}
             
        </div>

       
        </>

    )

}