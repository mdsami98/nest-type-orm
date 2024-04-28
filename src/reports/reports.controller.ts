import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Report Module')
@Controller('reports')
export class ReportsController {
  @Get('/')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  getData(): string {
    return 'report';
  }
}
