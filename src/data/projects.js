import ecomWebsite from '../components/assets-copy/EcomWebsite.png';
import ecomWebsite2 from '../components/assets-copy/EcomWebsite2.png';
import ecomWebsite3 from '../components/assets-copy/EcomWebsite3.png';
import ecomWebsite4 from '../components/assets-copy/EcomWebsite4.png';
import wcc1Img from '../components/assets-copy/WccImg1.png';
import wccImg2 from '../components/assets-copy/WccImg2.png';
import wccImg3 from '../components/assets-copy/WccImg3.png';
import wccImg4 from '../components/assets-copy/WccImg4.png';
import chatAppImg from '../components/assets-copy/Capture-ChatApp.JPG';
import capstoneImg from '../components/assets-copy/CapstoneImages.jpg';
import ecomVideo from '../components/assets-copy/EcomWebAppTest.mp4';
import wayandaVideo from '../components/assets-copy/WayandaWebTest.mp4';
import ecomMobileVideo from '../components/assets-copy/Oct-15-2025-1760559225_1722441.mov';
import wayandaMobileVideo from '../components/assets-copy/Oct-15-2025-1760559357_7705660.mov';
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
// tall:     on phones the card plays `mobileVideo`, a portrait recording, in a taller frame.
export const PROJECTS = [
  {
    id: 'wayanda',
    featured: true,
    link: 'https://github.com/SteevenOrell/WayandaCC',
    images: [wcc1Img, wccImg2, wccImg3, wccImg4],
    video: wayandaVideo,
    mobileVideo: wayandaMobileVideo,
    cover: 'video',
    fit: 'contain',
    tall: true,
  },
  {
    id: 'ecommerce',
    featured: true,
    link: 'https://github.com/SteevenOrell/PracticeEcommerceWebsite',
    images: [ecomWebsite, ecomWebsite2, ecomWebsite3, ecomWebsite4],
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
