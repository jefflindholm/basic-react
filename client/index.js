import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app';

// --- Start internationization boilerplate
import { IntlProvider, addLocaleData } from 'react-intl';
import allMessages from './translations/messages.json';

import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';
import fr from 'react-intl/locale-data/fr';

addLocaleData([...en, ...es, ...fr]);

// figure out which language people are using
const language = (navigator.languages && navigator.languages[0]) ||
                     navigator.language ||
                     navigator.userLanguage;
// const language = 'fr';
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
const messages = allMessages[languageWithoutRegionCode] || allMessages[language] || allMessages.en;

// eslint-disable-next-line
const Main = (props) => {
    return (
        <IntlProvider locale={ language } messages={ messages }>
            <App />
        </IntlProvider>
    );
};

// --- End internationization boilerplate

render(<Main />, document.getElementById('root'));
