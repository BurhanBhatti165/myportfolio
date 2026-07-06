import React, {useContext, useState, useEffect} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import aiBrain from "../../assets/lottie/aiBrain.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  const [activeSkill, setActiveSkill] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skillsSection.skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentSkill = skillsSection.skills[currentSkillIndex];
    let charIndex = 0;
    
    const typingInterval = setInterval(() => {
      if (charIndex <= currentSkill.length) {
        setTypedText(currentSkill.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentSkillIndex((prev) => (prev + 1) % skillsSection.skills.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentSkillIndex]);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-left-section">
            <div className="ai-brain-container">
              {illustration.animated ? (
                <>
                  <DisplayLottie animationData={aiBrain} />
                  <div className="neural-particles">
                    {[...Array(20)].map((_, i) => (
                      <div
                        key={i}
                        className="particle"
                        style={{
                          '--delay': `${i * 0.1}s`,
                          '--x': `${Math.random() * 100}%`,
                          '--y': `${Math.random() * 100}%`
                        }}
                      />
                    ))}
                  </div>
                  <div className="ai-status">
                    <div className="status-indicator active" />
                    <span>AI System Online</span>
                  </div>
                </>
              ) : (
                <img
                  alt="AI Brain Neural Network"
                  src={require("../../assets/images/aiBrainNetwork.svg")}
                />
              )}
            </div>
            
            {/* New left side content */}
            <div className="ai-capabilities">
              <h3 className="capabilities-title">AI Capabilities</h3>
              <div className="capability-item">
                <div className="capability-icon">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="Neural Networks" />
                </div>
                <div className="capability-text">
                  <h4>Neural Networks</h4>
                  <p>Custom architectures for computer vision & NLP</p>
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-icon">
                  <img src="https://img.icons8.com/color/96/link.png" alt="LangChain" />
                </div>
                <div className="capability-text">
                  <h4>LangChain Integration</h4>
                  <p>Advanced RAG systems & AI workflows</p>
                </div>
              </div>
              <div className="capability-item">
                <div className="capability-icon">
                  <img src="https://img.icons8.com/color/96/artificial-intelligence.png" alt="Machine Learning" />
                </div>
                <div className="capability-text">
                  <h4>Machine Learning</h4>
                  <p>Supervised & unsupervised learning models</p>
                </div>
              </div>
            </div>
            
            <div className="tech-stats">
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Accuracy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Uptime</div>
              </div>
            </div>
          </div>
        </Fade>
        
        <Fade right duration={1000}>
          <div className="skills-right-section">
            <div className="skills-header">
              <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
                {skillsSection.title}
              </h1>
              <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
                {skillsSection.subTitle}
              </p>
            </div>
            
            <SoftwareSkill />
            
            <div className="skills-list-container">
              <div className="typing-container">
                <p className="typed-skill-text">
                  {typedText}<span className="cursor">|</span>
                </p>
              </div>
              <div className="skills-grid">
                {skillsSection.skills.map((skill, i) => (
                  <div
                    key={i}
                    className={`skill-item ${i === activeSkill ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => setActiveSkill(i)}
                  >
                    <p className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}>
                      {skill}
                    </p>
                    <div className="skill-indicator" />
                    <div className="skill-icon">
                      {i === 0 && <img src="https://img.icons8.com/color/96/artificial-intelligence.png" alt="AI/ML" />}
                      {i === 1 && <img src="https://img.icons8.com/color/96/react-native.png" alt="React" />}
                      {i === 2 && <img src="https://img.icons8.com/color/96/django.png" alt="Django" />}
                      {i === 3 && <img src="https://img.icons8.com/color/96/artificial-intelligence.png" alt="Machine Learning" />}
                      {i === 4 && <img src="https://img.icons8.com/color/96/link.png" alt="LangChain" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
