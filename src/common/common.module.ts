import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adapter';

@Module({
  providers: [ AxiosAdapter],
  exports: [ AxiosAdapter]  // Make AxiosAdapter available for other modules to use.  This is necessary for the SeedService to use Axios.  Important to note that this does not directly use Axios in the SeedService, but rather wraps it to provide a more NestJS-friendly interface.  This allows us to use the NestJS HTTP client, which is more intuitive and easier to work with.  If you want to use Axios directly in the SeedService, you
})
export class CommonModule {}
