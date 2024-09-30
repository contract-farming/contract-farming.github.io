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
                <h1 className="hero__title">農地契作管理平台文檔</h1>
                <p className="hero__subtitle text--primary text--bold">
                    這邊主要拿來放 API 文檔、 DB 架構跟一些前後端安裝教學
                </p>
            </div>
        </header>
    );
}

function HomepageContent() {
    return (
        <section className="container">
            <div className="markdown">
                <h2>農地契作管理平台</h2>
                <p>
                    農地契作管理平台用於解決農作物生產過程中的追蹤與管理難題，我們與
                    <a href="https://www.sinfang.tw/" target="_blank" rel="noopener noreferrer">新豐碾米工廠</a>合作，
                    開發一套專屬的契作流程追蹤平台，結合
                    <a href="https://maps.nlsc.gov.tw/" target="_blank" rel="noopener noreferrer">國土測繪地圖系統</a>，
                    實現土地即時的耕作情況的可視化管理，幫助管理者隨時掌握作物的生長狀態與耕作過程，確保農民按標準施肥與施藥，
                    並透過便捷的數據核對，快速完成產銷履歷的生成和記錄。
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src={require('./img/contract/contract-page.png').default}
                        alt="Contract Management Page"
                        style={{ width: '1080px', marginTop: '1rem' }}
                    />
                    <img
                        src={require('./img/contract/contract-track.png').default}
                        alt="Contract Management Page"
                        style={{ width: '1080px', marginTop: '1rem', marginBottom: '10rem' }}
                    />
                </div>
            </div>
        </section>
    );
}

export default function Home(): JSX.Element {
    return (
        <Layout>
            <HomepageHeader />
            <HomepageContent />
        </Layout>
    );
}
