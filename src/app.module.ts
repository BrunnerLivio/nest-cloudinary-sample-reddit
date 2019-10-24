import { Module } from '@nestjs/common';
import { CloudinaryModule } from './cloudinary/cloudinary.module';

@Module({
  imports: [CloudinaryModule],
})
export class AppModule {}
