## 🛣️ Dynamic Routing in Next.js

In Next.js, dynamic routing allows us to create pages with dynamic URL parameters, making it easy to handle routes like /services/[id] or /products/[slug]. This is useful when we have variable content based on the URL, such as blog posts or product details.

### Getting Dynamic route Using Params

```
app/
└── services/
    └── [id]/
        └── page.jsx
```

The Folder holding the dynamic page has to have another folder within it with the its name in third bracket eg. [id], [slug] etc. then the page.jsx file is created in this folder. In this page the dynamic part can be accessed using {params} and params.id.

```
export default function ServiceDetailPage({ params }) {
  return <h1>Service ID: {params.id}</h1>;
}

```

## 🛣️ Grouped Routes in Next.js

Routes can be grouped in Next.js without including the group folder name in URL simply by naming the group folder in first bracket eg. (folderName).

```
app/
├── (authPages)/
│   ├── login/
│   │   └── page.js       // /login
│   ├── register/
│   │   └── page.js       // /register
│   └── forgot-password/
│       └── page.js       // /forgot-password

```

This helps in organizing the folder structure and increase manageability of the project.

## usePathname() Hook – Next.js

The usePathname() hook is part of the Next.js navigation library and is used to get the current URL pathname in a client component.
🧠 When to Use
You use usePathname() :

- Highlight the active link in a navbar
- Conditionally render components based on the current route
- Track or log navigation for analytics

```
// components/Navbar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/" className={pathname === '/' ? 'text-blue-500' : ''}>
        Home
      </Link>
      <Link href="/about" className={pathname === '/about' ? 'text-blue-500' : ''}>
        About
      </Link>
    </nav>
  );
}
```

Important Notes:

- usePathname() only works in client components, so make sure to add 'use client'; at the top of your file.

- It only returns the pathname (not query parameters or hash).

- If you're using the Pages Router (/pages), you should use useRouter() instead.

## Layout in Next.js

using file name as 'layout.jsx' inside an folder along with page.jsx make the layout of that specific different from the main layout.

## Catch-all Segments : Dynamic Routes

Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...folderName].

For example, `app/shop/[...slug]/page.js` will match /shop/clothes, but also `/shop/clothes/tops`, `/shop/clothes/tops/`t-shirts, and so on.

```
Route	Example URL	params
app/shop/[...slug]/page.js	/shop/a	{ slug: ['a'] }
app/shop/[...slug]/page.js	/shop/a/b	{ slug: ['a', 'b'] }
app/shop/[...slug]/page.js	/shop/a/b/c	{ slug: ['a', 'b', 'c'] }
```

## 404 Not found page

the file has to be named as 'not-found' and must in the app folder.

For dynamic routes validation is important to render 404 page
