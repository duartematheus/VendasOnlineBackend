import { IsInt, IsOptional, IsString } from "class-validator";


export class CreateAddressDto{
    static cityId(cityId: any) {
        throw new Error('Method not implemented.');
    }
    @IsString()
    @IsOptional()
    complement: string;

    @IsInt()
    numberAddress: number;

    @IsString()
    cep: string;

    @IsInt()
    cityId: number;

}