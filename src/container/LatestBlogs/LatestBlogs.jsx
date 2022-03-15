import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { BlogCard } from '../../components';
import styles from './LatestBlogs.module.css';

const LatestBlogs = () => {
	const [blogData, setBlogData] = useState(null);
	useEffect(() => {
		const query = `*[_type=="post"]`;
		client
			.fetch(query)
			.then((data) => setBlogData(data))
			.catch((err) => console.log(err));
	}, []);

	if (!blogData) return <div>Loading...</div>;

	return (
		<section className={styles.latestBlogs}>
			<div className='container'>
				<div className={styles.lastestBlogs__info}>
					<h2 className={styles.blogs__title}>See Our latest blog posts</h2>
				</div>
				<div className={styles.blogs__grid}>
					{blogData &&
						blogData
							.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
							.slice(0, 3)
							.map((blog) => {
								const { title, _id, body, mainImage, slug } = blog;
								return (
									<BlogCard
										key={_id}
										imgUrl={urlFor(mainImage.asset._ref)}
										title={title}
										body={body[0].children[0].text.slice(0, 200)}
										url={slug.current}
									/>
								);
							})}
				</div>
			</div>
		</section>
	);
};

export default LatestBlogs;
