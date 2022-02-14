const { shallow } = require("enzyme");
const { default: GifExpertApp } = require("../GifExpertApp");

describe('Testing for component <GifExpertApp />', () => {

    test('should render', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should list of categories', () => {
        const categories = ['lord of the rings', 'the hobbit'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />)

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});