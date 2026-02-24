/**
 * Chatora Coach Design System
 * Comprehensive color and styling guidelines
 */

// ============================================================================
// COLOR PALETTE
// ============================================================================

export const COLORS = {
  // Main backgrounds
  primary: {
    cream: '#FFF4E6', // Thali Cream - main background
    white: '#FFFFFF', // White - alt background sections
  },

  // Text colors
  text: {
    body: '#1F1F1F', // Structure Charcoal - default body text
    muted: '#4B5563', // Utility gray - helper text, captions, disclaimers
  },

  // Brand colors
  navy: '#0B3C5D', // Coach Navy - primary brand color
  orange: '#E85D04', // Portion Orange - highlight/accent
  sage: '#A3B18A', // Habit Sage - health/rehab hints only

  // Utility colors
  lightGray: '#E6E6E6', // Soft Neutral Gray - borders, dividers
  lightCreamAlt: '#FFF8F0', // Very light cream - disclaimer backgrounds
  lightNavyTint: '#F2F6FA', // Light navy tint - featured card backgrounds
  placeholder: '#9CA3AF', // Placeholder text
  error: '#B91C1C', // Utility red - error states
} as const;

// ============================================================================
// TYPOGRAPHY
// ============================================================================

export const TYPOGRAPHY = {
  // H1 - Hero headline
  h1: {
    color: COLORS.navy,
    highlightColor: COLORS.orange, // For 1–2 words only
  },

  // H2 - Section headings
  h2: {
    color: COLORS.navy,
  },

  // H3 - Card headings / subheaders
  h3: {
    color: COLORS.navy,
    // Or Charcoal if card has Navy background
    colorOnDarkBg: COLORS.primary.white,
  },

  // Body paragraphs
  body: {
    color: COLORS.text.body,
  },

  // Disclaimers / medical lines
  disclaimer: {
    color: COLORS.text.muted,
    backgroundColor: COLORS.primary.white, // or COLORS.lightCreamAlt
  },
} as const;

// ============================================================================
// BUTTON STYLES
// ============================================================================

export const BUTTONS = {
  // Primary CTA button (START action)
  primary: {
    background: COLORS.orange,
    text: COLORS.primary.white,
    hover: '#CC4F03', // Darker orange
    focusRing: 'rgba(232,93,4,0.35)',
  },

  // Secondary button (Navy START)
  secondary: {
    background: COLORS.navy,
    text: COLORS.primary.white,
    hover: '#08324D',
  },

  // Tertiary button (non-conversion actions)
  tertiary: {
    background: 'transparent',
    border: COLORS.lightGray,
    text: COLORS.navy,
    hover: COLORS.primary.white,
  },
} as const;

// ============================================================================
// NAVIGATION
// ============================================================================

export const NAVBAR = {
  background: COLORS.primary.white,
  textColor: COLORS.navy,
  activeUnderline: COLORS.orange,
  borderBottom: COLORS.lightGray,
} as const;

// ============================================================================
// HERO SECTION
// ============================================================================

export const HERO = {
  background: COLORS.primary.cream,
  badgeBackground: COLORS.primary.white,
  badgeText: COLORS.navy,
  badgeBorder: COLORS.orange,
} as const;

// ============================================================================
// CARDS
// ============================================================================

export const CARDS = {
  // Default card
  default: {
    background: COLORS.primary.white,
    border: COLORS.lightGray,
    titleColor: COLORS.navy,
    textColor: COLORS.text.body,
  },

  // Featured/Premium plan card
  featured: {
    background: COLORS.lightNavyTint,
    border: COLORS.navy,
    badgeBackground: COLORS.orange,
    badgeText: COLORS.primary.white,
  },

  // Testimonial card
  testimonial: {
    background: COLORS.primary.white,
    quoteMarkColor: COLORS.sage,
    nameColor: COLORS.navy,
  },
} as const;

// ============================================================================
// FORMS
// ============================================================================

export const FORMS = {
  input: {
    background: COLORS.primary.white,
    borderDefault: COLORS.lightGray,
    borderFocus: COLORS.navy,
    borderError: COLORS.error,
    placeholderText: COLORS.placeholder,
  },

  // Submit button uses BUTTONS.primary
  submitButton: BUTTONS.primary,
} as const;

// ============================================================================
// ICONS
// ============================================================================

export const ICONS = {
  default: COLORS.navy,
  accent: COLORS.orange, // Use sparingly
  health: COLORS.sage, // For postpartum/rehab only
} as const;

// ============================================================================
// FOOTER
// ============================================================================

export const FOOTER = {
  background: COLORS.navy,
  text: COLORS.primary.cream,
  linkColor: COLORS.primary.cream,
  linkHover: COLORS.orange,
  divider: 'rgba(255,244,230,0.2)',
  operatedByText: 'Operated by Moves n Stretch.',
} as const;

// ============================================================================
// LAYOUT DIVIDERS / SEPARATORS
// ============================================================================

export const DIVIDERS = {
  line: COLORS.lightGray,
} as const;

// ============================================================================
// LINKS
// ============================================================================

export const LINKS = {
  default: COLORS.navy,
  hover: COLORS.orange,
  visited: COLORS.navy, // Keep same as default (no purple)
} as const;
