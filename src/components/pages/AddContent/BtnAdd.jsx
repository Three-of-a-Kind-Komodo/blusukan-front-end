import React, { useState } from "react";

import { Button, ButtonToolbar } from "react-bootstrap";
import MydModalWithGrid from "./MyModalWithGrid";

export default function BtnAdd(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ButtonToolbar>
      <Button bsStyle="primary" onClick={() => setModalShow(true)}>
        Add Content
      </Button>

      <MydModalWithGrid
        show={modalShow}
        onHide={() => setModalShow(false)}
        head={"Add Content"}
      />
    </ButtonToolbar>
  );
}
