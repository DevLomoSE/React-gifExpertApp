import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import "@testing-library/jest-dom";

import "../../setupTests";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Testing for <GifGrid />", () => {

  test("should render", () => {

    useFetchGifs.mockReturnValue({
        data: [],
        loading: true  
    });

    const wrapper = shallow(<GifGrid />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should show items while calling useFetchGifs', () => {

    const gifs = [{
        id: 'lomo',
        url: '127.0.0.1/lomo',
        title: 'lomo'
    }]

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: true,
    });
    
    const wrapper = shallow(<GifGrid />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });

  test('should not to be GifGridItem', () => {

      useFetchGifs.mockReturnValue({
        data: [],
        loading: true,
      });

      const wrapper = shallow(<GifGrid />);
      expect(wrapper).toMatchSnapshot();

      expect(wrapper.find("GifGridItem").length).toBe(0);
  });

});
