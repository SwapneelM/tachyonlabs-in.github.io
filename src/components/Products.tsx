import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

interface ProductProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const productsList: ProductProps[] = [
  {
    title: "Sakhi",
    description:
      "A health platform designed to improve maternal and child healthcare through personalized tracking, guidance, and community support.",
    imageUrl: "/src/assets/tachyon_logo_small.webp",
    link: "https://sakhi-health.com",
  },
];

export const Products = () => {
  return (
    <section id="products" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our
        </span>{" "}
        Products
      </h2>

      <p className="text-muted-foreground text-xl text-center max-w-2xl mx-auto mb-12">
        Innovative solutions developed by Tachyon Labs to address real-world challenges
      </p>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 place-items-center">
        {productsList.map(({ title, description, imageUrl, link }) => (
          <Card
            key={title}
            className="w-full max-w-md overflow-hidden transition-all hover:shadow-lg flex flex-col items-center text-center p-6"
          >
            <div className="mb-6 w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
              <img
                src={imageUrl}
                alt={`${title} logo`}
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  // Fallback if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.src = "/src/assets/tachyon_logo_small.webp";
                }}
              />
            </div>
            
            <CardHeader className="text-center pb-0">
              <CardTitle className="text-2xl">{title}</CardTitle>
              <CardDescription className="text-md mt-2">
                {description}
              </CardDescription>
            </CardHeader>

            <div className="mt-6">
              <Button asChild variant="outline" className="group">
                <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" x2="21" y1="14" y2="3" />
                  </svg>
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};