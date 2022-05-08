import React from 'react';
import { Carrousel } from './carousel/Carousel';
import { SubscriptionForm } from './forms/SubscriptionForm';
import { Loader } from './loader/Loader';

import { ItemListContainer } from './products/ItemListContainer';

export const Index = () => {
  return (
    <div>
      <Carrousel />
      <ItemListContainer categories={false} />
      <SubscriptionForm />
    </div>
  );
};
