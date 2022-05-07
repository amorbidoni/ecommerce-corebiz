import React from 'react';

import { ItemListContainer } from './products/ItemListContainer';

export const Index = () => {
  return (
    <div>
      <ItemListContainer categories={false} />
    </div>
  );
};
