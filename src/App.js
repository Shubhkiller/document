import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
  <nav id="navbar">
    <header>Technical Documentation</header>
    {/* Nav links will be dynamically generated based on the sections */}
  </nav>
  <main id="main-doc">
    <section className="main-section" id="section_1">
      <header>Section 1: Introduction to TechScript</header>
      <p>TechScript Overview</p>
      <p>Section Content
        TechScript is a lightweight, high-level programming language designed for ease of use and rapid development. This section provides an introduction to the language, its key features, and its use cases.</p>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      {/* Add more content as needed */}
    </section>
    <section className="main-section" id="section_2">
      <header>Section 2: Getting Started</header>
      <p>Paragraph 1 for Section 2</p>
      <p>Paragraph 2 for Section 2</p>
      <code>Code 1 for Section 2</code>
      <code>Code 2 for Section 2</code>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      {/* Add more content as needed */}
    </section>
    <section className="main-section" id="section_3">
      <header>Section 3: Syntax and Structure</header>
      <p>Paragraph 1 for Section 3</p>
      <p>Paragraph 2 for Section 3</p>
      <code>Code 1 for Section 3</code>
      <code>Code 2 for Section 3</code>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      {/* Add more content as needed */}
    </section>
    <section className="main-section" id="section_4">
      <header>Section 4: Advanced Concepts</header>
      <p>Paragraph 1 for Section 4</p>
      <p>Paragraph 2 for Section 4</p>
      <code>Code 1 for Section 4</code>
      <code>Code 2 for Section 4</code>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      {/* Add more content as needed */}
    </section>
    <section className="main-section" id="section_5">
      <header>Section 5: Standard Library</header>
      <p>Paragraph 1 for Section 5</p>
      <p>Paragraph 2 for Section 5</p>
      <code>Code 1 for Section 5</code>
      <code>Code 2 for Section 5</code>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
      {/* Add more content as needed */}
    </section>
  </main>
</div>


  );
}

export default App;
