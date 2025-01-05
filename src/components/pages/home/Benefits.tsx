import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Utility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
    image: "/img/benifits/1.webp",
  },
  {
    title: "Rewards and Engagement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
    image: "/img/benifits/2.webp",
  },
  {
    title: "Gamification Elements",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
    image: "/img/benifits/3.webp",
  },
  {
    title: "EcoSystem",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
    image: "/img/benifits/4.webp",
  },
  {
    title: "Research and Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
    image: "/img/benifits/5.webp",
  },
  {
    title: "Community Driven",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
    image: "/img/benifits/6.webp",
  },
];

export function Benefits() {
  return (
    <section
      id="benefits"
      className="py-16 relative z-50 scroll-mt-10 lg:py-24 px-4"
    >
      <div className="container mx-auto">
        <div className="text-center mb-5 ">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-fredoka-one  mb-4 text-skin-dark-green">
            Benefits of $GLAS
          </h2>
          <p className="max-w-xl font-figtree text-sm lg:text-base text-center mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui. non
            pulvinar lorem felis nec erat
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="relative mt-12">
              <img
                className="absolute w-full z-0 left-0 right-0 -top-2 2xl:-top-6"
                src="/img/benifits/Union.png"
                alt="union"
              />
              <Card className="bg-white rounded-none w-[calc(100%-10px)] mx-auto shadow-none z-10 relative border-0">
                <CardContent className="p-6">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
              <img
                className="absolute w-full left-0 right-0 z-0 -bottom-2 2xl:-bottom-6"
                src="/img/benifits/Union.png"
                alt="union"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
