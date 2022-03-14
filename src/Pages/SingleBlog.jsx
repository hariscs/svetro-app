import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { client, urlFor } from '../client';
import BlockContent from '@sanity/block-content-to-react';

const SingleBlog = () => {
	const [singleBlog, setSingleBlog] = useState([]);
	const { slug } = useParams();
	useEffect(() => {
		const query = `*[slug.current=="${slug}"]{
			body,
			mainImage{
				asset
			}
		}`;
		client
			.fetch(query)
			.then((blog) => setSingleBlog(blog[0]))
			.catch((err) => console.log(err));
	}, [slug]);

	if (!singleBlog) return <div>Loading...</div>;

	return (
		<>
			<main className='container'>
				<article>
					<header>
						{/* <img src={urlFor(singleBlog.mainImage.asset._ref)} alt='img' /> */}
					</header>
					<BlockContent
						blocks={singleBlog.body}
						projectId='w7jpwz5k'
						dataset='production'
					/>
				</article>
			</main>
		</>
	);
};

export default SingleBlog;
