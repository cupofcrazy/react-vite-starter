// Device Sizes
export const sizes = {
  mobileSm: '320px',
  mobileMd: '375px',
  mobileLg: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

// CSS Media Queries
export const mq = {
  mobileSm: `screen and (min-width: ${sizes.mobileSm})`,
  mobileMd: `screen and (min-width: ${sizes.mobileMd})`,
  mobileLg: `screen and (min-width: ${sizes.mobileLg})`,
  tablet: `screen and (min-width: ${sizes.tablet})`,
  laptop: `screen and (min-width: ${sizes.laptop})`,
  laptopL: `screen and (min-width: ${sizes.laptopL})`,
  desktop: `screen and (min-width: ${sizes.desktop})`,
};