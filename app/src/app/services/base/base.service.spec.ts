import { TestBed } from '@angular/core/testing';

import { BaseService } from './base.service';

describe('BaseService', () => {
  let service: BaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it("should GET a success result", async () => {
  //   // given
  //   const expected = [{ name: "test-name", url: "test-url" }];
  //   const fetchMock = async () => {
  //     return {
  //       json: async () => expected,
  //     };
  //   };
  //   (baseService as any)._fetch = fetchMock;
  //   // when
  //   const result = await baseService.get("/foo");
  //   // then
  //   expect(result).toBe(expected);
  // });

  // it("should GET an error result", async () => {
  //   // given
  //   const expected = null;
  //   const fetchMock = () => Promise.reject("test rejection");
  //   (baseService as any)._fetch = fetchMock;
  //   // when
  //   const result = await baseService.get("/foo");
  //   // then
  //   expect(result).toBe(expected);
  // });
});
