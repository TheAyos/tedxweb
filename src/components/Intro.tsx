import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import { SCHEDULE } from "@/Data";

export const Intro = () => {
  return (
    <VStack gap={12} align={{ base: "left", md: "stretch" }} mt={10} mb={3}
      maxW="container.xl"
      mx="auto"
      px={{ base: 8, md: "10vw" }}
    >
      {/* <VStack gap={12} align="stretch" mt={10} mb={6} w="full"> */}
      <Box as="section" width="full" gap={8}>
        <Text as={"h2"} fontSize={"4xl"} fontWeight={"medium"} textAlign={"center"}>
          This year's theme
        </Text>
        <Grid templateColumns={"1fr"}>
          <Text as={"h1"} textAlign="center" w="100%" fontSize={{ base: "2xl", md: "4xl" }} fontWeight={"bold"} whiteSpace={{ base: "normal", md: "nowrap" }} color="var(--tedx-red)">
            Keeping The Human Alive
          </Text>

        </Grid>
        <Box w={{ base: "100%", md: "80%" }} mx="auto">
          <Text mt={8} textAlign={{ base: "left", md: "justify" }}>
            Keeping the Human Alive asks a simple but urgent question: how do we innovate and evolve in a world increasingly driven by technology without losing ourselves? In a society obsessed with speed and efficiency, it invites us to pause and reflect on what truly matters: our humanity.<br /><br />
            We should seek to explore how progress and innovation can serve people, not replace them. It also asks how we can remain politically and socially engaged when algorithms select what we see and shape our perspective—how can we reclaim our voice and power as citizens instead of mere consumers, and build more meaningful connections? As keeping our critical and creative minds active becomes a challenge in our societies, Keeping the Human Alive galvanizes us to pursue independent thinking, write our own stories, and preserve cultural legacies without delegating this to machines.<br /><br />
            Ultimately, Keeping the Human Alive is about protecting the inner life that makes each of us a person—emotionally grounded, ethically awake, and vividly, stubbornly human.
          </Text>

          <Text as={"h2"} mt={14} fontSize={"4xl"} fontWeight={"medium"} textAlign={"left"}>
            The Date and the Location
          </Text>
          <Text mt={8} textAlign={{ base: "left", md: "justify" }}>
            We are organizing a conference titled TEDxÉcolePolytechnique on Tuesday 12th of May 2026. This event will be held in Amphitheatre Poincaré in the main
            building of École Polytechnique. The event will feature a lineup of around 5 speakers, each handpicked for their unique perspectives, expertise and
            inspiring stories A Q&A session as well as buffet will take place after the speeches and will enable students to ask questions and involve them in a
            more targeted discussion with the speakers
          </Text>
        </Box>
      </Box>

      <Box as="section" width="full" maxW={{ base: "100%", md: "80%" }}>
        <Text as="h2" fontSize="3xl" fontWeight="medium" mb={4}>
          Event schedule
        </Text>

        <Box as="dl" width="full" borderTop="1px solid" borderColor="whiteAlpha.200">
          {SCHEDULE.map((item) => (
            <Box
              key={item.time + item.title}
              display="grid"
              gridTemplateColumns={{ base: "100px 1fr", md: "130px 1fr" }}
              gap={2}
              alignItems="flex-start"
              py={2}
              borderBottom="1px solid"
              borderColor="whiteAlpha.100"
            >
              <Text as="dt" color="var(--tedx-red)" fontSize="lm" letterSpacing="wide">
                {item.time}
              </Text>
              <Box as="dd">
                <Text fontWeight="thin" fontSize="sg">
                  {item.title}
                </Text>
                {item.note ? (
                  <Text mt={1} color="gray.400" fontSize="sm">
                    {item.note}
                  </Text>
                ) : null}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

    </VStack>
  );
};