/** biome-ignore-all lint/correctness/useUniqueElementIds: but they are unique */
import styles from "./blob.module.css"

export default function Blob() {
	return (
		<div className={styles.blob}>
			<div className={styles.spin}>
				<svg className={styles.shape} viewBox="0 0 100 100" fill="none">
					<title>Rotating blob</title>
					<defs>
						<linearGradient id="gradient">
							<stop offset="27%" className={styles.linearStop1}></stop>
							<stop offset="43%" className={styles.linearStop2}></stop>
							<stop offset="53%" className={styles.linearStop3}></stop>
							<stop offset="67%" className={styles.linearStop4}></stop>
							<stop offset="100%" className={styles.linearStop5}></stop>
						</linearGradient>
						<radialGradient id="inner-glow">
							<stop offset="0%" className={styles.radialStop1}></stop>
							<stop offset="100%" className={styles.radialStop2}></stop>
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
			<div className={`${styles.spin} reverse`}>
				<svg className={styles.shape} viewBox="0 0 100 100" fill="none">
					<title>Another blob</title>
					<defs>
						<linearGradient id="gradient2">
							<stop offset="0%" className={styles.reverseStop1}></stop>
							<stop offset="50%" className={styles.reverseStop2}></stop>
							<stop offset="100%" className={styles.reverseStop3}></stop>
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
	)
}
