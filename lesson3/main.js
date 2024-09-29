import Wrapper from "./constructor/Wrapper.js";
import content from "./modules/content.js";
import footer from "./modules/footer.js";
import header from "./modules/header.js";
import sidebar from "./modules/sidebar.js";
import newContent from "./modules/newCardsContent.js";

new Wrapper('#head', [header]);
new Wrapper('#card', [content, newContent]);
new Wrapper('#foot', [footer]);
new Wrapper('#sidebarSide', [sidebar]);