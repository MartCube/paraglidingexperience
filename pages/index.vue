<template>
	<div class="container">
		<div class="intro"></div>
		<div v-observe-visibility="{ callback: tandemVisibility, once: true, intersection: { threshold: 0.3 } }" class="tandem">
			<div class="images">
				<div class="image">
					<img ref="img1" src="index/1.jpg" alt="" />
				</div>
				<div class="image">
					<img ref="img2" src="index/2.jpg" alt="" />
				</div>
				<div class="image">
					<img ref="img3" src="index/3.jpg" alt="" />
				</div>
			</div>
			<div ref="text1" class="text">
				<div>
					<h2>Tandem Flights</h2>
					<p>Standard Tandem Flight</p>
					<p>GoPro Video & Photos Included</p>
					<p>Pure Excitement Gauranteed</p>
					<btn link="about">
						Book now
					</btn>
				</div>
			</div>
		</div>
		<div v-observe-visibility="{ callback: toursVisibility, once: true, intersection: { threshold: 0.3 } }" class="tours">
			<div ref="text2" class="text">
				<div>
					<h2>Paragliding Tours</h2>
					<p>Standard Tandem Flight</p>
					<p>GoPro Video & Photos Included</p>
					<p>Pure Excitement Gauranteed</p>
					<btn link="tours">
						Learn more
					</btn>
				</div>
			</div>
			<div class="images">
				<div class="image">
					<img ref="img4" src="index/4.jpg" alt="" />
				</div>
				<div class="image">
					<img ref="img5" src="index/5.jpg" alt="" />
				</div>
				<div class="image">
					<img ref="img6" src="index/6.jpg" alt="" />
				</div>
			</div>
		</div>
		<div v-observe-visibility="{ callback: sponsorsVisibility, once: true, intersection: { threshold: 0.5 } }" class="sponsors">
			<img src="index/CTTmember.png" alt="Cape Town tourisam member" />
			<img src="index/Sahpa.png" alt="Paragliding Asscociation" />
			<img src="index/SAnparks.png" alt="South Africa national parks" />
		</div>
	</div>
</template>

<script>
import { tandemAnim, toursAnim, sponsorsAnim, pageEnter, pageLeave } from '~/assets/animate'
import btn from '~/components/btn.vue'

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
		btn,
	},
	methods: {
		tandemVisibility(isVisible, entry) {
			this.isVisible = isVisible
			//console.log(entry)
			if (isVisible) tandemAnim(this.$refs.img1, this.$refs.img2, this.$refs.img3, this.$refs.text1)
		},
		toursVisibility(isVisible, entry) {
			this.isVisible = isVisible
			if (isVisible) toursAnim(this.$refs.img4, this.$refs.img5, this.$refs.img6, this.$refs.text2)
		},
		sponsorsVisibility(isVisible, entry) {
			this.isVisible = isVisible
			const el = document.querySelectorAll('.sponsors img')
			if (isVisible) sponsorsAnim(el)
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	margin: 0;
}
.intro {
	width: 100%;
	min-height: 100vh;
	background-image: url('/index/landing.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
}

.tandem {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	position: relative;
	height: 100vh;

	.images {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		align-content: center;

		position: relative;
		width: 65vw;

		.image {
			position: relative;
			img {
				width: 100%;
				object-fit: cover;
				object-position: center;
				box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.75);
				border-radius: 5px;
			}
		}
	}

	.text {
		width: 35vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;

		h2 {
			margin-bottom: 20px;
			font-size: 2em;
		}
		p {
			margin: 10px 0;
			text-align: left;
		}
	}
}

.tours {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	position: relative;
	height: 100vh;

	.images {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		align-content: center;

		position: relative;
		width: 65vw;

		.image {
			position: relative;
			img {
				width: 100%;
				object-fit: cover;
				object-position: center;
				box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.75);
				border-radius: 5px;
			}
		}
	}

	.text {
		width: 35vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;

		h2 {
			margin-bottom: 20px;
			font-size: 2em;
		}
		p {
			margin: 10px 0;
			text-align: left;
		}
	}
}

.sponsors {
	width: 80vw;
	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	img {
		max-width: 100%;
	}
}

//anime.js initial values
.tandem,
.tours {
	.images {
		img {
			opacity: 0;
		}
	}
	.text {
		opacity: 0;
	}
}
.sponsors {
	img {
		opacity: 0;
	}
}

@media (max-width: 750px) {
	.tandem,
	.tours {
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: center;
		.images,
		.text {
			width: 100vw;
			margin: 30px 0;
		}
		.text .btn {
			margin: 20px auto;
		}
	}
	.tours {
		flex-direction: column-reverse;
	}
}
</style>
