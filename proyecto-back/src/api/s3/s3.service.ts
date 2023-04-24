import { Injectable, Logger } from '@nestjs/common';
import { Express } from 'express';
import {S3Client, PutObjectCommand, PutObjectCommandInput, PutObjectCommandOutput} from '@aws-sdk/client-s3'
import {ConfigService} from '@nestjs/config'
@Injectable()
export class S3Service {

    private region: string;
    private s3 :S3Client;
    private logger = new Logger(S3Service.name)
    constructor(private configService: ConfigService){
        this.region = this.configService.get<string>('S3_REGION') || 'us-east-1';
        this.s3 = new S3Client({
            region: this.region,
            credentials: {
                secretAccessKey: 'X3M79a9U4PSV2jnvbZNwFPgOpb46yv8o4gB0a9xp',
                accessKeyId: 'AKIAWODZ2QALHJ2X2TPX'
            }
        })
    }

    async subirImagen(file:Express.Multer.File, key : string){

        const bucket = this.configService.get<string>('S3_BUCKET');
        const input: PutObjectCommandInput = {
            Body: file.buffer,
            Bucket: bucket,
            Key: key,
            ContentType: file.mimetype,
            ACL: 'public-read', 
            
        };

        try {
            const response: PutObjectCommandOutput = await this.s3.send(
                new PutObjectCommand(input),
            )

            if(response.$metadata.httpStatusCode === 200){
                return `https://${bucket}.s3.${this.region}.amazonaws.com/${key}`;
            }
            throw new Error ('Iamgen no se guardo');
        } catch (error) {
            this.logger.error('No su pudo subir', error)
            throw error
        }
        
    }

}
