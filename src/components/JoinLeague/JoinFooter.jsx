import React from 'react';
// Images
import Table from '../../static/images/joinleague/table.svg';
import Weekly from '../../static/images/joinleague/weekly.svg';
// Animations
import { motion } from 'framer-motion';
// Util
import { useHistory } from 'react-router-dom';
// Styles
import styles from './JoinFooter.module.scss';

const JoinFooter = ({ currentLeague }) => {
  const history = useHistory();
  return (
    <div className={styles.footer_container}>
      <motion.div
        onClick={() => history.push({ pathname: '/weeklyMatches', state: { type: 'table' } })}
        transition={{ duration: 0.2 }}
        whileTap={{ opacity: 1, backgroundColor: 'rgba(0,0,0,0.15)' }}
        className={styles.league_table}
      >
        <img
          src={Table}
          alt="Table"
          style={{ marginRight: '5px' }}
        />
        Premier League Table
      </motion.div>
      <motion.div
        onClick={() => history.push({ pathname: '/weeklyMatches', state: { type: 'weekly' } })}
        transition={{ duration: 0.2 }}
        whileTap={{ opacity: 1, backgroundColor: 'rgba(0,0,0,0.15)' }}
        className={styles.weekly_matches}
      >
        <img
          src={Weekly}
          alt="Weekly Matches"
          style={{ marginRight: '5px' }}
        />
        Weekly Matches
      </motion.div>
    </div>
  );
};

export default JoinFooter;