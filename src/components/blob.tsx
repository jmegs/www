import "@/styles/blob.css"

export default function Blob() {
  return (
    <div className="blob">
      <div className="x">
        <div className="y">
          <div className="spin">
            <svg className="shape" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%" stopColor="#099268" />
                  <stop offset="50%" stopColor="#6741D9" />
                  <stop offset="100%" stopColor="#E03131" />
                </linearGradient>
              </defs>
              <ellipse rx="45" ry="45" cx="50" cy="50" fill="url('#gradient')"></ellipse>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}