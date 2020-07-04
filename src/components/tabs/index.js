import { useState } from 'react';
import cx from 'classnames';
import css from './tabs.module.sass';
import ElementButton from '../element-button';
import Link from '../link';

function Tabs({ items, content, isLinks }) {
  const [currentTab, setTab] = useState(0);

  const Component = isLinks ? Link : ElementButton;
  const handleClick = (key) => () => !isLinks && setTab(key);
  return (
    <div className={css.container}>
      <div className={css.tabs}>
        {items.map((tab, key) => (
          <Component
            key={tab.label}
            className={cx(css.tab, { [css.active]: !isLinks && key === currentTab })}
            onClick={handleClick(key)}
            activeClassName={css.active}
            {...tab}
          >{tab.label}</Component>
        ))}
      </div>
      {content[currentTab] && (
      <div className={css.content}>
        {content[currentTab]}
      </div>
      )}
    </div>
  );
}

Tabs.defaultProps = {
  items: [],
  content: [],
};

export default Tabs;
