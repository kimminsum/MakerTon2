// Caution.js
import React from 'react';
import iconCautions from '../image/icon_caution.svg';

function Caution() {
  return (
    <div className="caution">
      <div>
        <img src={iconCautions} alt="Icon Caution" />
      </div>
      <div>주의사항</div>
    </div>
  );
}

export default Caution;
