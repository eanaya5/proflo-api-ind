import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';

import { IsLength } from 'src/decorators/length.decorator';
import { IsNotBlank } from 'src/decorators/is-not-blank.decorator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsLength({
    message:
      'La identificación debe contener mínimo 7 números y máximo 10 números!',
  })
  identification?: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNotBlank({ message: 'El campo <<nombre>> no puede estar vacío!' })
  name?: string;

  @ApiProperty()
  @IsOptional()
  lastname?: string;

  @ApiProperty()
  @IsNotBlank({ message: 'El campo <<contraseña>> no puede estar vacío!' })
  @IsNotEmpty()
  password?: string;

  @ApiProperty()
  @IsBoolean()
  @IsNotEmpty()
  state?: boolean;
}
