# Iris Music Bot Website - Features

## 3D Effects & Animations

### CSS 3D Transforms
- **`animate-flip-in-y`** - Elements flip in on Y-axis with perspective
- **`animate-flip-in-x`** - Elements flip in on X-axis with perspective
- **`animate-zoom-in-rotate`** - Elements zoom in with rotation for dynamic entry
- **`animate-pop-in`** - Classic pop-in animation with scale overshoot
- **`animate-parallax`** - Subtle parallax movement for depth
- **`animate-rotate-in`** - Elements rotate while appearing
- **`animate-pulse-scale`** - Continuous subtle scaling pulse effect

### Scroll-Triggered Animations
- Built-in `useScrollReveal` hook in `/hooks/useScrollReveal.ts`
- Automatically triggers animations when elements enter viewport
- Uses Intersection Observer API for performance
- `ScrollRevealSection` component wrapper for easy implementation

### Background Effects
- Animated glowing orbs in hero section using `animate-pulse-scale`
- Gradient backgrounds with `from-purple-400 via-pink-400 to-purple-400`
- Backdrop blur effects on navigation

## Contact Form Features

### Contact Page (`/contact`)
- Professional form with name, email, subject, and message fields
- Client-side form validation with helpful error messages
- Success/error toast notifications
- All fields animated with staggered `animate-slide-up-fade`
- Beautiful 3D card effects with `animate-zoom-in-rotate`
- Responsive design with grid layout

### API Endpoint (`/api/contact`)
- POST endpoint accepts form submissions
- Server-side validation for all fields
- Email format validation with regex
- Minimum message length requirement (10 characters)
- Captures submission timestamp and IP address
- Stores data in JSON file at `/data/contacts.json`
- GET endpoint retrieves all submissions (with optional authentication)

### Data Storage
- Contact submissions saved to `/data/contacts.json`
- Each submission includes:
  - Unique ID (timestamp + random hash)
  - Name, email, subject, message
  - ISO timestamp
  - IP address (for spam prevention)
- Persistent file-based storage (survives restarts)

### Admin Dashboard (`/admin/contacts`)
- View all contact submissions
- Select contact to view full details
- Quick email reply button
- Refresh submissions in real-time
- Formatted timestamps in local timezone
- Responsive layout with contact list and details panel

## New Pages Added

### `/contact`
- Contact form page with full functionality
- Links to Discord support server
- Creator contact information display

### `/admin/contacts`
- Admin-only dashboard (currently no auth required)
- List all contact submissions
- View full message details
- Reply via email

### Enhanced Pages
- Homepage now has Contact link in navigation and footer
- All pages use new 3D animations
- Scroll reveal animations throughout

## Animation Classes Available

```css
/* Entrance Animations */
.animate-flip-in-y      /* Y-axis flip with perspective */
.animate-flip-in-x      /* X-axis flip with perspective */
.animate-zoom-in-rotate /* Scale + rotation */
.animate-pop-in         /* Pop effect with overshoot */
.animate-rotate-in      /* Rotation entrance */
.animate-slide-up-fade  /* Vertical slide with fade */

/* Continuous Animations */
.animate-pulse-scale    /* Continuous scale pulse */
.animate-parallax       /* Depth shift movement */

/* Existing Animations */
.animate-float          /* Up/down bobbing */
.animate-bounce-pop     /* Bouncy pop entrance */
.animate-slide-up       /* Standard slide up */
.animate-emoji-bounce   /* Emoji-specific bounce */
```

## Form Validation Rules

- **Name**: Required, non-empty
- **Email**: Required, valid format (user@domain.com)
- **Subject**: Required, non-empty
- **Message**: Required, minimum 10 characters

Validation happens both client-side (UX) and server-side (security).

## Performance Optimizations

- Scroll reveal uses Intersection Observer (efficient)
- 3D animations use GPU acceleration
- JSON file storage is lightweight (scales to thousands of entries)
- No external dependencies added (uses built-in APIs)

## Future Enhancements

- Add email notification when new contact submitted
- Admin authentication/authorization
- Email reply integration
- Export contacts to CSV
- Search/filter contacts
- Spam detection via IP
- ReCAPTCHA integration for form
