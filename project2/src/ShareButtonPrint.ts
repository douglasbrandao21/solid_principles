import EventHandler from './EventHandler';
import AbstractShareButton from './AbstractShareButton';

export default class ShareButtonPrint extends AbstractShareButton {
  url: string;
  eventHandler: EventHandler;

  constructor(eventHandler: EventHandler, className: string) {
    super(eventHandler, className);
  }

  createAction() {
    return () => window.print();
  }
}