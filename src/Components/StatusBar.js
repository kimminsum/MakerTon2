// StatusBar.js
import React from 'react';
import iconX from '../image/icon_x.svg';

function StatusBar() {
  return (
    <div className="status_bar_bottom">
      <div className="title">주의사항</div>
      <div>
        <img src={iconX} alt="Icon X" />
      </div>
    </div>
  );
}

export default StatusBar;
