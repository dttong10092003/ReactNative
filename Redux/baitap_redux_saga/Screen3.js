// Screen3.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addJobRequest, editJobRequest } from './actions';

const Screen3 = ({ navigation, route }) => {
  const { job, name } = route.params;
  const [title, setTitle] = useState(job ? job.title : '');
  const dispatch = useDispatch();

  const handleSave = () => {
    if (job) {
      dispatch(editJobRequest({ ...job, title }));
    } else {
      dispatch(addJobRequest({ title }));
    }
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>{job ? 'Edit Job' : 'Add Job'}</Text>
      <TextInput
        placeholder="Job Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default Screen3;
