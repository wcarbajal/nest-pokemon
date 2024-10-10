import { join } from 'path'; // en Node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { JoiValidationSchema } from './config/joi.validation';

@Module( {
  imports: [

    ConfigModule.forRoot( {
      load: [ EnvConfiguration ],
      validationSchema: JoiValidationSchema
    } ),

    ServeStaticModule.forRoot( {
      rootPath: join( __dirname, '..', 'public' ),
    } ),

    MongooseModule.forRoot( process.env.MONGODB, {
      dbName: 'nest-pokemon',
      mongodb+srv://wcarbajal80:8J4ptwrnQDNVci2M@nest-pokemon.baxag.mongodb.net/?retryWrites=true&w=majority&appName=nest-pokemon

    } ),

    PokemonModule,

    CommonModule,

    SeedModule,


  ],
} )
export class AppModule {

}
