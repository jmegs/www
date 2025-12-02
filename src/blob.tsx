export const Blob = () => (
  <div className="blob">
    <div className="spin">
      <svg className="shape" viewBox="0 0 100 100" fill="none">
        <title>Rotating blob</title>
        <defs>
          <linearGradient id="gradient">
            <stop offset="27%" className="linearStop1" />
            <stop offset="43%" className="linearStop2" />
            <stop offset="53%" className="linearStop3" />
            <stop offset="67%" className="linearStop4" />
            <stop offset="100%" className="linearStop5" />
          </linearGradient>
          <radialGradient id="inner-glow">
            <stop offset="0%" className="radialStop1" />
            <stop offset="100%" className="radialStop2" />
          </radialGradient>
        </defs>
        <ellipse rx="45" ry="45" cx="50" cy="50" fill="url('#gradient')" stroke="none" />
        <ellipse rx="35" ry="35" cx="50" cy="50" fill="url('#inner-glow')" stroke="none" />
      </svg>
    </div>
    <div className="spin reverse">
      <svg className="shape" viewBox="0 0 100 100" fill="none">
        <title>Another blob</title>
        <defs>
          <linearGradient id="gradient2">
            <stop offset="0%" className="reverseStop1" />
            <stop offset="50%" className="reverseStop2" />
            <stop offset="100%" className="reverseStop3" />
          </linearGradient>
        </defs>
        <ellipse rx="30" ry="30" cx="50" cy="50" fill="url('#gradient2')" stroke="none" />
      </svg>
    </div>
  </div>
);
