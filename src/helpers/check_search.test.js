import { term } from "./check_search";

describe('check function', () => {
   
    it('should return correct string ater pasing object', () => {
        const data = {lat: 54, lng:56}
        const output = `lat=${data.lat}&lon=${data.lng}`;
        expect(term(data)).toEqual(output)
    });
    it('should return correct string ater pasing string', () => {
        const data = "London,uk"
        const output = `q=${data}`;
        expect(term(data)).toEqual(output)
    });
});