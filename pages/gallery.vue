<template>
	<div class="container">
		<h1>Gallery</h1>

		<div class="gallery">
			<vueLightbox :thumbnails="lightbox.thumbnails" :images="lightbox.images" :thumbnail-path="lightbox.thumbnailPath" :image-path="lightbox.imagePath" />
		</div>
	</div>
</template>

<script>
import vueLightbox from '~/components/vue-lightbox.vue'
import { pageEnter, pageLeave, galleryAnim } from '~/assets/animate'

export default {
	transition: {
		mode: 'out-in',
		css: false,
		enter(el, done) {
			pageEnter(el, done)
		},
		leave(el, done) {
			pageLeave(el, done)
		},
	},
	components: {
		vueLightbox,
	},
	data() {
		return {
			lightbox: {
				thumbnails: ['1s.jpg', '2s.jpg', '3s.jpg', '4s.jpg', '5s.jpg', '6s.jpg', '7s.jpg', '8s.jpg', '9s.jpg', '10s.jpg', '11s.jpg', '12s.jpg', '13s.jpg', '14s.jpg', '15s.jpg', '16s.jpg', '17s.jpg', '18s.jpg', '19s.jpg', '20s.jpg', '21s.jpg', '22s.jpg'],
				images: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg'],
				thumbnailPath: '/thumbnails/',
				imagePath: '/photos/',
			},
		}
	},
}
</script>

<style lang="scss" scoped>
.container {
	justify-content: flex-start;
}
.gallery {
	max-width: 1000px;
	text-align: center;

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;
}
</style>
