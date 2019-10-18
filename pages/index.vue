<template>
	<div class="container">
		<div class="intro">
			<div class="title">
				<h1>Paragliding experience</h1>
			</div>
			<div class="scroll">
				<h2>scroll</h2>
				<div class="bar"></div>
			</div>
		</div>

		<div v-observe-visibility="{ callback: toursVisibility, once: true, intersection: { threshold: 0.3 } }" class="tours">
			<div ref="text2" class="text">
				<div>
					<h2>Paragliding Tours</h2>
					<p>Our tours are for all levels of pilots.</p>
					<p>Pure Excitement Gauranteed!</p>

					<div class="row">
						<p><i class="icon icon-star"></i> All Inclusive</p>
						<p><i class="icon icon-location"></i> Cape Town, Porterville and more</p>
						<p><i class="icon icon-credit-card"></i> Secure Payment</p>
					</div>
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
					<p>See the sky from difrent perspective.</p>
					<p>Pure Excitement Gauranteed!</p>
					<div class="row">
						<p><i class="icon icon-video"></i> GoPro Video & Photos Included</p>
						<p><i class="icon icon-location"></i> Cape Town, Porterville and more</p>
						<p><i class="icon icon-credit-card"></i> Secure Payment</p>
					</div>
					<btn link="about">
						Book now
					</btn>
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
	height: 100vh;
	background-image: url('/landing.jpg');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;

	.title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		text-align: center;
		h1 {
			margin: 0;
			color: white;
			text-transform: uppercase;
			font-size: 4.5em;
		}
	}
	.scroll {
		position: absolute;
		bottom: 5%;

		display: flex;
		justify-content: center;
		align-items: flex-start;
		align-content: center;

		h2 {
			color: white;
			text-transform: uppercase;
			font-size: 1em;
			letter-spacing: 0.1em;
			writing-mode: tb-rl;
			transform: rotate(-180deg);
			user-select: none;
			//padding: 25px 0 0px 15px;
			//border-left: 2px solid #fc4a1a;
		}
		.bar {
			width: 2px;
			height: 100px;
			border-radius: 10px;
			background: #fc4a1a;
			margin: 0 10px;
		}
	}
}
.tours {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	position: relative;
	margin: 10% 0;
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
		align-items: flex-end;
		align-content: center;

		h2 {
			margin-bottom: 20px;
			padding-bottom: 5px;
			font-size: 2em;
			border-bottom: 2px solid #fc4a1a;
		}
		.row {
			p {
				margin: 10px 0;
				text-align: left;
			}
		}
	}
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
		align-items: flex-start;
		align-content: center;

		h2 {
			margin-bottom: 20px;
			padding-bottom: 5px;
			font-size: 2em;
			border-bottom: 2px solid #fc4a1a;
		}
		.row {
			p {
				margin: 10px 0;
				text-align: left;
			}
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
	.intro {
		.title {
			h1 {
				font-size: 2em;
			}
		}
	}
	.tandem,
	.tours {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;
		.images,
		.text {
			width: 100vw;
			margin: 30px 0;
			align-items: center;
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
