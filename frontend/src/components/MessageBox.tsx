import { Alert } from "react-bootstrap";

interface PropTypes {
  variant: string;
  children: React.ReactNode;
}

export const MessageBox = ({ variant = "info", children }: PropTypes) => {
  return <Alert variant={variant || "info"}>{children}</Alert>;
};
