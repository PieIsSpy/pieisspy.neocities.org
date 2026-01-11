const htmlmin = require("html-minifier-terser");

module.exports = function(eleventyConfig) {
    eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.setTemplateFormats(["html", "njk", "txt", "js", "css", "xml", "json", "md"]);
    
    eleventyConfig.addTransform("htmlmin", function(content) {
        if ((this.page.outputPath || "").endsWith(".html")) {
            let minified = htmlmin.minify(content, {
                collapseWhitespace: true,
                conservativeCollapse: true,
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