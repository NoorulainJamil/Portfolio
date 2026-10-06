import { FormEvent, useState } from "react";

type IconName = "arrow" | "code" | "support" | "design" | "mail" | "phone" | "menu" | "close";

function Icon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3" /><path d="m14 5-4 14" /></>,
    support: <><path d="M4 13a8 8 0 0 1 16 0" /><path d="M4 13v4a2 2 0 0 0 2 2h2v-7H4Zm16 0v4a2 2 0 0 1-2 2h-2v-7h4Z" /></>,
    design: <><path d="M12 22a10 10 0 1 0 0-20c-1.1 0-2 .9-2 2 0 .5.2.9.5 1.3.3.3.5.8.5 1.2a2 2 0 0 1-2 2H7a5 5 0 0 0-5 5C2 18.2 6.5 22 12 22Z" /><circle cx="7.5" cy="14.5" r=".5" fill="currentColor" /><circle cx="11" cy="4.5" r=".5" fill="currentColor" /><circle cx="16" cy="7" r=".5" fill="currentColor" /><circle cx="18" cy="12" r=".5" fill="currentColor" /></>,
    mail: <><rect width="18" height="14" x="3" y="5" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  };

  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const experiences = [
  {
    period: "MAR 2025 — PRESENT",
    role: "Computer Lab Assistant",
    company: "Bahria College EAB-2 Campus, PNET",
    description: "Supporting lab technology and daily operations—from PC troubleshooting and connectivity to documentation, recruitment coordination, and promotional design.",
    current: true,
  },
  {
    period: "JUL — SEP 2026",
    role: "Intern",
    company: "Inter-Services Public Relations",
    description: "Built experience across media, communication, content creation, teamwork, and organizational coordination in an institutional environment.",
  },
  {
    period: "JAN — APR 2025",
    role: "Associate Cosmic Intern",
    company: "Cosmic365.ai · Remote",
    description: "Supported digital marketing and email funnels through targeted lead research, Snov.io, Google Sheets, automation systems, and social platforms.",
  },
  {
    period: "2023 — 2024",
    role: "Assistant Superintendent",
    company: "Virtual University of Pakistan",
    description: "Contributed to organized, reliable academic operations in a part-time administrative role.",
  },
];

const skillGroups = [
  {
    icon: "code" as IconName,
    number: "01",
    title: "Development",
    description: "Building a strong full-stack foundation with thoughtful, maintainable code.",
    skills: ["HTML & CSS", "React.js", "Node.js", "MongoDB", "C / C++ / C#", "Java & SQL"],
  },
  {
    icon: "support" as IconName,
    number: "02",
    title: "IT Support",
    description: "Keeping systems, people, and everyday technology running smoothly.",
    skills: ["PC troubleshooting", "Hardware support", "Software installation", "Networking", "Cisco Packet Tracer", "VMware"],
  },
  {
    icon: "design" as IconName,
    number: "03",
    title: "Creative",
    description: "Translating ideas into clear, engaging visual and written communication.",
    skills: ["Canva", "Adobe Illustrator", "Social content", "Brand graphics", "AI-assisted design", "Creative writing"],
  },
];

const certifications = [
  "C++ Essentials · Cisco",
  "Intro to Networking · Cisco",
  "Intro to Cybersecurity · Cisco",
  "Graphic Design · DigiSkills",
  "Data Analytics & BI · DigiSkills",
  "Digital Marketing · Cosmic365.ai",
  "MS Excel · Alison",
  "PC Building · Alison",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(`${form.get("message")}\n\nReply to: ${form.get("email")}`);
    window.location.href = `mailto:jamilnoorulain@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f4f1e9] text-[#17251d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#17251d]/10 bg-[#f4f1e9]/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight" onClick={closeMenu}>
            <span className="grid size-9 place-items-center rounded-full bg-[#17251d] text-sm text-[#f4f1e9]">NS</span>
            <span className="hidden sm:block">Noorulain Shaikh</span>
          </a>
          <div className="hidden items-center gap-9 text-sm font-semibold md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#experience">Experience</a>
            <a className="nav-link" href="#skills">Skills</a>
            <a className="rounded-full bg-[#e95636] px-5 py-2.5 text-white transition hover:bg-[#c93f24]" href="#contact">Let&apos;s talk</a>
          </div>
          <button className="grid size-11 place-items-center rounded-full border border-[#17251d]/20 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            <Icon name={menuOpen ? "close" : "menu"} />
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-[#17251d]/10 bg-[#f4f1e9] px-5 py-6 md:hidden">
            <div className="flex flex-col gap-5 text-lg font-semibold">
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#experience" onClick={closeMenu}>Experience</a>
              <a href="#skills" onClick={closeMenu}>Skills</a>
              <a href="#contact" onClick={closeMenu}>Let&apos;s talk</a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="relative mx-auto grid w-full max-w-[1320px] gap-14 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
            <div>
              <div className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em]">
                <span className="block h-px w-10 bg-[#e95636]" />
                Based in Karachi · Open to opportunities
              </div>
              <h1 className="max-w-5xl text-[clamp(4.2rem,10vw,9rem)] font-semibold leading-[.82] tracking-[-.065em]">
                Curious mind.<br />
                <span className="font-serif font-normal italic text-[#e95636]">Practical</span> builder.
              </h1>
              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <a href="#experience" className="group inline-flex w-fit items-center gap-4 rounded-full bg-[#17251d] px-7 py-4 font-semibold text-white transition hover:bg-[#2e4939]">
                  Explore my work
                  <span className="grid size-8 place-items-center rounded-full bg-white/10 transition group-hover:translate-x-1"><Icon name="arrow" className="size-4" /></span>
                </a>
                <p className="max-w-sm text-base leading-7 text-[#536058]">BSIT student growing across full-stack development, technical support, and visual communication.</p>
              </div>
            </div>
            <aside className="relative lg:pb-3">
              <div className="absolute -left-5 -top-5 size-24 rounded-full border border-[#17251d]/20" />
              <div className="relative overflow-hidden rounded-[2rem] bg-[#d8e1d0] p-7 sm:p-9">
                <span className="font-serif text-7xl leading-none text-[#e95636]">“</span>
                <p className="-mt-5 text-2xl font-semibold leading-snug tracking-tight">I enjoy making technology feel useful, clear, and human.</p>
                <div className="mt-12 flex items-end justify-between border-t border-[#17251d]/15 pt-5">
                  <div>
                    <p className="font-bold">Noorulain Jamil Shaikh</p>
                    <p className="mt-1 text-sm text-[#536058]">Developer · IT Support · Designer</p>
                  </div>
                  <div className="grid size-12 place-items-center rounded-full bg-[#17251d] text-white"><Icon name="code" /></div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="about" className="bg-[#17251d] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="section-label text-[#eaa28f]">01 · About</p>
              <p className="mt-8 max-w-xs text-sm leading-6 text-white/55">A multidisciplinary technologist driven by curiosity, consistent learning, and a hands-on approach.</p>
            </div>
            <div>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl lg:text-6xl">
                I bridge <span className="font-serif font-normal italic text-[#f0a38e]">technology</span>, support, and creativity to solve real problems.
              </h2>
              <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
                <div><strong className="block text-4xl">3.29</strong><span className="mt-2 block text-sm text-white/50">Current CGPA</span></div>
                <div><strong className="block text-4xl">3+</strong><span className="mt-2 block text-sm text-white/50">Disciplines explored</span></div>
                <div><strong className="block text-4xl">3</strong><span className="mt-2 block text-sm text-white/50">Languages spoken</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <p className="section-label">02 · Experience</p>
                <h2 className="mt-5 text-5xl font-semibold tracking-[-.05em] sm:text-6xl">Where I&apos;ve <span className="font-serif font-normal italic text-[#e95636]">contributed.</span></h2>
              </div>
              <p className="max-w-sm text-sm leading-6 text-[#667169]">Experience across education, institutional media, digital marketing, and academic operations.</p>
            </div>
            <div className="border-t border-[#17251d]/20">
              {experiences.map((item, index) => (
                <article key={item.role + item.company} className="experience-row grid gap-4 border-b border-[#17251d]/20 py-8 sm:grid-cols-[180px_1fr] lg:grid-cols-[210px_1fr_1fr] lg:items-start">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-[.12em] text-[#667169]">
                    {item.current && <span className="size-2 animate-pulse rounded-full bg-[#e95636]" />}
                    {item.period}
                  </div>
                  <div>
                    <span className="mb-2 block text-xs text-[#8a938d]">0{index + 1}</span>
                    <h3 className="text-2xl font-semibold tracking-tight">{item.role}</h3>
                    <p className="mt-1 text-[#e95636]">{item.company}</p>
                  </div>
                  <p className="max-w-xl text-sm leading-7 text-[#667169] sm:col-start-2 lg:col-start-auto">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="bg-[#dbe3d5] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1320px]">
            <div className="mb-14">
              <p className="section-label">03 · Capabilities</p>
              <h2 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-.05em] sm:text-6xl">A growing toolkit for <span className="font-serif font-normal italic text-[#e95636]">meaningful work.</span></h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="skill-card rounded-[1.75rem] border border-[#17251d]/10 bg-[#f4f1e9] p-7 sm:p-9">
                  <div className="flex items-start justify-between">
                    <div className="grid size-14 place-items-center rounded-2xl bg-[#17251d] text-white"><Icon name={group.icon} className="size-6" /></div>
                    <span className="font-serif text-2xl italic text-[#869187]">{group.number}</span>
                  </div>
                  <h3 className="mt-10 text-3xl font-semibold tracking-tight">{group.title}</h3>
                  <p className="mt-3 min-h-14 text-sm leading-6 text-[#667169]">{group.description}</p>
                  <div className="mt-8 flex flex-wrap gap-2 border-t border-[#17251d]/10 pt-6">
                    {group.skills.map((skill) => <span key={skill} className="rounded-full border border-[#17251d]/15 px-3 py-1.5 text-xs font-semibold">{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-2">
            <div>
              <p className="section-label">04 · Education</p>
              <div className="mt-8 rounded-[1.75rem] bg-[#e95636] p-8 text-white sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[.16em] text-white/65">2024 — 2028</p>
                <h2 className="mt-6 text-4xl font-semibold tracking-[-.04em]">BS Information Technology</h2>
                <p className="mt-3 text-lg text-white/75">Virtual University of Pakistan</p>
                <div className="mt-12 flex justify-between border-t border-white/25 pt-5 text-sm"><span>6th Semester</span><span>CGPA 3.29</span></div>
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#17251d]/15 p-6"><p className="text-xs font-bold text-[#e95636]">HSC · 2023</p><p className="mt-3 font-semibold">Govt. Degree College Majeed SRE</p><p className="mt-5 text-2xl font-semibold">75.27%</p></div>
                <div className="rounded-3xl border border-[#17251d]/15 p-6"><p className="text-xs font-bold text-[#e95636]">SSC · 2021</p><p className="mt-3 font-semibold">ASF Public School</p><p className="mt-5 text-2xl font-semibold">94.35%</p></div>
              </div>
            </div>
            <div>
              <p className="section-label">05 · Certifications</p>
              <div className="mt-8 border-t border-[#17251d]/20">
                {certifications.map((item, index) => (
                  <div key={item} className="flex items-center gap-5 border-b border-[#17251d]/20 py-5">
                    <span className="text-xs font-bold text-[#e95636]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="font-semibold">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#17251d] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1320px] gap-16 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="section-label text-[#eaa28f]">06 · Contact</p>
              <h2 className="mt-6 text-5xl font-semibold leading-[.95] tracking-[-.05em] sm:text-7xl">Let&apos;s build something <span className="font-serif font-normal italic text-[#f0a38e]">useful.</span></h2>
              <p className="mt-8 max-w-md leading-7 text-white/55">I&apos;m currently open to entry-level IT, software development, and creative technology opportunities.</p>
              <div className="mt-10 space-y-4">
                <a href="mailto:jamilnoorulain@gmail.com" className="flex items-center gap-4 text-sm transition hover:text-[#f0a38e]"><span className="grid size-10 place-items-center rounded-full border border-white/20"><Icon name="mail" className="size-4" /></span>jamilnoorulain@gmail.com</a>
                <a href="tel:+923369530563" className="flex items-center gap-4 text-sm transition hover:text-[#f0a38e]"><span className="grid size-10 place-items-center rounded-full border border-white/20"><Icon name="phone" className="size-4" /></span>+92 336 9530563</a>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white/6 p-6 sm:p-9">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="form-field">Your name<input required name="name" placeholder="Jane Smith" /></label>
                <label className="form-field">Email address<input required type="email" name="email" placeholder="jane@company.com" /></label>
              </div>
              <label className="form-field mt-6">How can I help?<textarea required name="message" rows={5} placeholder="Tell me a little about the opportunity..." /></label>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <button type="submit" className="group inline-flex items-center gap-4 rounded-full bg-[#e95636] px-7 py-4 font-semibold transition hover:bg-[#f16a4c]">
                  Send a message <Icon name="arrow" className="size-5 transition group-hover:translate-x-1" />
                </button>
                {sent && <span className="text-sm text-white/55">Your email app should open now.</span>}
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#17251d] px-5 py-8 text-white/45 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1320px] flex-col justify-between gap-3 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Noorulain Jamil Shaikh</p>
          <p>Karachi, Sindh, Pakistan</p>
        </div>
      </footer>
    </div>
  );
}
