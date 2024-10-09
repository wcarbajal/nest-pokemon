import { IsNumber, IsOptional, IsPositive,  Min } from 'class-validator';

export class PaginationDto {

    // isInt, isPositive, min 1
    @IsOptional()
    @IsPositive()
    @IsNumber()
    @Min(1)
    limit?: number;

    // isString, Minlenth 1
    @IsOptional()
    @IsNumber()
    @IsPositive()    
    offset?: number;

}
