import ecom1 from '../components/assets-copy/ecom-1-home.webp';
import ecom2 from '../components/assets-copy/ecom-2-apparel.webp';
import ecom3 from '../components/assets-copy/ecom-3-detail.webp';
import ecom4 from '../components/assets-copy/ecom-4-cart.webp';
import wayanda1 from '../components/assets-copy/wayanda-1-home.webp';
import wayanda2 from '../components/assets-copy/wayanda-2-pricing.webp';
import wayanda3 from '../components/assets-copy/wayanda-3-about.webp';
import wayanda4 from '../components/assets-copy/wayanda-4-mission.webp';
import chatAppImg from '../components/assets-copy/Capture-ChatApp.JPG';
import capstoneImg from '../components/assets-copy/CapstoneImages.jpg';
import ecomVideo from '../components/assets-copy/ecom-walkthrough-desktop.webm';
import wayandaVideo from '../components/assets-copy/wayanda-walkthrough-desktop.webm';
import ecomMobileVideo from '../components/assets-copy/ecom-walkthrough-mobile.webm';
import wayandaMobileVideo from '../components/assets-copy/wayanda-walkthrough-mobile.webm';
import projectCoverAlt from '../components/assets-copy/ChatGPT Image May 8, 2026, 04_43_07 PM.png';

// Media and links for every project. The text (title, category, description, tags) lives in
// src/i18n/translations.js under work.items, matched by `id`.
//
// To add a project:
//   1. add an entry here with a new id;
//   2. add { id, title, category, description, tags } with the same id to work.items in BOTH languages.
//
// featured: shown on the home page (keep it to 4). Everything is listed on /projects.
// cover:    'video' to play `video` on the card, or an image to show instead.
// detailsVideo: also play the video in the details panel.
// fit:      'contain' shows the whole video / image on the card (zoomed out) instead of filling and cropping.
// mobileVideo: played in the details panel on phones (with detailsVideo).
export const PROJECTS = [
  {
    id: 'wayanda',
    featured: true,
    link: 'https://github.com/SteevenOrell/WayandaCC',
    images: [wayanda1, wayanda2, wayanda3, wayanda4],
    video: wayandaVideo,
    mobileVideo: wayandaMobileVideo,
    cover: 'video',
    fit: 'contain',
  },
  {
    id: 'ecommerce',
    featured: true,
    link: 'https://github.com/SteevenOrell/PracticeEcommerceWebsite',
    images: [ecom1, ecom2, ecom3, ecom4],
    video: ecomVideo,
    mobileVideo: ecomMobileVideo,
    cover: 'video',
    fit: 'contain',
    detailsVideo: true,
  },
  {
    id: 'chat',
    featured: true,
    link: 'https://github.com/SteevenOrell/chat-app-assignment',
    images: [chatAppImg],
    cover: projectCoverAlt,
  },
  {
    id: 'pocketmeal',
    featured: true,
    link: 'https://github.com/SteevenOrell/CapstoneProject-PocketMealSystem',
    images: [capstoneImg],
    cover: projectCoverAlt,
  },
];

// Joins the media with the text for the current language; projects without text are skipped.
export function withText(items) {
  return PROJECTS.flatMap(media => {
    const text = items.find(item => item.id === media.id);
    return text ? [{ ...text, ...media }] : [];
  });
}
