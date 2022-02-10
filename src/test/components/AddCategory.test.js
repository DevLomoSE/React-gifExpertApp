import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("Testing for <AddCategory />", () => {
  const setCategories = () => {};
  test("should render", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    
    expect(wrapper).toMatchSnapshot();
  });
});
