import React from "react";
import { shallow } from "enzyme";
import App from "./../App";
import {onAddition,onSubtraction} from './../Arithmetic'


// jest
describe('Test addition and subtraction', () => {
    test('should add', () => {
        const a = 2;
        const b = 3;
        const sum = onAddition(a,b);
        expect(sum).toEqual(5)
    })

    test("should subtract", () => {
       const a = 5;
       const b = 3;
       const sum = onSubtraction(a, b);
       expect(sum).toEqual(2);
    });
})


///jest+enzyme
describe("App", () => {
  it("renders correctly", () => {
      shallow(<App />);
  });
  it("includes two buttons", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("button").length).toEqual(2);
  });
  test("should increment", () => {
    const wrapper = shallow(<App />);
      wrapper.find('button[id="increment"]').prop("onClick")({
          target: {
            value:'Increment',
        }
    });
     expect(wrapper.find('p').prop("value")).toEqual(
       1
     );
  });
  test("should decrement", () => {
    const wrapper = shallow(<App />);
    wrapper.find('button[id="decrement"]').prop("onClick")({
      target: {
        value: "Decrement",
      },
    });
    expect(wrapper.find("p").prop("value")).toEqual(-1);
  });
});
