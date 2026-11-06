import { createElement } from "react";
import parse from "html-react-parser";
import { Element, Text } from "html-react-parser";
import AboutGallery from "../components/AboutGallery";
import LegacyScripts from "../components/LegacyScripts";
import { portfolioMarkup } from "./portfolio-content";

const profileLinks = {
  github: "https://github.com/Lakmi94",
  linkedin: "https://www.linkedin.com/in/lakmi-kulathunga/",
};

const imageDescriptions: Record<string, string> = {
  "images/logo (1).png": "EVS XTAccess",
  "images/ipdirector.PNG": "EVS IPDirector",
  "images/ingestfunnel.PNG": "EVS Ingest Funnel",
  "images/Destino.png": "Destino travel application",
  "images/magickittens.jpg": "Magic Kittens game",
  "images/Acta.jpg": "Acta travel journal app",
  "images/btp.PNG": "Olympic Broadcasting Services Broadcast Training Programme certificate",
  "images/udemycertificate.jpg": "Udemy full-stack web development certificate",
};

const skillGroups = [
  {
    title: "UX, Design & Research",
    skills: [
      "Figma",
      "Balsamiq",
      "Prototyping",
      "Usability testing",
      "SUS",
      "UEQ",
      "HCI design methods",
      "Accessible computing",
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Angular",
      "TypeScript",
      "JavaScript (ES6)",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Libraries, Tools & Platforms",
    skills: [
      "Chakra UI",
      "Tailwind CSS",
      "Bootstrap",
      "Sass",
      "Redux",
      "GraphQL",
      "Git/GitHub",
      "Vercel",
      "ESLint",
      "Samsung Blockchain SDK",
    ],
  },
  {
    title: "Programming, Databases & Systems",
    skills: [
      "Java",
      "Python",
      "Android",
      "MongoDB",
      "MySQL",
      "Windows",
      "Linux",
      "macOS",
      "EVS broadcast software",
    ],
  },
  {
    title: "Languages",
    skills: ["Sinhala · Native", "English · Fluent", "Korean · Beginner"],
  },
];

const skillIcons: Record<string, string> = {
  Figma: "fas fa-vector-square",
  Prototyping: "fas fa-drafting-compass",
  "Usability testing": "fas fa-user-check",
  "User research": "fas fa-users",
  "User testing": "fas fa-user-check",
  SUS: "fas fa-poll",
  UEQ: "fas fa-clipboard-check",
  "HCI design methods": "fas fa-users",
  "Accessible computing": "fas fa-universal-access",
  "Accessible design": "fas fa-universal-access",
  React: "devicon-react-original",
  "React Native": "devicon-react-original",
  "Vue.js": "devicon-vuejs-plain",
  "Vue Native": "devicon-vuejs-plain",
  Angular: "devicon-angularjs-plain",
  TypeScript: "devicon-typescript-plain",
  "JavaScript (ES6)": "devicon-javascript-plain",
  JavaScript: "devicon-javascript-plain",
  HTML: "devicon-html5-plain",
  CSS: "devicon-css3-plain",
  Bootstrap: "devicon-bootstrap-plain",
  Sass: "devicon-sass-original",
  "Git/GitHub": "devicon-github-plain",
  Ethers: "fas fa-code",
  "Web3.js": "fas fa-cubes",
  "Uniswap SDK": "fas fa-exchange-alt",
  "Android Studio": "devicon-android-plain",
  Java: "devicon-java-plain",
  Python: "devicon-python-plain",
  Android: "devicon-android-plain",
  MongoDB: "devicon-mongodb-plain",
  MySQL: "devicon-mysql-plain",
  Windows: "devicon-windows8-plain",
  Linux: "devicon-linux-plain",
  "Sinhala · Native": "fas fa-language",
  "English · Fluent": "fas fa-language",
  "Korean · Beginner": "fas fa-language",
};

const skillImagePaths: Record<string, string> = {
  Balsamiq: "/images/balsamiq-logo.png",
  "Chakra UI": "/images/chakra-ui-logo.png",
  "Tailwind CSS": "/images/tailwind-css-logo.png",
  Redux: "/images/redux-logo.png",
  GraphQL: "/images/graphql-logo.png",
  Vercel: "/images/vercel-logo.png",
  ESLint: "/images/eslint-logo.png",
  "Samsung Blockchain SDK": "/images/samsung-blockchain-logo.png",
  "EVS broadcast software": "/images/evs-color-logo.png",
  macOS: "/images/macos-logo.png",
  "Next.js": "/images/nextjs-logo.png",
};

const skillColors: Record<string, string> = {
  React: "#087ea4",
  "React Native": "#087ea4",
  "Vue.js": "#42b883",
  "Vue Native": "#42b883",
  Angular: "#dd0031",
  TypeScript: "#3178c6",
  "JavaScript (ES6)": "#b08d00",
  JavaScript: "#b08d00",
  HTML: "#e34f26",
  CSS: "#1572b6",
  Bootstrap: "#7952b3",
  Sass: "#cc6699",
  "Git/GitHub": "#24292f",
  Ethers: "#2535a0",
  "Web3.js": "#f16822",
  "Uniswap SDK": "#ff007a",
  Java: "#ed8b00",
  Python: "#3776ab",
  Android: "#3ddc84",
  "Android Studio": "#3ddc84",
  MongoDB: "#47a248",
  MySQL: "#4479a1",
  Windows: "#0078d4",
  Linux: "#b8860b",
};

const projectSkills: Record<string, string[]> = {
  "Tokamak Staking Mobile App": [
    "Vue Native",
    "React Native",
    "Samsung Blockchain SDK",
    "Android Studio",
  ],
  TONStarter: ["React", "Chakra UI", "Ethers", "Web3.js", "GraphQL"],
  "Tokamak Swap V2": ["Next.js", "Ethers", "Uniswap SDK"],
  Arqivea: ["Figma", "User research", "Prototyping", "Usability testing", "SUS", "UEQ"],
  EasyGo: ["Figma", "User testing", "Accessible design", "Usability testing", "SUS", "UEQ"],
  "Magic Kittens": ["JavaScript"],
};

const figmaLogoPaths = [
  { d: "M6 0h6v12H6A6 6 0 1 1 6 0z", fill: "#f24e1e" },
  { d: "M12 0h6a6 6 0 0 1 0 12h-6z", fill: "#ff7262" },
  { d: "M12 12h6a6 6 0 0 1 0 12h-6z", fill: "#1abcfe" },
  { d: "M6 12h6v12H6a6 6 0 0 1 0-12z", fill: "#a259ff" },
  { d: "M6 24h6v6a6 6 0 0 1-12 0 6 6 0 0 1 6-6z", fill: "#0acf83" },
];

function FigmaLogo({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 36" aria-hidden="true">
      {figmaLogoPaths.map((path) => (
        <path key={path.fill} d={path.d} fill={path.fill} />
      ))}
    </svg>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="colorlib-skills" data-section="skills">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">Specialty</span>
            <h2 className="colorlib-heading">My Skills</h2>
          </div>
        </div>
        <div className="resume-skill-groups">
          {skillGroups.map((group) => (
            <section className="resume-skill-group" key={group.title} aria-label={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>
                    {skill === "Figma" ? (
                      <FigmaLogo className="skill-logo figma-logo" />
                    ) : skillImagePaths[skill] ? (
                      <img
                        className={`skill-logo skill-image${skill === "EVS broadcast software" ? " evs-logo" : ""}${skill === "Chakra UI" ? " chakra-logo" : ""}`}
                        src={skillImagePaths[skill]}
                        alt=""
                      />
                    ) : (
                      <i
                        className={`skill-logo ${skillIcons[skill]}`}
                        style={{ color: skillColors[skill] ?? "var(--accent-strong)" }}
                        aria-hidden="true"
                      />
                    )}
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

const mastersEducationEntry = `<div class="panel panel-default">
  <div class="panel-heading" role="tab" id="headingMasters">
    <h4 class="panel-title">
      <a class="collapsed" data-toggle="collapse" data-parent="#accordion"
        href="#collapseMasters" aria-expanded="false" aria-controls="collapseMasters">
        Master’s in Digital Innovation · Human-Computer Interaction and Design
      </a>
    </h4>
  </div>
  <div id="collapseMasters" class="panel-collapse collapse" role="tabpanel"
    aria-labelledby="headingMasters">
    <div class="panel-body">
      <h4>EIT Digital Master School</h4>
      <p>Double-degree master’s program in progress. First year at Universidad Politécnica de Madrid, Spain; second year at KTH Royal Institute of Technology, Sweden.</p>
      <p>KTH specialization: Physical Interaction Design and Realization.</p>
      <h5 class="coursework-heading">Coursework</h5>
      <ul class="coursework-list">
        <li>Evaluation of Interactive Systems</li>
        <li>UX and Mobile Interaction</li>
        <li>Accessible Computing for People with Functional Diversity</li>
        <li>HCI Design Methods</li>
        <li>Innovation and Entrepreneurship Management</li>
        <li>Physical Interaction Design and Realization</li>
        <li>Multimodal Interaction and Interfaces</li>
        <li>Interactive Visualization of Virtual Urban Environments</li>
        <li>Computational Urban Design</li>
      </ul>
    </div>
  </div>
</div>`;

const resumeProjects = `<div class="col-md-4 col-sm-6">
  <div class="blog-entry resume-project-card">
    <div class="resume-project-cover" aria-hidden="true"><span class="project-logo"><i class="fas fa-mobile-alt"></i></span><span class="project-category">Mobile · Web3</span></div>
    <div class="desc">
      <span><small>Mobile · Decentralized App</small></span>
      <h3>Tokamak Staking Mobile App</h3>
      <p>A mobile crypto-staking app built with Vue Native, React Native, Samsung Blockchain SDK, and Android Studio, and published on the Samsung Galaxy Store.</p>
      <p class="resume-project-links"><a href="https://github.com/tokamak-network/tokamak-staking-app" target="_blank">GitHub repository</a></p>
    </div>
  </div>
</div>
<div class="col-md-4 col-sm-6">
  <div class="blog-entry resume-project-card">
    <div class="resume-project-cover" aria-hidden="true"><span class="project-logo"><i class="fas fa-rocket"></i></span><span class="project-category">Web3 · Launchpad</span></div>
    <div class="desc">
      <span><small>Web3 · Decentralized Launchpad</small></span>
      <h3>TONStarter</h3>
      <p>An Ethereum-based decentralized launchpad built with React, Chakra UI, Ethers, Web3.js, and GraphQL. Contributed to frontend development with the Tokamak frontend unit.</p>
      <p class="resume-project-links">
        <a href="https://github.com/tokamak-network/tonstarter-frontend/tree/main" target="_blank">GitHub repository</a>
        <a href="https://medium.com/tokamak-network/what-is-tonstarter-en-kr-556b808d9734" target="_blank">Project article</a>
      </p>
    </div>
  </div>
</div>
<div class="col-md-4 col-sm-6">
  <div class="blog-entry resume-project-card">
    <div class="resume-project-cover" aria-hidden="true"><span class="project-logo"><i class="fas fa-exchange-alt"></i></span><span class="project-category">Web3 · Exchange</span></div>
    <div class="desc">
      <span><small>Web3 · Token Exchange</small></span>
      <h3>Tokamak Swap V2</h3>
      <p>A decentralized token-swap app inspired by Uniswap, built with Next.js, Ethers, and Uniswap contracts and SDK.</p>
      <p class="resume-project-links">
        <a href="https://github.com/tokamak-network/tokamakswapv2" target="_blank">GitHub repository</a>
        <a href="https://medium.com/tokamak-network/tokamak-network-swap-guide-en-kr-93d6defcb04a" target="_blank">Project article</a>
      </p>
    </div>
  </div>
</div>
<div class="col-md-4 col-sm-6">
  <div class="blog-entry resume-project-card">
    <div class="resume-project-cover" aria-hidden="true"><span class="project-logo"><i class="fas fa-landmark"></i></span><span class="project-category">HCI · Cultural Archive</span></div>
    <div class="desc">
      <span><small>HCI · Museum Itinerary</small></span>
      <h3>Arqivea</h3>
      <p>A museum itinerary and cultural archive built end-to-end as an HCI group project, from user research and prototyping to a working product, with interviews, observations, usability tests, and SUS/UEQ evaluations.</p>
      <p class="resume-project-links"><a href="https://www.figma.com/proto/RYuvXqwJvJsECIPqSH1RAx/Arqivea?node-id=51-636&viewport=384%2C189%2C0.5&t=ebIQkeKPi4bX3llA-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=51%3A636&page-id=1%3A2" target="_blank">View prototype</a></p>
    </div>
  </div>
</div>
<div class="col-md-4 col-sm-6">
  <div class="blog-entry resume-project-card">
    <div class="resume-project-cover" aria-hidden="true"><span class="project-logo"><i class="fas fa-route"></i></span><span class="project-category">UX · Accessible Transit</span></div>
    <div class="desc">
      <span><small>UX · Transit Prototype</small></span>
      <h3>EasyGo</h3>
      <p>A high-fidelity accessible transit prototype designed in Figma. Evaluated with user testing, SUS, and UEQ questionnaires to refine smart routing and interface layout.</p>
      <p class="resume-project-links"><a href="https://www.figma.com/proto/dTjYxDKS4g9jHKOfDDcbtI/EasyGo-High-Fidelity-Prototype--Community-?node-id=170-1137&p=f&t=Ve51zzahJdm5zFw6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=130%3A231&show-proto-sideb" target="_blank">View prototype</a></p>
    </div>
  </div>
</div>`;

const aboutSection = `<section class="colorlib-about" data-section="about">
  <div class="colorlib-narrow-content">
    <div class="row">
      <div class="col-md-6 col-md-offset-3 col-md-pull-3">
        <span class="heading-meta">A little about me</span>
        <h2 class="colorlib-heading">Beyond work and studies</h2>
      </div>
    </div>
    <div class="about-card">
      <p>When I’m not working or studying, I’m usually planning my next trip, watching a good show, or trying a new recipe. I love cooking, baking (with varying levels of success), and getting lost in a good book.</p>
      <ul class="about-interests" aria-label="My interests">
        <li>Travel</li>
        <li>TV</li>
        <li>Cooking</li>
        <li>Baking</li>
        <li>Reading</li>
      </ul>
    </div>
  </div>
</section>`;

function getTextContent(element: Element): string {
  return element.children
    .map((child) =>
      child instanceof Element ? getTextContent(child) : "data" in child ? child.data : "",
    )
    .join("")
    .trim();
}

function isWithin(element: Element, className: string): boolean {
  let parent = element.parent;

  while (parent instanceof Element) {
    if (parent.attribs.class?.split(/\s+/).includes(className)) return true;
    parent = parent.parent;
  }

  return false;
}

function addProjectSkillBadges(card: Element, projectTitle: string): void {
  const skills = projectSkills[projectTitle];
  if (!skills) return;

  const findDescription = (element: Element): Element | undefined => {
    if (element.attribs.class?.split(/\s+/).includes("desc")) return element;

    for (const child of element.children) {
      if (child instanceof Element) {
        const description = findDescription(child);
        if (description) return description;
      }
    }

    return undefined;
  };
  const description = findDescription(card);
  if (!description) {
    throw new Error(`Could not find the description for the ${projectTitle} project card.`);
  }

  const badges = new Element(
    "ul",
    { class: "project-skill-list", "aria-label": "Skills used" },
    skills.map((skill) => {
      const icon =
        skill === "Figma"
          ? new Element(
              "svg",
              {
                class: "project-skill-icon figma-logo",
                viewBox: "0 0 24 36",
                "aria-hidden": "true",
              },
              figmaLogoPaths.map(
                (path) => new Element("path", { d: path.d, fill: path.fill }, []),
              ),
            )
          : skillImagePaths[skill]
            ? new Element(
                "img",
                {
                  class: `project-skill-icon skill-image${skill === "Chakra UI" ? " chakra-logo" : ""}`,
                  src: skillImagePaths[skill],
                  alt: "",
                  loading: "lazy",
                  "aria-hidden": "true",
                },
                [],
              )
          : new Element(
              "i",
              {
                class: `project-skill-icon ${skillIcons[skill]}`,
                "data-logo": skill,
                style: `color: ${skillColors[skill] ?? "var(--accent-strong)"}`,
                "aria-hidden": "true",
              },
              [],
            );
      return new Element("li", {}, [icon, new Text(skill)]);
    }),
  );
  const linksIndex = description.children.findIndex(
    (child) =>
      child instanceof Element &&
      child.attribs.class?.split(/\s+/).includes("resume-project-links"),
  );
  description.children.splice(linksIndex === -1 ? description.children.length : linksIndex, 0, badges);
}

export default function Home() {
  const educationAccordion = '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">';
  const projectGrid = '<div class="row" style="padding: 0">';
  const aboutNavItem = '<li><a href="#" data-nav-section="about">About Me</a></li>';
  const contactNavItem = '<li><a href="#" data-nav-section="contact">Contact</a></li>';
  const aboutSectionAnchor = '<section class="colorlib-contact" data-section="contact">';
  const withEducation = portfolioMarkup.replace(
    educationAccordion,
    `${educationAccordion}${mastersEducationEntry}`,
  );
  const withProjects = withEducation.replace(projectGrid, `${projectGrid}${resumeProjects}`);
  const withAboutNav = withProjects.replace(contactNavItem, `${aboutNavItem}${contactNavItem}`);
  const markup = withAboutNav.replace(aboutSectionAnchor, `${aboutSection}${aboutSectionAnchor}`);

  if (
    withEducation === portfolioMarkup ||
    withProjects === withEducation ||
    withAboutNav === withProjects ||
    markup === withAboutNav
  ) {
    throw new Error("Could not find an expected Education, Projects, or Contact markup insertion point.");
  }

  return (
    <>
      <a className="skip-link" href="#colorlib-main">
        Skip to main content
      </a>
      {parse(markup, {
        replace(domNode) {
          if (!(domNode instanceof Element)) return;

          const { attribs } = domNode;
          const text = getTextContent(domNode);

          if (
            domNode.name === "div" &&
            attribs.class?.split(/\s+/).includes("blog-entry") &&
            isWithin(domNode, "colorlib-blog")
          ) {
            const title = domNode.children
              .find(
                (child): child is Element =>
                  child instanceof Element &&
                  child.attribs.class?.split(/\s+/).includes("desc"),
              )
              ?.children.find(
                (child): child is Element => child instanceof Element && child.name === "h3",
              );
            const projectTitle = title ? getTextContent(title).replace(/\s+/g, " ") : "";
            addProjectSkillBadges(domNode, projectTitle);
          }

          if (domNode.name === "section" && attribs["data-section"] === "skills") {
            return createElement(SkillsSection);
          }

          if (domNode.name === "section" && attribs["data-section"] === "about") {
            return createElement(AboutGallery);
          }

          if (domNode.name === "section" && attribs["data-section"] && !attribs.id) {
            attribs.id = attribs["data-section"];
          }

          if (domNode.name === "div" && attribs.id === "colorlib-main") {
            domNode.name = "main";
          }

          if (domNode.name === "aside" && attribs.id === "colorlib-aside") {
            attribs["aria-label"] = "Portfolio sidebar";
          }

          if (domNode.name === "nav") {
            attribs["aria-label"] = "Main navigation";
          }

          if (domNode.name === "a" && attribs.class?.includes("js-colorlib-nav-toggle")) {
            domNode.name = "button";
            attribs.type = "button";
            attribs["aria-label"] = "Open navigation";
            delete attribs.href;
            delete attribs["data-toggle"];
            delete attribs["data-target"];
          }

          if (domNode.name === "h1" && attribs.id === "colorlib-logo") {
            domNode.name = "div";
          }

          if (domNode.name === "h2" && isWithin(domNode, "timeline-label")) {
            domNode.name = "h3";
          }

          if (
            domNode.name === "p" &&
            text === "Developing user friendly DAPPs for Tokamak Network using Vue.js"
          ) {
            return createElement(
              "div",
              null,
              createElement(
                "p",
                null,
                "Built user-facing decentralized applications for Tokamak Network using React, Next.js, Vue.js, TypeScript, and Chakra UI.",
              ),
              createElement(
                "ul",
                null,
                createElement(
                  "li",
                  null,
                  "Launched mobile decentralized apps on the Samsung Galaxy Store using Samsung Blockchain SDKs, Vue Native, and React Native.",
                ),
                createElement(
                  "li",
                  null,
                  "Led the frontend development unit, mentoring developers, reviewing code, making architectural decisions, and improving team workflows.",
                ),
              ),
            );
          }

          if (domNode.name === "h2" && text.toLowerCase().includes("lakmi94@gmail.com")) {
            domNode.name = "p";
            attribs.class = "hero-contact";
          }

          if (domNode.name === "a" && !attribs.href && !attribs["data-nav-section"]) {
            domNode.name = "span";
            delete attribs.target;
          }

          if (domNode.name === "a" && attribs["data-nav-section"]) {
            const sectionId =
              attribs["data-nav-section"] === "home"
                ? "colorlib-hero"
                : attribs["data-nav-section"];
            attribs.href = `#${sectionId}`;
          }

          if (domNode.name === "a" && attribs.target === "_blank") {
            attribs.rel = "noopener noreferrer";
          }

          if (domNode.name === "a" && !text) {
            const icon = domNode.children.find(
              (child): child is Element =>
                child instanceof Element && child.name === "i",
            );
            const iconClass = icon?.attribs.class ?? "";

            if (attribs.href?.includes("linkedin.com") || iconClass.includes("linkedin2")) {
              attribs["aria-label"] = "LinkedIn profile";
            } else if (attribs.href?.includes("github.com") || iconClass.includes("github")) {
              attribs["aria-label"] = "GitHub profile";
            }
          }

          if (domNode.name === "a" && attribs.href === "#" && isWithin(domNode, "colorlib-footer")) {
            const icon = domNode.children.find(
              (child): child is Element =>
                child instanceof Element && child.name === "i",
            );
            const listItem = domNode.parent;

            if (icon?.attribs.class?.includes("facebook2")) {
              attribs.href = profileLinks.github;
              attribs["aria-label"] = "GitHub profile";
              attribs.target = "_blank";
              attribs.rel = "noopener noreferrer";
              icon.attribs.class = "fab fa-github";
            } else if (icon?.attribs.class?.includes("linkedin2")) {
              attribs.href = profileLinks.linkedin;
              attribs["aria-label"] = "LinkedIn profile";
              attribs.target = "_blank";
              attribs.rel = "noopener noreferrer";
            } else {
              delete attribs.href;
              attribs.hidden = "true";
              if (listItem instanceof Element) listItem.attribs["aria-hidden"] = "true";
            }
          }

          if (domNode.name === "i" || domNode.name === "br") {
            attribs["aria-hidden"] = "true";
          }

          if (domNode.name === "img" && attribs.src) {
            attribs.alt = imageDescriptions[attribs.src] ?? "";
            attribs.loading = "lazy";
            attribs.decoding = "async";
          }

          if (domNode.name === "span" && text.toLowerCase() === "lakmi94@gmail.com") {
            return createElement(
              "a",
              { href: "mailto:lakmi94@gmail.com", className: attribs.class },
              text,
            );
          }

          if (domNode.name === "span" && text === "(010)-4013-2156") {
            return createElement(
              "a",
              { href: "tel:+821040132156", className: attribs.class },
              text,
            );
          }

          if (domNode.name === "div" && attribs.class?.includes("author-img")) {
            attribs.role = "img";
            attribs["aria-label"] = "Portrait of Lakmi Weerapperuma";
          }

          if (domNode.name === "p" && text === "lakmi94@gmail.com | lakmi94@outlook.com") {
            return createElement(
              "p",
              null,
              createElement("a", { href: "mailto:lakmi94@gmail.com" }, "lakmi94@gmail.com"),
              " | ",
              createElement("a", { href: "mailto:lakmi94@outlook.com" }, "lakmi94@outlook.com"),
            );
          }

          if (domNode.name === "p" && text === "+8210-4013-2156") {
            return createElement("p", null, createElement("a", { href: "tel:+821040132156" }, text));
          }
        },
      })}
      <LegacyScripts />
    </>
  );
}
