import { Component, OnInit } from '@angular/core';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  fileSelected: any = null;
  config = {
    bucketName: 'mybucketespeciesarboreas',
    dirName: 'media', /* optional - when use: e.g BUCKET_ROOT/dirName/fileName.extesion */
    region: 'us-east-1',
    accessKeyId: 'AKIAWODZ2QALHJ2X2TPX',
    secretAccessKey: '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',
    s3Url: 'https://mybucketespeciesarboreas.s3.amazonaws.com/',

  }
  S3CustomClient: AWSS3UploadAshClient = new AWSS3UploadAshClient(this.config);

  ngOnInit(): void {
  }

  
  onChangeFile(event: any) {
    console.log(event.target.files[0])
    this.fileSelected = event.target.files[0]
  }

  async handleSendFile() {
    console.log("handleSendFile")
    let response = "";
    await this.S3CustomClient
      .uploadFile(this.fileSelected, this.fileSelected.type, undefined, this.fileSelected.name, "public-read")
      .then((data: UploadResponse) => console.log(data))
      .catch((err: any) => {
        console.error(err); console.log('Calidad')})
      }

}
