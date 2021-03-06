import { Flex, IconButton } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";
import { IoClose } from "react-icons/io5";

export const VideoFrame: React.FC<{
  handleClick: MouseEventHandler<SVGElement>;
  src: string;
}> = ({ handleClick, src }) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      background="blackAlpha.800"
      position="fixed"
      zIndex="1000"
      pt={["80px", "80px", "100px", "100px"]}
      flexDir="column"
      onClick={handleClick as unknown as MouseEventHandler<HTMLDivElement>}
    >
      <Flex
        w="100%"
        justify="flex-end"
        p="20px"
        h="min-content"
        position="absolute"
      >
        <IoClose
          color="white"
          size="50px"
          cursor="pointer"
          onClick={handleClick}
        />
      </Flex>
      <Flex align="center" justify="center" w="100%" h="100%" p="20px">
        <Flex w="100%" h="min-content" maxW="1200px">
          <iframe
            src={src}
            style={{
              aspectRatio: "16/9",
              width: "100%",
              height: "100%",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen={true}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
