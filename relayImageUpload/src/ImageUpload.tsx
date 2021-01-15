import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  View,
  Image,
  Platform,
  Pressable,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useMutation } from "react-relay/hooks";

import { ImageUploadGraphQL } from "./mutations";
import {
  ImageUploadGraphQLMutation,
  ImageUploadGraphQLMutationResponse,
} from "./__generated__/ImageUploadGraphQLMutation.graphql";
import { PayloadError } from "relay-runtime";
import { useLazyLoadTestQuery } from "./hooks";

const App = () => {
  const [image, setImage] = useState<string | null>(null);
  const { test } = useLazyLoadTestQuery();
  console.log("test: ", test);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (result.cancelled === false) {
      setImage(result.uri);
    }
  };
  const [upload, isUploadInFlight] = useMutation<ImageUploadGraphQLMutation>(
    ImageUploadGraphQL
  );
  const onSubmit = async () => {
    let uriParts = image.split(".");
    let fileType = uriParts[uriParts.length - 1];

    const mutationConfig = {
      variables: {
        input: { fileName: "test" },
      },
      uploadables: {
        image: {
          uri: image,
          name: `photo.${fileType}`,
          type: `image/${fileType}`,
        } as any,
      },
      onError: (e: any) => {
        console.log("onerror ", e);
      },
      onCompleted: async (
        response: ImageUploadGraphQLMutationResponse,
        errors: PayloadError[]
      ) => {
        console.log("response: ", response);
        console.log("errors: ", errors);
      },
    };

    upload(mutationConfig);
  };
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Button title='Pick an image from camera roll' onPress={pickImage} />
      {!!image && <Image source={{ uri: image }} style={styles.image} />}
      <Pressable disabled={!image} style={styles.submitBtn} onPress={onSubmit}>
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: 200, height: 200 },
  submitBtn: {
    backgroundColor: "red",
    padding: 16,
    borderRadius: 4,
  },
});
