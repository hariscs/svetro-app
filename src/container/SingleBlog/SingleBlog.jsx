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
							<a href='/yt' className={styles.footer__iconContainer}>
								<BsYoutube />
							</a>
						</IconContext.Provider>

						<a href='/fb' className={styles.footer__iconContainer}>
							<IconContext.Provider
								value={{ color: '#1e42a1', className: styles.icon }}
							>
								<BsFacebook />
							</IconContext.Provider>
						</a>
						<a href='/tw' className={styles.footer__iconContainer}>
							<IconContext.Provider
								value={{ color: '#1e42a1', className: styles.icon }}
							>
								<BsTwitter />
							</IconContext.Provider>
						</a>
						<a href='/in' className={styles.footer__iconContainer}>
							<IconContext.Provider
								value={{ color: '#1e42a1', className: styles.icon }}
							>
								<BsLinkedin />
							</IconContext.Provider>
						</a>
						<a href='/ig' className={styles.footer__iconContainer}>
							<IconContext.Provider
								value={{ color: '#1e42a1', className: styles.icon }}
							>
								<BsInstagram />
							</IconContext.Provider>
						</a>
					</div>
				</aside>
			</div>
		</main>
	);
};

export default SingleBlog;
