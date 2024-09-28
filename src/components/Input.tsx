export function Input(
  className: string,
  type: string,
  placeholder: string,
  required?: boolean
): JSX.Element {
  return (
    <>
      <label htmlFor={type}>
        <input
          className={className}
          type={type}
          placeholder={placeholder}
          required={required}
        />
      </label>
    </>
  );
}
