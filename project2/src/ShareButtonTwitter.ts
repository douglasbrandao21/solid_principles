import EventHandler from './EventHandler';
import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonTwitter extends AbstractLinkShareButton {
  url: string;
  eventHandler: EventHandler;

  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }

  createLink(): string {
    return `https://twitter.com/share?url=${this.url}`;
  }
}