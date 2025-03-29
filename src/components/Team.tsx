import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamProps {
  imageUrl: string;
  name: string;
  position: string;
  socialNetworks: SociaNetworkslProps[];
}

interface SociaNetworkslProps {
  name: string;
  url: string;
}

const teamList: TeamProps[] = [
  {
    imageUrl: "https://media.licdn.com/dms/image/v2/C4D03AQFwYxStPy0UDg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1602557721009?e=1748476800&v=beta&t=yH0w-jWTOefnp5nZlEmUuPZEYrlEM3TmzyQOcHreb3Q",
    name: "Dhara Mungra",
    position: "Director",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/dhara-mungra",
      }
    ],
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/13250132?s=400&u=7ac1970caf2ef0140e68a37be46a65e976ba8683&v=4",
    name: "Swapneel Mehta",
    position: "Researcher",
    socialNetworks: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/swapneelm",
      }
    ],
  }
];

export const Team = () => {
  const socialIcon = (iconName: string) => {
    switch (iconName) {
      case "Linkedin":
        return <Linkedin size="20" />;

      case "Facebook":
        return <Facebook size="20" />;

      case "Instagram":
        return <Instagram size="20" />;
    }
  };

  return (
    <section
      id="team"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Our Dedicated{" "}
        </span>
        Crew
      </h2>

      <p className="mt-4 mb-10 text-xl text-muted-foreground">
        We are a team of engineers and researchers developing innovative public interest technology!
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-10">
        {teamList.map(
          ({ imageUrl, name, position, socialNetworks }: TeamProps) => (
            <Card
              key={name}
              className="bg-muted/50 relative mt-8 flex flex-col justify-center items-center"
            >
              <CardHeader className="mt-8 flex justify-center items-center pb-2">
                <img
                  src={imageUrl}
                  alt={`${name} ${position}`}
                  className="absolute -top-12 rounded-full w-24 h-24 aspect-square object-cover"
                />
                <CardTitle className="text-center">{name}</CardTitle>
                <CardDescription className="text-primary">
                  {position}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-center pb-2">
                <p>Our team works with staff at <a href="https://simppl.org">SimPPL</a> and <a href="https://sakhi-health.com">Sakhi</a> to advance digital trust using responsible AI tools.</p>
              </CardContent>

              <CardFooter>
                {socialNetworks.map(({ name, url }: SociaNetworkslProps) => (
                  <div key={name}>
                    <a
                      rel="noreferrer noopener"
                      href={url}
                      target="_blank"
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      <span className="sr-only">{name} icon</span>
                      {socialIcon(name)}
                    </a>
                  </div>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
