import { useColorModeValue, Flex, Text, Image, Divider, SkeletonCircle, Skeleton } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import Message from "./Message.jsx";
import MessageInput from "./MessageInput.jsx";

const MessageContainer = () => {
    return(
        <Flex flex="70"
        bg={useColorModeValue("gray.200", "gray.700")}
        p={2}
        borderRadius={"md"}
        flexDirection={"column"}>
            <Flex w={"full"} h={12} alignItems={"center"} gap={2}>
                <Avatar src="" size={"sm"} />
                <Text display={"flex"} alignItems={"center"}>
                    vansh <Image src="/verified.png" w={4} h={4} ml={1} />
                </Text>
            </Flex>
            <Divider/>

            <Flex flexDir={"column"} gap={4} my={4} p={2}
            height={"400px"} overflowY={"auto"}>
                {/* {true && (
                    [...Array(5)].map((_,i) => (
                        <Flex key={i}
                            gap={2}
                            alignItems={"center"}
                            p={1}
                            borderRadius={"md"}
                            alignSelf={i%2 === 0 ? "flex-start" : "flex-end"}
                        >
                            {i % 2 === 0 && <SkeletonCircle size={7} />}
                            <Flex flexDirection={"column"} gap={2}>
                                <Skeleton h="8px" w="250px" />
                                <Skeleton h="8px" w="250px" />
                                <Skeleton h="8px" w="250px" />
                            </Flex>
                            {i % 2 !== 0 && <SkeletonCircle size={7} />}
                        </Flex>
                    ))
                )} */}

                <Message ownMessage={true} />
                <Message ownMessage={true} />
                <Message ownMessage={false} />
                <Message ownMessage={true} />
                <Message ownMessage={false} />
            </Flex>
            <MessageInput/>
        </Flex>
    )
}

export default MessageContainer;