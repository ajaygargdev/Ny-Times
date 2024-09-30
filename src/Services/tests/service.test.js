/**
 * @jest-environment jsdom
 */

import React from "react";
// import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { mockData } from "./service.mock";
import { getArticles } from "..";
import axiosClient from "../../config/Axios.config";

describe("Service Component", () => {
  let mockAxios;

  jest.spyOn(axiosClient, "get");

  afterAll(() => {
    jest.clearAllMocks(); // Clear any previous mock data between tests
  });

  test("should return success true", async () => {
    axiosClient.get.mockResolvedValue({ status: 200, data: mockData });
    // const mockAxios = new MockAdapter(axios);
    // mockAxios.onGet().reply(200, {status:500,data:mockData});
    const res = await getArticles();
    console.log(res);
    expect(res.success).toBe(true);
    // mockAxios.restore();
  });

  test("should return success false ", async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    axiosClient.get.mockImplementation(() => {
      throw new Error("custom Error");
    }); //mockRejectedValue({status:500,data:undefined });
    // const mockAxios = new MockAdapter(axios);
    // mockAxios.onGet().reply(500, {});
    const res = await getArticles();
    console.log(res);
    expect(res.success).toBe(false);
    // mockAxios.restore();
  });

  test("should return success false when status not 200", async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    axiosClient.get.mockRejectedValue({}); //mockRejectedValue({status:500,data:undefined });
    // const mockAxios = new MockAdapter(axios);
    // mockAxios.onGet().reply(500, {});
    const res = await getArticles();
    console.log(res);
    expect(res.success).toBe(false);
    // mockAxios.restore();
  });
});
