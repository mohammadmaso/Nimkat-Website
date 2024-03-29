import {
  Box,
  Slide,
  useDisclosure,
  Button,
  Stack,
  Image,
  Heading,
  Text,
  CloseButton,
  useBreakpointValue,
} from '@chakra-ui/react';
import * as React from 'react';
import { useAddToHomescreenPrompt } from '../hooks/useAddToHomescreenPrompt';

export function PWAInstallPrompt() {
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();
  const [isVisible, setVisibleState] = React.useState(false);

  const isMobile = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });
  const hide = () => setVisibleState(false);
  const { isOpen, onToggle } = useDisclosure();

  const cancle = () => {
    localStorage.setItem('pwa-prompt-showed', '1');
    setVisibleState(false);
  };

  React.useEffect(() => {
    const isCancled = localStorage.getItem('pwa-prompt-showed');
    if (prompt) {
      if (isCancled != '1') {
        setVisibleState(true);
      }
    }
  }, [prompt]);

  if (!isVisible) {
    return <div />;
  }
  if (isMobile) {
    return (
      <>
        {/* <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}> */}
        <Box
          roundedTop="md"
          bgColor="#1d4e62"
          boxShadow="inner"
          bottom="0"
          zIndex="overlay"
          position="fixed"
          //   h="26vh"
          w="full"
          p="3"
        >
          <Stack justify="center" textAlign="center" textColor="white">
            <CloseButton mb="-40px" onClick={cancle} />
            <Image src="/logo-light.svg" h="2rem" alt="Logo" onClick={cancle} />
            <Heading fontWeight="bold" fontSize="lg">
              تجربه سریع‌تر و امکان مرور آفلاین
            </Heading>
            <Text fontWeight="light" fontSize="lg">
              با نصب نسخه وب نیمکت آکادمی
            </Text>
            <Button
              onClick={promptToInstall}
              variant="outline"
              fontWeight="light"
              rounded="full"
            >
              نصب سریع
            </Button>
          </Stack>
        </Box>
        {/* </Slide> */}
      </>
    );
  } else {
    return null;
  }
}
