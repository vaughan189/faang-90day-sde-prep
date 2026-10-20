import React, { useState } from "react";

/**
 * 07. Interactive Star Rating Drill
 * Target Time: 45 Minutes
 * Target Companies: Amazon, Airbnb, DoorDash
 *
 * Requirements:
 * 1. 5-star rating component with hover preview
 * 2. Support half-star (0.5) ratings based on cursor position
 * 3. Keyboard navigation (ArrowLeft / ArrowRight to adjust rating)
 * 4. ARIA labels (e.g. aria-label="Rating: 4.5 out of 5 stars")
 * 5. Click to lock rating
 */
export const StarRatingDrill: React.FC = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
        <h2 className="text-xl font-bold text-white mb-2">07. Interactive Star Rating</h2>
        <p className="text-slate-400 text-sm mb-4">
          Implement an accessible 5-star rating widget supporting half-stars and keyboard controls.
        </p>

        <p className="text-xs text-slate-500 mb-2">
          Current Locked Rating: {rating} • Hover Rating: {hoverRating ?? "None"}
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => {
              setRating(3.5);
              setHoverRating(null);
            }}
            className="px-3 py-1.5 rounded-lg bg-slate-800 text-xs text-slate-300 hover:text-white"
          >
            Set 3.5 Stars (Demo)
          </button>
        </div>
      </div>
    </div>
  );
};
