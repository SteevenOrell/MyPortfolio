import { useCallback, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import FooterSectionMP4 from './assets-copy/lightning-bulb.mp4';
import LogoImg from './assets-copy/SteevenWeminLogo.jpg';
import { useLanguage } from '../i18n/LanguageContext';
import { Parallax, Reveal } from './motion';
import SectionHeader from './SectionHeader';
import Notice from './Notice';
import { SectionLink } from '../router';
import { ArrowUpRight } from './icons';

const NOTICE_TYPES = { sent: 'success', failed: 'error', tooFast: 'warning' };

const SOCIALS = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/orell-wemin-8519a5179' },
    { name: 'GitHub', href: 'https://github.com/SteevenOrell/' },
];

function Footer() {
    const { t } = useLanguage();
    const f = t.footer;
    const form = useRef();
    const [sending, setSending] = useState(false);
    // Which notification is showing; the text is looked up at render so it follows the language switch.
    const [notice, setNotice] = useState(null);
    const showNotice = kind => setNotice({ kind, id: Date.now() });
    const closeNotice = useCallback(() => setNotice(null), []);

    function sendEmail(e) {
        e.preventDefault();
        if (sending) return;

        // Honeypot: real visitors never see or fill this field, bots usually do.
        if (form.current.elements.website.value) {
            form.current.reset();
            return;
        }

        setSending(true);
        emailjs
            .sendForm(
                import.meta.env.REACT_APP_EMAILJS_SERVICE_ID,
                import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY,
                    // Refuse to send from headless browsers (automated bots).
                    blockHeadless: true,
                    // Allow at most one message every 30 seconds from the same browser.
                    limitRate: { id: 'contact-form', throttle: 30000 },
                }
            )
            .then(
                () => {
                    showNotice('sent');
                    form.current.reset();
                },
                (error) => {
                    // EmailJS answers 429 when the rate limit above is hit.
                    showNotice(error && error.status === 429 ? 'tooFast' : 'failed');
                }
            )
            .finally(() => setSending(false));
    }

    const columns = [
        { title: f.overview, links: [['#about', f.aboutMe], ['#goals', f.careerGoals], ['#ContactForm', f.contact]] },
        { title: f.technical, links: [['#experience', f.work], ['#skills', f.skills], ['#work', f.projects]] },
    ];

    return (
        <>
            <Notice
                notice={notice && {
                    id: notice.id,
                    type: NOTICE_TYPES[notice.kind],
                    title: f[`${notice.kind}Title`],
                    text: f[notice.kind],
                }}
                onClose={closeNotice}
                closeLabel={f.closeNotice}
            />

            <section id='ContactFormDiv' className='sw-section sw-contact'>
                {/* Background video: fills the whole section on every screen size. */}
                <div className='sw-contact__bg' aria-hidden='true'>
                    <Parallax speed={0.12} className='sw-contact__bg-inner'>
                        <video autoPlay loop muted playsInline preload='metadata' src={FooterSectionMP4} />
                    </Parallax>
                </div>

                <div className='sw-container'>
                    <SectionHeader index={f.index} label={f.label} />

                    <div className='sw-contact__grid'>
                        <div className='sw-contact__intro'>
                            <Reveal as='h2' className='sw-contact__title'>{f.contactTitle}</Reveal>
                            <Reveal as='p' className='sw-contact__text' delay={0.08}>{f.intro}</Reveal>
                            <Reveal as='ul' className='sw-contact__socials' delay={0.14}>
                                {SOCIALS.map(s => (
                                    <li key={s.name}>
                                        <a className='sw-link' href={s.href} target='_blank' rel='noreferrer'>{s.name} <ArrowUpRight /></a>
                                    </li>
                                ))}
                            </Reveal>
                        </div>

                        <Reveal delay={0.1}>
                            <form id='ContactForm' className='sw-form' ref={form} onSubmit={sendEmail} method='POST'>
                                <div className='sw-form__field'>
                                    <label htmlFor='cf-name'>{f.name}</label>
                                    <input id='cf-name' type='text' placeholder={f.namePlaceholder} name='name' required maxLength={100} autoComplete='name' />
                                </div>
                                <div className='sw-form__field'>
                                    <label htmlFor='cf-email'>{f.email}</label>
                                    <input id='cf-email' type='email' placeholder={f.emailPlaceholder} name='email' required maxLength={254} autoComplete='email' />
                                </div>
                                <div className='sw-form__field'>
                                    <label htmlFor='message'>{f.message}</label>
                                    <textarea id='message' placeholder={f.messagePlaceholder} rows='6' name='message' required minLength={10} maxLength={5000} />
                                </div>
                                {/* Honeypot field, hidden from people and screen readers */}
                                <div aria-hidden='true' style={{ position: 'absolute', left: '-10000px', width: '1px', height: '1px', overflow: 'hidden' }}>
                                    <label>Website<input type='text' name='website' tabIndex={-1} autoComplete='off' defaultValue='' /></label>
                                </div>
                                <button type='submit' className='sw-btn sw-btn--primary sw-form__submit' disabled={sending}>
                                    {sending ? f.sending : f.submit} <span aria-hidden='true'>→</span>
                                </button>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </section>

            <footer id='Footer1' className='sw-footer'>
                <div className='sw-container'>
                    <div className='sw-footer__top'>
                        <SectionLink className='sw-footer__logo' hash='#top' aria-label={t.nav.home}>
                            <img src={LogoImg} alt='' width='120' height='120' />
                        </SectionLink>
                        <nav className='sw-footer__cols' aria-label='Footer'>
                            {columns.map(col => (
                                <div key={col.title}>
                                    <h3 className='sw-footer__head'>{col.title}</h3>
                                    <ul>
                                        {col.links.map(([href, label]) => <li key={href}><SectionLink hash={href}>{label}</SectionLink></li>)}
                                    </ul>
                                </div>
                            ))}
                            <div>
                                <h3 className='sw-footer__head'>{f.social}</h3>
                                <ul>
                                    {SOCIALS.map(s => <li key={s.name}><a href={s.href} target='_blank' rel='noreferrer'>{s.name}</a></li>)}
                                </ul>
                            </div>
                        </nav>
                    </div>

                    <div id='AllRightReserved' className='sw-footer__bottom'>
                        <p>© {new Date().getFullYear()} {f.rights}</p>
                        <a className='sw-link' href='#top'>{f.backToTop} <span aria-hidden='true'>↑</span></a>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
