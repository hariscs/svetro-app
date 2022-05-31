import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../../client';
import { PortableText } from '@portabletext/react';
import styles from './SingleBlog.module.css';
import {
	BsInstagram,
	BsFacebook,
	BsLinkedin,
	BsTwitter,
	BsYoutube,
} from 'react-icons/bs';
import { IconContext } from 'react-icons';
import { Modal } from '../../components';

const SingleBlog = () => {
	const [singleBlog, setSingleBlog] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		const query = `*[slug.current=="${slug}"]{
			title,
			body,
			slug,
			mainImage
		}`;
		client
			.fetch(query)
			.then((blog) => setSingleBlog(blog[0]))
			.catch((err) => console.log(err));
	}, [slug]);

	if (!singleBlog) return <div className='container'>Loading...</div>;

	return (
		<main className='container'>
			<div className={styles.blog}>
				{singleBlog && (
					<article>
						<header className={styles.blog__header}>
							<h2 className={styles.blog__title}>{singleBlog.title}</h2>
							<img
								src={urlFor(singleBlog.mainImage.asset._ref)}
								alt={singleBlog.title}
							/>
						</header>
						<main className={styles.blog__body}>
							<PortableText value={singleBlog.body} />
						</main>
					</article>
				)}
				<aside className={styles.blog__sidebar}>
					<div className={styles.sidebar__info}>
						<h3 className={styles.sidebar__title}>Find Us here</h3>
					</div>

					<div className={styles.iconFlex}>
						<IconContext.Provider
							value={{ color: '#1e42a1', className: styles.icon }}
						>
							<a
								href='https://www.youtube.com/channel/UC9vZdbs9RKepzDw2ZnjJqzA'
								className={styles.footer__iconContainer}
							>
								<BsYoutube />
							</a>
						</IconContext.Provider>

						<a
							href='https://facebook.com/svetro.official'
							className={styles.footer__iconContainer}
						>
							<IconContext.Provider
								value={{ color: '#1e42a1', className: styles.icon }}
							>
								<BsFacebook />
							</IconContext.Provider>
						</a>
						<a
							href='https://twitter.com/Svetro_Official'
							className={styles.footer__iconContainer}
						>
							<IconContext.Provider
								value={{ color: '#1e42a1', className: styles.icon }}
							>
								<BsTwitter />
							</IconContext.Provider>
						</a>
						<a
							href='https://www.linkedin.com/in/svetro-ecommerce-754335230/'
							className={styles.footer__iconContainer}
						>
							<IconContext.Provider
								value={{ color: '#1e42a1', className: styles.icon }}
							>
								<BsLinkedin />
							</IconContext.Provider>
						</a>
						<a
							href='https://www.instagram.com/svetro.official/'
							className={styles.footer__iconContainer}
						>
							<IconContext.Provider
								value={{ color: '#1e42a1', className: styles.icon }}
							>
								<BsInstagram />
							</IconContext.Provider>
						</a>
					</div>
					<div className={styles.emailContainer}>
						<form
							className={styles.inputForm}
							action='https://formsubmit.co/contact-us@svetro.com'
							method='POST'
						>
							<input
								type='email'
								name='email'
								id='email'
								required
								placeholder='connect with Us'
							/>

							<input type='hidden' name='_captcha' value='false' />
							<input type='hidden' name='_next' value='https://svetro.com/' />
							<button type='submit'>Send</button>
						</form>
					</div>
				</aside>
			</div>
			<Modal />
		</main>
	);
};

export default SingleBlog;
