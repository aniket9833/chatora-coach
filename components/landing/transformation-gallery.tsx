'use client';

import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

interface TransformationImage {
  id: number;
  image: string;
  title?: string;
  description?: string;
}

const transformations: TransformationImage[] = [
  {
    id: 1,
    image: '/images/transformations/1.jpeg',
    title: 'Transformation 1',
    description: 'Follow their journey',
  },
  {
    id: 2,
    image: '/images/transformations/2.jpeg',
    title: 'Transformation 2',
    description: 'Follow their journey',
  },
  {
    id: 3,
    image: '/images/transformations/3.jpeg',
    title: 'Transformation 3',
    description: 'Follow their journey',
  },
  {
    id: 4,
    image: '/images/transformations/4.jpeg',
    title: 'Transformation 4',
    description: 'Follow their journey',
  },
  {
    id: 5,
    image: '/images/transformations/5.jpeg',
    title: 'Transformation 5',
    description: 'Follow their journey',
  },
  {
    id: 6,
    image: '/images/transformations/6.jpeg',
    title: 'Transformation 6',
    description: 'Follow their journey',
  },
  {
    id: 7,
    image: '/images/transformations/7.jpeg',
    title: 'Transformation 7',
    description: 'Follow their journey',
  },
  {
    id: 8,
    image: '/images/transformations/8.jpeg',
    title: 'Transformation 8',
    description: 'Follow their journey',
  },
  {
    id: 9,
    image: '/images/transformations/9.jpeg',
    title: 'Transformation 9',
    description: 'Follow their journey',
  },
  {
    id: 10,
    image: '/images/transformations/10.jpeg',
    title: 'Transformation 10',
    description: 'Follow their journey',
  },
  {
    id: 11,
    image: '/images/transformations/11.jpeg',
    title: 'Transformation 11',
    description: 'Follow their journey',
  },
  {
    id: 12,
    image: '/images/transformations/12.jpeg',
    title: 'Transformation 12',
    description: 'Follow their journey',
  },
  {
    id: 13,
    image: '/images/transformations/13.jpeg',
    title: 'Transformation 13',
    description: 'Follow their journey',
  },
  {
    id: 14,
    image: '/images/transformations/14.jpeg',
    title: 'Transformation 14',
    description: 'Follow their journey',
  },
  {
    id: 15,
    image: '/images/transformations/15.jpeg',
    title: 'Transformation 15',
    description: 'Follow their journey',
  },
];

export function TransformationGallery() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            Visual Proof
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Client Transformations
          </h2>
          <p className="text-lg text-muted-foreground">
            See the real results from our client's dedication and our
            personalized approach.
          </p>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div className="relative group">
          <style jsx>{`
            .carousel {
              scroll-behavior: smooth;
              scroll-snap-type: x mandatory;
              scroll-padding: 0 2rem;
            }

            .carousel-item {
              scroll-snap-align: start;
              scroll-snap-stop: always;
            }

            /* Custom scrollbar */
            .carousel::-webkit-scrollbar {
              height: 8px;
            }

            .carousel::-webkit-scrollbar-track {
              background: #e6e6e6;
              border-radius: 4px;
            }

            .carousel::-webkit-scrollbar-thumb {
              background: #0b3c5d;
              border-radius: 4px;
            }

            .carousel::-webkit-scrollbar-thumb:hover {
              background: #082940;
            }
          `}</style>

          <div className="carousel flex gap-6 overflow-x-auto pb-4">
            {transformations.map((transformation) => (
              <Card
                key={transformation.id}
                className="carousel-item flex-shrink-0 w-64 bg-card border-border overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative w-full h-96">
                  <Image
                    src={transformation.image}
                    alt={
                      transformation.title ||
                      `Transformation ${transformation.id}`
                    }
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <ChevronRight className="w-4 h-4" />
            <span>Swipe to see more transformations</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
