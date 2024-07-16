import { Injectable } from "@nestjs/common";

@Injectable()
export class BaseService {
  private _fetch = fetch;

  get<T = unknown>(
    pathName: string,
    options?: RequestInit & { searchParams?: { [key: string]: unknown } }
  ) {
    return this.fetch<T>(pathName, options);
  }

  private fetch<T = unknown>(
    pathName: string,
    options?: RequestInit & { searchParams?: { [key: string]: unknown } }
  ) {
    const fullUrl = new URL(`https://pokeapi.co/api/v2${pathName}`);

    if (options?.searchParams) {
      const searchParams = options.searchParams;
      Object.keys(options.searchParams).forEach((key) => {
        const queryParamValue = `${searchParams[key]}`;
        fullUrl.searchParams.set(key, queryParamValue);
      });
    }

    return this._fetch(fullUrl, options)
      .then((rawResponse) => {
        const bodyJson = rawResponse.json() as T;
        return bodyJson;
      })
      .catch((err) => {
        // do not throw exceptions on api call failures, only return null
        // let the services handle it without any side effect
        return Promise.resolve(null);
      });
  }
}
