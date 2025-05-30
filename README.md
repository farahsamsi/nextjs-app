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
