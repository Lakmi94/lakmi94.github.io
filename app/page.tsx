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
  const markup = portfolioMarkup.replace(educationAccordion, `${educationAccordion}${mastersEducationEntry}`);

  if (markup === portfolioMarkup) {
    throw new Error("Could not find the Education accordion in the portfolio markup.");
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
