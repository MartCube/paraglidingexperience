<template>
	<nav class="navbar ">
		<div class="links" :class="{ active: isActive }" @click="CloseMenu">
			<n-link exact to="/">Home</n-link>
			<n-link to="/about">About us</n-link>
			<n-link to="/tours">Tours</n-link>
			<n-link to="/gallery">Gallery</n-link>
			<n-link to="/faq">FAQ</n-link>
			<n-link to="/contact">Contact</n-link>
		</div>

		<div class="button" :class="{ active: isActive }" @click="ShowHideMenu">
			<span class="top" />
			<span class="middle" />
			<span class="bottom" />
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		}
	},
	methods: {
		ShowHideMenu() {
			this.isActive = !this.isActive
		},
		CloseMenu() {
			this.isActive = false
		},
	},
}
</script>

<style lang="scss" scooped>
.navbar {
	position: fixed;
	z-index: 999;

	.links {
		display: none;
		flex-direction: row;
		justify-content: space-around;
		align-content: space-around;
		flex-basis: 50%;

		a {
			text-decoration: none;
			font-size: 2em;
			text-transform: uppercase;
			color: #343a40;
			outline: none;

			&::after {
				content: '';
				display: block;
				width: 100%;
				height: 5px;
				border-radius: 10px;
				background: #343a40;

				opacity: 0;
				transition: all 0.3s;
				transform: translateY(10px);
			}

			&:hover::after {
				opacity: 1;
				transform: translateY(5px);
			}

			&.nuxt-link-active::after {
				opacity: 1;
				transform: translateY(5px);
			}
		}

		&.active {
			display: flex;
			flex-direction: column;
			align-content: center;
			align-items: center;

			padding: 10% 0;
			background-color: rgba(252, 74, 26, 0.85);

			position: fixed;
			top: 0;
			right: 0;
			width: 100%;
			height: 100vh;

			a {
				animation: fadeInRight 0.5s ease forwards;
				color: white;
				&::after {
					background: white;
				}
			}
		}
	}

	.button {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		margin: 30px;
		height: 27px;
		width: 35px;
		cursor: pointer;

		transition: all 0.3s ease;
		&.active {
			.top {
				transform: translateY(11px) translateX(0) rotate(45deg);
				background: white;
			}
			.middle {
				opacity: 0;
			}

			.bottom {
				transform: translateY(-11px) translateX(0) rotate(-45deg);
				background: white;
			}
		}

		span {
			background: #343a40;
			border-radius: 10px;
			height: 5px;
			width: 100%;
			position: absolute;
			top: 0;
			transition: all 0.3s ease;

			&:nth-of-type(2) {
				top: 11px;
				width: 80%;
				right: 0;
			}

			&:nth-of-type(3) {
				top: 22px;
			}
		}
	}
}

@keyframes fadeInRight {
	0% {
		opacity: 0;
		transform: translateX(50px);
	}
	100% {
		opacity: 1;
		transform: translateX(0px);
	}
}
</style>
