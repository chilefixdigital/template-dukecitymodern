module.exports = {
  eleventyComputed: {
    layout: data => {
      const industry = (data.client && data.client.industry) || "";
      return industry.toLowerCase().includes("restaurant")
        ? "layouts/page-restaurant.html"
        : "layouts/page-service.html";
    }
  }
};
