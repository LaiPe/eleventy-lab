export default async function(eleventyConfig) {
  // Copie du dossier admin
  eleventyConfig.addPassthroughCopy("src/admin");

  // Configuration des dossiers
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    }
  };
};
