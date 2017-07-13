
var React = require('react'),
    jasmine = require('jasmine');
    container = require('../279/src/components/Container.tsx'),
    reactHelper = require('jasmine-react-helper');
    // jasmineReact = require('jasmine-react'),
    // container = require('jsx!../279/build/components/Container');

// console.log(container);
class comp extends React.Component{
    render() {
        // return (
        //     <div>
        //         <p>Hello World! </p>
        //     </div>
        // );
    }
}
var element = reactHelper.render(<h1>JSX content</h1>);

describe('Checking a component', function () {
    it("Should have one child element", function () {        
        expect(element.textContent).toEqual('JSX content');
    })
})