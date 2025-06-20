'use client';

import React from 'react';

export default function MainMenu() {


  return (
    <>
      <div className='w-[332px] h-[56px] absolute left-0 top-0 bg-red-50/50'></div>
      <div className="bg-white p-[10px]">
        <div className="flex gap-[10px]">
          <button className='p-[6px] hover:bg-gray-200' onClick={() => console.log('Record started')}>
            {/* Monitor Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z" stroke="black" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
              <path d="M8 21H16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 17V21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className='p-[6px] hover:bg-gray-200' onClick={() => console.log('Record started')}>
            {/* Select Cursor Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0339 12.681C11.9979 12.5906 11.9891 12.4915 12.0088 12.3962C12.0284 12.3008 12.0756 12.2133 12.1444 12.1445C12.2132 12.0756 12.3008 12.0285 12.3961 12.0088C12.4915 11.9892 12.5905 11.9979 12.6809 12.034L21.6809 15.534C21.7774 15.5717 21.8598 15.6384 21.9167 15.725C21.9736 15.8116 22.0023 15.9137 21.9987 16.0172C21.995 16.1207 21.9593 16.2206 21.8965 16.3029C21.8337 16.3853 21.7468 16.4461 21.6479 16.477L18.2039 17.545C18.0485 17.593 17.9072 17.6783 17.7922 17.7933C17.6772 17.9083 17.592 18.0496 17.5439 18.205L16.4769 21.648C16.4461 21.7469 16.3852 21.8337 16.3029 21.8966C16.2205 21.9594 16.1207 21.9951 16.0171 21.9987C15.9136 22.0023 15.8115 21.9737 15.7249 21.9168C15.6384 21.8599 15.5716 21.7775 15.5339 21.681L12.0339 12.681Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5 3C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 3H10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9 21H11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14 3H15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 9V10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 9V11" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 14V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button className='p-[6px] hover:bg-gray-200' onClick={() => console.log('Record started')}>
            {/* Microphone Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V22" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5V12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12V5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button className='p-[6px] hover:bg-gray-200' onClick={() => console.log('Record started')}>
            {/* Webcam Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 18C16.4183 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 7.58172 18 12 18Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 22H17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 22V18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button className='p-[6px] hover:bg-gray-200' onClick={() => console.log('Record started')}>
            {/* Settings Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.22 2H11.78C11.2496 2 10.7409 2.21071 10.3658 2.58579C9.99072 2.96086 9.78 3.46957 9.78 4V4.18C9.77964 4.53073 9.68706 4.87519 9.51154 5.17884C9.33602 5.48248 9.08374 5.73464 8.78 5.91L8.35 6.16C8.04596 6.33554 7.70108 6.42795 7.35 6.42795C6.99893 6.42795 6.65404 6.33554 6.35 6.16L6.2 6.08C5.74107 5.81526 5.19584 5.74344 4.684 5.88031C4.17217 6.01717 3.73555 6.35154 3.47 6.81L3.25 7.19C2.98526 7.64893 2.91345 8.19416 3.05031 8.706C3.18717 9.21783 3.52154 9.65445 3.98 9.92L4.13 10.02C4.43228 10.1945 4.68362 10.4451 4.85905 10.7468C5.03448 11.0486 5.1279 11.391 5.13 11.74V12.25C5.1314 12.6024 5.03965 12.949 4.86405 13.2545C4.68844 13.5601 4.43521 13.8138 4.13 13.99L3.98 14.08C3.52154 14.3456 3.18717 14.7822 3.05031 15.294C2.91345 15.8058 2.98526 16.3511 3.25 16.81L3.47 17.19C3.73555 17.6485 4.17217 17.9828 4.684 18.1197C5.19584 18.2566 5.74107 18.1847 6.2 17.92L6.35 17.84C6.65404 17.6645 6.99893 17.5721 7.35 17.5721C7.70108 17.5721 8.04596 17.6645 8.35 17.84L8.78 18.09C9.08374 18.2654 9.33602 18.5175 9.51154 18.8212C9.68706 19.1248 9.77964 19.4693 9.78 19.82V20C9.78 20.5304 9.99072 21.0391 10.3658 21.4142C10.7409 21.7893 11.2496 22 11.78 22H12.22C12.7504 22 13.2591 21.7893 13.6342 21.4142C14.0093 21.0391 14.22 20.5304 14.22 20V19.82C14.2204 19.4693 14.3129 19.1248 14.4885 18.8212C14.664 18.5175 14.9163 18.2654 15.22 18.09L15.65 17.84C15.954 17.6645 16.2989 17.5721 16.65 17.5721C17.0011 17.5721 17.346 17.6645 17.65 17.84L17.8 17.92C18.2589 18.1847 18.8042 18.2566 19.316 18.1197C19.8278 17.9828 20.2645 17.6485 20.53 17.19L20.75 16.8C21.0147 16.3411 21.0866 15.7958 20.9497 15.284C20.8128 14.7722 20.4785 14.3356 20.02 14.07L19.87 13.99C19.5648 13.8138 19.3116 13.5601 19.136 13.2545C18.9604 12.949 18.8686 12.6024 18.87 12.25V11.75C18.8686 11.3976 18.9604 11.051 19.136 10.7455C19.3116 10.4399 19.5648 10.1862 19.87 10.01L20.02 9.92C20.4785 9.65445 20.8128 9.21783 20.9497 8.706C21.0866 8.19416 21.0147 7.64893 20.75 7.19L20.53 6.81C20.2645 6.35154 19.8278 6.01717 19.316 5.88031C18.8042 5.74344 18.2589 5.81526 17.8 6.08L17.65 6.16C17.346 6.33554 17.0011 6.42795 16.65 6.42795C16.2989 6.42795 15.954 6.33554 15.65 6.16L15.22 5.91C14.9163 5.73464 14.664 5.48248 14.4885 5.17884C14.3129 4.87519 14.2204 4.53073 14.22 4.18V4C14.22 3.46957 14.0093 2.96086 13.6342 2.58579C13.2591 2.21071 12.7504 2 12.22 2Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button className='p-[6px] hover:bg-gray-200' onClick={() => console.log('Record started')}>
            {/* Record Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" stroke="black" stroke-width="2" />
              <circle cx="12.0001" cy="12" r="6.71197" fill="black" />
            </svg>
          </button>
          <button className='p-[6px] hover:bg-gray-200' onClick={() => console.log('Record started')}>
            {/* Close Icon */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 6L18 18" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

