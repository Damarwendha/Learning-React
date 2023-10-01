import "./styles.css";
import { skills } from "./skills";

export default function App() {
  return (
    <div className="App">
      <ProfileCard />
    </div>
  );
}

function ProfileCard() {
  return (
    <>
      <Main />
      <Footer />
    </>
  );
}

function Main() {
  return (
    <main>
      <img src="profile.png" alt="profile" />
      <h2> Sien Khumaen D. </h2>
      <p className="desc">Holla there! Obrigadoo salamento luffy putih o'siestas daripada kosong</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      {skills.map((skill) => (
        <Skill text={skill.skill} emoji={skill.level} color={skill.color} />
      ))}
    </footer>
  );
}

function Skill({ text, emoji, color }) {
  return (
    <>
      <p className="skill" style={{ backgroundColor: color }}>
        {text + " "}
        <span>
          {emoji === "Beginner" && "👶"}
          {emoji === "Intermediate" && "💪"}
          {emoji === "Advanced" && "👍"}
        </span>
      </p>
    </>
  );
}
