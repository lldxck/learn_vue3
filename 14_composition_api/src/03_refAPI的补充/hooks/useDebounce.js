import { customRef } from "vue";

export default function (value) {
  return customRef((track, trigger) => {
    let timer = null;
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          value = newValue;
          trigger();
        }, 1000);
      },
    };
  });
}
