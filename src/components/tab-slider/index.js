import { useState } from 'react';
import cx from 'classnames';
import css from './tab-slider.module.sass';
import ElementButton from '../element-button';

function TabSlider({ tabs, content }) {
  const [currentTab, setTab] = useState(0);
  return (
    <div className={css.container}>
      <div className={css.tabs}>
        {tabs.map((tab, key) => (
          <ElementButton
            key={tab}
            className={cx(css.tab, { [css.active]: key === currentTab })}
            onClick={() => setTab(key)}
          >{tab}</ElementButton>
        ))}
      </div>
      <div className={css.content}>
        {content[currentTab]}
      </div>
    </div>
  );
}

TabSlider.defaultProps = {
  tabs: [],
  content: [],
};

export default TabSlider;
