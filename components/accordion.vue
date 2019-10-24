<template>
	<div class="message" @click="toggleAccordion">
		<div class="header">
			<h3>
				<slot name="header">
					header text
				</slot>
			</h3>
			<i class="icon-plus" :class="{ iconAnim: !isOpen }" />
		</div>
		<div class="body" :class="{ colapseAnim: isOpen }">
			<p>
				<slot name="body">
					body text
				</slot>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isOpen: true,
		}
	},
	methods: {
		toggleAccordion: function() {
			this.isOpen = !this.isOpen
		},
	},
}
</script>

<style lang="scss" scoped>
.message {
	width: 70%;
	margin: 5px;

	.header {
		position: relative;
		z-index: 2;

		cursor: pointer;
		background-color: #343a40;
		color: white;
		padding: 10px;
		h3 {
			display: inline-block;
		}
		i {
			float: right;
			padding: 2px 0;
			transition: 0.5s ease all;
		}

		&:hover {
			opacity: 0.9;
		}
	}
	.body {
		background-color: white;
		max-height: 30em;
		overflow: hidden;

		opacity: 1;
		transition: 0.5s ease all;
		p {
			padding: 20px 10px;
		}
	}
	.colapseAnim {
		transform: translateY(-20px);
		opacity: 0;
		max-height: 0;
	}
	.iconAnim {
		transform: rotate(135deg);
		color: #ff1461;
	}
}
@media (max-width: 750px) {
	.message {
		width: 95%;
	}
}
</style>
