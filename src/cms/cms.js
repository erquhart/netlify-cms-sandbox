import CMS from "netlify-cms";

import { SlidesControl, SlidesPreview } from "./Slides";
import { MenuItemsControl } from "./MenuItem";
import { MenuItemControl } from "./MenuItem";

CMS.registerWidget("slides", SlidesControl, SlidesPreview);
CMS.registerWidget("menuItems", MenuItemsControl);
CMS.registerWidget("menuItem", MenuItemControl);
