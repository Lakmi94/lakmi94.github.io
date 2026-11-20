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
      "A new city or culture is my favorite way to keep learning and to see things through a fresh lens.",
    photos: ["/images/about/travel1.png", "/images/about/travel2.png", "/images/about/travel3.png", "/images/about/travel4.png", "/images/about/travel5.jpg", "/images/about/travel6.png", "/images/about/travel7.jpg"
    ],
  },
  {
    id: "reading",
    title: "Reading",
    description:
      "I enjoy getting lost in a good book and discovering new ideas and stories.",
    photos: ['/images/about/book6.jpg','/images/about/book1.jpg', '/images/about/book2.jpg', '/images/about/book3.png', '/images/about/book4.png',  ],
  },
  {
    id: "crafting",
    title: "Crafting",
    description:
      "I enjoy making things with my hands like pottery and jewelry.",
    photos: ['/images/about/crafts1.png', '/images/about/crafts2.png', '/images/about/crafts3.png','/images/about/crafts4.png', '/images/about/crafts5.png', '/images/about/crafts6.png', ],
  },
  {
    id: "cooking",
    title: "Cooking & baking",
    description: "I experiment with new recipes and enjoy time in the kitchen.",
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
