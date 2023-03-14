import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button.styled";

export const ButtonLoadMore = ({onClick}) => {
    return(
        
        <Button type="button" onClick={onClick}>
          Load more
        </Button>
        
    )
}


PropTypes.onClick = {
  onClose: PropTypes.func.isRequired, 
};