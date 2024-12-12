```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link href="/">
        <a>Go Back Home</a>
      </Link>
    </div>
  );
}
```