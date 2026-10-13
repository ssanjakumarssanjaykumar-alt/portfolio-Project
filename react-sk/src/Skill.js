import React from 'react'


function SkilesTest() {
  const skills = [
    { name: "HTML", percent: 75 },
    { name: "CSS", percent: 85 },
    { name: "JavaScript", percent: 75 },
    { name: "React", percent: 70 },
    { name: "Node.js", percent: 65 },
    { name: "Express.js", percent: 60 },
    { name: "MongoDB", percent: 65 },
    { name: "java", percent: 65 }
  ];

  return (
    <div className="container">
      <h2>My Skills</h2>
      <p className="subtitle">
        Technologies I have learned and practiced.
      </p>

      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.percent + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    

    </div>
  )
}

export default Skill