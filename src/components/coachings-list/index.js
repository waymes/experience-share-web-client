import cx from 'classnames';
import css from './coachings-list.module.sass';
import { exchangeTypes } from '../../constants';

function CoachingsList({ items }) {
  return (
    <div className={css.root}>
      {items.map(coaching => {
        const exchangeType = exchangeTypes.find(el => el.value === coaching.payment);
        return (
          <div key={coaching.id} className={css.coaching}>
            <div className={cx('icon-user', css.avatar)} />
            <div>
              <h4 className={css.title}>{coaching.title}</h4>
              <div>
                {coaching.skills.map(skill => (
                  <span key={skill} className={css.skill}>{skill}</span>
                ))}
              </div>
              <div className={css.description}>{coaching.description}</div>
              <div className={css.type}>
                {coaching.payment === 'paid' ? `$${coaching.price}` : exchangeType && exchangeType.label}
              </div>
            </div>
          </div>
        )
      })}
      {items.length === 0 && (
        <span className={css.notFound}>У вас пока нет учений, добавьте первое</span>
      )}
    </div>
  );
}

CoachingsList.defaultProps = {
  items: [],
};

export default CoachingsList;
