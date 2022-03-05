export default {
	name: 'testimonials',
	title: 'Testimonials',
	type: 'document',
	fields: [
		{
			name: 'name',
			title: 'Name',
			type: 'string',
		},
		{
			name: 'location',
			title: 'Location',
			type: 'string',
		},
		{
			name: 'imageurl',
			title: 'ImgUrl',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			name: 'feedback',
			title: 'Feedback',
			type: 'string',
		},
	],
};
