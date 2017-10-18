import {} from "jest";
import Vue from "vue";
import { shallow } from "vue-test-utils";
import Card from "../components/Card";

describe("Card component", () => {
  let vm;

  beforeEach(() => {
    const Constructor = Vue.extend(Card);
    vm = new Constructor({
      propsData: {
        person: {
          id: 2,
          first_name: "Alex",
          last_name: "Jones"
        }
      }
    }).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
