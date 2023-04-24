import React, { FC, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface FontAwesomePropsTypes {
  icon: any;
}

const FAwesomeIcon: FC<FontAwesomePropsTypes> = (props) => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return <>{domLoaded && <FontAwesomeIcon icon={props.icon} />}</>;
};

export default FAwesomeIcon;
