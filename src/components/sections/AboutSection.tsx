"use client";

export default function AboutSection() {
  return (
    <section className="py-16 px-4 md:py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Story</h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            Founded in 2010, <span className="font-bold">Pizza Restaurant</span> brings the traditions of a family-run pizzeria from the heart of Naples to your table. Our dough rises for 24 hours, our sauce is simmered in San Marzano tomatoes, and our toppings are sourced from local farms. Whether you're grabbing a quick slice or celebrating a special night, we serve it with a smile.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8C9A58] text-white">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">Locally Sourced</h3>
            <p>Fresh ingredients from local farms</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8C9A58] text-white">
              <span className="text-2xl">👨‍👩‍👧‍👦</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">Family Friendly</h3>
            <p>Welcoming atmosphere for all ages</p>
          </div>
          
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#8C9A58] text-white">
              <span className="text-2xl">⏱️</span>
            </div>
            <h3 className="mb-2 text-xl font-bold">Fast Delivery</h3>
            <p>Hot pizza delivered to your door</p>
          </div>
        </div>
      </div>
    </section>
  );
}