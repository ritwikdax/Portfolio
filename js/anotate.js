import { annotate } from "https://unpkg.com/rough-notation?module";

const n1 = document.querySelector("#someday");
const n2 = document.querySelector("#trail");
const n3 = document.querySelector("#hills");
const n4 = document.querySelector("#yahats");

const a1 = annotate(n1, { type: "highlight", color: "yellow", padding: 15 });
const a2 = annotate(n2, { type: "underline", color: "red" });
const a3 = annotate(n3, { type: "underline", color: "red" });
const a4 = annotate(n4, { type: "box", color: "orange" });

a1.show();
a2.show();
a3.show();
a4.show();
