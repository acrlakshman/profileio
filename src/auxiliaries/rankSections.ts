import {
  ProfileSectionsWeb,
  ProfileSectionsWebSkeleton,
} from '../types/profileWeb';
import _ from 'lodash';

// It takes profile in json (excluding config, basics) and returns {work: 1, publications: 2, ...}.
export const getProfileRankings = (
  profile: ProfileSectionsWeb
): ProfileSectionsWebSkeleton => {
  let profileRankings: ProfileSectionsWebSkeleton = {};
  if (profile) {
    let keys = Object.keys(profile) as Array<keyof ProfileSectionsWeb>;

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let r = _.get(profile, [key, 'rank']);
      let rank: number = r ? r : 9999;
      profileRankings[key] = rank;
    }
  }

  return profileRankings;
};

export const getSortedArray = (
  profileRanksTheme: ProfileSectionsWebSkeleton,
  profileRanksUser: ProfileSectionsWebSkeleton
) => {
  // Ref.: https://stackoverflow.com/questions/32349838/lodash-sorting-object-by-values-without-losing-the-key
  return Object.keys(
    _.chain({ ...profileRanksTheme, ...profileRanksUser })
      .map((val, key) => {
        return { name: key, count: val };
      })
      .sortBy('count')
      .keyBy('name')
      .mapValues('count')
      .value()
  ) as Array<keyof ProfileSectionsWeb>;
};
