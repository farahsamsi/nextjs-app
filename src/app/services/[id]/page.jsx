import React from "react";

export default function ServiceDetailPage({ params }) {
  const id = params?.id;

  const services = [
    {
      _id: "1",
      service_name: "Web Development",
      service_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRl_6AuG1TxzQdGmZSN4pF02iLepIl6-4ucQ&s",
      service_description:
        "Build modern, responsive, and high-performance websites tailored to your business needs.",
    },
    {
      _id: "2",
      service_name: "Mobile App Development",
      service_image:
        "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
      service_description:
        "Design and develop custom mobile applications for both Android and iOS platforms.",
    },
    {
      _id: "3",
      service_name: "UI/UX Design",
      service_image:
        "https://www.mindinventory.com/blog/wp-content/uploads/2024/12/top-mobile-app-ui-ux-design-trends.webp",
      service_description:
        "Create user-centered interfaces with stunning visuals and seamless usability.",
    },
    {
      _id: "4",
      service_name: "Cloud Solutions",
      service_image:
        "https://365datacenters.com/wp-content/uploads/2022/05/Cloud-Solutions.png",
      service_description:
        "Scalable cloud infrastructure setup and management using AWS, Azure, or Google Cloud.",
    },
    {
      _id: "5",
      service_name: "Digital Marketing",
      service_image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSvwYmaRuvwOlGhDmk4JdvKAFnTu5r2NCBA&s",
      service_description:
        "Boost your online presence with SEO, PPC, social media, and content marketing strategies.",
    },
  ];

  const singleData = services.find((d) => d._id == id);

  if (singleData) {
    return (
      <div>
        <h1>Service Details Page</h1>
        <p>ID: {id}</p>
        <p>{singleData.service_name}</p>
        <img src={singleData.service_image} alt="" />
      </div>
    );
  } else {
    return <p>NOT FOUND</p>;
  }
}
