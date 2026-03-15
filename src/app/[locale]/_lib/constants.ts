import { IProjectCategoriesAnchors } from "../_types/project";
import { Dictionary } from "../../../i18n/Context";

export const PROJECT_CATEGORY_ID_DIGITAL_PRODUCT = "digital-product";
export const PROJECT_CATEGORY_ID_GAME_DEVELOPMENT = "game-development";
export const PROJECT_CATEGORY_ID_FILM_PRODUCTION = "film-production";

export const PROJECT_CATEGORIES_ANCHORS: (dico: Dictionary) => Array<IProjectCategoriesAnchors> = (dico) => [
	{
		label: dico.common.categories.digital,
		anchor: PROJECT_CATEGORY_ID_DIGITAL_PRODUCT
	},
	{
		label: dico.common.categories.game,
		anchor: PROJECT_CATEGORY_ID_GAME_DEVELOPMENT
	},
	{
		label: dico.common.categories.film,
		anchor: PROJECT_CATEGORY_ID_FILM_PRODUCTION
	},
];


export const THUMBNAIL_WIDTH = 500;
export const THUMBNAIL_HEIGHT = 437;
export const THUMBNAIL_WIDTH_WIDE = 1120;
