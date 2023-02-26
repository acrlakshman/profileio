import { combineReducers } from 'redux';
import _ from 'lodash';
import {
  Basics,
  Config,
  ProfileSectionsWeb,
  ProfileWeb,
  SlugMap,
} from '../types/profileWeb';
import profileWebData from '../preprocessors/profile_web.json';
import profileResumeData from '../preprocessors/profile_web.json';
import { ProfileField } from '../types/fields';

export interface StoreState {
  profileResume: ProfileWeb;
  config: Config;
  basics: Basics;
  slugMap: SlugMap;
  sections: ProfileSectionsWeb;
}

export const reducers = combineReducers<StoreState>({
  profileResume: () => {
    return { ...profileResumeData };
  },
  config: () => {
    return { ...profileWebData[ProfileField.Config] };
  },
  basics: () => {
    return { ...profileWebData[ProfileField.Basics] };
  },
  slugMap: () => {
    return 'slugMap' in profileWebData
      ? { ...profileWebData[ProfileField.SlugMap] }
      : {};
  },
  sections: () => {
    return _.omit(profileWebData, [
      ProfileField.Config,
      ProfileField.Basics,
      ProfileField.SlugMap,
    ]);
  },
});
