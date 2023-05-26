import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
})
export class BlogsComponent implements OnInit {
  constructor(private readonly contenfulService: ContentfulService) {}

  blogPosts: Observable<any> | undefined;

  ngOnInit() {
    this.blogPosts = this.contenfulService.getAllEntries();
  }

  adsa = {
    "metadata": {
      "tags": []
    },
    "sys": {
      "space": {
        "sys": {
          "type": "Link",
          "linkType": "Space",
          "id": "74ik00tcnh7w"
        }
      },
      "id": "7ty87tFVywdvToFIG7yn2g",
      "type": "Asset",
      "createdAt": "2023-05-25T02:57:33.355Z",
      "updatedAt": "2023-05-25T02:57:33.355Z",
      "environment": {
        "sys": {
          "id": "master",
          "type": "Link",
          "linkType": "Environment"
        }
      },
      "revision": 1,
      "locale": "en-US"
    },
    "fields": {
      "title": "cover",
      "description": "",
      "file": {
        "url": "//images.ctfassets.net/74ik00tcnh7w/7ty87tFVywdvToFIG7yn2g/ba966726d1a1ad1daed36b5b5569a410/image.png",
        "details": {
          "size": 197007,
          "image": {
            "width": 1920,
            "height": 1200
          }
        },
        "fileName": "image.png",
        "contentType": "image/png"
      }
    }
  }
}
