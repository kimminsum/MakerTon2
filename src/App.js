// App.js
import React from 'react';
import Header from './Components/Header';
import StatusBar from './Components/StatusBar';
import Caution from './Components/Caution';
import CheckList from './Components/CheckList';
import './App.css';

function App() {
  return (
    <div className="background">
      <Header />
      <StatusBar />
      <div className="mid_nav">
        <Caution />
        <CheckList title="헬멧은 필수!" description="킥세이프는 사용자의 헬멧 착용 여부를 자동으로 감지해요. 헬멧을 알맞게 착용한 사용자만이 킥보드 주행이 가능해요." />
        <CheckList title="헬멧은 필수!" description="킥세이프는 사용자의 헬멧 착용 여부를 자동으로 감지해요. 헬멧을 알맞게 착용한 사용자만이 킥보드 주행이 가능해요." />
        <div className="nav_bottom">
          <button className="btn_long">모든 주의사항을 확인했어요.</button>
        </div>
      </div>
    </div>
  );
}

export default App;