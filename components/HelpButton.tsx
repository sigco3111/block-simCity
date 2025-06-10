
import React, { useState, useEffect, useRef } from 'react';

const HelpButton: React.FC = () => {
  const [isHelpVisible, setIsHelpVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const toggleHelp = () => setIsHelpVisible(!isHelpVisible);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsHelpVisible(false);
      }
    };
    if (isHelpVisible) {
      document.addEventListener('keydown', handleEscKey);
      modalRef.current?.focus(); 
    }
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isHelpVisible]);

  const helpText = 
`• 건물 정보/업그레이드: 건물 좌클릭
• 건설 모드: 하단 툴바에서 건물 선택 후 맵에 좌클릭
• 철거 모드: 하단 툴바에서 💣 선택 후 건물 우클릭 또는, 건물 선택 없이 맵의 건물 우클릭
• 카메라 이동: 마우스 가운데 버튼 누르고 드래그
• 카메라 회전: 마우스 왼쪽 버튼 누르고 드래그 (3D 뷰에서)
• 카메라 확대/축소: 마우스 휠 스크롤`;

  return (
    <>
      <button
        onClick={toggleHelp}
        className="action-button bg-indigo-600 hover:bg-indigo-700 text-white"
        aria-label="도움말 보기"
        aria-expanded={isHelpVisible}
        aria-controls="help-modal"
        title="도움말"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.755 4 3.92C16 13.09 14.828 14 12.802 14c-.65.002-1.252-.22-1.74-.632S10 12.396 10 11.752c0-.92.75-1.67 1.67-1.67.92 0 1.668.75 1.668 1.67 0 .92-.75 1.67-1.668 1.67H12M12 17.25h.008v.008H12v-.008z" />
        </svg>
      </button>

      {isHelpVisible && (
        <div
          id="help-modal"
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40 p-4"
          onClick={toggleHelp} 
          role="dialog"
          aria-modal="true"
          aria-labelledby="helpModalTitle"
        >
          <div
            ref={modalRef}
            tabIndex={-1} 
            className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-lg w-full text-white border border-gray-700 transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modalShow"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id="helpModalTitle" className="text-xl font-semibold text-indigo-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2 -mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                게임 조작 방법
              </h2>
              <button
                onClick={toggleHelp}
                className="text-gray-500 hover:text-white transition-colors text-3xl leading-none"
                aria-label="닫기"
              >
                &times;
              </button>
            </div>
            <ul className="space-y-2 text-gray-300 list-none pl-1">
              {helpText.split('\n').map((line, index) => (
                line.trim() ? <li key={index} className="flex items-start"><span className="text-indigo-400 mr-2 mt-1">&#9679;</span><span>{line.replace('• ', '')}</span></li> : null
              ))}
            </ul>
            <button
              onClick={toggleHelp}
              className="mt-6 w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
            >
              알겠습니다
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpButton;