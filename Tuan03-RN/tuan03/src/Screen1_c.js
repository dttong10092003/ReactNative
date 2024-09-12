import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const VerifyCodeScreen = () => {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, }}
    >
      <Text style={{
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 80,
        color: 'black',
        textAlign: 'center',
      }}>
        CODE
      </Text>

      <Text style={{
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 60,
        color: 'black',
        textAlign: 'center',
      }}>
        VERIFICATION
      </Text>

      <Text style={{
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: 'black',
        paddingHorizontal: 20,
      }}>
        Enter ontime password sent on {'\n'} ++849092605798
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
        marginBottom: 30,
      }}>
          <TextInput
            style={{
              width: 40,
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              textAlign: 'center',
              fontSize: 24,
            }}
            maxLength={1}
          />

          <TextInput
            style={{
              width: 40,
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              textAlign: 'center',
              fontSize: 24,
            }}
            maxLength={1}
          />

          <TextInput
            style={{
              width: 40,
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              textAlign: 'center',
              fontSize: 24,
            }}
            maxLength={1}
          />

          <TextInput
            style={{
              width: 40,
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              textAlign: 'center',
              fontSize: 24,
            }}
            maxLength={1}
          />

          <TextInput
            style={{
              width: 40,
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              textAlign: 'center',
              fontSize: 24,
            }}
            maxLength={1}
          />

          <TextInput
            style={{
              width: 40,
              height: 50,
              borderWidth: 1,
              borderColor: 'gray',
              textAlign: 'center',
              fontSize: 24,
            }}
            maxLength={1}
          />
      </View>

      <TouchableOpacity style={{
        width: '94%',
        backgroundColor: '#E3C000',
        padding: 15,
        borderRadius: 2,
        alignItems: 'center',
      }}>
        <Text style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
        }}>
          VERIFY CODE
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default VerifyCodeScreen;
