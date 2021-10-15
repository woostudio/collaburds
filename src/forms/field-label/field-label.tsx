import { FunctionalComponent, h } from '@stencil/core';

interface FieldLabelProps {
  label: string;
  labelFor: string;
  size: 'small' | 'normal' | 'medium' | 'large';
}
export const FieldLabel: FunctionalComponent<FieldLabelProps> = ({ label, labelFor, size }) => (
  <label
    class={{
      label: true,
      [`is-${size}`]: !!size,
    }}
    htmlFor={labelFor}
  >
    {label}
  </label>
);
