import dayjs from "dayjs";

export default function (app) {
  let format = "YYYY-MM-DD HH-mm:ss";
  app.directive("format-time", {
    created(el, binding) {
      if (binding.value) {
        format = binding.value;
      }
    },
    mounted(el) {
      const textContent = el.textContent;
      console.log(textContent);
      let timestamp = parseInt(textContent);
      if (textContent.length === 10) {
        timestamp = timestamp * 1000;
      }

      el.textContent = dayjs(timestamp).format(format);
    },
  });
}
