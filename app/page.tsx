import { createElement } from "react";
import parse from "html-react-parser";
import { Element } from "html-react-parser";
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
    <div class="resume-project-cover" aria-hidden="true"><span>Mobile · Web3</span></div>
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
    <div class="resume-project-cover" aria-hidden="true"><span>Web3 · Launchpad</span></div>
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
    <div class="resume-project-cover" aria-hidden="true"><span>Web3 · Exchange</span></div>
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
    <div class="resume-project-cover" aria-hidden="true"><span>HCI · Cultural Archive</span></div>
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
    <div class="resume-project-cover" aria-hidden="true"><span>UX · Accessible Transit</span></div>
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
