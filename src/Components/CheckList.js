// CheckList.js
import React from 'react';
import imgHelmet from '../image/img_helmet.png';
import iconChecked from '../image/icon_checked.svg';

function CheckList({ title, description }) {
  return (
    <div className="check_list_check_pack">
      <div className="check_list">
        <div className="check_list_top">
          <img src={imgHelmet} alt="Helmet" />
          <div>{title}</div>
        </div>
        <div className="check_list_bottom">{description}</div>
      </div>
      <div className="check_list_btn">
        <div className="icon_checked">
          <img src={iconChecked} alt="Icon Checked" />
        </div>
        <div>확인했어요.</div>
      </div>
    </div>
  );
}

export default CheckList;
