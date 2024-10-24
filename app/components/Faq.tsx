import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
const Faq = () => {
  return (
    <section className="container mx-auto px-4 md:px-8 py-8">
      <h2 className="text-white text-xl font-semibold mb-4">FAQ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Accordion allowToggle >
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                Why Green Bangla Courier?
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              Green Bangla Courier provides reliable and efficient services for
              a wide range of business and individual needs.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                Why Green Bangla Courier?
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              Green Bangla Courier offers fast delivery and customer
              satisfaction is our top priority.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                Why Green Bangla Courier?
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              We provide nationwide services with extensive tracking
              capabilities.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                Why Green Bangla Courier?
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              Green Bangla Courier ensures your packages arrive safely and on
              time.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                Why Green Bangla Courier?
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              We offer flexible pricing and various service options for your
              convenience.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                Why Green Bangla Courier?
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              Green Bangla Courier is trusted by thousands of customers across
              the country.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
