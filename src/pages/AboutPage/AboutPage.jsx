export default function AboutPage() {
  return (
    <div className="container">
      <div className="details">
        <div className="info-details">
          <h1>About this project</h1>
          <hr />
          <div className="info-stats">
            <p>BUILT WITH:</p>
            <p>React 18 & Redux Toolkit</p>
            <p>React Router v6</p>
            <p>Vite</p>
            <p>LESS</p>
            <p>Vitest & Testing Library</p>
            <p>PokéAPI</p>
          </div>
          <div className="half" style={{ marginTop: 0 }}>
            <div className="types-list">
              <h3>TAGS</h3>
              <span className="types electric">Frontend</span>
              <span className="types water">SPA</span>
              <span className="types grass">REST</span>
            </div>
            <div className="about">
              <h3>ABOUT</h3>
              <p>
                Pokedex is a single-page application that consumes the public PokéAPI and showcases
                a layered React architecture: custom hooks, a services layer, Redux Toolkit async
                thunks, and unit-tested UI. Originally built in 2022, fully refactored to current
                best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
