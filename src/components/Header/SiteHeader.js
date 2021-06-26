import styles from './SiteHeader.module.scss';

const SiteHeader = ({ userPianoData }) => (
	<header className={styles.header}>
		<h1>header</h1>
	</header>
);

// BrandHeaderMenu.propTypes = {
// 	userPianoData: PropTypes.object,
// };

// BrandHeaderMenu.defaultProps = {
// 	isPianoInitialized: false,
// 	userPianoData: null,
// };

export default SiteHeader;