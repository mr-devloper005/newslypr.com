import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, newsroom updates, and public releases',
      description: 'Explore press releases, media coverage, announcements, and distribution-ready updates in one focused publishing experience.',
      openGraphTitle: 'Media distribution and public releases',
      openGraphDescription: 'Discover press releases, media updates, brand announcements, and public information through a bold distribution-first experience.',
      keywords: ['media distribution', 'press releases', 'newsroom updates', 'public announcements'],
    },
    hero: {
      badge: 'Media distribution platform',
      title: ['Distribute news.', 'Amplify releases.', 'Track the story.'],
      description: 'A sharp public desk for press releases, newsroom notes, announcement campaigns, earned media, and brand updates that need to move quickly.',
      primaryCta: { label: 'Browse media updates', href: '/updates' },
      secondaryCta: { label: 'Submit a release', href: '/create' },
      searchPlaceholder: 'Search releases, outlets, campaigns, and categories',
      focusLabel: 'Focus',
      featureCardBadge: 'latest cover rotation',
      featureCardTitle: 'Latest distribution items shape the homepage briefing.',
      featureCardDescription: 'Recent announcements, releases, and coverage are organized for fast public discovery.',
    },
    intro: {
      badge: 'Distribution workflow',
      title: 'Built for teams that publish media updates, public notices, and campaign coverage.',
      paragraphs: [
        'This site brings press releases, media coverage, official statements, and campaign notes into a single public-facing distribution hub.',
        'Readers can move from headline to context quickly, while publishers get a clearer structure for categories, summaries, and calls to action.',
        'Every surface is designed to keep media distribution focused: strong titles, concise summaries, search, and archive paths that make real posts easy to find.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Text-led cards for quick release scanning.',
        'Real post archives with search and category filters.',
        'Clean detail pages for summaries, source links, and action buttons.',
        'Motion and visual rhythm without burying the content.',
      ],
      primaryLink: { label: 'Browse updates', href: '/updates' },
      secondaryLink: { label: 'Search releases', href: '/search' },
    },
    cta: {
      badge: 'Start distributing',
      title: 'Publish release-ready updates with a cleaner public archive.',
      description: 'Move between announcements, coverage, and media resources through one clearer distribution system.',
      primaryCta: { label: 'Browse Updates', href: '/updates' },
      secondaryCta: { label: 'Contact Sales', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our distribution desk',
    title: 'A bolder public home for media releases and newsroom movement.',
    description: `${slot4BrandConfig.siteName} helps publishers organize announcements, coverage, and public updates into a credible media distribution hub.`,
    paragraphs: [
      'Instead of letting important updates disappear into a feed, the platform gives each release a clear title, summary, detail page, and archive path.',
      'Media teams can publish public information with a stronger reading rhythm, while visitors can browse by category, search by keyword, and keep moving through related updates.',
    ],
    values: [
      {
        title: 'Release-first clarity',
        description: 'We prioritize headlines, summaries, source details, and calls to action so every announcement can be understood quickly.',
      },
      {
        title: 'Connected public archive',
        description: 'Announcements, coverage, resources, and supporting posts stay connected so discovery feels natural across the site.',
      },
      {
        title: 'Trustworthy presentation',
        description: 'Strong layout, clean navigation, and visible context help visitors find useful media information faster.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Send a release, request coverage, or talk distribution.',
    description: 'Tell us what you are trying to publish, syndicate, correct, or promote. We will route the message through the right media distribution lane.',
    formTitle: 'Send a message',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search media releases, announcements, categories, and coverage across the site.',
    },
    hero: {
      badge: 'Search the media archive',
      title: 'Find releases, coverage, and public updates faster.',
      description: 'Use keywords, categories, and content types to discover real posts from every active section of the site.',
      placeholder: 'Search by release, outlet, category, company, or title',
    },
    resultsTitle: 'Latest media distribution content',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit media distribution content for the site.',
    },
    locked: {
      badge: 'Creator access',
      title: 'Login to create a media update.',
      description: 'Use your account to open the publishing workspace and prepare releases, summaries, and public distribution posts.',
    },
    hero: {
      badge: 'Distribution workspace',
      title: 'Create a release-ready public update.',
      description: 'Choose the content type, add source details, write a crisp summary, and prepare the post for the media distribution archive.',
    },
    formTitle: 'Content details',
    submitLabel: 'Submit content',
    successTitle: 'Content submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login page for this site.',
      badge: 'Member access',
      title: 'Welcome back to the distribution desk.',
      description: 'Login to create releases, manage local submissions, and move public updates into the publishing workspace.',
      formTitle: 'Login',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Signup page for this site.',
      badge: 'Site access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the media workspace, save details, and submit release-ready content through the site.',
      formTitle: 'Create account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
