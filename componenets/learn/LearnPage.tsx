import { CloseIcon, HamburgerIcon, MoonIcon } from '@chakra-ui/icons';
import {
  Button,
  Flex,
  IconButton,
  Text,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Box,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';
import LearnContent from './LearnContent';
import { LearnSidebar } from './LearnSidebar';

interface Props {
  courseData: any;
  lessonData: any;
  loading: any;
  error: any;
  completeLessonData: any;
  complitnessPercent: any;
}

const LearnPage = (props: Props) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  const lessonTitle = props.lessonData ? props.lessonData.node.title : null;
  const lesson = props.lessonData ? props.lessonData.node : null;

  return (
    <div>
      {/* <LearnContent {...props.content} /> */}
      <Flex
        flex={{ base: 'flex', md: 'flex' }}
        flexDirection={{ base: 'column', md: 'row' }}
        display={{ base: 'flex', md: 'flex' }}
        bgColor={useColorModeValue('gray.100', 'gray.700')}
        borderRadius="md"
        justify="space-between"
        align="center"
        p="2"
      >
        <HStack>
          <Button
            // position="fixed"
            // right="0"
            onClick={onToggle}
            leftIcon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            borderRadius="0"
            colorScheme="telegram"
            variant="ghost"
            aria-label={'Toggle Navigation'}
          >
            فهرست مطالب
          </Button>
          <Button
            leftIcon={<FcNext />}
            colorScheme="telegram"
            variant="ghost"
            aria-label={'ٔNext Lesson'}
          >
            درس قبلی
          </Button>
        </HStack>
        <Text fontWeight="semibold">
          {props.courseData.secureBougthCourse.course.title}
          {props.lessonData ? ' - ' : null}
          {lessonTitle}
        </Text>
        <HStack>
          <Button
            rightIcon={<FcPrevious />}
            colorScheme="telegram"
            variant="ghost"
            aria-label={'ٔNext Lesson'}
          >
            اتمام این درس
          </Button>
          <Button
            rightIcon={<MoonIcon w={4} h={4} />}
            colorScheme="telegram"
            variant="ghost"
            aria-label={'Night Mode'}
            onClick={toggleColorMode}
          >
            حالت شب
          </Button>
        </HStack>
      </Flex>
      {props.lessonData ? (
        <LearnContent {...props.lessonData.node} />
      ) : (
        <Text m={3}>لطفا یک درس را برای مشاهده انتخاب کنید.</Text>
      )}

      <LearnSidebar
        course={props.courseData.secureBougthCourse.course}
        isOpen={isOpen}
        onClose={onClose}
        completeLessonData={props.completeLessonData}
        complitnessPercent={props.complitnessPercent}
      />
    </div>
  );
};

export default LearnPage;
