interface ButtonProps {
  label: string;
  backgroundColor?: string;
}

function StyledButton({ label, backgroundColor }: ButtonProps) {
  return (
    <button type="button" className={`${backgroundColor} text-white p-2 rounded-2xl`}>
      {label}
    </button>
  );
}

StyledButton.defaultProps = {
  backgroundColor: 'bg-blue-500',
};

export default StyledButton;
