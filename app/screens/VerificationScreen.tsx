import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function VerificationScreen() {
  const templateId = 'itmpl_6kPXWNft42o9cyS3WyMTNUQf9xkG'; 

  const environment = 'sandbox';

  //const uri = `https://withpersona.com/inquiries/new?templateId=${templateId}&environment=${environment}`;
  const uri = 'https://inquiry.withpersona.com/verify?inquiry-id=inq_jMbpfoF6tNQTAwbfzPeTLG8Xdj5M';

  return (
    <WebView
      source={{ uri }}
      style={styles.container}
      startInLoadingState
      renderLoading={() => (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#007AFF" />
        </View>
      )}
      onMessage={(event) => {
        const data = event.nativeEvent.data;
        console.log('Persona Event:', data);

        if (data === 'inquiry.submitted') {
          alert('✅ Verification submitted! We’ll review your information.');
        }
      }}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      userAgent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
      injectedJavaScript={`(function() {
        window.postMessage = function(data) {
          window.ReactNativeWebView.postMessage(data);
        };
      })();`}
      originWhitelist={['*']}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

