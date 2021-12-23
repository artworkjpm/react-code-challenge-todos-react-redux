const Input = (props: any) => {
  const { inputValue, onChange, inputPlaceholder, onKeyDown } = props;
  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => onChange(e.target.value)}
      placeholder={inputPlaceholder}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
