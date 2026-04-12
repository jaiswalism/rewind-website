# Color Palette & Tokens

The Rewind iOS app uses the **Elite Design System** — a sophisticated, native-feeling palette built around high-contrast vibrant accents and signature dynamic mesh backgrounds.

### Core Color Palette

- **Elite Accent Primary (blue-500):**  
  RGB: (59, 56, 255)  
  Hex: #3B38FF  
  Usage: Primary interaction surfaces, main CTA buttons, primary dynamic orb

- **Elite Accent Secondary (blue-400):**  
  RGB: (98, 96, 255)  
  Hex: #6260FF  
  Usage: Secondary bounding orbs, complementary UI accents

- **Elite Base Backgrounds:**  
  Light Mode: Off-white blue tint (RGB: 240, 245, 255 / Hex: #F0F5FF)  
  Dark Mode: System Background (Black)  
  Usage: Canvas for the Elite dynamic mesh background

### Color Token Names (Codebase)

- `Color.eliteAccentPrimary`
- `Color.eliteAccentSecondary`
- `Color.eliteBackground`
- `Color.eliteSurface`
- `Color.eliteBorder`
- `Color.eliteTextPrimary`
- `Color.eliteTextSecondary`

### Design Patterns

- **Elite Background (Mesh):** Onboarding and main screens feature `EliteBackgroundView`, a calming, adaptive background using slowly animating "floating orbs" powered by the primary and secondary elite colors over the base.
- **Button Styles:** Primary actions (`ElitePrimaryButtonStyle`) rely on a "clean, native solid color instead of AI-looking gradients", accented by drop shadows and scale effects. Secondary/social actions (`EliteSocialButtonStyle`) use translucent iOS Materials.
- **Shared Tokens:** All colors are centrally managed in `AuthDesignSystem.swift` via the `Color` extension, ensuring harmony across UIKit and SwiftUI components.
# Rewind iOS App — Design & Architecture Context

## Product Purpose & Philosophy
Rewind is a personal reflection and lifestyle support iOS application designed to help users improve their mental wellness through structured journaling, guided care routines, community engagement, and a unique companion pet experience. The app’s philosophy centers on making self-care approachable, interactive, and emotionally supportive.

## Core Features & User Flows

### 1. Journals
- **Text Journaling:** Users can write daily reflections, track moods, and revisit past entries.
- **Voice Journaling:** Users can record voice notes, which are transcribed and stored securely.
- **Media Handling:** Journals support media attachments, leveraging Supabase storage.

### 2. Care Corner
- **Guided Activities:** Includes breathing exercises, meditation, and challenge-based routines.
- **Progression Loops:** Users can complete daily/weekly challenges and track their progress.
- **Session State:** Each activity manages its own state, with clear transitions and completion feedback.

### 3. Community
- **Feed:** Users can post, browse, like, and comment in a shared, safety-moderated feed.
- **Engagement:** All engagement actions (like/comment) are fully implemented, not placeholders.
- **Safety:** UGC safety actions are enforced end-to-end.

### 4. HomePets
- **Virtual Companion:** Users interact with a digital pet whose state reflects their app engagement.
- **Progression:** Pet evolves and responds to user activity, providing encouragement and feedback.
- **Shared State:** Pet state influences messaging and engagement across the app.

### 5. Pet Talking
- **Real-Time Voice:** Users can talk to their pet using live audio; the app responds via a proxy-backed service.
- **Permissions:** Microphone and speech recognition are requested only when needed, with clear rationale and fallback behavior.

### 6. Onboarding
- **Multi-Screen Flow:** Onboarding uses a series of visually rich screens (storyboard-driven) to introduce the app’s value, set up permissions, and personalize the experience.
- **Progress Indicators:** Each onboarding step shows progress and uses custom illustrations.
- **Route Logic:** Onboarding completion determines initial app route (onboarding vs. main tabs).

## Navigation & UI/UX Patterns
- **Tab-Based Main Loop:** Predictable daily navigation via tabs (Journals, Care Corner, Community, HomePets).
- **Hybrid UIKit + SwiftUI:** UIKit handles navigation and legacy flows; SwiftUI powers modern feature screens and reusable components.
- **Onboarding:** Storyboard-based, with custom illustrations, progress bars, and animated transitions.
- **Consistent Theming:** Uses named colors and custom fonts for a cohesive, calming look.
- **Error & Empty States:** All critical flows have explicit error and empty-state handling.

## Architecture & Technical Stack
- **Pattern:** MVVM (Model-View-ViewModel)
  - ViewModels own feature logic, async state, and backend orchestration.
  - Views/ViewControllers render state and dispatch user intent.
- **Backend:** Supabase (Auth, Postgres, Storage, Edge Functions)
- **Voice/Audio:** AVFoundation, speech recognition, and a live pet-talking proxy service.
- **Project Structure:**
  - `Controllers/`: UIKit controllers and navigation
  - `Views/`: SwiftUI feature screens and shared UI
  - `ViewModels/`: Feature logic and async state
  - `Models/`: Codable domain and backend models
  - `Services/`: Integrations (voice, onboarding, etc.)
  - `Core/`: Configuration, constants, utilities

## Permissions & App Review Readiness
- **Sensitive Permissions:** Microphone and speech recognition are only requested when needed.
- **Denied-State Handling:** App remains usable in non-voice areas if permissions are denied.
- **App Review:** All critical flows are complete, discoverable, and reviewer-accessible. Account and community safety actions are operational.

## Maintenance & Extension Guidelines
1. Keep UI rendering and business logic separate (MVVM).
2. Extend feature ViewModels before introducing cross-feature coupling.
3. Add explicit error and empty-state handling for all reviewer-visible paths.
4. Confirm permission and capability implications early.
5. Update architecture documentation when introducing new service boundaries or navigation changes.

## Summary
Rewind iOS is a thoughtfully architected, feature-rich app that blends journaling, guided care, community, and a virtual companion into a seamless, supportive experience. Its design and codebase prioritize user safety, emotional engagement, and maintainable growth.
