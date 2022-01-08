export interface IDotButtonProps {
  disabled?: boolean;
  selected: boolean;
  onClick: () => void;
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
}
