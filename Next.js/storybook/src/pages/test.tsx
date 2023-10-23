import React from 'react';
import Image from 'next/image';
import StyledButton from '@/components/atoms/StyledButton';

function test() {
  return (
    <div>
      <Image src="/images/test.png" alt="dog image" width={500} height={500} />
      <StyledButton label="버튼 테스트" />
    </div>
  );
}

export default test;
