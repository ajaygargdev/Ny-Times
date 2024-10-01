/**
 * @jest-environment jsdom
 */

import { mockData } from "./service.mock";
import { getArticles } from "..";
import axiosClient from "../../config/Axios.config";

describe("Service Component", () => {
  jest.spyOn(axiosClient, "get");

  afterAll(() => {
    jest.clearAllMocks();
  });

  test("should return success true", async () => {
    axiosClient.get.mockResolvedValue({ status: 200, data: mockData });
    const res = await getArticles();
    expect(res.success).toBe(true);
  });

  test("should return success false ", async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    axiosClient.get.mockImplementation(() => {
      throw new Error("custom Error");
    });
    const res = await getArticles();
    expect(res.success).toBe(false);
  });

  test("should return success false when status not 200", async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    axiosClient.get.mockRejectedValue({});
    const res = await getArticles();
    expect(res.success).toBe(false);
  });
});
