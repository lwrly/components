import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lwrly-images',
  template: `
<label for="post-images"><strong>Images</strong></label>
<div id="post-images" class="lwrly-group border rounded p-2">
  <div class="row">
    <div class="col">
      <label for="posted-images">Already Uploaded (click to preview)</label>
      <div id="posted-images" class="border rounded px-2 py-3">
        <ul class="lwrly-image-list" [hidden]="images.length == 0">
          <li *ngFor="let image of images; index as i">
            <a class="lwrly-view-image text-decoration-none" (click)="viewImage(i)">
              <i class="fas fa-image"></i>&nbsp;{{ image.name }}
            </a>
            <span class="mx-3 text-center">{{ image.width }}x{{ image.height }}</span>
            <a class="lwrly-view-image text-decoration-none float-right" (click)="deleteImage(i)">
              <i class="fa fa-times"></i>&nbsp;Remove
            </a>
          </li>
        </ul>
        <strong [hidden]="images.length > 0">No images uploaded yet.</strong>
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
          <label for="image-uploader">Upload</label>
          <div class="form-group border rounded p-2" id="image-uploader">
            <div class="custom-file">
              <input type="file" class="custom-file-input" id="job-choose-file" (change)="imageUpload($event)">
              <label class="custom-file-label" for="job-choose-file">Choose file...</label>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="border rounded p-2" [hidden]="!viewingImage || images.length == 0">
            <img id="blog-image-selector" class="w-100 h-100 mw-100 mh-100">
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  styles: [
  ]
})
export class ImageManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  public imageUpload(file: any) {
    if(file.target.files && file.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          const height = img.naturalHeight;
          const width = img.naturalWidth;
          if(this.images.length == 0 && (width != 1200 || height != 630)) {
            alert("The first image uploaded is the cover image, so its size must be EXACTLY 1200x630 pixles.");
            return;
          } 
          let bi = new BlogImage(img.src);
          bi.height = height;
          bi.width = width;
          this.images.push(bi);
        }
      }

      reader.readAsDataURL(file.target.files[0]);
      this.ref.detectChanges();
    }
  }

  public deleteImage(i: number) {
    if(i > this.images.length) {
      return;
    }
    this.images.splice(i, 1);
    this.viewingImage = false;
    this.ref.detectChanges();
  }

  public viewImage(i: number) {
    this.viewingImage = true;
    $('#blog-image-selector').attr('src', this.images[i].blob);
    this.ref.detectChanges();
  }
}
