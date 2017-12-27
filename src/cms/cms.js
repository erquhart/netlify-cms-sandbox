import CMS from "netlify-cms";

import { SlidesControl, SlidesPreview } from "./Slides";
import { MenuControl, MenuPreview } from "./Menu";

CMS.registerWidget("slides", SlidesControl, SlidesPreview);
CMS.registerWidget("menu", MenuControl, MenuPreview);
