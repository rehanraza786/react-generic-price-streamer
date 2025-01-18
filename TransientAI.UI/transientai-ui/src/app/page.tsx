'use client';
import { Explorer } from '@/components/explorer/explorer';
import { Header } from './header'
import styles from './page.module.scss';
import { MainContentPanel } from '@/components/main-content-panel/main-content-panel';
import { Chatbot } from '@/components/chatbot/chatbot';
import { Notifications } from '@/components/notifications';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header></Header>
      <main>
        <div className={styles['left-panel']}>
          <Explorer></Explorer>
          <Notifications></Notifications>
        </div>

        <div className={styles['middle-panel']}>
          <MainContentPanel></MainContentPanel>
          <Chatbot></Chatbot>
        </div>

        <div className={styles['right-panel']}>
          Details and News
        </div>
      </main>
    </div>
  );
}
