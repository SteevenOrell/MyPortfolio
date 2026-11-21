import ecom1 from '../components/assets-copy/ecom-1-home.webp';
import ecom2 from '../components/assets-copy/ecom-2-apparel.webp';
import ecom3 from '../components/assets-copy/ecom-3-detail.webp';
import ecom4 from '../components/assets-copy/ecom-4-cart.webp';
import wayanda1 from '../components/assets-copy/wayanda-1-home.webp';
import wayanda2 from '../components/assets-copy/wayanda-2-pricing.webp';
import wayanda3 from '../components/assets-copy/wayanda-3-about.webp';
import wayanda4 from '../components/assets-copy/wayanda-4-mission.webp';
import capstoneImg from '../components/assets-copy/CapstoneImages.jpg';
import ecomVideo from '../components/assets-copy/ecom-walkthrough-desktop.webm';
import wayandaVideo from '../components/assets-copy/wayanda-walkthrough-desktop.webm';
import ecomMobileVideo from '../components/assets-copy/ecom-walkthrough-mobile.webm';
import wayandaMobileVideo from '../components/assets-copy/wayanda-walkthrough-mobile.webm';
import vizam1 from '../components/assets-copy/vizam-1-home.webp';
import vizam2 from '../components/assets-copy/vizam-2-work.webp';
import vizam3 from '../components/assets-copy/vizam-3-services.webp';
import vizam4 from '../components/assets-copy/vizam-4-pricing.webp';
import vizamVideo from '../components/assets-copy/vizam-walkthrough-desktop.webm';
import vizamMobileVideo from '../components/assets-copy/vizam-walkthrough-mobile.webm';
import orvane1 from '../components/assets-copy/orvane-1-home.webp';
import orvane2 from '../components/assets-copy/orvane-2-models.webp';
import orvane3 from '../components/assets-copy/orvane-3-configure.webp';
import orvane4 from '../components/assets-copy/orvane-4-gallery.webp';
import orvaneVideo from '../components/assets-copy/orvane-walkthrough-desktop.webm';
import orvaneMobileVideo from '../components/assets-copy/orvane-walkthrough-mobile.webm';
import halvaren1 from '../components/assets-copy/halvaren-1-home.webp';
import halvaren2 from '../components/assets-copy/halvaren-2-services.webp';
import halvaren3 from '../components/assets-copy/halvaren-3-case-studies.webp';
import halvaren4 from '../components/assets-copy/halvaren-4-industries.webp';
import halvarenVideo from '../components/assets-copy/halvaren-walkthrough-desktop.webm';
import halvarenMobileVideo from '../components/assets-copy/halvaren-walkthrough-mobile.webm';
import ostrel1 from '../components/assets-copy/ostrel-1-home.webp';
import ostrel2 from '../components/assets-copy/ostrel-2-projects.webp';
import ostrel3 from '../components/assets-copy/ostrel-3-olive-court.webp';
import ostrel4 from '../components/assets-copy/ostrel-4-studio.webp';
import ostrelVideo from '../components/assets-copy/ostrel-walkthrough-desktop.webm';
import ostrelMobileVideo from '../components/assets-copy/ostrel-walkthrough-mobile.webm';
import synora1 from '../components/assets-copy/synora-1-screens.webp';
import synora2 from '../components/assets-copy/synora-2-screens.webp';
import synora3 from '../components/assets-copy/synora-3-screens.webp';
import synoraVideo from '../components/assets-copy/synora-walkthrough-desktop.webm';
import synoraMobileVideo from '../components/assets-copy/synora-walkthrough-mobile.webm';
import ticktack1 from '../components/assets-copy/ticktack-1-screens.webp';
import ticktack2 from '../components/assets-copy/ticktack-2-screens.webp';
import ticktack3 from '../components/assets-copy/ticktack-3-screens.webp';
import ticktackVideo from '../components/assets-copy/ticktack-walkthrough-desktop.webm';
import ticktackMobileVideo from '../components/assets-copy/ticktack-walkthrough-mobile.webm';
import coplanner1 from '../components/assets-copy/coplanner-1-screens.webp';
import coplanner2 from '../components/assets-copy/coplanner-2-screens.webp';
import coplanner3 from '../components/assets-copy/coplanner-3-screens.webp';
import coplannerVideo from '../components/assets-copy/coplanner-walkthrough-desktop.webm';
import coplannerMobileVideo from '../components/assets-copy/coplanner-walkthrough-mobile.webm';
import projectCoverAlt from '../components/assets-copy/ChatGPT Image May 8, 2026, 04_43_07 PM.png';

// Media and links for every project. The text (title, category, description, tags) lives in
// src/i18n/translations.js under work.items, matched by `id`.
//
// To add a project:
//   1. add an entry here with a new id;
//   2. add { id, title, category, description, tags } with the same id to work.items in BOTH languages.
//
// featured: shown on the home page (keep it to 4). Everything is listed on /projects, in this order.
// live:     the live site. link: the GitHub repository (only when it is public). Either can be left out.
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
    id: 'vizam',
    featured: true,
    live: 'https://vizam-kappa.vercel.app',
    images: [vizam1, vizam2, vizam3, vizam4],
    video: vizamVideo,
    mobileVideo: vizamMobileVideo,
    cover: 'video',
    fit: 'contain',
    detailsVideo: true,
  },
  {
    id: 'orvane',
    featured: true,
    live: 'https://orvane-automotive.vercel.app',
    link: 'https://github.com/SteevenOrell/vizam-06-automotive',
    images: [orvane1, orvane2, orvane3, orvane4],
    video: orvaneVideo,
    mobileVideo: orvaneMobileVideo,
    cover: 'video',
    fit: 'contain',
    detailsVideo: true,
  },
  {
    id: 'halvaren',
    live: 'https://halvaren-tech-consulting.vercel.app',
    link: 'https://github.com/SteevenOrell/vizam-05-tech-consulting',
    images: [halvaren1, halvaren2, halvaren3, halvaren4],
    video: halvarenVideo,
    mobileVideo: halvarenMobileVideo,
    cover: 'video',
    fit: 'contain',
    detailsVideo: true,
  },
  {
    id: 'ostrel',
    live: 'https://ostrel-atelier-studio.vercel.app',
    link: 'https://github.com/SteevenOrell/vizam-02-architecture-studio',
    images: [ostrel1, ostrel2, ostrel3, ostrel4],
    video: ostrelVideo,
    mobileVideo: ostrelMobileVideo,
    cover: 'video',
    fit: 'contain',
    detailsVideo: true,
  },
  {
    id: 'synora',
    live: 'https://vizam-synora-health.vercel.app',
    images: [synora1, synora2, synora3],
    video: synoraVideo,
    mobileVideo: synoraMobileVideo,
    cover: 'video',
    fit: 'contain',
    detailsVideo: true,
  },
  {
    id: 'ticktack',
    link: 'https://github.com/SteevenOrell/vizam-ticktack',
    images: [ticktack1, ticktack2, ticktack3],
    video: ticktackVideo,
    mobileVideo: ticktackMobileVideo,
    cover: 'video',
    fit: 'contain',
    detailsVideo: true,
  },
  {
    id: 'coplanner',
    link: 'https://github.com/SteevenOrell/vizam-coplanner',
    images: [coplanner1, coplanner2, coplanner3],
    video: coplannerVideo,
    mobileVideo: coplannerMobileVideo,
    cover: 'video',
    fit: 'contain',
    detailsVideo: true,
  },
  {
    id: 'pocketmeal',
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
