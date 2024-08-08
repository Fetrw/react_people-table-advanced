import { Link, useLocation } from 'react-router-dom';
import { Person } from '../types/Person';
import classNames from 'classnames';

interface Props {
  person: Person;
}

export const PersonLink: React.FC<Props> = ({ person }) => {
  const { search } = useLocation();

  return (
    <Link
      to={{ pathname: person.slug, search }}
      className={classNames({ 'has-text-danger': person.sex === 'f' })}
    >
      {person.name}
    </Link>
  );
};
