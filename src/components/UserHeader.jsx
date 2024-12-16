import { Avatar } from "@chakra-ui/react";
import { Box, Flex, Link, Text, VStack} from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";


const UserHeader = () => {
    const toast = useToast();

    const copyURL = () => {
        const currentURL = window.location.href;
        navigator.clipboard.writeText(currentURL).then(() => {
            toast({
                title: "Success.",
                status: "success",
                description: "Profile link copied.",
                duration: 3000,
                isClosable: true,
            });
        });
    };

    return (
        <VStack gap={4} alignItems={"start"}>
            <Flex justifyContent={"space-between"} w={"full"}>
                <Box>
                    <Text fontSize={"2xl"} fontWeight={"bold"}>
                        Mark Zuckerberg
                    </Text>
                    <Flex gap={2} alignItems={"center"}>
                        <Text fontSize={"sm"}>markzuckerberg</Text>
                        <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>
                            skyLark.net
                        </Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar
                        name='Mark Zuckerberg'
                        src='/zuck-avatar.png'
                        size={{
                            base: "md",
                            md: "xl",
                        }}
                    />
                </Box>
            </Flex>

            <Text>Co-founder, executive chairman and CEO of Meta Platforms.</Text>
            <Flex w={"full"} justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    <Text color={"gray.light"}>3.2K followers</Text>
                    <Box w='1' h='1' bg={"gray.light"} borderRadius={"full"}></Box>
                </Flex>
                <Flex>
                    <Box className="icon-container">
                        <Menu>
                            <MenuButton>
                                <CgMoreO size={24} cursor={"pointer"} />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={"gray.light"}>
                                    <MenuItem bg={"gray.light"} fontWeight={"bold"} onClick={copyURL}>
                                        Copy Link
                                    </MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={"full"}>
                <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb="3" cursor={"pointer"}>
                    <Text fontWeight={"bold"}> Threads</Text>
                </Flex>
                <Flex 
                    flex={1}
                    borderBottom={"1px solid gray"}
                    justifyContent={"center"}
                    color={"gray.light"}
                    pb="3"
                    cursor={"pointer"}>
                        <Text fontWeight={"bold"}> Replies</Text>
                    </Flex>
            </Flex>
        </VStack>
    );
};

export default UserHeader; 