export const process = {
  dev: true
};
export const site = {
  home: process.dev ? "http://localhost:8080/" : "Alexeev.ru",
};

export const app = {
  title: 'Notes'
}
export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/'
  },
  {
    title: 'About',
    alias: 'about',
    url: '/about'
  },

]