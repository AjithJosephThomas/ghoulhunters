import { useRef, useState } from 'react';
import {
  ActivityIndicator,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { colors } from '../theme/colors';

interface InlineCameraProps {
  photoUri: string | null;
  onCapture: (uri: string, base64: string) => void;
  onRetake: () => void;
}

export function InlineCamera({ photoUri, onCapture, onRetake }: InlineCameraProps) {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [capturing, setCapturing] = useState(false);

  if (!permission) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color={colors.green} />
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionBox}>
        <Text style={styles.permissionText}>
          Camera access is required to photograph a suspected creature.
        </Text>
        <Pressable style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Allow camera</Text>
        </Pressable>
      </View>
    );
  }

  if (photoUri) {
    return (
      <View style={styles.previewWrap}>
        <Image source={{ uri: photoUri }} style={styles.preview} accessibilityLabel="Captured photo preview" />
        <Pressable style={styles.secondaryButton} onPress={onRetake}>
          <Text style={styles.secondaryButtonText}>Retake photo</Text>
        </Pressable>
      </View>
    );
  }

  const takePicture = async () => {
    if (!cameraRef.current || capturing) return;
    setCapturing(true);
    try {
      const photo = await cameraRef.current.takePictureAsync({
        base64: true,
        quality: 0.7,
      });
      if (photo?.uri && photo.base64) {
        onCapture(photo.uri, photo.base64);
      }
    } finally {
      setCapturing(false);
    }
  };

  return (
    <View style={styles.cameraWrap}>
      <CameraView ref={cameraRef} style={styles.camera} facing="back" />
      <Pressable
        style={[styles.shutter, capturing && styles.shutterDisabled]}
        onPress={takePicture}
        disabled={capturing}
        accessibilityRole="button"
        accessibilityLabel="Take photo"
      >
        {capturing ? (
          <ActivityIndicator color={colors.ink} />
        ) : (
          <View style={styles.shutterInner} />
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    borderRadius: 12,
  },
  permissionBox: {
    padding: 16,
    backgroundColor: colors.yellowLight,
    borderRadius: 12,
    gap: 12,
  },
  permissionText: {
    color: colors.ink,
    fontSize: 15,
    lineHeight: 22,
  },
  button: {
    backgroundColor: colors.green,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontWeight: '700',
    fontSize: 16,
  },
  cameraWrap: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.ink,
  },
  camera: {
    width: '100%',
    height: 280,
  },
  shutter: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    left: '50%',
    marginLeft: -32,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.yellow,
  },
  shutterDisabled: {
    opacity: 0.7,
  },
  shutterInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.yellow,
  },
  previewWrap: {
    gap: 12,
  },
  preview: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    backgroundColor: colors.grey,
  },
  secondaryButton: {
    borderWidth: 2,
    borderColor: colors.green,
    paddingVertical: 10,
    borderRadius: 24,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: colors.green,
    fontWeight: '700',
    fontSize: 15,
  },
});
