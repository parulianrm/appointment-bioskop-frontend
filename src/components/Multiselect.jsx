import React, { useState } from 'react';
import { Dropdown, Button } from 'react-bootstrap';

const DropDownComp = ({ title, items, onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    onItemClick(item);
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        {selectedItem ? selectedItem.label : title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {items.map((item) => (
          <Dropdown.Item key={item.value} onClick={() => handleItemClick(item)}>
            {item.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDownComp;
