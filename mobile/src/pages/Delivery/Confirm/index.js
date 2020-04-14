import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StatusBar, Alert } from 'react-native';
// import FormData from 'form-data';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { deliveryConfirmRequest } from '~/store/modules/delivery/actions';

import {
  Background,
  Container,
  Content,
  Card,
  Camera,
  TakePictureButton,
  SubmitButton,
  Pending,
  PendingText,
  Image,
} from './styles';

import signature from '~/assets/signature.png';

export default function Confirm({ navigation, route }) {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.delivery.loading);
  const { delivery } = route.params;
  const [camera, setCamera] = useState();
  const [preview, setPreview] = useState(null);
  const [photo, setPhoto] = useState(null);

  const takePicture = useCallback(async () => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      camera.resumePreview();

      setPhoto(data);
      setPreview(data.uri);
    }
  }, [camera]);

  async function handleSubmit() {
    dispatch(
      deliveryConfirmRequest(delivery.id, delivery.deliveryman_id, photo)
    );

    // navigation.navigate('Dashboard');
  }

  return (
    <Background>
      <Container>
        <Content>
          <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
          <Card>
            {!preview ? (
              <Camera
                ref={setCamera}
                captureAudio={false}
                pauseAfterCapture
                autoFocus={Camera.Constants.AutoFocus.on}
                flashMode={Camera.Constants.FlashMode.off}
              >
                {({ camera, status, recordAudioPermissiosStatus }) => {
                  return (
                    <TakePictureButton onPress={takePicture}>
                      <Icon name="camera-alt" size={24} color="#fff" />
                    </TakePictureButton>
                  );
                }}
              </Camera>
            ) : (
              <Card>
                <Image source={{ uri: preview }}>
                  <SubmitButton loading={loading} onPress={handleSubmit}>
                    Enviar
                  </SubmitButton>
                </Image>
              </Card>
            )}
          </Card>
        </Content>
      </Container>
    </Background>
  );
}
