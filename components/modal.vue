<template>
	<transition name="fade">
		<div v-if="value" class="modal-backdrop">
			<div class="modal">
				<div class="header">
					header
				</div>
				<div class="body">
					body
				</div>
				<div class="btn_cancel" @click="modalToggle">
					<i class="icon icon-cancel" />
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Modal',
	props: { value: Boolean },
	data() {
		return {
			modalOpen: false,
		}
	},
	methods: {
		modalToggle() {
			this.$emit('input', !this.value)
		},
	},
}
</script>

<style lang="scss" scoped>
$transition: all 0.45s cubic-bezier(0.31, -0.105, 0.43, 1.59);
.modal-backdrop {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 3;

	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal {
	background: #ffffff;
	width: 50%;
	padding: 30px;
	position: relative;
	z-index: 3;

	display: flex;
	flex-direction: column;
	justify-content: center;

	box-shadow: 2px 2px 20px 1px;
	text-align: center;

	.header {
		border-bottom: 1px solid #eeeeee;
		margin: 20px 0;
		padding: 10px 0;
	}
	.btn_cancel {
		position: absolute;
		top: 10px;
		right: 10px;

		width: 35px;
		height: 35px;
		line-height: 35px;
		background: #343a40;
		border-radius: 50%;
		text-align: center;
		cursor: pointer;
		i {
			text-decoration: none;
			font-size: 20px;
			color: white;
		}
		transition: $transition;
		&:hover {
			box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.3);
			transform: scale(1.1);
		}
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: $transition;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
