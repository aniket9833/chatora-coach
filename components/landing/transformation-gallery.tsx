'use client';

import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import { Badge } from '../ui/badge';

interface TransformationImage {
  id: number;
  image: string;
  title?: string;
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
          gap: 2rem;
          overflow-x: auto;
          padding-bottom: 1.5rem;
          padding-top: 1rem;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          align-items: flex-start;
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
          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease;
          /* wide aspect to accommodate side-by-side before/after */
          width: 340px;
        }

        .t-card:nth-child(odd) {
          margin-top: 0px;
        }
        .t-card:nth-child(even) {
          margin-top: 32px;
        }

        .t-card:hover {
          transform: translateY(-8px) scale(1.015);
          box-shadow: 0 24px 56px rgba(0, 0, 0, 0.13);
        }

        .t-card .img-wrap {
          width: 100%;
          aspect-ratio: 16 / 9;
          position: relative;
        }

        /* bottom gradient overlay */
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
          border-radius: 18px;
        }

        /* the "Before → After" badge sits at the bottom of each card */
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

        .ba-badge .dot-before {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #f87171;
          display: inline-block;
        }
        .ba-badge .dot-after {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          display: inline-block;
        }
        .ba-badge .arrow {
          opacity: 0.7;
          font-size: 10px;
        }

        /* divider line in the middle of each card */
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Visual Proof
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Client Transformations
          </h2>
          <p className="text-lg text-muted-foreground">
            See the real results from our client&apos;s dedication and our
            personalized approach.
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
                {/* subtle center line splitting before/after */}
                <div className="center-divider" />
              </div>

              {/* floating before → after pill */}
              <div className="ba-badge">
                <span className="dot-before" />
                Before
                <span className="arrow">›</span>
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
