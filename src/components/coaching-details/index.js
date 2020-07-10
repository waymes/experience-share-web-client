import { useIntl } from 'react-intl';
import cx from 'classnames';
import Button from '../button';
import css from './coaching-details.module.sass';
import { getPaymentsOptions } from '../../utils/translations';

const Section = ({ title, children }) => (
  <div className={css.section}>
    <h3 className={css.sectionTitle}>{title}</h3>
    {children}
  </div>
);

function CoachingDetails({ coaching }) {
  const { formatMessage } = useIntl();
  const paymentObject = getPaymentsOptions(formatMessage)
    .find((el) => el.value === coaching.payment);
  const payment = coaching.payment === 'paid' ? `$${coaching.price}` : paymentObject.label;
  return (
    <div className={css.root}>
      <div className={css.main}>
        <h2 className={css.title}>{coaching.title}</h2>
        <div className={css.subtitles}>
          <span className={css.subtitle}>{coaching.city}</span>
          {' - '}
          <span className={css.subtitle}>{payment}</span>
        </div>
        <Section title="Навыки которые вы получите">
          <div className={css.skills}>
            {coaching.skills.map((skill) => <span key={skill} className={css.skill}>{skill}</span>)}
          </div>
        </Section>
        <Section title="Расписание">
          <div className={css.schedule}>{coaching.schedule}</div>
        </Section>
        <Section title="Описание">
          <div className={css.description}>{coaching.description}</div>
        </Section>
      </div>
      <div className={css.about}>
        <div className={cx('icon-user', css.avatar)} />
        <Button className={css.button} filled>Записаться</Button>
        <Button className={css.button}>В закладки</Button>
      </div>
    </div>
  );
}

export default CoachingDetails;
