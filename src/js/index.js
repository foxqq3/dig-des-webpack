// import Img from '@/assets/images/img.jpeg';
import createElement from "./helpers.js";
import "@/scss/index.scss";
import "@/js/register.js";

//components
import { taskItem } from "./components/task-item/index.js";
import { projectItem } from "./components/project-item/index.js";
import { noneItem } from "./components/none-item/index.js";
import { navigationPanel } from "@/js/components/navigation-panel/index.js";

// const newElement = createElement("div", {
//   id: "content",
//   innerHTML: `
//     <ul class="some-class">
//       <li>Item 1</li>
//       <li>Item 2</li>
//       <li>Item 3</li>
//       <li>Item 4</li>
//       <li>Item 5</li>
//     </ul>
//   `,
// });

const page = createElement("div", {
  id: "page",
  className: "page",
  innerHTML: `${navigationPanel.innerHTML}
   <div class="section-item">
   ${taskItem.innerHTML}
   ${projectItem.innerHTML}
   ${noneItem.innerHTML}
   </div>`,
});

// document.body.appendChild(navigationPanel);
document.body.appendChild(page);
