import React from "react";
import Glyphicon from 'glyphicons'
import { Button } from "react-bootstrap";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && Glyphicon.eyeglasses }
    {!isLoading ? text : loadingText}
  </Button>;