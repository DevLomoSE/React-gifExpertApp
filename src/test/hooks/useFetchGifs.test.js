import { renderHook } from "@testing-library/react-hooks";
const { useFetchGifs } = require("../../hooks/useFetchGifs");

describe("Testing for custom hook useFetchGif", () => {
  const category = "lord of the rings";
  test("should return initial state", async() => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test('should return img array and loading flag as false', async() => {
      const { result, waitForNextUpdate } = renderHook(() =>
        useFetchGifs(category)
      );
      await waitForNextUpdate();

      const { data, loading } = result.current;

      expect(data.length).toBe(10);
      expect(loading).not.toBeTruthy();
  });

});
