import React from 'react';
import clsx from 'clsx';

import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import 'bear-react-carousel/dist/index.css';

function HomepageHeader() {
    return (
        <header className={clsx('', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">契作農地</h1>
                <p className="hero__subtitle text--primary text--bold">
                        這邊主要拿來放前後端安裝教學
                        跟一些 DB 架構, 端口清單 API文檔
                </p>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    return (
        <Layout /*title={siteConfig.title} description={siteConfig.tagline}*/>
            <HomepageHeader />
        </Layout>
    );
}
