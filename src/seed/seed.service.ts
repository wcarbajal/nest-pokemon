import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from "axios";
import { PokeResponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';


@Injectable()
export class SeedService {



 constructor(
    
  @InjectModel( Pokemon.name )
  private readonly pokemonModel: Model<Pokemon>,

  private readonly http: AxiosAdapter,

) {}


  async executeSeed() {

    await this.pokemonModel.deleteMany({}); //delete * from pokemons

    const data = await this.http.get<PokeResponse>( 'https://pokeapi.co/api/v2/pokemon?limit=650' );

    const pokemonsToInsert: {name: string, no: number}[] = []

    data.results.forEach(  ({name, url}) => {
      const no = +url.split('/').at(-2);
     
     console.log(name, no);
      pokemonsToInsert.push({name, no});
    })

    await this.pokemonModel.insertMany(pokemonsToInsert);

    return 'Seed executed';


    
  }

}
