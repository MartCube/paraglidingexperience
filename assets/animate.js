import anime from 'animejs'

export function toursAnim(img1, img2, img3, text) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add(
		{
			targets: img1,
			easing: 'easeInOutCubic',
			translateX: ['50%', '35%'],
			translateY: ['50%', '50%'],
			opacity: [0, 1],
			duration: 800,
			delay: 200,
		},
		0,
	)
		.add(
			{
				targets: img2,
				easing: 'easeInOutCubic',
				opacity: [0, 1],
				translateX: ['-30%', '-30%'],
				translateY: ['-50%', '-30%'],
				duration: 800,
				delay: 200,
			},
			100,
		)
		.add(
			{
				targets: img3,
				easing: 'easeInOutCubic',
				opacity: [0, 1],
				translateX: ['-90%', '-90%'],
				translateY: ['0%', '30%'],
				duration: 800,
				delay: 200,
			},
			200,
		)
		.add(
			{
				targets: text,
				easing: 'easeInOutCubic',
				opacity: [0, 1],
				translateX: ['-20%', '0%'],
				duration: 800,
				delay: 200,
			},
			300,
		)
}

export function tandemAnim(img1, img2, img3, text) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add(
		{
			targets: img1,
			easing: 'easeInOutCubic',
			translateX: ['0%', '50%'],
			opacity: [0, 1],
			duration: 800,
			delay: 200,
		},
		0,
	)
		.add(
			{
				targets: img2,
				easing: 'easeInOutCubic',
				opacity: [0, 1],
				translateX: ['50%', '50%'],
				translateY: ['-100%', '-50%'],
				duration: 800,
				delay: 200,
			},
			100,
		)
		.add(
			{
				targets: img3,
				easing: 'easeInOutCubic',
				opacity: [0, 1],
				translateX: ['-80%', '-80%'],
				translateY: ['100%', '50%'],
				duration: 800,
				delay: 200,
			},
			200,
		)
		.add(
			{
				targets: text,
				easing: 'easeInOutCubic',
				opacity: [0, 1],
				translateX: ['20%', '0%'],
				duration: 800,
				delay: 200,
			},
			300,
		)
}

export function sponsorsAnim(el) {
	anime({
		targets: el,
		translateY: ['100%', '0%'],
		easing: 'easeInOutQuad',
		delay: anime.stagger(100),

		opacity: [0, 1],
		duration: 800,
	})
}

export function pageEnter(el, done) {
	anime({
		targets: el,
		easing: 'easeInCubic',
		opacity: [0, 1],
		duration: 200,
		complete: function(anim) {
			if (anim.completed) done()
		},
	})
}

export function pageLeave(el, done) {
	anime({
		targets: el,
		easing: 'easeOutCubic',
		opacity: [1, 0],
		duration: 200,
		complete: function(anim) {
			if (anim.completed) done()
		},
	})
}
