# NextJS Template

## How To Use

1. Clone the repository
2. Run `yarn`
3. Start the development server by running `yarn dev`.

## Using Shadcn UI Components

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

## Using the LazyImage Component

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

## Features

## Todo

- [ ] Add Analytics / Clearbit
- [ ] Add Exit Intent Popup
- [ ] Add Chatbot
- [ ]
