import { Form } from 'react-final-form';
import cx from 'classnames';
import css from './profile-section.module.sass';

function ProfileSection({ title, onSubmit, children, initialValues, className }) {
  return (
    <section className={cx(css.root, className)}>
      <h3 className={css.title}>{title}</h3>
      {onSubmit
        ? (
          <Form onSubmit={onSubmit} initialValues={initialValues}>
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit} className={css.content}>
                {children}
              </form>
            )}
          </Form>
        )
        : <div className={css.content}>{children}</div>}
    </section>
  );
}

export default ProfileSection;
