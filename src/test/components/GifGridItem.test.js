import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";
import "@testing-library/jest-dom";

import "../../setupTests";

describe("testing for <GifGridItem />", () => {

  const titulo = 'titulo';
  const url = "https://4.bp.blogspot.com/-huuOLwohWYo/UngFPvvlpHI/AAAAAAAAb_o/DObAVnXFESo/s1600/hobbit-desolation-of-smaug-tauriel-poster.jpg";
  const wrapper = shallow(<GifGridItem 
    title={titulo}
    img={url} />);

  test("should render gifGridItem", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should render 'titulo'", () => {
    let p = wrapper.find('p').text().trim();

    expect(p).toBe(titulo);
  });

  test("img should have url and alt", () => {
    let img = wrapper.find('img');
    
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(titulo);
  });

  test('should have animated__fadeIn', () => {
    let div = wrapper.find('div');
    
    expect(div.prop("className")).toMatch(/animate__zoomInUp/);
    expect(div.hasClass("animate__zoomInUp")).toBe(true);
  });

});
