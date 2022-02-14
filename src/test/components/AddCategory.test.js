import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("Testing for <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);
  const value = "lord of rings";
  let input = wrapper.find("input");

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
    input = wrapper.find("input");
  });
  test("should render", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change the input", () => {

    input.simulate("change", { target: { value } });
  });

  test("should not render the P", () => {
    const p = wrapper.find("p");

    expect(p).not.toBe(value);
  });

  test("Should not post on submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test('should call setCategories and clean the inputField', () => {
    //const input = wrapper.find("input");
    input.simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith( expect.any(Function));
    
    let Resinput = wrapper.find("input");
    expect(Resinput.prop('value')).toBe('');
  });

});
