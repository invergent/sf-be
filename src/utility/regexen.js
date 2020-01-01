export default {
  word: /\b^[a-z-A-Z ]{3,}$\b/, // word with 3 or more letters (including hyphen and space)
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
  phone: /[0][0-9]{10}/
};
