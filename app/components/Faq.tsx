'use client'
import React, { useContext } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { LanguageContext } from "./Providers/LanguageProvider";

const Faq = () => {
  const { language } = useContext(LanguageContext);

  return (
    <section className="container mx-auto px-4 md:px-8 py-8">
      <h2 className="text-white text-xl font-semibold mb-4">
        {language === "en" ? "FAQ" : "প্রশ্নোত্তর"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                {language === "en" ? "Why Green Bangla Courier?" : "কেন গ্রিন বাংলা কুরিয়ার?"}
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              {language === "en"
                ? "Green Bangla Courier provides reliable and efficient services for a wide range of business and individual needs."
                : "গ্রিন বাংলা কুরিয়ার ব্যবসায়িক এবং ব্যক্তিগত প্রয়োজনের জন্য নির্ভরযোগ্য এবং দক্ষ পরিষেবা প্রদান করে।"}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                {language === "en" ? "Why Green Bangla Courier?" : "কেন গ্রিন বাংলা কুরিয়ার?"}
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              {language === "en"
                ? "Green Bangla Courier offers fast delivery and customer satisfaction is our top priority."
                : "গ্রিন বাংলা কুরিয়ার দ্রুত ডেলিভারি এবং গ্রাহক সন্তুষ্টি আমাদের শীর্ষ অগ্রাধিকার।"}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                {language === "en" ? "Why Green Bangla Courier?" : "কেন গ্রিন বাংলা কুরিয়ার?"}
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              {language === "en"
                ? "We provide nationwide services with extensive tracking capabilities."
                : "আমরা বিস্তৃত ট্র্যাকিং ক্ষমতা সহ সারা দেশে পরিষেবা প্রদান করি।"}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                {language === "en" ? "Why Green Bangla Courier?" : "কেন গ্রিন বাংলা কুরিয়ার?"}
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              {language === "en"
                ? "Green Bangla Courier ensures your packages arrive safely and on time."
                : "গ্রিন বাংলা কুরিয়ার আপনার প্যাকেজ নিরাপদে এবং সময়মতো পৌঁছানো নিশ্চিত করে।"}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                {language === "en" ? "Why Green Bangla Courier?" : "কেন গ্রিন বাংলা কুরিয়ার?"}
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              {language === "en"
                ? "We offer flexible pricing and various service options for your convenience."
                : "আমরা আপনার সুবিধার জন্য নমনীয় মূল্য এবং বিভিন্ন পরিষেবা বিকল্প অফার করি।"}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

        <Accordion allowToggle>
          <AccordionItem borderRadius="md" bg='white'>
            <AccordionButton bg="white" borderRadius="md">
              <Box flex="1" textAlign="left" color="black">
                {language === "en" ? "Why Green Bangla Courier?" : "কেন গ্রিন বাংলা কুরিয়ার?"}
              </Box>
              <AccordionIcon color="#FFBC02" />
            </AccordionButton>
            <AccordionPanel pb={4} bg="white" color="black">
              {language === "en"
                ? "Green Bangla Courier is trusted by thousands of customers across the country."
                : "গ্রিন বাংলা কুরিয়ার সারা দেশের হাজার হাজার গ্রাহকের দ্বারা বিশ্বাসযোগ্য।"}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
