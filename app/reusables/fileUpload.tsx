import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../constants/theme';
import ThemedText from './ThemeText';

interface FileUploadProps {
  label: string;
  onFileSelected: (file: DocumentPicker.DocumentPickerAsset | null) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ label, onFileSelected }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePickDocument = async () => {
    setLoading(true);
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (result.canceled === false && result.assets && result.assets.length > 0) {
        const doc = result.assets[0];
        console.log('Selected Document:', doc);

        setFileName(doc.name || 'Document Selected');
        onFileSelected(doc);
      } else {
        console.log('Document picking cancelled or no assets selected.');
        setFileName(null);
        onFileSelected(null);
      }
    } catch (err) {
      console.error('Error picking document:', err);
      setFileName(null);
      onFileSelected(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Label */}
      <ThemedText style={styles.label}>{label}</ThemedText>

      {/* Upload Button */}
      <TouchableOpacity
        onPress={handlePickDocument}
        disabled={loading}
        style={styles.uploadButton}
      >
        {loading ? (
          <ActivityIndicator color="#111" />
        ) : (
          <View style={styles.row}>
            <Ionicons name="document-outline" size={20} color="#1C5403" />
            <ThemedText style={styles.uploadText}>
              {fileName || 'Choose a file'}
            </ThemedText>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16, 
  },
  label: {
    color: colors.dark, 
    fontWeight: 'bold', 
    fontSize: 16, 
    marginBottom: 8,
  },
  uploadButton: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: colors.board,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  uploadText: {
    marginLeft: 8, 
    color: colors.dark,
    fontWeight: '500', 
    fontSize: 14,
  },
});
