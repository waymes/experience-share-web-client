import { useIntl } from 'react-intl';
import cx from 'classnames';
import css from './coachings-list.module.sass';
import { routes } from '../../constants';
import Link from '../link';
import { getPaymentsOptions } from '../../utils/translations';

function CoachingsList({ items, isProfile }) {
  const { formatMessage } = useIntl();
  const getCoachingUrl = (id) => {
    if (isProfile) {
      return {
        as: routes.protected.createCoaching.as,
        to: `${routes.protected.coachings}/${id}`,
      };
    }
    return routes.coaching;
  };
  const paymentsOptions = getPaymentsOptions(formatMessage);
  const notFoundText = isProfile ? 'У вас пока нет учений, добавьте первое' : 'По вашему запросу с выбранными фильтрами учений пока нет. ¯\\_(ツ)_/¯';
  return (
    <div className={css.root}>
      {items.map((coaching) => {
        const exchangeType = paymentsOptions.find((el) => el.value === coaching.payment);
        return (
          <Link key={coaching.id} className={css.coaching} href={getCoachingUrl(coaching.id)}>
            <div className={cx('icon-user', css.avatar)} />
            <div>
              <h4 className={css.title}>{coaching.title}</h4>
              <div>
                {coaching.skills.map((skill) => (
                  <span key={skill} className={css.skill}>{skill}</span>
                ))}
              </div>
              <div className={css.description}>{coaching.description}</div>
              <div className={css.type}>
                {coaching.payment === 'paid' ? `$${coaching.price}` : exchangeType && exchangeType.label}
              </div>
            </div>
          </Link>
        );
      })}
      {items.length === 0 && <span className={css.notFound}>{notFoundText}</span>}
    </div>
  );
}

CoachingsList.defaultProps = {
  items: [],
};

export default CoachingsList;
