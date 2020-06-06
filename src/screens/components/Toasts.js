/* eslint-disable react/jsx-key */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from 'react-native-paper';
import ToastsAction from '../../stores/toasts/ToastsAction';
import ToastStatusEnum from '../../constants/ToastStatusEnum';

const Toats = () => {
  const { items } = useSelector(state => state.toasts);
  console.log(items);
  const dispatch = useDispatch();
  const onDismiss = id => () => {
    dispatch(ToastsAction.removeById(id));
  };
  if (items.length === 0) {
    return null;
  }
  return items?.map(toast => {
    return (
      <Snackbar
        key={toast.id}
        visible
        onDismiss={onDismiss(toast.id)}
        duration={Snackbar.DURATION_MEDIUM}
        style={
          toast.type === ToastStatusEnum.Error
            ? { backgroundColor: '#ef5350' }
            : { backgroundColor: '#4caf50' }
        }
      >
        {toast.message}
      </Snackbar>
    );
  });
};

export default Toats;
