import {
  Divider,
  Heading,
  VStack,
  Image,
  Flex,
  Text,
  HStack,
  Grid,
  Button,
  Box,
  GridItem,
} from "@chakra-ui/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ServicesGridItem } from "../../components/ServicesGridItem";

export default function Postprodukce() {
  return (
    <>
      <style jsx global>
        {`
          .service-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          @media screen and (max-width: 1216px) {
            .service-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media screen and (max-width: 596px) {
            .service-grid {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
      <Box
        w="100%"
        minH="100vh"
        pt={["80px", "80px", "100px", "100px"]}
        position="absolute"
        zIndex="2"
        overflow="hidden"
        pb="20px"
      >
        <Flex w="100%" h="100%" flexDir="column" align="center">
          <Text
            textAlign="center"
            fontSize={["2.5rem", "3rem", "6xl", "6xl"]}
            fontWeight="800"
            letterSpacing={["-1px", "-2px", "-2px", "-2px"]}
            w="100%"
            my="15px"
          >
            Naše služby
          </Text>
          <Flex w="100%" h="fill" justify="center" align="center" mt="20px">
            <Grid rowGap="20px" columnGap="30px" className="service-grid">
              <ServicesGridItem
                heading="COPYWRITING"
                text="Print, Online, Video"
                src="/images/development.png"
              />
              <ServicesGridItem
                heading="VIDEO MARKETING"
                text="Nápad, Výroba, Digitál"
                src="/images/camera.png"
              />
              <ServicesGridItem
                heading="PRODUCTION SERVICE"
                text="AVD, Eventy, Workshopy"
                src="/images/executive.png"
              />
              <ServicesGridItem
                heading="POSTPRODUCTION"
                text="Graphics, Offline, Color Correction, Sound, VFX"
                src="/images/postproduction.png"
              />
            </Grid>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
