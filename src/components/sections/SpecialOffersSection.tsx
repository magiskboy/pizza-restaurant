"use client";

export default function SpecialOffersSection() {
  const handleClaimOffer = () => {
    // Scroll to order section or open order modal
    alert('Offer claimed! Redirecting to order page...');
  };
  
  return (
    <section className="py-16 px-4 bg-[#FF8C00] md:py-24 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Limited Time Offer</h2>
        <p className="mb-8 text-xl text-white md:text-2xl">
          Family Feast – 2 Large Pizzas + 2 Sides = 15% Off!
        </p>
        <button 
          onClick={handleClaimOffer}
          className="rounded-full bg-white px-8 py-4 text-lg font-bold uppercase tracking-wider text-[#FF8C00] transition hover:bg-gray-100 md:px-10 md:py-5 md:text-xl"
        >
          Claim Offer
        </button>
      </div>
    </section>
  );
}