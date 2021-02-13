import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";

import { 
  Navbar,
  Button
} from 'reactstrap';

export const Topbar = ({ toggleSidebar }) => {
  return (
    <Navbar color="light" light expand="md">
      <Button color="info" onClick={ toggleSidebar }>
        <FontAwesomeIcon icon={ faAlignLeft } />
      </Button>
    </Navbar>
  );
}
