import React, { FunctionComponent } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

import { SocialProfile } from '../../../types/profileWeb';
import { SocialProfileTypes } from '../../../types/fields';
import GoogleScholarLogo from '../../../icons/googlescholar.svg';
import GitHubLogo from '../../../icons/github.svg';
import GitLabLogo from '../../../icons/gitlab.svg';
import LinkedInLogo from '../../../icons/linkedin.svg';
import YouTubeLogo from '../../../icons/youtube.svg';
import VimeoLogo from '../../../icons/vimeo.svg';
import TwitterLogo from '../../../icons/twitter.svg';
import FacebookLogo from '../../../icons/facebook.svg';
import TwitchLogo from '../../../icons/twitch.svg';

interface ComponentProps {
  profiles: SocialProfile[];
}

const getSocialProfileUrl = (network: string, username: string): string => {
  switch (network) {
    case SocialProfileTypes.GoogleScholar as string:
      return `https://scholar.google.com/citations?user=${username}`;

    case SocialProfileTypes.GitHub as string:
      return `https://github.com/${username}`;

    case SocialProfileTypes.GitLab as string:
      return `https://gitlab.com/${username}`;

    case SocialProfileTypes.LinkedIn as string:
      return `https://www.linkedin.com/in/${username}/`;

    case SocialProfileTypes.YouTube as string:
      return `https://www.youtube.com/channel/${username}`;

    case SocialProfileTypes.Vimeo as string:
      return `https://vimeo.com/${username}`;

    case SocialProfileTypes.Twitter as string:
      return `https://twitter.com/${username}`;

    case SocialProfileTypes.Facebook as string:
      return `https://www.facebook.com/${username}`;

    case SocialProfileTypes.Twitch as string:
      return `https://www.twitch.tv/${username}`;

    default:
      return '';
  }
};

interface IconLinkProps {
  profile: SocialProfile;
  logo: string;
  alt: string;
  title: string;
}

const IconLink: FunctionComponent<IconLinkProps> = ({
  profile,
  logo,
  alt,
  title,
}: IconLinkProps): JSX.Element => {
  const [{ scale }, setScale] = useSpring(() => ({ scale: '0' }));

  let url = profile.value.url;
  if (!url && profile.value.username) {
    url = getSocialProfileUrl(profile.value.network, profile.value.username);
  }

  return (
    <a
      onMouseEnter={() => setScale({ scale: '1' })}
      onMouseLeave={() => setScale({ scale: '0' })}
      href={url}
      style={{ paddingLeft: '.5rem', paddingRight: '.5rem' }}
    >
      <animated.img
        src={logo}
        alt={alt}
        title={title}
        style={{
          width: '25px',
          transform: scale
            .interpolate({
              range: [0, 1],
              output: [1, 1.5],
            })
            .interpolate((scale) => `scale(${scale})`),
        }}
      />
    </a>
  );
};

const renderProfileItem = (profile: SocialProfile): JSX.Element | undefined => {
  if (profile.render) {
    switch (profile.value.network) {
      case SocialProfileTypes.GoogleScholar as string:
        return (
          <IconLink
            key={profile.value.network}
            profile={profile}
            logo={GoogleScholarLogo}
            alt={SocialProfileTypes.GoogleScholar as string}
            title={SocialProfileTypes.GoogleScholar as string}
          />
        );

      case SocialProfileTypes.GitHub as string:
        return (
          <IconLink
            key={profile.value.network}
            profile={profile}
            logo={GitHubLogo}
            alt={SocialProfileTypes.GitHub as string}
            title={SocialProfileTypes.GitHub as string}
          />
        );

      case SocialProfileTypes.GitLab as string:
        return (
          <IconLink
            key={profile.value.network}
            profile={profile}
            logo={GitLabLogo}
            alt={SocialProfileTypes.GitLab as string}
            title={SocialProfileTypes.GitLab as string}
          />
        );

      case SocialProfileTypes.LinkedIn as string:
        return (
          <IconLink
            key={profile.value.network}
            profile={profile}
            logo={LinkedInLogo}
            alt={SocialProfileTypes.LinkedIn as string}
            title={SocialProfileTypes.LinkedIn as string}
          />
        );

      case SocialProfileTypes.YouTube as string:
        return (
          <IconLink
            key={profile.value.network}
            profile={profile}
            logo={YouTubeLogo}
            alt={SocialProfileTypes.YouTube as string}
            title={SocialProfileTypes.YouTube as string}
          />
        );

      case SocialProfileTypes.Vimeo as string:
        return (
          <IconLink
            key={profile.value.network}
            profile={profile}
            logo={VimeoLogo}
            alt={SocialProfileTypes.Vimeo as string}
            title={SocialProfileTypes.Vimeo as string}
          />
        );

      case SocialProfileTypes.Twitter as string:
        return (
          <IconLink
            key={profile.value.network}
            profile={profile}
            logo={TwitterLogo}
            alt={SocialProfileTypes.Twitter as string}
            title={SocialProfileTypes.Twitter as string}
          />
        );

      case SocialProfileTypes.Facebook as string:
        return (
          <IconLink
            key={profile.value.network}
            profile={profile}
            logo={FacebookLogo}
            alt={SocialProfileTypes.Facebook as string}
            title={SocialProfileTypes.Facebook as string}
          />
        );

      case SocialProfileTypes.Twitch as string:
        return (
          <IconLink
            key={profile.value.network}
            profile={profile}
            logo={TwitchLogo}
            alt={SocialProfileTypes.Twitch as string}
            title={SocialProfileTypes.Twitch as string}
          />
        );

      default:
        return;
    }
  }
};

const SocialProfiles: FunctionComponent<ComponentProps> = ({
  profiles,
}: ComponentProps) => {
  return (
    <>
      <ButtonGroup size="lg" className="mb-2">
        {profiles.map((profile) => renderProfileItem(profile))}
      </ButtonGroup>
    </>
  );
};

export default SocialProfiles;
