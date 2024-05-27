# TSKCOMPANY

## Project Setup

### Installation

1. Use the template to create a new repository.
2. Clone the repository to your local machine.
3. Open the project in your code editor.
4. Run `yarn`
    - If you haven't globally installed the `yarn` package manager, you can do so by running `npm install -g yarn`.

### Deployment

_Note: If you aren't a team member on the Midwest Dev Co Vercel, message Will (will@midwestdevco.com)._

1. Initialize the project with Vercel by running `yarn vercel-init`. This will take you through a series of prompts to set up your project.
    - If you haven't globally installed the `vercel` CLI, you can do so by running `yarn global add vercel`.
    - Login = Enter
    - Select Project = Enter
    - Link to Existing Project = N
    - What's your project's name? = Enter
    - In which directory is your code located? = Enter
    - Want to override the settings? = N
    - Wait for the project to deploy.
    - What's the value of NEXT_PUBLIC_VERCEL_URL? = http://localhost:3000
    - What's the value of NEXT_PUBLIC_COMPANY_NAME? = (whatever the name is)
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

### Update ENV

1. Add `NEXT_PUBLIC_VERCEL_URL` to the `.env` file by running `vercel env add NEXT_PUBLIC_BASE_URL`. This should be the URL of the deployed site for production.
2. Add `NEXT_PUBLIC_CONTACT_EMAIL` to the `.env` file by running `vercel env add NEXT_PUBLIC_CONTACT_EMAIL`. This should be the email address that will be used for receiving contact forms (client's personal email address).
3. Add `SENDGRID_EMAIL` to the `.env` file by running `vercel env add SENDGRID_EMAIL`. This should be the email address that will be used for sending emails.
4. Add `SENDGRID_API_KEY` to the `.env` file by running `vercel env add SENDGRID_API_KEY`. This should be the API key for the SendGrid account.

### Update Project

4. Search for `TODO` in the project to find areas that need to be updated.
5. Search for `TSKCOMPANY` in the project to find areas that need to be updated.
6. Search for `TSKCOLOR` in the project to find areas that need to be updated.
7. Search for `TSKSLOGAN` in the project to find areas that need to be updated.
8. Search for `TSKDESCRIPTION` in the project to find areas that need to be updated.
9. Search for `TSKADDRESSLINE1`, etc. in the project to find areas that need to be updated.
10. Update the [manifest.json](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/manifest) file with the correct information.
11. Update the [robots.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) file with the correct information.
12. Update the [sitemap.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#sitemap-files-xml) file with the correct information.

## Optimization

### Image Optimization

1. Use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/) to compress images.
2. Use the `LazyImage` component to lazy load images.
3. Use the `Image` component with the `loading="lazy"` attribute to lazy load images.

-   Metadata

    -   Update Title
    -   Update Description
    -   Update Keywords
    -   ...
    -   https://metatags.io/

---

## Creating & Styling Components

### Pre-Built Components

#### Main (/components/global/Main.tsx)

-   Whenever a layout or page needs to be wrapped in a main tag, use the Main component.
-   The Main component takes in a children prop which is the content that will be wrapped in the main tag.

```tsx
<Main className="relative my-24 max-w-5xl space-y-6">{children}</Main>
```

#### Section (/components/global/Section.tsx)

-   Whenever a layout or page needs to be wrapped in a section tag, use the Section component. It will keep spacing consistent throughout the application.
-   The Section component takes in a children prop which is the content that will be wrapped in the section tag.

```tsx
<Section className="bg-slate-900">{children}</Section>
```

#### LazyRemoteImage/LazyLocalImage (/components/ui/LazyRemoteImage.tsx) (/components/ui/LazyLocalImage.tsx)

1. Import the LazyRemoteImage or LazyLocalImage Component into the component you would like to have the image.

```tsx
import LazyRemoteImage from '@/components/ui/LazyRemoteImage';

export default function LandingPage() {
    return (
        <main>
            <LazyRemoteImage />
        </main>
    );
}
```

2. Make sure to add the required fields for the image component which are the src, alt, width, and height.
   The LazyRemoteImage component can take in a string value for the remote image. The LazyLocalImage can take in a static import for the value of the src

-   External Image

```tsx
import LazyRemoteImage from '@/components/ui/LazyRemoteImage';

export default function LandingPage() {
    return (
        <main>
            <LazyRemoteImage
                src="https://images.unsplash.com/......."
                alt="Background Image"
                width={400}
                height={300}
            />
        </main>
    );
}
```

-   Local Image

```tsx
import LazyLocalImage from '@/components/ui/LazyLocalImage';
import ImageYouAreImporting from '@/assets/images/niceimage.png';

export default function LandingPage() {
    return (
        <main>
            <LazyLocalImage
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

### Payload CMS

Payload CMS allows us to easily provide a user facing admin dashboard for managing collections(database tables).

1. Create a local postgres database with docker by running the _./start-database.sh_ command. Make sure to change the _DB_CONTAINER_NAME_ to the name of the project. located in _.env.example_ you should see _DATABASE_URI_ and _PAYLOAD_SECRET_ these are for developement ONLY. Make sure to also change the db name in the _DATABASE_URI_ variable to the name of the project.

2. Visit _http://localhost:3000/admin_ to view the admin panel.

3. Adding a new collection. There is a folder called _collections_, create a file named with the collection you wish to create ex: _Users.ts_. [Payload Fields](https://payloadcms.com/docs/fields/overview)

```ts
import type { CollectionConfig } from 'payload/types';

export const Users: CollectionConfig = {
    slug: 'users',
    admin: {
        useAsTitle: 'email',
    },
    auth: true,
    fields: [
        // Email added by default
        // Add more fields as needed
    ],
};
```

4. If you need to query with payload here is an example request.

```ts
import configPromise from '@payload-config';
import { getPayload } from 'payload';

export const GET = async () => {
    const payload = await getPayload({
        config: configPromise,
    });

    const data = await payload.find({
        collection: 'users',
    });

    return Response.json(data);
};
```

### Other Considerations

#### Icons

1. Use the [Lucid Icons](https://lucide.dev/icons/) library to add icons to your application.
2. [Temporary Logos](https://logoipsum.com/category/circular)

#### Color Palettes

-   https://coolors.co/
-   https://colorhunt.co/

#### Fonts

-   https://fonts.google.com/

#### Illustrations

-   https://undraw.co/
-   https://www.drawkit.io/
-   https://www.humaaans.com/
-   https://www.opendoodles.com/
-   https://www.manypixels.co/gallery/
-   https://www.pixeltrue.com/free-illustrations
-   https://www.illlustrations.co/

#### SEO

-   https://www.semrush.com/
-   https://www.ahrefs.com/
-   https://neilpatel.com/seo-analyzer/

#### Accessibility

-   https://wave.webaim.org/
-   https://www.tpgi.com/axe/
-   LightHouse

#### Performance

-   https://web.dev/measure/
-   https://gtmetrix.com/
-   https://www.webpagetest.org/

---

## Features

-   [x] Landing Page (Component Structure)
-   [x] Terms and Conditions Page
-   [x] Privacy Policy Page
-   [x] Logo Components
-   [x] Contact Page (Component Structure)
-   [x] About Page (Component Structure)
-   [x] Support Page (Component Structure)
-   [ ] Blogs & Blog Pages
-   [ ] Exit Intent Popup
-   [ ] Chatbot
-   [ ] Newsletter Signup
-   [ ] Optimized SEO

---

## Technologies

-   [x] NextJS
-   [x] TypeScript
-   [x] Tailwind CSS
-   [x] Shadcn UI
-   [x] Lucide Icons
-   [x] SendGrid
-   [ ] Payload (CMS)
-   [ ] Next Theme
-   [ ] Stripe
-   [ ] Calendly
-   [ ] Analytics (Vercel)
-   [ ] Clearbit

---

## Docs / Dev Environment

-   [x] Vercel Deployment and Environment Variables
-   [x] Image Optimization
-   [x] Recommended Extensions
-   [ ] New File Creation (Component, Page, etc. w/ Snippets)
    -   Naming Convensions
    -   Comments
    -   Imports
    -   Exports
    -   Component Structure
    -   Props
-   [ ] Testing Performance & Accessibility (Lighthouse, GTMetrix, WebPageTest)
-   [ ] Fonts & Typography
-   [ ] SEO Optimization
-   [ ] Analytics & Tracking

## Domains

-   process.env.NEXT_PUBLIC_VERCEL_URL

## About Them

TSKABOUT

## Vibe

-   TSKVIBE

## Inspiration

-   TSKINSPIRATION

## Press

-   PUBLICATION: [TSK](TSKLINK)
-   INTERVIEW: [TSK](TSKLINK)

## Ideas

-   TSK

## Contact

-   process.env.NEXT_PUBLIC_CONTACT_EMAIL
