export const SITE = {
    name: 'Example',
  
    origin: 'https://example.com',
    basePathname: '/', // Change this if you need to deploy to Github Pages, for example
    trailingSlash: false, // Generate permalinks with or without "/" at the end
  
    title: 'Example - This is the homepage title of Example',
    description: 'This is the homepage description of Example',
  
    googleAnalyticsId: false, // or "G-XXXXXXXXXX",
    googleSiteVerificationId: false, // or some value,
  };
  
  export const BLOG = {
    disabled: false,
    postsPerPage: 4,
  
    blog: {
      disabled: false,
      pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
    },
  
    post: {
      disabled: false,
      pathname: '', // empty for /some-post, value for /pathname/some-post
    },
  
    category: {
      disabled: false,
      pathname: 'category', // set empty to change from /category/some-category to /some-category
    },
  
    tag: {
      disabled: false,
      pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
    },
  };