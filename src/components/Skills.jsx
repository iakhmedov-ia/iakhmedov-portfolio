import "../styles/Container.css";
import "../styles/Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills_inner container">
        <h1>
          Skills{" "}
          <lord-icon
            style={{ margin: "0 0 2px -5px" }}
            trigger="loop"
            delay="500"
            src="https://cdn.lordicon.com/lzgmgrnn.json"
          ></lord-icon>
        </h1>
        <p> I possess the necessary skills to excel in these technologies: </p>
        <div className="bar">
          <div className="ball"></div>
        </div>
        <div className="skills_list">
          <div className="html">
            <img src="../images/skills/html.svg" alt="html" />
            <p> HTML </p>
          </div>
          <div className="css">
            <img src="../images/skills/css.svg" alt="css" />
            <p> CSS </p>
          </div>
          <div className="js">
            <img src="../images/skills/js.svg" alt="js" />
            <p> JavaScript </p>
          </div>
          <div className="react">
            <img src="../images/skills/react.svg" alt="react" />
            <p> React </p>
          </div>
          <div className="github">
            <img src="../images/skills/github.svg" alt="github" />
            <p> GitHub </p>
          </div>
          <div className="docker">
            <img src="../images/skills/docker.svg" alt="docker" />
            <p> Docker </p>
          </div>
        </div>
      </div>
    </section>
  );
}
