import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true, /.stories.tsx$/);

setDefaults({
    header: false,
    inline: true,
});

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
