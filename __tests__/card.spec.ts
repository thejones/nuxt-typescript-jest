import {} from "jest";
import Vue from "vue";
import { mount, shallow } from "vue-test-utils";
import { createRenderer } from "vue-server-renderer";
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

  it("has received {person} as the message property", () => {
    expect(vm.person).toEqual({
      id: 2,
      first_name: "Alex",
      last_name: "Jones"
    });
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
