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
