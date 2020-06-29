import cx from 'classnames';
import css from './section.module.sass';

function Section({ children, full }) {
  return (
    <section className={css.root}>
      <div className={cx({ [css.container]: !full })}>
        {children}
      </div>
    </section>
  );
}

Section.defaultProps = {
  full: false
};

export default Section;
