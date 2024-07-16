import { BaseService } from "./base-service";

describe("BaseService", () => {
  const foo = "foo";
  let baseService: BaseService;

  beforeEach(async () => {
    baseService = new BaseService();
  });

  describe("list", () => {
    it("should GET a success result", async () => {
      // given
      const expected = [{ name: "test-name", url: "test-url" }];
      const fetchMock = async () => {
        return {
          json: async () => expected,
        };
      };
      (baseService as any)._fetch = fetchMock;
      // when
      const result = await baseService.get("/foo");
      // then
      expect(result).toBe(expected);
    });

    it("should GET a success result whe using searchParams", async () => {
      // given
      const expected = [{ name: "test-name", url: "test-url" }];
      const fetchMock = async () => {
        return {
          json: async () => expected,
        };
      };
      (baseService as any)._fetch = fetchMock;
      // when
      const result = await baseService.get("/foo", { searchParams: { foo } });
      // then
      expect(result).toBe(expected);
    });

    it("should GET an error result", async () => {
      // given
      const expected = null;
      const fetchMock = () => Promise.reject("test rejection");
      (baseService as any)._fetch = fetchMock;
      // when
      const result = await baseService.get("/foo");
      // then
      expect(result).toBe(expected);
    });
  });
});
