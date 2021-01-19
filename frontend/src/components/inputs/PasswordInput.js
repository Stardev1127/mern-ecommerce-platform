import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React, { useState } from 'react';

/**
 * Custom input component which shows a TextField with an eye icon
 * in order to show/hide asterisks value
 *
 * @param {*} params
 * @param  {...any} props
 */
const PasswordInput = ({ id, label, variant, defaultValue, value, handleOnChange }, ...props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      type={showPassword ? 'text' : 'password'}
      id={id}
      label={label}
      variant={variant}
      defaultValue={defaultValue}
      value={value}
      onChange={(e) => handleOnChange(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      props
    />
  );
};

export default PasswordInput;