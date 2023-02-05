import { Component, OnInit } from '@angular/core';
import AWSS3UploadAshClient from 'aws-s3-upload-ash';
import { UploadResponse } from 'aws-s3-upload-ash/dist/types';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-proyecto-panel',
  templateUrl: './proyecto-panel.component.html',
  styleUrls: ['./proyecto-panel.component.scss']
})
export class ProyectoPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fileSelected: any = null;
  config = {
    bucketName: 'mybucketespeciesarboreas',
    dirName: 'media', /* optional - when use: e.g BUCKET_ROOT/dirName/fileName.extesion */
    region: 'us-east-1',
    mode: 'no-cors',
    
    accessKeyId: environment.AWS_ACCESS_KEY,
    secretAccessKey: environment.AWS_SECRET_KEY,
    s3Url: 'https://mybucketespeciesarboreas.s3.amazonaws.com/'
  }
  S3CustomClient: AWSS3UploadAshClient = new AWSS3UploadAshClient(this.config);

  onChangeFile(event: any) {
    console.log(event.target.files[0])
    this.fileSelected = event.target.files[0]
  }

  async handleSendFile() {
    console.log(environment)
    console.log("handleSendFile")
    await this.S3CustomClient
      .uploadFile(this.fileSelected, this.fileSelected.type, undefined, this.fileSelected.name, "public-read")
      .then((data: UploadResponse) => console.log(data))
      .catch((err: any) => console.error(err))
  }

}
