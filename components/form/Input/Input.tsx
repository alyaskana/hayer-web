import { FC, HTMLProps } from "react";
import { StyledInput, ErrorMessage, HintMessage } from "./styles";

type InputProps = {
  hint?: string;
  error?: string;
} & HTMLProps<HTMLInputElement>;

export const Input: FC<InputProps> = ({ hint, error, ...inputProps }) => {
  return (
    <>
      <StyledInput error={error} {...inputProps} />
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        hint && <HintMessage>{hint}</HintMessage>
      )}
    </>
  );
};
