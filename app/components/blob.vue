<template>
	<div class="blob">
		<div class="spin">
			<svg class="shape" viewBox="0 0 100 100" fill="none">
				<defs>
					<linearGradient id="gradient">
						<stop offset="27%" class="linear-stop-1"></stop>
						<stop offset="43%" class="linear-stop-2"></stop>
						<stop offset="53%" class="linear-stop-3"></stop>
						<stop offset="67%" class="linear-stop-4"></stop>
						<stop offset="100%" class="linear-stop-5"></stop>
					</linearGradient>
					<radialGradient id="inner-glow">
						<stop offset="0%" class="radial-stop-1"></stop>
						<stop offset="100%" class="radial-stop-2"></stop>
					</radialGradient>
				</defs>
				<ellipse rx="45" ry="45" cx="50" cy="50" fill="url('#gradient')" stroke="none"></ellipse>
				<ellipse rx="35" ry="35" cx="50" cy="50" fill="url('#inner-glow')" stroke="none"></ellipse>
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
				<ellipse rx="30" ry="30" cx="50" cy="50" fill="url('#gradient2')" stroke="none"></ellipse>
			</svg>
		</div>
	</div>
</template>

<style scoped>
.blob {
	--blob-size: 40vmax;
	--blob-opacity: 80%;
	--blob-overscroll-x: 20%;
	--blob-overscroll-y: 20%;
	--x-speed: 25000ms;
	--y-speed: 30000ms;
	--spin-speed: 30s;
	--blur: 30px;

	--gradient-1: #180614;
	--gradient-2: #2b2137;
	--gradient-3: #4f455c;
	--gradient-4: #c099a0;
	--gradient-5: #e4d2d8;

	--inner-glow-1: rgba(255, 248, 220, 0.4);
	--inner-glow-2: rgba(255, 248, 220, 0);

	--gradient2-1: var(--gradient-3);
	--gradient2-2: var(--gradient-4);
	--gradient2-3: var(--gradient-1);

	@media (prefers-color-scheme: dark) {
		--blob-opacity: 40%;
	}

	position: fixed;
	height: 100vh;
	height: 100dvh;
	width: 100vw;
	inset: 0;
	z-index: -1;
	display: grid;
	place-content: center;
	overflow: hidden;
	will-change: transform;
	transform-style: preserve-3d;
	contain: layout style paint;
}

@media (max-width: 768px) {
	.blob {
		--blur: 35px;
	}
}

.spin {
	animation:
		spin var(--spin-speed) linear infinite,
		pulse calc(var(--spin-speed) * 1.5) linear infinite alternate;
	height: var(--blob-size);
	width: var(--blob-size);
	filter: blur(var(--blur)) contrast(1.15) brightness(1.2) saturate(1.2);
	will-change: transform;
	transform-style: preserve-3d;
	background: none;
	overflow: visible;
	opacity: var(--blob-opacity);
	grid-area: 1/1;

}

.spin.reverse {
	height: var(--blob-size);
	width: var(--blob-size);
	animation:
		calc(var(--spin-speed) * 1.5) linear infinite reverse spin,
		calc(var(--spin-speed) * 1.5) linear infinite alternate pulse;
	filter: blur(calc(var(--blur) * 1.2)) contrast(1.2) brightness(1.2) saturate(1.3);
	opacity: var(--blob-opacity);
	will-change: transform;
	transform-style: preserve-3d;
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

@keyframes spin {
	from {
		rotate: 0;
	}

	to {
		rotate: 1turn;
	}
}

@keyframes pulse {

	0%,
	100% {
		scale: 1;
	}

	25% {
		scale: 1.2;
	}

	75% {
		scale: 0.8;
	}
}
</style>
