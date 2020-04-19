import React from 'react';
import ListingDetail from '../components/Listing/ListingDetail';

const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {});

  return <ListingDetail item={item} />;
};

export default Detail;