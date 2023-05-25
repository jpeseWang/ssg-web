import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  constructor() {}

  client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken,
  });

  async getAllEntries() {
    const entries = await this.client.getEntries();

    console.log(entries);
  }
}
