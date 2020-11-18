export type BasicValueType = {
  label?: string;
  value: string;
  render: boolean;
};

export interface OptionalArgs {
  rank?: number;
  maxItemsToRender?: number;
}

export interface Config extends OptionalArgs {
  homepage: string;
  theme: {
    value: string;
    render: boolean;
  };
  analytics?: {
    ga?: {
      // google analytics
      trackingId: string;
      enable: boolean;
    };
  };
  meta?: {
    showResumeLink?: boolean;
    resume?: string;
    hideFooterCredit?: boolean;
  };
}

export interface SocialProfile {
  value: {
    network: string;
    username?: string;
    url?: string;
  };
  render: boolean;
}

export interface Basics extends OptionalArgs {
  name: {
    value: string;
    render: boolean;
  };
  label: {
    value: string;
    render: boolean;
  };
  image: {
    value: string;
    render: boolean;
  };
  email: {
    value: string;
    render: boolean;
  };
  phone?: {
    value: string;
    render: boolean;
  };
  url: {
    value: string;
    render: boolean;
  };
  summary: {
    label: string;
    value: string;
    render: boolean;
  };
  location?: {
    value: {
      address?: string;
      postalCode?: string;
      city?: string;
      countryName?: string;
      region?: string;
    };
    render: boolean;
  };
  profiles?: SocialProfile[];
}

export interface BriefAndDetail {
  brief?: string;
  detail: string;
}

export interface WorkDetail {
  name: string;
  location: string;
  brief?: string;
  position: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  active?: boolean;
  highlights: BriefAndDetail[];
}

export interface Work extends OptionalArgs {
  label: string;
  list: {
    value: WorkDetail;
    render: boolean;
  }[];
}

export interface EducationDetail {
  institution?: string;
  url?: string;
  major: string;
  minor?: string;
  degree?: string;
  startDate?: string;
  endDate?: string;
  grade?: number;
  gradeTotal?: number;
  courses?: string[];
}

export interface Education extends OptionalArgs {
  label: string;
  list: {
    value: EducationDetail;
    render: boolean;
  }[];
}

export interface Project {
  name: string;
  description: string;
  team?: string;
  note?: string;
  thumbnail?: string;
  hightlights?: BriefAndDetail[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  type?: string;
  webPage?: WebPageType;
}

export interface Projects extends OptionalArgs {
  label: string;
  list: {
    value: Project;
    render: boolean;
  }[];
}

export interface GalleryItem {
  value: {
    type: string;
    src?: string;
    caption?: {
      title: string;
      description: string;
    };
    platform?: string;
    videoId?: string;
  };
  render: boolean;
}

export interface Gallery extends OptionalArgs {
  label: string;
  list: GalleryItem[];
}

export interface Awards extends OptionalArgs {
  label: string;
  list: {
    value: {
      title: string;
      date: string;
      awarder: string;
      summary: string;
    };
    render: boolean;
  }[];
}

export interface WebPageType {
  slug: string;
  detail: string;
}
// Publication article format extends: http://web.mit.edu/rsi/www/pdfs/bibtex-format.pdf
export interface ArticleType {
  type: string;
  author: string;
  title: string;
  journal: string;
  volume: number;
  year: number;
  number: number;
  pages: string;
}

export interface ArticleTypeWeb extends ArticleType {
  thumbnail?: string;
  url?: string;
  webPage?: WebPageType;
}

export interface BookType {
  type: string;
  author: string;
  title: string;
  edition?: number; // either edition or series and volume
  series?: string;
  volume?: number;
  publisher: string;
  address: string;
  year: number;
}

export interface BookTypeWeb extends BookType {
  thumbnail?: string;
  url?: string;
  webPage?: WebPageType;
}

export interface ThesisType {
  type: string;
  category: string;
  author: string;
  title: string;
  publisher: string;
  address: string;
  year: number;
}

export interface ThesisTypeWeb extends ThesisType {
  thumbnail?: string;
  url?: string;
  webPage?: WebPageType;
}

export interface TechReportType {
  type: string;
  author: string;
  title: string;
  series: string;
  volume: number;
  publisher: string;
  address: string;
  year: number;
}

export interface TechReportTypeWeb extends TechReportType {
  thumbnail?: string;
  url?: string;
  webPage?: WebPageType;
}

export interface InCollectionType {
  type: string;
  author: string;
  title: string;
  editor: string;
  booktitle: string;
  publisher: string;
  address: string;
  year: number;
  pages: string;
}

export interface InCollectionTypeWeb extends InCollectionType {
  thumbnail?: string;
  url?: string;
  webPage?: WebPageType;
}

// Erticle with personal communication is excluded.
export interface MiscType {
  type: string;
  author: string;
  title: string;
  howpublished: string;
}

export interface MiscTypeWeb extends MiscType {
  thumbnail?: string;
  url?: string;
  webPage?: WebPageType;
}

export interface UnPublishedType {
  type: string;
  author: string;
  title: string;
  journal?: string; // not needed for unpublished manuscript
  note: string;
  year?: number; // if manuscript submitted for publication | unpublished manuscript
}

export interface UnPublishedTypeWeb extends UnPublishedType {
  thumbnail?: string;
  url?: string;
  webPage?: WebPageType;
}

export type Publication =
  | ArticleTypeWeb
  | BookTypeWeb
  | ThesisTypeWeb
  | TechReportTypeWeb
  | InCollectionTypeWeb
  | MiscTypeWeb
  | UnPublishedTypeWeb;

export interface Publications extends OptionalArgs {
  label: string;
  list: {
    value: Publication;
    render: boolean;
  }[];
}

export interface Skills extends OptionalArgs {
  label: string;
  list: {
    value: {
      name: string;
      level?: string;
      keywords: string[];
    };
    render: boolean;
  }[];
}

export interface Languages extends OptionalArgs {
  label: string;
  list: {
    value: {
      language: string;
      fluency?: string;
    };
    render: boolean;
  }[];
}

export interface Interests extends OptionalArgs {
  label: string;
  list: {
    value: {
      name: string;
      keywords: string[];
    };
    render: boolean;
  }[];
}

export interface References extends OptionalArgs {
  label: string;
  list: {
    value: {
      name: string;
      title: string;
      affiliation: string;
      address?: string;
      postalCode?: string;
      city?: string;
      countryName?: string;
      region?: string;
      phoneNumber?: string;
      email: string;
    };
    render: boolean;
  }[];
}

export interface CustomSection extends OptionalArgs {
  label: string;
  value?: string;
  webPage?: WebPageType;
  render: boolean;
}

// DELETE
export type ProfileSectionTypes =
  | Config
  | Basics
  | Work
  | Education
  | Projects
  | Gallery
  | Awards
  | Publications
  | Skills
  | Languages
  | Interests
  | References
  | CustomSection[];

export interface ProfileCustomSection {
  custom?: CustomSection[];
}

export interface ProfileSections {
  work?: Work;
  education?: Education;
  projects?: Projects;
  gallery?: Gallery;
  awards?: Awards;
  publications?: Publications;
  skills?: Skills;
  languages?: Languages;
  interests?: Interests;
  references?: References;
}

export interface SlugMap {
  [key: string]: { [key: string]: { position: number } };
}

export interface ProfileSectionsWeb
  extends ProfileCustomSection,
    ProfileSections {}

export interface ProfileWeb extends ProfileSectionsWeb {
  config: Config;
  basics: Basics;
  slugMap?: SlugMap;
}

export type ProfileSectionsWebSkeleton = {
  [K in keyof ProfileSectionsWeb]: number;
};

export type ProfileWebSkeleton = {
  [K in keyof ProfileWeb]: number;
};
