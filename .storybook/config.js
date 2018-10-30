import { configure } from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { configureActions } from '@storybook/addon-actions';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src/stories', true, /.stories.tsx$/);

setDefaults({
    header: false,
    inline: true,
});

configureActions({
    depth: 100,
    // Limit the number of items logged into the actions panel
    limit: 20,
});

function loadStories() {
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
