import { useQuery } from '@apollo/client';

import { ME_DETAIL } from '../graphql/queries/user';

import React from 'react';
import {
  ButtonGroup,
  Flex,
  IconButton,
  Spinner,
  useEditableControls,
  Editable,
  EditableInput,
  EditablePreview,
} from '@chakra-ui/react';
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

interface Props {}

const ProfileDetailTab = (props: Props) => {
  const { loading, error, data } = useQuery(ME_DETAIL);

  return (
    <>
      {loading ? <Spinner mt={3} color="primary" /> : null}
      <div></div>
    </>
  );
};

export default ProfileDetailTab;
