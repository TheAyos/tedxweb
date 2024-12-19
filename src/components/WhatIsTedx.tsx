import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Link,
  HStack,
} from "@chakra-ui/react";

const About: React.FC = () => {
  return (
    <>
      <section className="py-12 bg-black">
        {/* What is TEDx ? */}
        <div className="font-mono container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">What is TEDx?</h2>
          <p className="text-lg leading-relaxed">
            In the spirit of discovering and spreading ideas, TED has created a
            program called TEDx. TEDx is a program of local, self-organized
            events that bring people together to share a TED-like experience.
            Our event is called TEDxÉcolePolytechnique, where x = independently
            organized TED event. At our TEDxÉcolePolytechnique event, TED Talks
            video and live speakers will combine to spark deep discussion and
            connection in a small group. The TED Conference provides general
            guidance for the TEDx program, but individual TEDx events, including
            ours, are self-organized.
          </p>
        </div>
      </section>
      <Box as="main" py={12} bg="black" color="white">
        <Container maxW="container.xl">
          <VStack gap={12} align="stretch">
            {/* About TEDx Section */}
            <VStack align="stretch" gap={6}>
              <Heading as="h1" size="xl">
                About TEDx, x = independently organized event
              </Heading>
              <Text fontSize="lg">
                In the spirit of discovering and spreading ideas, TEDx is a
                program of local, self-organized events that bring people
                together to share a TED-like experience. At a TEDx event, TED
                Talks video and live speakers combine to spark deep discussion
                and connection. These local, self-organized events are branded
                TEDx, where x = independently organized TED event. The TED
                Conference provides general guidance for the TEDx program, but
                individual TEDx events are self-organized. (Subject to certain
                rules and regulations.)
              </Text>
            </VStack>

            {/* About TED Section */}
            <VStack align="stretch" gap={6}>
              <Heading as="h2" size="xl">
                About TED
              </Heading>
              <Text fontSize="lg">
                TED is a nonprofit, nonpartisan organization dedicated to
                discovering, debating and spreading ideas that spark
                conversation, deepen understanding and drive meaningful change.
                Our organization is devoted to curiosity, reason, wonder and the
                pursuit of knowledge — without an agenda. We welcome people from
                every discipline and culture who seek a deeper understanding of
                the world and connection with others, and we invite everyone to
                engage with ideas and activate them in your community.
              </Text>
              <Text fontSize="lg">
                TED began in 1984 as a conference where Technology,
                Entertainment and Design converged, but today it spans a
                multitude of worldwide communities and initiatives exploring
                everything from science and business to education, arts and
                global issues. In addition to the TED Talks curated from our
                annual conferences and published on TED.com, we produce original
                podcasts, short video series, animated educational lessons
                (TED-Ed) and TV programs that are translated into more than 100
                languages and distributed via partnerships around the world.
                Each year, thousands of independently run TEDx events bring
                people together to share ideas and bridge divides in communities
                on every continent. Through the Audacious Project, TED has
                helped catalyze more than $3 billion in funding for projects
                that seek to make the world more beautiful, sustainable and
                just. In 2020, TED launched Countdown, an initiative to
                accelerate solutions to the climate crisis and mobilize a
                movement for a net-zero future, and in 2023 TED launched TED
                Democracy to spark a new kind of conversation focused on
                realistic pathways towards a more vibrant and equitable future.{" "}
                <Link
                  href="https://www.ted.com/about/programs-initiatives"
                  color="red.400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View a full list of TED's many programs and initiatives
                </Link>
                .
              </Text>
            </VStack>

            {/* Social Media Links */}
            <VStack align="stretch" gap={4}>
              <Text fontSize="lg">Follow TED on:</Text>
              <HStack gap={4}>
                <Link
                  href="https://facebook.com/TED"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="red.400"
                >
                  Facebook
                </Link>
                <Link
                  href="https://instagram.com/ted"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="red.400"
                >
                  Instagram
                </Link>
                <Link
                  href="https://linkedin.com/company/ted-conferences"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="red.400"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://tiktok.com/@tedtoks"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="red.400"
                >
                  TikTok
                </Link>
                <Link
                  href="https://twitter.com/ted"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="red.400"
                >
                  X
                </Link>
              </HStack>
            </VStack>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default About;
