import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "FAQ Heading 1",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
  },
  {
    question: "FAQ Heading 2",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
  },
  {
    question: "FAQ Heading 3",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
  },
  {
    question: "FAQ Heading 4",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor eget ex sit amet rutrum.",
  },
];

const Faqs = () => {
  return (
    <section
      id="faq"
      className="pt-6 bg-[url('/img/fag-bg.webp')] scroll-mt-10 bg-no-repeat bg-cover bg-center py-10 lg:py-16 xl:py-24"
    >
      <div className="container">
        <div className="text-center mb-5 ">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-fredoka-one  mb-4 text-skin-dark-green">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl font-figtree text-sm lg:text-base text-center mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui. non
            pulvinar lorem felis nec erat
          </p>
        </div>
        <div className=" rounded-lg pt-5 shadow-sm">
          <Accordion
            type="single"
            defaultValue="item-0"
            collapsible
            className="w-full space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="pt-3 max-w-2xl">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
