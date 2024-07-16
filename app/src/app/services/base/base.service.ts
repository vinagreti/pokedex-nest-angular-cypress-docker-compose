import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  get<T = unknown>(pathName: string, options?: RequestInit) {
    return this.fetch<T>(pathName, options);
  }

  private fetch<T = unknown>(pathName: string, options?: RequestInit) {
    const fullUrl = `http://localhost:3000/api${pathName}`;

    return fetch(fullUrl, options).then((rawResponse) => {
      const error = !rawResponse.ok;
      if (error) {
        return null;
      } else {
        const bodyJson = rawResponse.json() as T;
        return bodyJson;
      }
    });
  }
}
