import config from 'config';
import { NotionAPI } from 'notion-client';
import { Collection, ExtendedRecordMap, Role } from 'notion-types';
import { Logger } from 'tslog';

type NotionMapEntry<T> = {
  role: Role;
  value: T;
};

const notionToken: string = config.get<string>('notion.NOTION_V2_TOKEN');
const pageID: string = config.get<string>('notion.PAGE_INDEX_ID');
const logger: Logger = new Logger();
const notion: NotionAPI = new NotionAPI({
  authToken: notionToken
});

// eslint-disable-next-line @typescript-eslint/no-floating-promises
notion.getPage(pageID).then((m: ExtendedRecordMap) => {
  Object.entries(m.collection).forEach(([k, v]: [string, NotionMapEntry<Collection>]) => {
    logger.info(k);
    logger.info(v);
  });
});
