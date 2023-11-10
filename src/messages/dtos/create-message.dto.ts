import { IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  name: string;

  @IsNumber()
  age: number;

  @IsNumber()
  id: number;
}

// dto is a pattern that helps define and validate data that is transferred between the client and the server.
// it are used to specify the structure and validation rules for the data that is sent in requests or received in responses.
// This helps ensure that the data is in the expected format and provides a level of type safety in your application.
