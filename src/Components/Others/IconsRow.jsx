import { FaLinkedin, FaGithub } from 'react-icons/fa';
// Import an SVG or any placeholder for LeetCode icon
// Assuming you have an SVG named LeetCodeIcon.svg in the src folder

const IconsRow = () => {
  return (
    <div style={styles.row}>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <FaLinkedin size={40} />
      </a>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
        <FaGithub size={40} />
      </a>
     
    </div>
  );
};

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '10px',
    color:"white"
  },
  icon: {
    color: '#fff',
    textDecoration: 'none',
    padding:10,
    
  },
};

export default IconsRow;
