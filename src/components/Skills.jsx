import {
  SiExpress,
  SiGit,
  SiGithub,
  SiGooglecolab,
  SiHuggingface,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiPytorch,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiBun,
  SiFigma,
} from 'react-icons/si'

const skills = [
  { key: 'python', Icon: SiPython, color: '#3776AB' },
  { key: 'typescript', Icon: SiTypescript, color: '#3178C6' },
  { key: 'javascript', Icon: SiJavascript, color: '#F7DF1E' },
  { key: 'react', Icon: SiReact, color: '#61DAFB' },
  { key: 'nextjs', Icon: SiNextdotjs, color: '#F5F5F5' },
  { key: 'tailwind', Icon: SiTailwindcss, color: '#38BDF8' },
  { key: 'nodejs', Icon: SiNodedotjs, color: '#339933' },
  { key: 'express', Icon: SiExpress, color: '#B3B3B3' },
  { key: 'postgres', Icon: SiPostgresql, color: '#336791' },
  { key: 'pytorch', Icon: SiPytorch, color: '#EE4C2C' },
  { key: 'huggingface', Icon: SiHuggingface, color: '#FFD21E' },
  { key: 'colab', Icon: SiGooglecolab, color: '#F9AB00' },
  { key: 'git', Icon: SiGit, color: '#F05032' },
  { key: 'github', Icon: SiGithub, color: '#F5F5F5' },
  { key: 'bun', Icon: SiBun, color: '#FBF0DF' },
  { key: 'figma', Icon: SiFigma, color: '#F24E1E' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-body">
      <div className="section-heading reveal">
        <h2 className="section-heading-title">Skills & Tools</h2>
        <div className="section-heading-rule" />
      </div>

      <div className="reveal d1 skills-row">
          {skills.map(({ key, Icon, color }) => (
            <span key={key} className="skill-item" data-label={key}>
              <Icon style={{ color }} />
            </span>
          ))}
      </div>
    </section>
  )
}