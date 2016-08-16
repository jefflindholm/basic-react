import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import styles from './app.css';


export default class App extends React.Component {
    render() {
        const translations = defineMessages({
            predfinedTranslation: {
                id: 'PREDEFINED',
                defaultMessage: 'It Works!',
                description: 'This is the main header on the first page'
            },
        });

        return (
            <div>
                <h1><FormattedMessage {...translations.predfinedTranslation} /></h1>
                <p>
                    <FormattedMessage
                        id="app.localSyleText"
                        description="The text displayed to show local styles work"
                        defaultMessage="This React project just works including {module} local styles."
                        values={{ module: <span className={styles.blueBg}>module</span> }}
                    />
                </p>
                <p>
                    <FormattedMessage
                        id="app.simpleMessage"
                        description="Simple message text"
                        defaultMessage="Global bootstrap css import works too as you can see on the following button."
                    />
                </p>
                <p>
                    <a className="btn btn-primary btn-lg">
                        <FormattedMessage
                            id="app.buttonText"
                            description="Button text on the app"
                            defaultMessage="Enjoy!"
                            />
                    </a>
                </p>
            </div>
        );
    }
}
