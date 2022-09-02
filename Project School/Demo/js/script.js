import html from './component/renderHTML.js'
import { $, $$} from './component/query.js'


// component

function Navbarindex() {
  return html`
    <ul>
      <li><a href="#Header">[Home]</a></li>
      <li><a href="#concent">[Concent]</a></li>
      <li><a href="#footer">[Footer]</a></li>
      <li><a href="./trangchu.html">[Trang Chủ]</a></li>
    </ul>
  `;
}








//Render html navBar Index file
$("#navbar").innerHTML = Navbarindex();
