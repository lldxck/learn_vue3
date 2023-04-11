import { add, sub } from "./utils/math";
import { time, price } from "./utils/format";

import axios from "axios";
import _ from "lodash";

import msgImg from "./img/msg01.png";

console.log(add(10, 20));
console.log(sub(10, 20));

console.log(time.format("2023-04-11"));
console.log(time.name);

console.log(price.format(123));

console.log(_.join(["abc", "def"]));

console.log(whyName);
console.log(whyAge);
console.log(whyHeight);

whyFoo();

const p = new Person("why", 18);
console.log(p);

$.ajax({});
