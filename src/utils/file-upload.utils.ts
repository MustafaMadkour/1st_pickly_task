import * as path from 'path';
import { HttpException, HttpStatus } from '@nestjs/common';

// allow to upload only image files
export const imageFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return cb(
      new HttpException(
        'Only images are accepted to be uploaded',
        HttpStatus.BAD_REQUEST
      ),
      false
    );
  }
  cb(null, true); 
};