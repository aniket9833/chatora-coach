'use client';

import { Card } from '@/components/ui/card';

export function PortionSahiGallery() {
  const galleryItems = [
    {
      id: 1,
      title: 'South Indian Breakfast',
      subtitle: 'Idli with Sambar',
      description: 'Balanced carbs with protein-rich legume curry',
    },
    {
      id: 2,
      title: 'North Indian Lunch',
      subtitle: 'Roti, Dal & Seasonal Vegetable',
      description: 'Perfect ratio of grain, protein, and vegetables',
    },
    {
      id: 3,
      title: 'Home-Style Dinner',
      subtitle: 'Rice, Curry & Yogurt',
      description: 'Portion-controlled traditional Indian meal',
    },
    {
      id: 4,
      title: 'Festival Favorites',
      subtitle: 'Controlled Portions of Sweets & Samosas',
      description: 'Enjoy celebrations without derailing progress',
    },
    {
      id: 5,
      title: 'Healthy Snacks',
      subtitle: 'Roasted Chickpeas & Fruits',
      description: 'Protein-packed alternatives to deep-fried options',
    },
    {
      id: 6,
      title: 'Meal Prep Ready',
      subtitle: 'Batch-Cooked Traditional Dishes',
      description: 'Preparation strategy for consistent portions',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <h2 className="font-serif text-3xl lg:text-4xl font-bold text-primary mb-4">
            Portion Sahi in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Real Indian meals, properly portioned for fat loss. See how you can
            enjoy diverse, flavorful food while achieving your goals.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden border-2 border-border hover:border-accent hover:shadow-lg transition-all duration-300 bg-white"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-secondary to-secondary/50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-center p-4">
                  <div>
                    <div className="text-5xl mb-2">🍛</div>
                    <p className="text-xs text-muted-foreground opacity-70">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Gallery Note */}
        <div className="mt-12 p-6 lg:p-8 bg-secondary/30 border-l-4 border-l-accent rounded-lg">
          <p className="text-muted-foreground">
            <strong>💡 Pro Tip:</strong> These are representative examples of
            Indian meals. Your personal Portion Sahi plan will be customized
            based on your food preferences, family meals, and lifestyle to
            ensure maximum adherence and results.
          </p>
        </div>
      </div>
    </section>
  );
}
