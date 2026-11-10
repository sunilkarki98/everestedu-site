import { testimonials as mockTestimonials } from "@/data/home";

export interface Testimonial {
  name: string;
  course?: string;
  feedback: string;
  rating: number;
  flag?: string;
  outcome?: string;
  image?: string;
}

interface GoogleReview {
  author_name: string;
  text: string;
  rating: number;
  profile_photo_url?: string;
}

export async function getGoogleReviews(): Promise<Testimonial[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    // If we don't have keys, return our beautifully formatted mock data.
    console.warn("Google Places API keys missing. Falling back to mock data.");
    return mockTestimonials;
  }

  try {
    // This is the actual API call when keys are provided.
    // It specifically only requests the "reviews" field to save bandwidth and costs.
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    
    // We cache this request and revalidate it every 24 hours (86400 seconds)
    // so we don't spam the Google API and hit rate limits.
    const res = await fetch(url, { next: { revalidate: 86400 } });
    
    if (!res.ok) {
      throw new Error("Failed to fetch Google Reviews");
    }

    const data = await res.json();
    const reviews = data.result?.reviews || [];

    // Filter only 4 and 5 star reviews
    const topReviews = reviews.filter((r: GoogleReview) => r.rating >= 4);

    // Map Google's review structure to our website's interface
    const mappedReviews: Testimonial[] = topReviews.map((r: GoogleReview) => ({
      name: r.author_name,
      feedback: r.text,
      rating: r.rating,
      image: r.profile_photo_url,
      // Google doesn't give us course, flag, or outcome. 
      // Our UI components are built to handle these safely when they are missing.
    }));

    return mappedReviews.length > 0 ? mappedReviews : mockTestimonials;
  } catch (error) {
    console.error("Error fetching Google Reviews:", error);
    return mockTestimonials;
  }
}
