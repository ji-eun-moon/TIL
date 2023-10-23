import Image from 'next/image';

interface ButtonProps {
  label: string;
  backgroundColor?: string;
}

/**
 * 버튼 컴포넌트
 * @param {string} backgroundColor - 버튼의 배경색을 지정
 * @param {string} label - 버튼에 표시되는 레이블을 지정
 */
function StyledButton({ label, backgroundColor }: ButtonProps) {
  return (
    <button type="button" className={`${backgroundColor} text-white p-2 rounded-2xl`}>
      {label}
      <Image src="/images/test.png" alt="image" width={50} height={50} />
    </button>
  );
}

StyledButton.defaultProps = {
  backgroundColor: 'bg-blue-500',
};

export default StyledButton;
