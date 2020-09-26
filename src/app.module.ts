import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [MulterModule.register({
    dest: './files'
  }), ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
