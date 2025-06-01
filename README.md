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

The `usePathname()` hook is part of the Next.js navigation library and is used to get the current URL pathname in a client component.
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
Route	                          Example URL	    params
app/shop/[...slug]/page.js	    /shop/a	        { slug: ['a'] }
app/shop/[...slug]/page.js	    /shop/a/b	      { slug: ['a', 'b'] }
app/shop/[...slug]/page.js	    /shop/a/b/c	    { slug: ['a', 'b', 'c'] }
```

## 404 Not found page

the file has to be named as 'not-found' and must in the app folder.

For dynamic routes validation is important to render 404 page

# 📘 Next.js Middleware Guide

In **Next.js**, **middleware** is a special feature that allows you to run code **before a request is completed**. You can use it to **modify the request**, **redirect users**, **check authentication**, and more — **before rendering a page or reaching an API route**.

---

### 🔹 Where does middleware run?

Middleware runs **on the Edge**, meaning it is executed **on the server, close to the user**, improving performance and speed.

---

### 🔹 How to add middleware in Next.js?

1. Create a `middleware.ts` or `middleware.js` file in the **root** of your project (same level as `pages` or `app` folder).
2. Export a function from this file that uses Next.js middleware utilities.

---

### ✅ Example: Middleware to protect a route (`/dashboard`) from unauthenticated users

#### 🗂️ Project Structure

```
/pages
  /dashboard
    index.tsx
/public
/middleware.ts
```

---

### ✅ Code in `middleware.ts`

```ts
// Import NextResponse to send responses like redirect
import { NextResponse } from "next/server";
// Import NextRequest to access the incoming request
import type { NextRequest } from "next/server";

// This function runs on every request
export function middleware(request: NextRequest) {
  // Get the requested path (e.g., '/dashboard')
  const path = request.nextUrl.pathname;

  // Simulate checking for a token in cookies
  const token = request.cookies.get("token")?.value;

  // If user tries to access '/dashboard' without a token, redirect to login
  if (path === "/dashboard" && !token) {
    // Create a new URL to redirect to '/login'
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl); // Redirect to login page
  }

  // If everything is okay, allow the request to proceed
  return NextResponse.next();
}

// This config tells Next.js to run middleware only on specific paths
export const config = {
  matcher: ["/dashboard"], // Only run middleware on this route
};
```

What happens here?
Every time someone accesses `/dashboard`, the middleware checks if a token cookie is present.

If no token, they are redirected to `/login`.

If the token exists, the request continues and the `/dashboard` page loads.

### 🔒 Common Use Cases for Middleware in Next.js:

- **Authentication / Authorization**
- **Localization** (redirect users based on language)
- **A/B Testing or Feature Toggles**
- **IP-based Geo-blocking**
- **Logging or Analytics**
- **Bot Detection**

### NB: If the next js project is using express js server then the next js middlewares won't work. the middleware in the express js will be effective in such cases.

## In Next.js middleware, both redirect and rewrite are used to change the flow of a request, but they serve different purposes and behave differently.

| Action     | User sees URL change? | Typical use case                    |
| ---------- | --------------------- | ----------------------------------- |
| `rewrite`  | ❌ No                 | Proxying, hiding internal structure |
| `redirect` | ✅ Yes                | Auth redirect, moving pages         |

### Example of rewrite

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Rewrite '/old-route' to '/new-route' silently
  if (request.nextUrl.pathname === "/old-route") {
    return NextResponse.rewrite(new URL("/new-route", request.url));
  }
  return NextResponse.next();
}
```

### Example of redirect

```ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Redirect '/dashboard' to '/login' if user is not authenticated
  const token = request.cookies.get("token")?.value;
  if (request.nextUrl.pathname === "/dashboard" && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
```
