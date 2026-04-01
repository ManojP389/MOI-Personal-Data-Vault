import React, { useState } from "react";
import "./App.css";
function App() {
  const [skills, setSkills] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [inputCert, setInputCert] = useState("");

  const [shareSkills, setShareSkills] = useState(false);
  const [shareCertificates, setShareCertificates] = useState(false);
  const [sharedData, setSharedData] = useState(null);

  const addSkill = () => {
    if (inputSkill.trim()) {
      setSkills([...skills, inputSkill]);
      setInputSkill("");
    }
  };

  const addCertificate = () => {
    if (inputCert.trim()) {
      setCertificates([...certificates, inputCert]);
      setInputCert("");
    }
  };

  const generateShare = () => {
    const data = {
      skills: shareSkills ? skills : [],
      certificates: shareCertificates ? certificates : [],
    };
    setSharedData(data);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>🚀 MOI Personal Data Vault</h1>

      {/* Add Skill */}
      <h2>Add Skill</h2>
      <input
        value={inputSkill}
        onChange={(e) => setInputSkill(e.target.value)}
        placeholder="Enter skill"
      />
      <button onClick={addSkill}>Add</button>

      <ul>
        {skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      {/* Add Certificate */}
      <h2>Add Certificate</h2>
      <input
        value={inputCert}
        onChange={(e) => setInputCert(e.target.value)}
        placeholder="Enter certificate"
      />
      <button onClick={addCertificate}>Add</button>

      <ul>
        {certificates.map((c, i) => (
          <li key={i}>{c}</li>
        ))}
      </ul>

      {/* Sharing Section */}
      <h2>🔐 Share Your Profile</h2>

      <label>
        <input
          type="checkbox"
          checked={shareSkills}
          onChange={() => setShareSkills(!shareSkills)}
        />
        Share Skills
      </label>

      <br />

      <label>
        <input
          type="checkbox"
          checked={shareCertificates}
          onChange={() => setShareCertificates(!shareCertificates)}
        />
        Share Certificates
      </label>

      <br /><br />

      <button onClick={generateShare}>Generate Share</button>

      {/* Recruiter View */}
      {sharedData && (
        <div style={{ marginTop: "20px", border: "1px solid black", padding: "10px" }}>
          <h2>👀 Recruiter View</h2>

          <h3>Skills:</h3>
          <ul>
            {sharedData.skills.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>

          <h3>Certificates:</h3>
          <ul>
            {sharedData.certificates.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;