export const demoMixin = {
  data() {
    return {
      message: "demoMixin的message",
    };
  },
  created() {
    console.log("demoMixin created");
  },
  methods: {
    foo() {
      console.log("demoMixin foo");
    },
  },
};
