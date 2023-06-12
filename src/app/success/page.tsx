'use client';

import React from 'react';
import Confetti from 'react-confetti';

export default function SuccessPage() {
  // TODO: Width, Height를 동적으로 가져오도록 수정한다.

  return (
    <div className="flex h-full items-center justify-center overflow-x-hidden">
      <div>
        <h1>성공!!!</h1>
        <p>축하합니다. 짧은 URL을 만들었습니다.</p>
        <button>클립보드에 복사하기</button>
        <button>홈으로 돌아가기</button>
      </div>
      <Confetti
        numberOfPieces={300}
        recycle={false}
        width={1920}
        height={300}
      />
    </div>
  );
}
