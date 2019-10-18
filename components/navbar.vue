<template>
	<nav class="navbar ">
		<div class="logo">
			<n-link exact to="/"> <img src="/logo.png" alt="parapax"/></n-link>
		</div>

		<div class="links" :class="{ active: isActive }" @click="CloseMenu">
			<n-link exact to="/">Home</n-link>
			<n-link to="/tours">Tours</n-link>
			<a href="https://www.parapax.co.za" target="_blank">
				Tandems
			</a>
			<n-link to="/about">About us</n-link>
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
	top: 0;
	z-index: 999;
	height: 60px;
	width: 100%;
	//background: #171717;
	background: linear-gradient(292deg, rgba(150, 150, 150, 0.03) 0%, rgba(150, 150, 150, 0.03) 20%, rgba(151, 151, 151, 0.03) 20%, rgba(151, 151, 151, 0.03) 40%, rgba(215, 215, 215, 0.03) 40%, rgba(215, 215, 215, 0.03) 60%, rgba(254, 254, 254, 0.03) 60%, rgba(254, 254, 254, 0.03) 80%, rgba(112, 112, 112, 0.03) 80%, rgba(112, 112, 112, 0.03) 100%), linear-gradient(62deg, rgba(34, 34, 34, 0.03) 0%, rgba(34, 34, 34, 0.03) 20%, rgba(171, 171, 171, 0.03) 20%, rgba(171, 171, 171, 0.03) 40%, rgba(206, 206, 206, 0.03) 40%, rgba(206, 206, 206, 0.03) 60%, rgba(210, 210, 210, 0.03) 60%, rgba(210, 210, 210, 0.03) 80%, rgba(69, 69, 69, 0.03) 80%, rgba(69, 69, 69, 0.03) 100%),
		linear-gradient(314deg, rgba(235, 235, 235, 0.03) 0%, rgba(235, 235, 235, 0.03) 20%, rgba(254, 254, 254, 0.03) 20%, rgba(254, 254, 254, 0.03) 40%, rgba(178, 178, 178, 0.03) 40%, rgba(178, 178, 178, 0.03) 60%, rgba(211, 211, 211, 0.03) 60%, rgba(211, 211, 211, 0.03) 80%, rgba(73, 73, 73, 0.03) 80%, rgba(73, 73, 73, 0.03) 100%), linear-gradient(32deg, rgba(182, 182, 182, 0.01) 0%, rgba(182, 182, 182, 0.01) 12.5%, rgba(208, 208, 208, 0.01) 12.5%, rgba(208, 208, 208, 0.01) 25%, rgba(178, 178, 178, 0.01) 25%, rgba(178, 178, 178, 0.01) 37.5%, rgba(143, 143, 143, 0.01) 37.5%, rgba(143, 143, 143, 0.01) 50%, rgba(211, 211, 211, 0.01) 50%, rgba(211, 211, 211, 0.01) 62.5%, rgba(92, 92, 92, 0.01) 62.5%, rgba(92, 92, 92, 0.01) 75%, rgba(56, 56, 56, 0.01) 75%, rgba(56, 56, 56, 0.01) 87.5%, rgba(253, 253, 253, 0.01) 87.5%, rgba(253, 253, 253, 0.01) 100%),
		linear-gradient(247deg, rgba(103, 103, 103, 0.02) 0%, rgba(103, 103, 103, 0.02) 12.5%, rgba(240, 240, 240, 0.02) 12.5%, rgba(240, 240, 240, 0.02) 25%, rgba(18, 18, 18, 0.02) 25%, rgba(18, 18, 18, 0.02) 37.5%, rgba(38, 38, 38, 0.02) 37.5%, rgba(38, 38, 38, 0.02) 50%, rgba(246, 246, 246, 0.02) 50%, rgba(246, 246, 246, 0.02) 62.5%, rgba(9, 9, 9, 0.02) 62.5%, rgba(9, 9, 9, 0.02) 75%, rgba(167, 167, 167, 0.02) 75%, rgba(167, 167, 167, 0.02) 87.5%, rgba(86, 86, 86, 0.02) 87.5%, rgba(86, 86, 86, 0.02) 100%), linear-gradient(90deg, hsl(194, 0%, 10%), hsl(194, 0%, 10%));

	display: flex;
	justify-content: flex-end;
	align-items: center;
	align-content: center;
	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: space-around;
		flex-basis: 50%;

		a {
			text-decoration: none;
			font-size: 1.2em;
			text-transform: uppercase;
			color: white;
			outline: none;

			&::after {
				content: '';
				display: block;
				width: 100%;
				height: 3px;
				border-radius: 10px;
				background: #fc4a1a;

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

	.logo {
		display: flex;
		flex-basis: 50%;
		padding-left: 20px;
		color: white;
		img {
			height: 50px;
		}
	}

	.button {
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		margin: 15px;
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
			background: white;
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

@media (max-width: 750px) {
	.navbar {
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		.links {
			font-size: 1.5em;
		}
		.logo {
			flex: none;
		}
		.links {
			display: none;
		}
		.button {
			display: flex;
		}
	}
}
</style>
