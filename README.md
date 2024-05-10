# NextJS Template

## Project Setup

### Installation

1. Use the template to create a new repository.
2. Clone the repository to your local machine.
3. Open the project in your code editor.
4. Run `yarn`
   - If you haven't globally installed the `yarn` package manager, you can do so by running `npm install -g yarn`.

### Deployment

_Note: If you aren't a team member on the Midwest Dev Co Vercel, message Will (will@midwestdevco.com)._

1. Initialize the project with Vercel by running `yarn vercel-int`. This will take you through a series of prompts to set up your project.
   - If you haven't globally installed the `vercel` CLI, you can do so by running `yarn global add vercel`.
   - Login = Enter
   - Select Project = Enter
   - Link to Existing Project = N
   - What's your project's name? = Enter
   - In which directory is your code located? = Enter
   - Want to override the settings? = N
   - Wait for the project to deploy.
   - What's the value of NEXT_PUBLIC_VERCEL_URL? = https://localhost:3000
   - What's the value of NEXT_PUBLIC_COMPANY_NAME? = TSKCOMPANY (whatever the name is)
   - What Environments for NEXT_PUBLIC_COMPANY_NAME? = a (for all) -> enter

### Assets

_Note: All assets should be stored in the `/assets/**/*` directory._

1. Add all images, illustrations, and icons to the `/assets/images` directory.
   - All assets for a company will be found in our [Google Drive](https://drive.google.com/drive/my-drive) for that client.
   - To create a logo, use [Canva](https://www.canva.com/), [Figma](https://www.figma.com/), or [ChatGPT Logo Extension](https://www.openai.com/chatgpt/).
2. Create a favicon using [Real Favicon Generator](https://realfavicongenerator.net/) and add it to the `/assets/icons/favicon` directory.
3. Rename the `apple-touch-icon.png` to `apple-icon.png` and the `favicon-512x512.png` to `icon.png`.
4. Create a maskable icon using [Maskable](https://maskable.app/editor), save it as 512x512, and add it to the `/assets/icons/favicon` directory and rename it to `maskable_icon.png`.
5. Move the `favicon.ico`, `apple-icon.png`, `icon.png`, and `maskable_icon.png` files to the `/app` directory.

## Information

1. Search for `TODO` in the project to find areas that need to be updated.
2. Search for `TSKCOMPANY` in the project to find areas that need to be updated.
3. Search for `TSKCOLOR` in the project to find areas that need to be updated.
4. Search for `TSKEMAIL` in the project to find areas that need to be updated.
5. Search for `TSKDOMAIN` in the project to find areas that need to be updated.
6. Search for `TSKSLOGAN` in the project to find areas that need to be updated.
7. Search for `TSKDESCRIPTION` in the project to find areas that need to be updated.
8. Search for `TSKADDRESSLINE1`, etc. in the project to find areas that need to be updated.
9. Update the [manifest.json](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest) file with the correct information.
10. Update the [robots.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) file with the correct information.
11. Update the [sitemap.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#sitemap-files-xml) file with the correct information.

## Optimization

### Image Optimization

1. Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images.
2. Use the `LazyImage` component to lazy load images.
3. Use the `Image` component with the `loading="lazy"` attribute to lazy load images.

- Metadata

  - Update Title
  - Update Description
  - Update Keywords
  - ...
  - https://metatags.io/

---

## Creating & Styling Components

### Pre-Built Components

#### Main (/components/global/Main.tsx)

- Whenever a layout or page needs to be wrapped in a main tag, use the Main component.
- The Main component takes in a children prop which is the content that will be wrapped in the main tag.

```tsx
<Main className="my-24 relative max-w-5xl space-y-6">{children}</Main>
```

#### Section (/components/global/Section.tsx)

- Whenever a layout or page needs to be wrapped in a section tag, use the Section component. It will keep spacing consistent throughout the application.
- The Section component takes in a children prop which is the content that will be wrapped in the section tag.

```tsx
<Section className="bg-slate-900">{children}</Section>
```

#### LazyImage (/components/ui/LazyImage.tsx)

1. Import the LazyImage Component into the component you would like to have the image.

```tsx
import LazyImage from '@/components/ui/LazyImage';

export default function LandingPage() {
  return (
    <main>
      <LazyImage />
    </main>
  );
}
```

2. Make sure to add the required fields for the image component which are the src, alt, width, and height.
   The LazyImage component can take it two types of sources it can be a url to an external image or a static import to a local image.

- External Image

```tsx
import LazyImage from '@/components/ui/LazyImage';

export default function LandingPage() {
  return (
    <main>
      <LazyImage
        src="https://images.unsplash.com/......."
        alt="Background Image"
        width={400}
        height={300}
      />
    </main>
  );
}
```

- Local Image

```tsx
import LazyImage from '@/components/ui/LazyImage';
import ImageYouAreImporting from '@/assets/images/niceimage.png';

export default function LandingPage() {
  return (
    <main>
      <LazyImage
        src={ImageYouAreImporting}
        alt="Your Image"
        width={ImageYouAreImporting.width}
        height={ImageYouAreImporting.height}
      />
    </main>
  );
}
```

### Shadcn UI Components

Since Shadcn UI is pre-installed, you can directly use its components to build your user interface. Here's how to integrate Shadcn UI components into your NextJS pages or components:

1. Import the UI components you need. For example, to use a button component, you can do the following:

   ```tsx
   import { Button } from '@components/ui/button';

   function HomePage() {
     return <Button>Click Me</Button>;
   }
   ```

2. If you need a component visit [Shadcn UI](https://ui.shadcn.com/docs/components/accordion) and follow the installation instructions for the component you need.
3. For documentation on a component from Shadcn UI visit their website, find the component, and view the API Reference.

### Other Considerations

#### Icons

1. Use the [Lucid Icons](https://lucide.dev/icons/) library to add icons to your application.

#### Color Palettes

- https://coolors.co/
- https://colorhunt.co/

#### Fonts

- https://fonts.google.com/

#### Illustrations

- https://undraw.co/
- https://www.drawkit.io/
- https://www.humaaans.com/
- https://www.opendoodles.com/
- https://www.manypixels.co/gallery/
- https://www.pixeltrue.com/free-illustrations
- https://www.illlustrations.co/

#### SEO

- https://www.semrush.com/
- https://www.ahrefs.com/
- https://neilpatel.com/seo-analyzer/

#### Accessibility

- https://wave.webaim.org/
- https://www.tpgi.com/axe/
- LightHouse

#### Performance

- https://web.dev/measure/
- https://gtmetrix.com/
- https://www.webpagetest.org/

---

## Features

- [x] Landing Page w/ Component Structure
- [x] Terms and Conditions Page
- [x] Privacy Policy Page
- [x] Logo Components
- [~] Support Page
- [ ] Contact Page
- [ ] About Page
- [ ] Blogs & Blog Pages
- [ ] Exit Intent Popup
- [ ] Chatbot
- [ ] Newsletter Signup
- [ ] Optimized SEO

---

## Technologies

- [x] NextJS
- [x] TypeScript
- [x] Tailwind CSS
- [x] Shadcn UI
- [x] Lucide Icons
- [ ] CMS
- [ ] Next Theme
- [ ] Stripe
- [ ] SendGrid
- [ ] Calendly
- [ ] Analytics (Vercel)
- [ ] Clearbit

---

## Docs / Dev Environment

- [x] Vercel Deployment and Environment Variables
- [x] Image Optimization
- [x] Recommended Extensions
- [ ] New File Creation (Component, Page, etc. w/ Snippets)
  - Naming Convensions
  - Comments
  - Imports
  - Exports
  - Component Structure
  - Props
- [ ] Testing Performance & Accessibility (Lighthouse, GTMetrix, WebPageTest)
- [ ] Fonts & Typography
- [ ] SEO Optimization
- [ ] Analytics & Tracking
