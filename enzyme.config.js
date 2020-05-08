/**
 * this is to set up enzyme adapter
 * you don't have to set it up every time you
 * are trying to test with enzyme.
 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});
