const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
    eleventyConfig.addPassthroughCopy("content/assets");
    eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json"]);
    
    eleventyConfig.addTransform("htmlmin", function(content) {
        if ((this.page.outputPath || "").endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                collapseWhitespace: true,
                conservativeCollaps: true,
                collapseInlineTagWhitespace: true,
                minifyCSS: true,
                minifyJS: true,
                minifyURLSs: true
            });
            return minified;
        }
        return content;
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}