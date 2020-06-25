import cx from 'classnames';
import Button from '../button';
import css from './skills.module.sass';
import Modal from '../modal';
import SkillForm from '../skill-form';

const skills = [
  {
    id: 1,
    skillTypeId: 1,
    skillType: {
      id: 1,
      name: 'software development',
      title: 'Software development'
    },
    level: 'wantToLearn',
    certificates: [],
    userId: 2,
  },
  {
    id: 2,
    skillTypeId: 2,
    skillType: {
      id: 2,
      name: 'chess playing',
      title: 'Chess playing'
    },
    level: 'wantToLearn',
    certificates: [],
    userId: 2,
  },
]

function Skills() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className={css.root}>
      <div className={css.skillList}>
        {skills.map(skill => (
          <div className={css.skill} key={skill.id}>
            <span className={css.title}>{skill.skillType.title}</span>
            <i className={cx('icon-bin', css.bin)} />
          </div>
        ))}
      </div>
      <Button className={css.button} onClick={() => setShowModal(true)}>Добавить новый навык</Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <SkillForm onSubmit={() => {}} onClose={() => setShowModal(false)} />
      </Modal>
    </div>
  );
}

export default Skills;
