module.exports = {
    stories: [
        '../../src/**/*.stories.{js,ts,jsx,tsx}',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
};
