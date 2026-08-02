import { IProjectCategoriesAnchors } from "../_types/project";
import { Dictionary } from "../../../i18n/Context";

export const PROJECT_CATEGORY_ID_DIGITAL_PRODUCT = "digital-product";
export const PROJECT_CATEGORY_ID_GAME_DEVELOPMENT = "game-development";
export const PROJECT_CATEGORY_ID_FILM_PRODUCTION = "film-production";

export const PROJECT_CATEGORIES_ANCHORS: (dico: Dictionary) => Array<IProjectCategoriesAnchors> = (dico) => [
	{
		label: dico.common.categories.digital.default,
		headline: dico.common.categories.digital.headline,
		anchor: PROJECT_CATEGORY_ID_DIGITAL_PRODUCT
	},
	{
		label: dico.common.categories.game.default,
		headline: dico.common.categories.game.headline,
		anchor: PROJECT_CATEGORY_ID_GAME_DEVELOPMENT
	},
	{
		label: dico.common.categories.film.default,
		headline: dico.common.categories.film.headline,
		anchor: PROJECT_CATEGORY_ID_FILM_PRODUCTION
	},
];


export const THUMBNAIL_WIDTH = 500;
export const THUMBNAIL_HEIGHT = 437;
export const THUMBNAIL_WIDTH_WIDE = 1120;
export const MOBILE_WIDTH = 360;
export const TABLET_WIDTH = 768;
export const SIZE_ICON_SM = "16px";
export const SIZE_ICON_MD = "24px"
export const SIZE_ICON_L = "46px";
