import styled from 'styled-components';

const SimpleButton = (
    { className, label, flexible, uppercase }
    : { className: string, type: string, label: string, flexible: boolean, uppercase: boolean }
) => (
    <button className={className}>{label}</button>
);

const Button = styled(SimpleButton)`
  background-color: rgb(199, 20, 41);
  outline: none;
  border: none;
  text-transform: ${props => props.uppercase ? "uppercase" : "none"};
  border-radius: 7px;

  /** Width customization */
  width: ${props => props.flexible ? "auto" : "100%"};
  padding: 1.1rem 1.5rem;
  font-size: 16px;
  font-weight: 700;
  color: white;
  cursor: pointer;
  margin-top: 1.5rem;
  user-select: none;

  &:hover {
    background-color: rgb(223, 38, 60);
  }
`

Button.defaultProps = {
    flexible: true,
    uppercase: true
}

export default Button;
