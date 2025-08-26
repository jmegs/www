<template>
	<div class="blob">
		<div class="x">
			<div class="y">
				<div class="spin">
					<svg class="shape" viewBox="0 0 100 100" fill="none">
						<defs>
							<linearGradient id="gradient">
								<stop offset="0%" class="linear-stop-1"></stop>
								<stop offset="25%" class="linear-stop-2"></stop>
								<stop offset="50%" class="linear-stop-3"></stop>
								<stop offset="75%" class="linear-stop-4"></stop>
								<stop offset="100%" class="linear-stop-5"></stop>
							</linearGradient>
							<radialGradient id="inner-glow">
								<stop offset="0%" class="radial-stop-1"></stop>
								<stop offset="100%" class="radial-stop-2"></stop>
							</radialGradient>
						</defs>
						<ellipse
							rx="45"
							ry="45"
							cx="50"
							cy="50"
							fill="url('#gradient')"
							stroke="none"
						></ellipse>
						<ellipse
							rx="35"
							ry="35"
							cx="50"
							cy="50"
							fill="url('#inner-glow')"
							stroke="none"
						></ellipse>
					</svg>
				</div>
				<div class="spin reverse">
					<svg class="shape" viewBox="0 0 100 100" fill="none">
						<defs>
							<linearGradient id="gradient2">
								<stop offset="0%" class="reverse-stop-1"></stop>
								<stop offset="50%" class="reverse-stop-2"></stop>
								<stop offset="100%" class="reverse-stop-3"></stop>
							</linearGradient>
						</defs>
						<ellipse
							rx="30"
							ry="30"
							cx="50"
							cy="50"
							fill="url('#gradient2')"
							stroke="none"
						></ellipse>
					</svg>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.blob {
	--blob-size: 32vmax;
	--x-speed: 25000ms;
	--y-speed: 30000ms;
	--spin-speed: 5500ms;
	--blur: 45px;

	--red: #bf616a;
	--magenta: #b48ead;
	--orange: #d08770;
	--yellow: #ebcb8b;

	/* Gradient colors using warm Flexoki accent colors */
	--gradient-1: var(--yellow);
	--gradient-2: var(--orange);
	--gradient-3: var(--red);
	--gradient-4: var(--magenta);
	--gradient-5: var(--orange);
	--inner-glow-1: rgb(from#3b4252 r g b / 0.4);
	--inner-glow-2: rgb(from #4c566a r g b / 0);
	--gradient2-1: var(--red);
	--gradient2-2: var(--magenta);
	--gradient2-3: var(--yellow);

	position: fixed;
	height: 100vh;
	height: 100dvh;
	width: 100vw;
	inset: 0;
	z-index: -1;
	overflow: hidden;
	will-change: transform;
	transform-style: preserve-3d;
}

@media (max-width: 768px) {
	.blob {
		--blur: 35px;
	}
}

.x {
	width: var(--blob-size);
	height: 100%;
	animation: x var(--x-speed) linear infinite alternate;
	transform-origin: center;
	will-change: transform;
	background: none;
}

.y {
	animation: y var(--y-speed) linear infinite alternate;
	height: var(--blob-size);
	width: 100%;
	position: relative;
	will-change: transform;
	background: none;
}

.spin {
	position: absolute;
	animation: spin calc(var(--spin-speed) * 2) linear infinite;
	height: var(--blob-size);
	width: var(--blob-size);
	filter: blur(var(--blur)) contrast(1.15) brightness(1.1) saturate(1.2)
		hue-rotate(5deg);
	opacity: 12%;
	will-change: transform;
	transform-style: preserve-3d;
	background: none;
	overflow: visible;
}

.spin.reverse {
	animation: spin calc(var(--spin-speed) * 1.5) linear infinite reverse;
	opacity: 8%;
	filter: blur(calc(var(--blur) * 0.7)) contrast(1.2) brightness(1.15)
		saturate(1.3);
}

.shape {
	background: none;
	overflow: visible;
}

/* Apply gradient colors via CSS custom properties */
.linear-stop-1 {
	stop-color: var(--gradient-1);
}
.linear-stop-2 {
	stop-color: var(--gradient-2);
}
.linear-stop-3 {
	stop-color: var(--gradient-3);
}
.linear-stop-4 {
	stop-color: var(--gradient-4);
}
.linear-stop-5 {
	stop-color: var(--gradient-5);
}
.radial-stop-1 {
	stop-color: var(--inner-glow-1);
}
.radial-stop-2 {
	stop-color: var(--inner-glow-2);
}
.reverse-stop-1 {
	stop-color: var(--gradient2-1);
}
.reverse-stop-2 {
	stop-color: var(--gradient2-2);
}
.reverse-stop-3 {
	stop-color: var(--gradient2-3);
}

@keyframes x {
	from {
		transform: translate3d(0, 0, 0);
	}
	to {
		transform: translate3d(calc(100vw - (var(--blob-size) / 2)), 0, 0);
	}
}

@keyframes y {
	from {
		transform: translate3d(0, 0, 0);
	}
	to {
		transform: translate3d(0, calc(100vh - (var(--blob-size) / 2)), 0);
	}
}

@keyframes spin {
	from {
		transform: translate3d(0, 0, 0) rotate(0) scale(1);
	}
	to {
		transform: translate3d(0, 0, 0) rotate(1turn) scale(1.05);
	}
}

@keyframes pulse {
	0%,
	100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.05);
	}
}
</style>
