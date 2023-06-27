import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private apiConfig: ApiConfigService) {}

  getBlogById(id: string) {
    return this.apiConfig.get<any>(`blogs/${id}`);
  }

  likeBlog(id: string) {
    return this.apiConfig.post<any>(`blogs/${id}/like`, {});
  }

  addComment(id: string, value: string) {
    return this.apiConfig.post<any>(`blogs/${id}/comment`, { content: value });
  }
}
