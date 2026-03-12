'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface TransformationImage {
  id: number;
  image: string;
}

const transformations: TransformationImage[] = [
  { id: 1, image: '/images/transformations/1.png' },
  { id: 2, image: '/images/transformations/2.png' },
  { id: 3, image: '/images/transformations/3.png' },
  { id: 4, image: '/images/transformations/4.png' },
  { id: 5, image: '/images/transformations/5.png' },
  { id: 6, image: '/images/transformations/6.png' },
  { id: 7, image: '/images/transformations/7.png' },
  { id: 8, image: '/images/transformations/8.png' },
  { id: 9, image: '/images/transformations/9.png' },
  { id: 10, image: '/images/transformations/10.png' },
  { id: 11, image: '/images/transformations/11.png' },
  { id: 12, image: '/images/transformations/12.png' },
  { id: 13, image: '/images/transformations/13.png' },
  { id: 14, image: '/images/transformations/14.png' },
  { id: 15, image: '/images/transformations/15.png' },
];

export function TransformationGallery() {
  return (
    <section className="py-20 lg:py-32 bg-[#fdf8f3]">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500&display=swap');

        .gallery-heading {
          font-family: 'Playfair Display', serif;
        }
        .gallery-body {
          font-family: 'DM Sans', sans-serif;
        }

        .carousel-track {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          padding-bottom: 1.5rem;
          padding-top: 0.5rem;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          align-items: center;
        }

        .carousel-track::-webkit-scrollbar {
          height: 3px;
        }
        .carousel-track::-webkit-scrollbar-track {
          background: transparent;
        }
        .carousel-track::-webkit-scrollbar-thumb {
          background: #c9a87c;
          border-radius: 99px;
        }

        .t-card {
          flex-shrink: 0;
          scroll-snap-align: start;
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          width: 340px;
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
        }

        .t-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);
        }

        .t-card .img-wrap {
          width: 100%;
          aspect-ratio: 16 / 9;
          position: relative;
        }

        .t-card .img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.32) 0%,
            transparent 55%
          );
          pointer-events: none;
        }

        .center-divider {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          width: 2px;
          background: rgba(255, 255, 255, 0.55);
          z-index: 5;
          pointer-events: none;
        }

        .ba-badge {
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          white-space: nowrap;
          padding: 5px 14px;
          border-radius: 99px;
          background: rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.35);
          color: #fff;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .dot-before {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f87171;
          display: inline-block;
        }
        .dot-after {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          display: inline-block;
        }

        .scroll-hint {
          font-family: 'DM Sans', sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #a08060;
          font-size: 13px;
          margin-top: 24px;
          letter-spacing: 0.04em;
        }
        .accent-line {
          display: inline-block;
          width: 36px;
          height: 2px;
          background: #c9a87c;
          border-radius: 2px;
          vertical-align: middle;
          margin: 0 8px;
        }
      `}</style>

      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="gallery-heading text-4xl sm:text-5xl font-black text-[#1a1a1a] mb-4 leading-tight">
            Real People,
            <span style={{ color: '#c9a87c' }}> Real Results.</span>
          </h2>
          <p className="gallery-body text-base text-[#7a6a5a]">
            Every card shows the full journey — before on the left, after on the
            right.
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel-track">
          {transformations.map((t) => (
            <div key={t.id} className="t-card">
              <div className="img-wrap">
                <Image
                  src={t.image}
                  alt={`Client transformation ${t.id}`}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
                <div className="center-divider" />
              </div>
              <div className="ba-badge">
                <span className="dot-before" />
                Before
                <span style={{ opacity: 0.7, fontSize: '10px' }}>›</span>
                After
                <span className="dot-after" />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <ChevronRight size={14} />
          <span>
            <span className="accent-line" />
            Swipe to explore all transformations
            <span className="accent-line" />
          </span>
          <ChevronRight size={14} />
        </div>
      </div>
    </section>
  );
}
