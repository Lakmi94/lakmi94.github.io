"use client";

import { useState } from "react";

type AboutInterest = {
  id: string;
  title: string;
  description: string;
  photos: (string | null)[];
};

// Replace each null with a path such as "/images/about/travel-1.jpg" as photos are added.
const interests: AboutInterest[] = [
  {
    id: "travel",
    title: "Traveling",
    description:
      "I travel the way I like to read: slowly and with curiosity. I'd rather wander a city on foot, find a good café and get a little lost than follow a strict plan. From the Leaning Tower in Pisa to Jeju island, I come home with a camera roll full of photos and a few stories.",
    photos: ["/images/about/travel1.webp", "/images/about/travel2.webp", "/images/about/travel3.webp", "/images/about/travel4.webp", "/images/about/travel5.webp", "/images/about/travel6.webp", "/images/about/travel7.webp"
    ],
  },
  {
    id: "reading",
    title: "Reading",
    description:
      "Stories are how I travel when I'm staying put. I mostly read romances and mysteries: I like a good love story, and I like a puzzle I can't put down.",
    photos: ['/images/about/book6.webp','/images/about/book1.webp', '/images/about/book2.webp', '/images/about/book3.webp', '/images/about/book4.webp',  ],
  },
  {
    id: "crafting",
    title: "Crafting",
    description:
      "I've always loved making things with my hands. I also love collecting earrings, so making my own was a natural next step. I also enjoy making and painting pottery.",
    photos: ['/images/about/crafts1.webp', '/images/about/crafts2.webp', '/images/about/crafts3.webp','/images/about/crafts4.webp', '/images/about/crafts5.webp', '/images/about/crafts6.webp', ],
  },
  {
    id: "cooking",
    title: "Cooking & baking",
    description: "The kitchen is where I unwind. I like trying new recipes, baking things from scratch and decorating them, and I'm happiest when there's something in the oven.",
    photos: [
      "/images/about/cooking-cake-crown.jpg",
      "/images/about/cooking-fruit-cake.jpg",
      "/images/about/cooking-green-cookies.jpg",
      "/images/about/cooking-lime-pie.jpg",
      "/images/about/cooking-floral-cake.jpg",
      "/images/about/cooking-pancakes.jpg",
      "/images/about/cooking-cupcakes.jpg",
    ],
  },
];

export default function AboutGallery() {
  const [activePhotos, setActivePhotos] = useState<Record<string, number>>({});
  const [slideDirections, setSlideDirections] = useState<Record<string, -1 | 1>>({});

  const changePhoto = (id: string, count: number, direction: -1 | 1) => {
    setSlideDirections((current) => ({ ...current, [id]: direction }));
    setActivePhotos((current) => ({
      ...current,
      [id]: ((current[id] ?? 0) + direction + count) % count,
    }));
  };

  return (
    <section id="about" className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-md-pull-3">
            <span className="heading-meta">A little about me</span>
            <h2 className="colorlib-heading">Beyond work and studies</h2>
          </div>
        </div>
        <div className="about-card">
          <p>
            Outside of work and studies, I love traveling, reading, crafting,
            and experimenting with new recipes in the kitchen.
          </p>
        </div>
        <div className="about-gallery-grid">
          {interests.map((interest) => {
            const activeIndex = activePhotos[interest.id] ?? 0;
            const photo = interest.photos[activeIndex];
            const slideClass =
              slideDirections[interest.id] === undefined
                ? ""
                : slideDirections[interest.id] === 1
                  ? " about-gallery-slide-next"
                  : " about-gallery-slide-previous";

            return (
              <article className="about-gallery-card" key={interest.id}>
                <div className="about-gallery-frame">
                  {photo ? (
                    <img
                      key={activeIndex}
                      className={`about-gallery-image${slideClass}`}
                      src={photo}
                      alt={`${interest.title}, photo ${activeIndex + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div
                      key={activeIndex}
                      className={`about-gallery-placeholder${slideClass}`}
                    >
                      <svg
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                        focusable="false"
                      >
                        <rect
                          x="5"
                          y="9"
                          width="38"
                          height="30"
                          rx="4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="17" cy="19" r="3" fill="currentColor" />
                        <path
                          d="m8 34 10-10 7 7 5-5 10 10"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                      </svg>
                      <span>{interest.title} photo</span>
                    </div>
                  )}
                  <div className="about-gallery-controls">
                    <button
                      type="button"
                      aria-label={`Previous ${interest.title} photo`}
                      onClick={() =>
                        changePhoto(interest.id, interest.photos.length, -1)
                      }
                    >
                      <span aria-hidden="true">‹</span>
                    </button>
                    <span aria-live="polite">
                      {activeIndex + 1} / {interest.photos.length}
                    </span>
                    <button
                      type="button"
                      aria-label={`Next ${interest.title} photo`}
                      onClick={() =>
                        changePhoto(interest.id, interest.photos.length, 1)
                      }
                    >
                      <span aria-hidden="true">›</span>
                    </button>
                  </div>
                </div>
                <h3>{interest.title}</h3>
                <p>{interest.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
