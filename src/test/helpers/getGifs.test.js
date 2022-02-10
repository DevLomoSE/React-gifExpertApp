import getGifs from "../../helpers/getGifs";

describe('Testing GetGifs with fetch', () => {
    test('should retreive 10 items', async() => {
        const gifs = await getGifs('rambo');
        expect(gifs.length).toBe(10)
    });

    test("should not retreive items", async () => {
      const gifs = await getGifs("");
      expect(gifs.length).toBe(0);
    });
});