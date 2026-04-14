export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/styles');

    return {
        dir: {
            data: '_data',
            input: 'src',
            output: 'public'
        }
    }
}