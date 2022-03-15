import { useState, useEffect } from 'react';
import { client, urlFor } from '../../client';
import { BlogCard } from '../../components';
import styles from './Blogs.module.css';

const Blog = () => {
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
		<section className={styles.blogs}>
			<div className='container'>
				<div className={styles.blogs__flex}>
					<div className={styles.blogs__info}>
						<h2 className={styles.blogs__infoTitle}>Latest Posts</h2>
					</div>
					<div className={styles.blogs__grid}>
						{blogData &&
							blogData.map((blog) => {
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
			</div>
		</section>
	);
};

export default Blog;
