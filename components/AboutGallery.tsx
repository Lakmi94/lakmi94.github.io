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
    photos: [null, null, null],
  },
  {
    id: "reading",
    title: "Reading",
    description:
      "I enjoy getting lost in a good book and discovering new ideas and stories.",
    photos: [null, null, null],
  },
  {
    id: "crafting",
    title: "Crafting",
    description:
      "I enjoy drawing, pottery, knitting, and making things with my hands.",
    photos: [null, null, null],
  },
  {
    id: "cooking",
    title: "Cooking & baking",
    description: "I experiment with new recipes and enjoy time in the kitchen.",
    photos: [null, null, null],
  },
];

export default function AboutGallery() {
  const [activePhotos, setActivePhotos] = useState<Record<string, number>>({});

  const changePhoto = (id: string, count: number, direction: -1 | 1) => {
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

            return (
              <article className="about-gallery-card" key={interest.id}>
                <div className="about-gallery-frame">
                  {photo ? (
                    <img
                      className="about-gallery-image"
                      src={photo}
                      alt={`${interest.title}, photo ${activeIndex + 1}`}
                    />
                  ) : (
                    <div className="about-gallery-placeholder">
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
