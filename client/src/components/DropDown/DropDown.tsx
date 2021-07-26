// Libs
import React from 'react';
import { Form, Select } from 'semantic-ui-react';

// Types
import { DropDownTypes } from './DropDown.types';

const DropDown = ({ clearable = false, label, name, onChange, options, placeholder, searchInputId, value }: DropDownTypes) => {
    return (
        <Form.Field
            control={Select}
            label={label}
            search
            searchInput={{ id: searchInputId }}
            options={options}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            clearable={clearable}
        />
    );
}

export default DropDown;
