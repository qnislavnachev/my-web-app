import React from "react";
import {shallow} from "enzyme";
import ApplicationBar from "./ApplicationBar";

describe('ApplicationBar tests', () => {
    it('renders application bar', () => {
       const component = shallow(<ApplicationBar/>);

       expect(component).toHaveLength(1);
    });
});