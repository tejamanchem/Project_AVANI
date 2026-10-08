/**
 * ============================================================================
 * AVANI CENTRAL STORE CONFIGURATION
 * ============================================================================
 * Single source of truth for verified store details, hours, and contact.
 * Location (Palakollu) is ONLY referenced in location & footer contexts.
 * ============================================================================
 */

export const storeConfig = {
  name: "AVANI",
  category: "Women's Fashion",
  tagline: "A World of Women's Fashion",
  subtitle: "Women's Fashion Destination",
  phone: "+91 9121530858",
  phoneDisplay: "+91 91215 30858",
  phoneTel: "tel:+919121530858",
  
  // Physical store location (used ONLY inside Location, Map, and Footer sections)
  city: "Palakollu",
  state: "Andhra Pradesh",
  pinCode: "534260",
  address: "Near yanugula meda Gandhi bomalla center, Palakollu, Andhra Pradesh 534260",
  addressShort: "Near yanugula meda, Gandhi bomalla center",
  landmark: "Near yanugula meda, Gandhi bomalla center",
  
  // Single configurable store timing (Section 27)
  openingTime: "10:00 AM",
  closingTime: "11:00 PM",
  storeHours: "10:00 AM — 11:00 PM",
  
  // Store scale
  staffCount: "100+",
  managementCount: "10+",
  
  // Direct Google Maps query link
  googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("AVANI Near yanugula meda Gandhi bomalla center Palakollu Andhra Pradesh 534260")}`,
};
