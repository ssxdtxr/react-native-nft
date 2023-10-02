import { View } from 'react-native';
import {ImageCmp} from "./ImageCmp";
import {assets} from "../../../constants";

export const People = () => {
  return (
      <View style={{flexDirection: "row"}}>
          {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
              <ImageCmp imgUrl={imgUrl} index={index} key={index}/>
          ))}
      </View>
  );
}

