import EventHandler from './EventHandler';
import AbstractLinkShareButton from './AbstractLinkShareButton';

export default class ShareButtonFacebook extends AbstractLinkShareButton {
  url: string;
  eventHandler: EventHandler;

  constructor(eventHandler: EventHandler, className: string, url: string) {
    super(eventHandler, className, url);
  }

  createLink(): string {
    return `https://www.facebook.com/sharer.php?u=${this.url}`;
  }
}