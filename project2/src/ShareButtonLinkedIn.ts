import EventHandler from './EventHandler';
import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
  url: string;
  eventHandler: EventHandler;

  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }

  createLink(): string {
    return `https://www.linkedin.com/shareArticle?url=${this.url}`;
  }
}