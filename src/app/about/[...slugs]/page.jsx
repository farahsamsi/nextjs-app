import React from "react";

export default async function AboutSlugPages({ params }) {
  const p = await params;
  console.log(p);
  return <div>Slugs from about page</div>;
}
