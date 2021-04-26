
import DOMEventHandler from './DOMEventHandler';

import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedIn from './ShareButtonLinkedIn';
import ShareButtonPrint from './ShareButtonPrint';

const eventHandler = new DOMEventHandler();

const twitter = new ShareButtonTwitter(eventHandler, '.twitter', 'https://www.youtube.com/channel/UCXikXRPoND8J_OzLPi91cew');
twitter.bind();

const facebook = new ShareButtonFacebook(eventHandler, '.facebook', 'https://www.youtube.com/channel/UCXikXRPoND8J_OzLPi91cew');
facebook.bind();

const linkedin = new ShareButtonLinkedIn(eventHandler, '.linkedin', 'https://www.youtube.com/channel/UCXikXRPoND8J_OzLPi91cew');
linkedin.bind();

const print = new ShareButtonPrint(eventHandler, '.print');
print.bind();