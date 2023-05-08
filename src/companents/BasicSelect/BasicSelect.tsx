import './BasicSelect.css';

import Select from 'react-select';

import en from '@/assets/image/en.png';

const options = [{ value: 'en', label: <img className="select_img" src={en} alt="" /> }];

const BasicSelect = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <Select
      defaultValue={{
        value: 'en',
        label: <img className="select_img" src={en} alt="" />,
      }}
      isSearchable={false}
      options={options}
    />
  );
};

export default BasicSelect;
