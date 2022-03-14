import { images } from '../constants';
import { Blog } from '../container';

const blogData = {
	id: 1,
	img: images.heroImg,
	title: '',
	subtitle: '',
	time: '',
};

const Blogs = () => {
	return (
		<section>
			<Blog
				img={blogData.img}
				title={blogData.title}
				subtitle={blogData.subtitle}
				time={blogData.time}
			/>
		</section>
	);
};

export default Blogs;
