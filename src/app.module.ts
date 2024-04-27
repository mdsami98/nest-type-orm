import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: `nest-db`,
      //   port: `${process.env.DATABASE_PORT}`,
      username: `root`,
      password: `root123`,
      database: `nest_pg`,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      logging: true,
      synchronize: false,
      migrationsTableName: 'typeorm_migrations',
      migrationsRun: false,
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
