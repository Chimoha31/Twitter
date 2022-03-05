import { Search } from '@mui/icons-material';
import React from 'react';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input type="text" placeholder="Words Search" />
      </div>
      
      <div className="widgets__widgetContainer">
        <h2>Wha you doing now?</h2>
        {/* ライブラリを追加 */}
      </div>
    </div>
  )
}

export default Widgets;
