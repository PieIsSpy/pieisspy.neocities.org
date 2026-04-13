export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/styles');
    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    }
}