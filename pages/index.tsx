import type { NextPage } from 'next';
import Head from 'next/head';
import EventList from '../components/event/event-list';
import { getFeaturedEvents, EventType } from '../data';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const featuredEvents: EventType[] = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default Home;
