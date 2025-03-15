import gfm from 'remark-gfm';
import parse from 'remark-parse';
import stringify from 'remark-stringify';
import removeComments from 'remark-remove-comments';
import {unified} from 'unified';

import {collectDefinitions, removeDefinitions} from './definitions';
import createTelegramifyOptions from './telegramify';

const convert = (markdown, unsupportedTagsStrategy) => {
	const definitions = {};

	const telegramifyOptions = createTelegramifyOptions(definitions, unsupportedTagsStrategy);

	return unified()
		.use(parse)
		.use(gfm)
		.use(removeComments)
		.use(collectDefinitions, definitions)
		.use(removeDefinitions)
		.use(stringify, telegramifyOptions)
		.processSync(markdown)
		.toString()
		.replace(/<!---->\n/gi, '');
};

export default convert;
