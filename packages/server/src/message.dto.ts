import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  public text: string;
}
