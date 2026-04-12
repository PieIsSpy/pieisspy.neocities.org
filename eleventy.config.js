export default async function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('./src/img')
    return {
        dir: {
            input: 'src',
            output: 'public'
        }
    }
}